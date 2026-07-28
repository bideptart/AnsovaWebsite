import { Check, Calendar, Code2, FileText, Globe, Mic, PhoneCall, Sparkles } from "lucide-react";
import VoiceWaveform from "@/components/product/VoiceWaveform";

/** Distinct interface preview per build step, so the four steps don't repeat one card. */
export default function StepMockup({ stepId }: { stepId: string }) {
  if (stepId === "design") {
    return (
      <Shell title="Agent settings">
        <Row label="Name" value="Ansova Agent" />
        <Row label="Voice" value="Warm · Female" />
        <Row label="Language" value="English (US)" />
        <div className="rounded-xl border border-border-primary bg-surface-sunken p-4">
          <p className="mb-2 text-[10px] font-semibold tracking-wide text-text-tertiary uppercase">Greeting</p>
          <p className="text-sm text-text-primary">
            &ldquo;Hi there, thanks for calling Northside Clinic. How can I help you today?&rdquo;
          </p>
          <VoiceWaveform active state="speaking" className="mt-3 h-10" />
        </div>
        <div className="flex flex-wrap gap-2">
          {["Friendly", "Concise", "Professional"].map((t) => (
            <span key={t} className="rounded-full border border-brand-primary/30 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-ink">
              <Mic size={11} className="mr-1 inline" aria-hidden="true" />
              {t}
            </span>
          ))}
        </div>
      </Shell>
    );
  }

  if (stepId === "connect-knowledge") {
    return (
      <Shell title="Knowledge sources">
        {[
          { icon: Globe, name: "ansova-clinic.example.com", meta: "48 pages indexed", done: true },
          { icon: FileText, name: "Services and pricing.pdf", meta: "12 pages", done: true },
          { icon: FileText, name: "Patient FAQs.docx", meta: "31 questions", done: true },
          { icon: Sparkles, name: "Opening hours + policies", meta: "Syncing…", done: false },
        ].map((src) => {
          const Icon = src.icon;
          return (
            <div key={src.name} className="flex items-center gap-3 rounded-xl border border-border-primary bg-surface-sunken px-4 py-3">
              <Icon size={16} className="shrink-0 text-text-tertiary" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-text-primary">{src.name}</span>
                <span className="block text-xs text-text-tertiary">{src.meta}</span>
              </span>
              {src.done ? (
                <Check size={15} className="shrink-0 text-success" aria-hidden="true" />
              ) : (
                <span className="h-3.5 w-3.5 shrink-0 animate-spin rounded-full border-2 border-border-secondary border-t-brand-primary" />
              )}
            </div>
          );
        })}
      </Shell>
    );
  }

  if (stepId === "connect-tools") {
    return (
      <Shell title="Connected tools">
        {[
          { icon: Calendar, name: "Google Calendar", perm: "Read + write availability" },
          { icon: PhoneCall, name: "HubSpot CRM", perm: "Create and update contacts" },
          { icon: Code2, name: "Webhook: booking.created", perm: "POST to internal API" },
        ].map((tool) => {
          const Icon = tool.icon;
          return (
            <div key={tool.name} className="flex items-center gap-3 rounded-xl border border-border-primary bg-surface-sunken px-4 py-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-ink">
                <Icon size={15} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-text-primary">{tool.name}</span>
                <span className="block truncate text-xs text-text-tertiary">{tool.perm}</span>
              </span>
              <span className="shrink-0 rounded-full border border-success/30 bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
                Connected
              </span>
            </div>
          );
        })}
        <p className="text-xs text-text-tertiary">Permissions are scoped per tool and can be revoked at any time.</p>
      </Shell>
    );
  }

  return (
    <Shell title="Pre-launch checks">
      {[
        { label: "Test calls completed", value: "12 of 12", ok: true },
        { label: "Routing rules", value: "3 configured", ok: true },
        { label: "Human handoff", value: "Enabled", ok: true },
        { label: "Escalation number", value: "Verified", ok: true },
      ].map((r) => (
        <div key={r.label} className="flex items-center justify-between rounded-xl border border-border-primary bg-surface-sunken px-4 py-3">
          <span className="text-sm text-text-secondary">{r.label}</span>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-text-primary">
            {r.value}
            {r.ok && <Check size={14} className="text-success" aria-hidden="true" />}
          </span>
        </div>
      ))}
      <div className="flex items-center gap-2 rounded-xl border border-success/30 bg-success/10 px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
        <p className="text-sm font-semibold text-success">Ready to take live calls</p>
      </div>
    </Shell>
  );
}

function Shell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] font-bold tracking-[0.14em] text-text-tertiary uppercase">{title}</p>
      {children}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-border-primary bg-surface-sunken px-4 py-3">
      <span className="text-xs text-text-tertiary">{label}</span>
      <span className="text-sm font-semibold text-text-primary">{value}</span>
    </div>
  );
}
