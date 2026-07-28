import type { Metadata } from "next";
import { LogIn } from "lucide-react";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Sign in | Ansova.ai",
  description: "Sign in to your Ansova.ai workspace.",
  robots: { index: false, follow: true },
};

// No credential form yet — workspace sign-in isn't provisioned. This page
// exists only so the navbar's "Sign in" link resolves to something real
// rather than a 404, and routes people to the team in the meantime.
export default function SignInPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-(--color-gold-light) text-(--color-gold-deep)">
          <LogIn size={24} aria-hidden="true" />
        </span>
        <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-(--color-gold-deep)">
          Sign in
        </p>
        <h1 className="mt-4 text-[clamp(2rem,4vw,2.75rem)] leading-tight">
          Workspace sign-in is being set up.
        </h1>
        <p className="mt-4 text-[16px] leading-relaxed text-(--color-muted)">
          Ansova.ai workspace access isn&apos;t open yet. If your business already
          works with us, reach out to the team and we&apos;ll get you into your
          workspace directly.
        </p>
        <Button href="/contact" size="lg" className="mt-8">
          Contact the team
        </Button>
      </div>
    </Container>
  );
}
