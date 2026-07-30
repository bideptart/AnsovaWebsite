"use client"

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Mic, Check } from 'lucide-react'
import './phone-mockup.css'

const RING_RADIUS = 50
const RING_CIRC = 2 * Math.PI * RING_RADIUS

function formatDuration(totalSeconds) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function PhoneMockup() {
  const bezelRef = useRef(null)
  const wrapRef = useRef(null)
  const ringRef = useRef(null)
  const counterRef = useRef(null)
  const requestRef = useRef(0)
  const [duration, setDuration] = useState(24)

  // Real ticking call-duration timer (setInterval, independent of rAF)
  useEffect(() => {
    const id = setInterval(() => setDuration((d) => d + 1), 1000)
    return () => clearInterval(id)
  }, [])

  // Mouse-follow 3D tilt (adapted from the reference CinematicHero mockup interaction)
  useEffect(() => {
    const handleMouseMove = (e) => {
      cancelAnimationFrame(requestRef.current)
      requestRef.current = requestAnimationFrame(() => {
        const wrap = wrapRef.current
        const bezel = bezelRef.current
        if (!wrap || !bezel) return
        const rect = wrap.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const clamp = (v) => Math.max(-1, Math.min(1, v))
        const xVal = clamp((e.clientX - cx) / (window.innerWidth / 2))
        const yVal = clamp((e.clientY - cy) / (window.innerHeight / 2))

        gsap.to(bezel, {
          rotationY: xVal * 4,
          rotationX: -yVal * 4,
          ease: 'power3.out',
          duration: 1.1,
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(requestRef.current)
    }
  }, [])

  // Progress ring + counter reveal (adapted from the reference's ring/counter animation, mount-triggered)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(ringRef.current, { strokeDashoffset: RING_CIRC })
      const tl = gsap.timeline({ delay: 0.9 })
      tl.to(ringRef.current, {
        strokeDashoffset: RING_CIRC * 0.14,
        duration: 1.6,
        ease: 'power3.out',
      })
      tl.to(counterRef.current, {
        innerText: 400,
        duration: 1.6,
        snap: { innerText: 1 },
        ease: 'power3.out',
      }, '<')
    }, wrapRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} className="pm-wrap" style={{ perspective: '1000px' }}>
      <div ref={bezelRef} className="pm-bezel">
        <div className="pm-island">
          <span className="pm-island-dot" />
        </div>

        <div className="pm-screen">
          <div className="pm-glare" aria-hidden="true" />

          <div className="pm-top">
            <div>
              <span className="pm-eyebrow">
                <span className="pm-live-dot" />
                Live call
              </span>
              <span className="pm-name">Riya Kapoor</span>
              <span className="pm-duration">{formatDuration(duration)}</span>
            </div>
            <div className="pm-avatar">RK</div>
          </div>

          <div className="pm-live-waveform" aria-hidden="true">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.09}s` }} />
            ))}
          </div>

          <div className="pm-ring-wrap">
            <svg viewBox="0 0 120 120" className="pm-ring-svg">
              <circle cx="60" cy="60" r={RING_RADIUS} className="pm-ring-track" />
              <circle
                ref={ringRef}
                cx="60"
                cy="60"
                r={RING_RADIUS}
                className="pm-ring-fill"
                style={{ strokeDasharray: RING_CIRC }}
              />
            </svg>
            <div className="pm-ring-label">
              <span ref={counterRef} className="pm-ring-value">0</span>
              <span className="pm-ring-unit">ms latency</span>
            </div>
          </div>

          <div className="pm-widgets">
            <div className="pm-widget">
              <span className="pm-widget-icon"><Mic size={13} strokeWidth={2} /></span>
              <div className="pm-widget-text">
                <strong>Live transcript</strong>
                <span>"Reschedule to Thursday…"</span>
              </div>
              <span className="pm-waveform" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ animationDelay: `${i * 0.15}s` }} />
                ))}
              </span>
            </div>
            <div className="pm-widget">
              <span className="pm-widget-icon pm-widget-icon-green"><Check size={13} strokeWidth={2.4} /></span>
              <div className="pm-widget-text">
                <strong>CRM synced</strong>
                <span>Route → Sales Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
