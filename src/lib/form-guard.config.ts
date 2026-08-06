import type { FormGuardConfig } from "@/lib/form-guard/types";
import { contact } from "@/lib/site";

/**
 * Per-site form guard settings. This is the only file in the guard that differs
 * between client sites — everything under `lib/form-guard/` is byte-identical
 * fleet-wide, which is what makes drift detectable with a checksum.
 */
export const formGuardConfig: FormGuardConfig = {
  canonicalHost: "honeybloombeauty.com",
  honeypotField: "company",
  minElapsedMs: 3000,
  // Asserted server-side against what Turnstile reports, so a token minted for
  // this form cannot be replayed against another one.
  action: "contact",
  businessPhone: contact.phone,
};
