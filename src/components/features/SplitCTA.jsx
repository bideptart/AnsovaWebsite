"use client"

import { motion } from 'framer-motion'
import { Phone, Target, Calendar, RefreshCw, TrendingUp, Globe } from 'lucide-react'
import './split-cta.css'

const ORBIT_ICONS = [
  { Icon: Target, className: 'orbit-1' },
  { Icon: Calendar, className: 'orbit-2' },
  { Icon: RefreshCw, className: 'orbit-3' },
  { Icon: TrendingUp, className: 'orbit-4' },
  { Icon: Globe, className: 'orbit-5' },
]

function CTAVisual() {
  return (
    <div className="cta-visual">
      <div className="cta-visual-glow" />
      <div className="cta-visual-core">
        <Phone size={30} strokeWidth={2} />
      </div>
      <div className="cta-visual-ring">
        {ORBIT_ICONS.map(({ Icon, className }) => (
          <span key={className} className={`cta-visual-orbit ${className}`}>
            <span className="cta-visual-orbit-icon">
              <Icon size={18} strokeWidth={2} />
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SplitCTA() {
  return (
    <motion.section
      id="demo"
      className="split-cta"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="split-cta-visual">
        <CTAVisual />
      </div>
      <div className="split-cta-panel">
        <span className="eyebrow">TRY IT LIVE · NO CARD NEEDED</span>
        <h2>
          Hear it handle <span className="accent">a real call.</span>
        </h2>
        <p>Connect a number and place an actual test call in minutes — nothing to install.</p>
        <p className="stat-line stat-line-dark">
          {['Live in under 10 minutes', 'Bring your own number', 'Real transcript, real routing', 'Cancel anytime'].map((c, i, arr) => (
            <span key={c}>
              {c}
              {i < arr.length - 1 && <i className="dot" />}
            </span>
          ))}
        </p>
        <div className="cta-actions">
          <a href="#start" className="btn btn-primary">Get started →</a>
          <a href="#pricing" className="btn btn-outline-light">View pricing</a>
        </div>
      </div>
    </motion.section>
  )
}
