"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import './faq.css'

const FAQS = [
  { q: 'How fast can I get a number live?', a: "Connect a number and your agent is answering calls in under 10 minutes — no telephony setup, no waiting on a carrier." },
  { q: 'Does it work with the CRM we already use?', a: 'Every call syncs in real time to your CRM — contacts, notes, and outcomes update automatically with zero manual entry.' },
  { q: "What happens if the AI can't handle a call?", a: 'It recognizes when a request needs a human and hands off instantly, passing along the live transcript so nothing gets repeated.' },
  { q: 'Is customer data encrypted and audited?', a: 'Yes — infrastructure is SOC 2-aligned with encryption in transit and at rest, redaction, and full audit trails on every call.' },
  { q: 'Can one agent handle multiple languages?', a: 'It detects and speaks 40+ languages, switching mid-conversation the moment a caller does.' },
]

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.q}</span>
        <motion.span
          className="faq-icon"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <Plus size={18} strokeWidth={2.4} />
        </motion.span>
      </button>
      <div className="faq-answer-wrap">
        <div className="faq-answer">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <motion.section
      id="faq"
      className="faq-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="faq-head">
        <span className="fx-badge">FAQ</span>
        <h2>Answers before you ask.</h2>
        <p>Everything teams check before wiring up their first agent.</p>
      </div>
      <div className="faq-list">
        {FAQS.map((item, i) => (
          <FAQItem
            key={item.q}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </motion.section>
  )
}
