import type { FAQItem } from "@/types";

export const faqData: FAQItem[] = [
  // General
  {
    id: "gen-what-is-ansova",
    popular: true,
    category: "General",
    question: "What is Ansova.ai?",
    answer:
      "Ansova.ai is a platform for building AI voice agents that handle real business calls. Agents can answer inbound calls, make outbound calls, qualify leads, support customers, book appointments and connect to the tools your team already uses.",
    keywords: ["ansova", "platform", "overview", "what is"],
  },
  {
    id: "gen-what-is-voice-agent",
    popular: true,
    category: "General",
    question: "What is an AI voice agent?",
    answer:
      "An AI voice agent is a conversational system that can hold a natural, spoken conversation over the phone. It listens, understands intent, responds in real time and can take real actions such as booking an appointment or updating a record.",
    keywords: ["voice agent", "definition", "ai agent"],
  },
  {
    id: "gen-ivr-difference",
    popular: true,
    category: "General",
    question: "How is an AI voice agent different from IVR?",
    answer:
      "Traditional IVR relies on fixed keypad menus and rigid prompts. An Ansova.ai voice agent understands natural spoken language, retains context across the conversation, handles interruptions and can take connected actions rather than just routing a call.",
    keywords: ["ivr", "difference", "phone menu", "comparison"],
  },
  {
    id: "gen-which-businesses",
    category: "General",
    question: "Which businesses can use Ansova.ai?",
    answer:
      "Ansova.ai is built for any business that handles a meaningful volume of phone calls, including healthcare practices, real estate teams, home-service companies, financial services, e-commerce brands and more.",
    keywords: ["businesses", "who is it for", "use cases"],
  },
  {
    id: "gen-replace-employees",
    category: "General",
    question: "Does Ansova.ai replace human employees?",
    answer:
      "No. Ansova.ai is designed to handle routine and repetitive calls while transferring more complex or sensitive conversations to a human team member, so your staff can focus on the calls that need a person.",
    keywords: ["replace", "human", "employees", "staff"],
  },
  {
    id: "gen-call-types",
    category: "General",
    question: "What types of calls can Ansova.ai handle?",
    answer:
      "Ansova.ai can handle inbound calls such as customer questions, support requests and appointment bookings, as well as outbound calls such as reminders, follow-ups and lead callbacks.",
    keywords: ["call types", "inbound", "outbound"],
  },

  // AI Voice Agents
  {
    id: "ava-what-can-it-do",
    category: "AI Voice Agents",
    question: "What can an Ansova.ai voice agent do?",
    answer:
      "A voice agent can answer questions using your connected knowledge, qualify leads, book or reschedule appointments, route calls to the right department, capture messages and update your connected systems automatically.",
    keywords: ["capabilities", "features", "what can it do"],
  },
  {
    id: "ava-voice-tone",
    category: "AI Voice Agents",
    question: "Can I customise the agent's voice and tone?",
    answer:
      "Yes. You can configure the agent's name, voice, greeting, tone and overall objective so it matches how your business communicates.",
    keywords: ["voice", "tone", "customise", "personality"],
  },
  {
    id: "ava-interruptions",
    category: "AI Voice Agents",
    question: "Can an agent understand interruptions?",
    answer:
      "Yes. Agents support natural turn-taking, which means a caller can interrupt or change direction mid-sentence and the agent will adjust its response accordingly.",
    keywords: ["interruptions", "natural conversation", "turn-taking"],
  },
  {
    id: "ava-memory",
    category: "AI Voice Agents",
    question: "Can the agent remember earlier parts of a call?",
    answer:
      "Yes. Agents retain context from earlier in the same conversation, so callers don't need to repeat information they've already provided.",
    keywords: ["memory", "context", "remember"],
  },
  {
    id: "ava-departments",
    category: "AI Voice Agents",
    question: "Can different departments use separate agents?",
    answer:
      "Yes. You can configure separate agents for different departments, objectives or call types, each with its own knowledge, tone and connected workflows.",
    keywords: ["departments", "multiple agents", "teams"],
    relatedLink: { label: "See how the platform connects departments", href: "/#features" },
  },
  {
    id: "ava-languages",
    category: "AI Voice Agents",
    question: "Does Ansova.ai support multiple languages?",
    answer:
      "Language availability depends on the selected voice and AI configuration. Contact the team for the current supported-language list.",
    keywords: ["languages", "multilingual", "language support"],
  },

  // AI Receptionist
  {
    id: "rec-what-does-it-do",
    popular: true,
    category: "AI Receptionist",
    question: "What does an AI receptionist do?",
    answer:
      "An Ansova.ai receptionist greets every caller, understands why they're calling and takes the appropriate next step — answering a question, booking an appointment, routing the call or capturing a message.",
    keywords: ["receptionist", "front desk", "overview"],
  },
  {
    id: "rec-after-hours",
    category: "AI Receptionist",
    question: "Can it answer calls after business hours?",
    answer:
      "Yes. The receptionist can be configured to answer calls around the clock, including outside your team's normal business hours.",
    keywords: ["after hours", "24/7", "off hours"],
  },
  {
    id: "rec-transfer",
    category: "AI Receptionist",
    question: "Can it transfer calls to an employee?",
    answer:
      "Yes. The receptionist can transfer urgent or complex calls to a human team member based on rules you configure.",
    keywords: ["transfer", "human handoff", "escalation"],
  },
  {
    id: "rec-booking",
    category: "AI Receptionist",
    question: "Can it book and reschedule appointments?",
    answer:
      "Yes. When connected to your calendar, the receptionist can check availability, book new appointments and reschedule existing ones directly during the call.",
    keywords: ["booking", "appointments", "reschedule"],
  },
  {
    id: "rec-business-questions",
    category: "AI Receptionist",
    question: "Can it answer questions about our business?",
    answer:
      "Yes. Once connected to your website, documents and FAQs, the receptionist can answer common questions about your business using that knowledge.",
    keywords: ["business questions", "knowledge", "faqs"],
  },
  {
    id: "rec-cannot-answer",
    category: "AI Receptionist",
    question: "What happens when the AI cannot answer?",
    answer:
      "If the receptionist cannot confidently answer a question or complete a request, it can capture the caller's details, take a message or transfer the call to a human team member based on your configured rules.",
    keywords: ["fallback", "cannot answer", "unknown"],
  },

  // Outbound AI
  {
    id: "out-can-call-out",
    popular: true,
    category: "Outbound AI",
    question: "Can Ansova.ai make outbound calls?",
    answer:
      "Yes. Ansova.ai can place outbound calls for use cases such as lead callbacks, appointment reminders, follow-ups and re-engagement campaigns.",
    keywords: ["outbound", "make calls", "calling out"],
  },
  {
    id: "out-supported-workflows",
    category: "Outbound AI",
    question: "Which outbound workflows are supported?",
    answer:
      "Supported outbound workflows include instant lead callbacks, appointment reminders, customer follow-ups, delivery confirmations, feedback collection, lead qualification and renewal outreach.",
    keywords: ["workflows", "outbound campaigns", "use cases"],
  },
  {
    id: "out-pause-campaigns",
    category: "Outbound AI",
    question: "Can outbound campaigns be paused?",
    answer:
      "Yes. Outbound campaigns can be paused, resumed or stopped at any time from your workspace.",
    keywords: ["pause", "campaigns", "stop"],
  },
  {
    id: "out-calling-hours",
    category: "Outbound AI",
    question: "Can businesses control calling hours?",
    answer:
      "Yes. You can configure allowed calling hours, retry behaviour and suppression lists so outbound calls only happen within the windows you define.",
    keywords: ["calling hours", "schedule", "time window"],
  },
  {
    id: "out-request-human",
    category: "Outbound AI",
    question: "Can callers request a human agent?",
    answer:
      "Yes. A caller can ask to speak with a person at any point, and the call can be routed to your team based on your escalation rules.",
    keywords: ["human agent", "escalation", "request human"],
  },
  {
    id: "out-consent",
    category: "Outbound AI",
    question: "How should customer consent be handled?",
    answer:
      "Businesses are responsible for obtaining lawful consent before initiating outbound calls and for following the calling regulations that apply in their region. Ansova.ai does not provide legal guarantees regarding consent or compliance.",
    keywords: ["consent", "compliance", "regulations", "legal"],
  },

  // Integrations
  {
    id: "int-crm",
    popular: true,
    category: "Integrations",
    question: "Can Ansova.ai connect to our CRM?",
    answer:
      "Yes. Ansova.ai can connect to common CRM platforms so call outcomes, notes and updates sync directly to customer records. Integration availability may change. Contact the Ansova.ai team for the current list.",
    keywords: ["crm", "salesforce", "hubspot", "zoho"],
    relatedLink: { label: "View connected workflows", href: "/#integrations" },
  },
  {
    id: "int-calendar",
    category: "Integrations",
    question: "Can it connect to Google Calendar or Outlook?",
    answer:
      "Yes. Ansova.ai can connect to calendar tools such as Google Calendar and Microsoft Outlook to check availability and manage appointments in real time.",
    keywords: ["calendar", "google calendar", "outlook"],
  },
  {
    id: "int-website",
    category: "Integrations",
    question: "Can it learn from our website?",
    answer:
      "Yes. You can connect your website as a knowledge source so agents can answer questions using content that's already published there.",
    keywords: ["website", "knowledge base", "learn"],
  },
  {
    id: "int-documents",
    category: "Integrations",
    question: "Can we upload documents and FAQs?",
    answer:
      "Yes. You can upload documents, product information and FAQs directly as knowledge sources for your agents.",
    keywords: ["documents", "faqs", "upload", "knowledge"],
  },
  {
    id: "int-api-webhooks",
    category: "Integrations",
    question: "Does Ansova.ai support APIs and webhooks?",
    answer:
      "Yes. Ansova.ai supports REST API access and webhooks so you can connect call events and outcomes to your own internal systems.",
    keywords: ["api", "webhooks", "developer"],
  },
  {
    id: "int-available-list",
    category: "Integrations",
    question: "Which integrations are currently available?",
    answer:
      "Ansova.ai connects to CRM, calendar, help desk and messaging tools, with some integrations available now and others marked as API-ready or planned. Integration availability may change. Contact the Ansova.ai team for the current list.",
    keywords: ["available integrations", "list", "current"],
    relatedLink: { label: "See connected workflows", href: "/#integrations" },
  },

  // Pricing
  {
    id: "price-model",
    popular: true,
    category: "Pricing",
    question: "How is Ansova.ai priced?",
    answer:
      "Pricing and trial availability must be confirmed with the Ansova.ai sales team, since plans depend on call volume and the features your business needs.",
    keywords: ["pricing", "cost", "how much"],
  },
  {
    id: "price-trial",
    category: "Pricing",
    question: "Is there a free trial?",
    answer:
      "Pricing and trial availability must be confirmed with the Ansova.ai sales team.",
    keywords: ["free trial", "trial", "demo"],
  },
  {
    id: "price-inbound-outbound",
    category: "Pricing",
    question: "Are inbound and outbound calls priced differently?",
    answer:
      "Call pricing details, including any difference between inbound and outbound usage, must be confirmed with the Ansova.ai sales team.",
    keywords: ["inbound pricing", "outbound pricing", "call pricing"],
  },
  {
    id: "price-integrations-included",
    category: "Pricing",
    question: "Are integrations included?",
    answer:
      "Which integrations are included with a given plan must be confirmed with the Ansova.ai sales team.",
    keywords: ["integrations included", "add-ons"],
  },
  {
    id: "price-enterprise",
    category: "Pricing",
    question: "Is enterprise pricing available?",
    answer:
      "Yes, custom enterprise pricing is available for larger teams and call volumes. Contact the Ansova.ai sales team to discuss your requirements.",
    keywords: ["enterprise", "custom pricing", "large teams"],
  },
  {
    id: "price-setup-fees",
    category: "Pricing",
    question: "Are there setup fees?",
    answer:
      "Setup fee details must be confirmed with the Ansova.ai sales team, as this can depend on the scope of your implementation.",
    keywords: ["setup fees", "onboarding cost"],
  },

  // Security
  {
    id: "sec-data-protection",
    category: "Security",
    question: "How is customer data protected?",
    answer:
      "Ansova.ai uses encryption, role-based access controls and audit trails to help protect conversation and customer data across the platform.",
    keywords: ["data protection", "security", "encryption"],
  },
  {
    id: "sec-recording",
    popular: true,
    category: "Security",
    question: "Does Ansova.ai record calls?",
    answer:
      "Call recording is configurable depending on your workspace settings and business requirements.",
    keywords: ["recording", "call recording"],
  },
  {
    id: "sec-disable-recording",
    category: "Security",
    question: "Can call recording be disabled?",
    answer:
      "Yes. Call recording settings can be configured, including disabling recording, based on your business and compliance requirements.",
    keywords: ["disable recording", "recording settings"],
  },
  {
    id: "sec-access",
    category: "Security",
    question: "Who can access conversation data?",
    answer:
      "Access to conversation data is controlled through role-based permissions, so only authorised members of your workspace can view it.",
    keywords: ["access control", "who can see", "permissions"],
  },
  {
    id: "sec-retention",
    category: "Security",
    question: "How long is conversation data retained?",
    answer:
      "Conversation data retention is configurable so you can align it with your business and compliance requirements.",
    keywords: ["retention", "data storage", "how long"],
  },
  {
    id: "sec-compliance",
    category: "Security",
    question: "Which compliance standards does Ansova.ai support?",
    answer:
      "Ansova.ai is designed to support enterprise security and compliance requirements. Specific certifications should be confirmed directly with the Ansova.ai team, as they are not listed here.",
    keywords: ["compliance", "certifications", "soc 2", "gdpr", "hipaa"],
  },

  // Account and Support
  {
    id: "acc-create-account",
    category: "Account and Support",
    question: "How do I create an account?",
    answer:
      "You can start building an AI agent by requesting access through the Ansova.ai team, who will help set up your workspace.",
    keywords: ["create account", "sign up", "get started"],
  },
  {
    id: "acc-launch-time",
    category: "Account and Support",
    question: "How quickly can an AI agent be launched?",
    answer:
      "Launch timelines depend on the complexity of your knowledge base, workflows and integrations. Contact the Ansova.ai team for guidance specific to your setup.",
    keywords: ["launch time", "how fast", "timeline"],
  },
  {
    id: "acc-test-before-launch",
    category: "Account and Support",
    question: "Can my team test the agent before launch?",
    answer:
      "Yes. You can run test calls and review agent behaviour before making the agent live for real customer calls.",
    keywords: ["test", "preview", "before launch"],
  },
  {
    id: "acc-existing-number",
    category: "Account and Support",
    question: "Can we use our existing phone number?",
    answer:
      "Number setup options, including using an existing business phone number, should be confirmed with the Ansova.ai team based on your current provider.",
    keywords: ["phone number", "existing number", "porting"],
  },
  {
    id: "acc-support-available",
    category: "Account and Support",
    question: "Is technical support available?",
    answer:
      "Yes. The Ansova.ai team is available to help with setup, configuration and ongoing questions about your workspace.",
    keywords: ["support", "help", "technical support"],
  },
  {
    id: "acc-contact",
    category: "Account and Support",
    question: "How can I contact the Ansova.ai team?",
    answer:
      "You can reach the Ansova.ai team through the contact options on this site to ask questions or request a demo.",
    keywords: ["contact", "reach out", "get in touch"],
  },
];

export const faqCategories = [
  "All",
  "General",
  "AI Voice Agents",
  "AI Receptionist",
  "Outbound AI",
  "Integrations",
  "Pricing",
  "Security",
  "Account and Support",
] as const;
