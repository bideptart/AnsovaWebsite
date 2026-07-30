"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Target,
  Calendar,
  RefreshCw,
  TrendingUp,
  Globe,
  FileEdit,
  Settings,
  Lock,
  Check,
  Zap,
  CreditCard,
  BookOpen,
  HelpCircle,
  ArrowUpRight,
} from 'lucide-react'
import PhoneMockup from './PhoneMockup'
import ScrollMorphGallery from './ScrollMorphGallery'
import SplitCTA from './SplitCTA'
import FAQ from './FAQ'
import './features.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const CATEGORIES = ['All', 'Voice', 'Automation', 'Analytics', 'Integrations', 'Security']

const CAPABILITIES = [
  { cat: 'Voice', icon: Target, color: 'red', title: 'Smart Voice Routing', desc: 'Understands intent instantly and routes each caller to the right team, agent, or workflow.', short: 'The right team, every time.', spec: 'Under a second' },
  { cat: 'Automation', icon: Calendar, color: 'orange', title: 'AI Appointment Booking', desc: 'Books, reschedules, and confirms meetings live on the call — no manual follow-up needed.', short: 'Booked with no follow-up call.', spec: 'Live confirmation' },
  { cat: 'Integrations', icon: RefreshCw, color: 'blue', title: 'Instant CRM Sync', desc: 'Every conversation updates your CRM in real time — no exports, no manual entry.', short: 'No exports, no manual entry.', spec: 'Zero manual entry' },
  { cat: 'Analytics', icon: TrendingUp, color: 'orange', title: 'Live Call Analytics', desc: 'Watch sentiment, talk-time, and outcomes update live as each call happens.', short: 'Sentiment and outcomes, live.', spec: 'Updates mid-call' },
  { cat: 'Voice', icon: Globe, color: 'blue', title: 'Multi-language Voice', desc: 'Detects and speaks 40+ languages fluently, switching mid-conversation when needed.', short: 'Switches language mid-call.', spec: '40+ languages' },
  { cat: 'Analytics', icon: FileEdit, color: 'orange', title: 'AI Call Summaries', desc: 'Generates clean, actionable summaries the moment a call ends — ready to share.', short: 'Ready the moment it ends.', spec: 'Instant summaries' },
  { cat: 'Automation', icon: Settings, color: 'gray', title: 'Workflow Automation', desc: 'Triggers actions across your stack the instant a call meets a defined condition.', short: 'Fires the instant it triggers.', spec: 'No delay' },
  { cat: 'Security', icon: Lock, color: 'orange', title: 'Enterprise Security', desc: 'SOC 2-aligned infrastructure with encryption, redaction, and full audit trails.', short: 'Encrypted, redacted, audited.', spec: 'SOC 2-aligned' },
]

const EXPLORE_CARDS = [
  { icon: CreditCard, title: 'Plans & call pricing', desc: 'Compare Starter, Growth, and Scale tiers, plus the full per-minute rate card.' },
  { icon: BookOpen, title: 'Playbooks by industry', desc: 'See how real estate, clinics, and home-service teams set up their agents.' },
  { icon: HelpCircle, title: 'Answers before you ask', desc: 'Numbers, credits, compliance, and account access, explained plainly.' },
]

function HeroVisual() {
  return (
    <motion.div
      className="hero-visual"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="hero-dots" aria-hidden="true" />

      <motion.span
        className="hero-ring"
        animate={{ y: [0, -8, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="phone-glow"
        animate={{ opacity: [0.55, 0.9, 0.55], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <PhoneMockup />

      <motion.div
        className="side-chip side-chip-left"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.6 },
          x: { duration: 0.6, delay: 0.6 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 },
        }}
      >
        <span className="side-chip-icon"><Globe size={14} strokeWidth={2} /></span>
        <span className="side-chip-text">
          <strong>40+</strong>
          <span>languages</span>
        </span>
      </motion.div>

      <motion.div
        className="side-chip side-chip-right"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.8 },
          x: { duration: 0.6, delay: 0.8 },
          y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.1 },
        }}
      >
        <span className="side-chip-icon side-chip-icon-alt"><Lock size={14} strokeWidth={2} /></span>
        <span className="side-chip-text">
          <strong>SOC 2</strong>
          <span>secure</span>
        </span>
      </motion.div>

      <motion.div
        className="side-chip side-chip-top"
        initial={{ opacity: 0, x: 12 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.7 },
          x: { duration: 0.6, delay: 0.7 },
          y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        }}
      >
        <span className="side-chip-icon side-chip-icon-alt"><Check size={14} strokeWidth={2} /></span>
        <span className="side-chip-text">
          <strong>99.9%</strong>
          <span>uptime</span>
        </span>
      </motion.div>

      <motion.div
        className="side-chip side-chip-bottom"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.9 },
          x: { duration: 0.6, delay: 0.9 },
          y: { duration: 5.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
        }}
      >
        <span className="side-chip-icon"><Zap size={14} strokeWidth={2} /></span>
        <span className="side-chip-text">
          <strong>&lt;300ms</strong>
          <span>latency</span>
        </span>
      </motion.div>
    </motion.div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={fadeUp} className="eyebrow">FEATURES</motion.span>
          <motion.h1 variants={fadeUp}>
            Build a voice agent that <span className="accent">never leaves anyone on hold.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="hero-sub">
            Real-time speech, native telephony, and the integrations you already run —
            Ansova wires them into one agent that just picks up.
          </motion.p>
          <motion.div variants={fadeUp} className="hero-actions">
            <a href="#start" className="btn btn-primary">Start building free →</a>
            <a href="#demo" className="btn btn-ghost">See it on a call</a>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  )
}

function Capabilities() {
  const [active, setActive] = useState('All')
  const items = active === 'All' ? CAPABILITIES.slice(0, 6) : CAPABILITIES.filter((c) => c.cat === active)

  return (
    <motion.section
      id="capabilities"
      className="process-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="fx-badge">FEATURES</motion.div>

      <motion.div variants={fadeUp} className="section-head">
        <h2>
          Everything your voice agent needs, <span className="accent">built right in.</span>
        </h2>
        <p>
          Powerful capabilities to automate, analyze, and scale every conversation.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="tab-row">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`tab ${active === cat ? 'tab-active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <ScrollMorphGallery items={items} key={active} />
    </motion.section>
  )
}

function KeepExploring() {
  return (
    <motion.section
      className="explore-section"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <motion.div variants={fadeUp} className="section-head section-head-left">
        <h2>Keep exploring</h2>
        <p>Where teams head next after the feature tour.</p>
      </motion.div>
      <div className="explore-list">
        {EXPLORE_CARDS.map((c, i) => (
          <motion.a href="#" key={c.title} variants={fadeUp} className="explore-row">
            <span className="explore-fill" aria-hidden="true" />
            <span className="explore-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="explore-icon">
              <c.icon size={18} strokeWidth={2} />
            </span>
            <span className="explore-copy">
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </span>
            <span className="explore-arrow">
              <ArrowUpRight size={18} strokeWidth={2.2} />
            </span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}

function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <motion.div
        className="aurora-blob aurora-1"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="aurora-blob aurora-2"
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

export default function FeaturesPage() {
  return (
    <div className="features-root">
      <Aurora />
      <div className="page">
        <Hero />
        <Capabilities />
        <SplitCTA />
        <KeepExploring />
        <FAQ />
      </div>
    </div>
  )
}
