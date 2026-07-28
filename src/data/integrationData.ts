import type { Integration } from "@/types";

export const integrations: Integration[] = [
  { id: "salesforce", name: "Salesforce", category: "CRM", status: "Planned" },
  { id: "hubspot", name: "HubSpot", category: "CRM", status: "Available" },
  { id: "zoho", name: "Zoho", category: "CRM", status: "Available" },
  { id: "pipedrive", name: "Pipedrive", category: "CRM", status: "API-ready" },
  { id: "zendesk", name: "Zendesk", category: "Help desk", status: "Available" },
  { id: "freshdesk", name: "Freshdesk", category: "Help desk", status: "API-ready" },
  { id: "google-calendar", name: "Google Calendar", category: "Calendar", status: "Available" },
  { id: "outlook", name: "Microsoft Outlook", category: "Calendar", status: "Available" },
  { id: "slack", name: "Slack", category: "Messaging", status: "Available" },
  { id: "teams", name: "Microsoft Teams", category: "Messaging", status: "API-ready" },
  { id: "shopify", name: "Shopify", category: "Commerce", status: "Planned" },
  { id: "zapier", name: "Zapier", category: "Automation", status: "Available" },
  { id: "rest-api", name: "REST API", category: "Developer", status: "Available" },
  { id: "webhooks", name: "Webhooks", category: "Developer", status: "Available" },
];
