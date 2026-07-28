import type { DemoStep } from "@/types";

export const demoAgentName = "Ansova Agent";
export const demoCallerName = "Jordan M.";

export const demoSteps: DemoStep[] = [
  {
    state: "connecting",
    label: "Connecting",
    transcript: [],
  },
  {
    state: "listening",
    label: "Listening",
    intent: "Detecting intent",
    knowledgeSource: "—",
    crmStatus: "Looking up caller",
    transcript: [
      {
        id: "l1",
        speaker: "caller",
        text: "I need to move my service appointment to Friday afternoon.",
        atState: "listening",
      },
    ],
  },
  {
    state: "thinking",
    label: "Thinking",
    intent: "Reschedule appointment",
    action: "Checking calendar availability",
    sentiment: "Neutral",
    knowledgeSource: "Appointments calendar",
    crmStatus: "Caller matched — Jordan M.",
    appointmentStatus: "Current: Wed 10:00 AM",
    transcript: [
      {
        id: "l1",
        speaker: "caller",
        text: "I need to move my service appointment to Friday afternoon.",
        atState: "listening",
      },
    ],
  },
  {
    state: "speaking",
    label: "Speaking",
    intent: "Reschedule appointment",
    action: "Proposing new time",
    sentiment: "Positive",
    knowledgeSource: "Appointments calendar",
    crmStatus: "Caller matched — Jordan M.",
    appointmentStatus: "Current: Wed 10:00 AM",
    transcript: [
      {
        id: "l1",
        speaker: "caller",
        text: "I need to move my service appointment to Friday afternoon.",
        atState: "listening",
      },
      {
        id: "l2",
        speaker: "agent",
        text: "I found two available times on Friday. Would 2:30 PM work for you?",
        atState: "speaking",
      },
    ],
  },
  {
    state: "acting",
    label: "Performing action",
    intent: "Reschedule appointment",
    action: "Updating calendar and CRM record",
    sentiment: "Positive",
    knowledgeSource: "Appointments calendar",
    crmStatus: "Updating record",
    appointmentStatus: "Rescheduling to Fri 2:30 PM",
    transcript: [
      {
        id: "l1",
        speaker: "caller",
        text: "I need to move my service appointment to Friday afternoon.",
        atState: "listening",
      },
      {
        id: "l2",
        speaker: "agent",
        text: "I found two available times on Friday. Would 2:30 PM work for you?",
        atState: "speaking",
      },
      {
        id: "l3",
        speaker: "caller",
        text: "Yes, 2:30 works great.",
        atState: "acting",
      },
    ],
  },
  {
    state: "completed",
    label: "Completed",
    intent: "Reschedule appointment",
    action: "Confirmation sent",
    sentiment: "Positive",
    knowledgeSource: "Appointments calendar",
    crmStatus: "Record updated",
    appointmentStatus: "Confirmed: Fri 2:30 PM",
    outcome: "Appointment rescheduled",
    transcript: [
      {
        id: "l1",
        speaker: "caller",
        text: "I need to move my service appointment to Friday afternoon.",
        atState: "listening",
      },
      {
        id: "l2",
        speaker: "agent",
        text: "I found two available times on Friday. Would 2:30 PM work for you?",
        atState: "speaking",
      },
      {
        id: "l3",
        speaker: "caller",
        text: "Yes, 2:30 works great.",
        atState: "acting",
      },
      {
        id: "l4",
        speaker: "agent",
        text: "You're all set — Friday at 2:30 PM. I've sent a confirmation to your email.",
        atState: "completed",
      },
    ],
  },
];

export const STEP_DURATION_MS = 2600;
