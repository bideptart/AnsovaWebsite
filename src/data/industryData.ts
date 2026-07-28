import type { IndustryWorkflow } from "@/types";

export const industries: IndustryWorkflow[] = [
  {
    industry: "Healthcare",
    icon: "heart-pulse",
    workflows: ["Appointment scheduling", "Reminder calls", "Department routing"],
  },
  {
    industry: "Real Estate",
    icon: "building-2",
    workflows: ["Lead qualification", "Property enquiries", "Viewing scheduling"],
  },
  {
    industry: "Home Services",
    icon: "wrench",
    workflows: ["Service booking", "Emergency routing", "Follow-up calls"],
  },
  {
    industry: "Financial Services",
    icon: "landmark",
    workflows: ["Appointment scheduling", "Account enquiries", "Secure call routing"],
  },
  {
    industry: "E-commerce",
    icon: "shopping-bag",
    workflows: ["Order status updates", "Return requests", "Delivery confirmation"],
  },
  {
    industry: "Logistics",
    icon: "truck",
    workflows: ["Delivery confirmation", "Dispatch coordination", "Status updates"],
  },
  {
    industry: "Automotive",
    icon: "car",
    workflows: ["Service booking", "Reminder calls", "Parts enquiries"],
  },
  {
    industry: "Hospitality",
    icon: "concierge-bell",
    workflows: ["Reservation booking", "Guest enquiries", "After-hours coverage"],
  },
];

export const exampleWorkflows = [
  {
    id: "healthcare-practice",
    label: "Example workflow",
    title: "Healthcare practice",
    points: ["Answers appointment calls", "Reschedules visits", "Routes urgent requests"],
  },
  {
    id: "property-business",
    label: "Example workflow",
    title: "Property business",
    points: ["Qualifies enquiries", "Answers listing questions", "Books viewings"],
  },
  {
    id: "home-service-company",
    label: "Example workflow",
    title: "Home-service company",
    points: ["Handles after-hours calls", "Captures service details", "Schedules technicians"],
  },
];
