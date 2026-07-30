"use client"

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './scroll-morph-gallery.css'

const TILE_W = 190
const TILE_H = 300
const LINE_SPACING = 212

function FlipTile({ item, target, index }) {
  const Icon = item.icon
  const [flipped, setFlipped] = useState(false)
  return (
    <motion.div
      className="smg-tile-wrap"
      initial={{
        x: target.scatter.x,
        y: target.scatter.y,
        z: target.scatter.z,
        rotate: target.scatter.rotation,
        rotateX: target.scatter.rotateX,
        rotateY: target.scatter.rotateY,
        scale: target.scatter.scale,
        opacity: target.scatter.opacity,
      }}
      animate={{
        x: target.x,
        y: target.y,
        z: target.z,
        rotate: target.rotation,
        rotateX: target.rotateX,
        rotateY: target.rotateY,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: 'spring', stiffness: 32, damping: 16, mass: 1.4, delay: index * 0.07 }}
      style={{ width: TILE_W, height: TILE_H, zIndex: flipped ? 10 : 1 }}
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
    >
      <motion.div
        className="smg-tile-inner"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <div className="smg-tile-face smg-tile-front">
          <Icon size={36} strokeWidth={2} />
          <span>{item.title}</span>
        </div>
        <div className="smg-tile-face smg-tile-back">
          <span className="smg-back-icon"><Icon size={32} strokeWidth={2} /></span>
          <span className="smg-back-divider" />
          <strong className="smg-back-title">{item.title}</strong>
          <p>{item.desc || item.short}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ScrollMorphGallery({ items }) {
  const containerRef = useRef(null)
  const [settled, setSettled] = useState(false)
  const [stageScale, setStageScale] = useState(1)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return

    const fit = () => {
      const total = items.length
      const rowWidth = (total - 1) * LINE_SPACING + TILE_W
      const available = el.offsetWidth - 32
      setStageScale(Math.min(1, available / rowWidth))
    }
    fit()

    const observer = new ResizeObserver(fit)
    observer.observe(el)
    return () => observer.disconnect()
  }, [items])

  useEffect(() => {
    setSettled(false)
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const t = setTimeout(() => setSettled(true), 300)
          observer.disconnect()
          return () => clearTimeout(t)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [items])

  const [scatterPositions, setScatterPositions] = useState(null)

  useEffect(() => {
    setScatterPositions(items.map(() => ({
      x: (Math.random() - 0.5) * 700,
      y: (Math.random() - 0.5) * 140,
      z: -420,
      rotation: (Math.random() - 0.5) * 60,
      rotateX: 55 + Math.random() * 20,
      rotateY: (Math.random() - 0.5) * 70,
      scale: 0.5,
      opacity: 0,
    })))
  }, [items])

  const total = items.length
  const lineTotalWidth = (total - 1) * LINE_SPACING

  if (!scatterPositions) {
    return <div ref={containerRef} className="smg-container" />
  }

  return (
    <div ref={containerRef} className="smg-container">
      <div className="smg-stage" style={{ transform: `scale(${stageScale})` }}>
        {items.map((item, i) => {
          const linePos = {
            x: i * LINE_SPACING - lineTotalWidth / 2,
            y: 0,
            z: 0,
            rotation: 0,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            opacity: 1,
          }
          const target = settled ? linePos : scatterPositions[i]

          return (
            <FlipTile
              key={item.title}
              item={item}
              index={i}
              target={{ ...target, scatter: scatterPositions[i] }}
            />
          )
        })}
      </div>
    </div>
  )
}
