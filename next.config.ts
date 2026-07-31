import type { NextConfig } from "next";
import {
  landingPages,
  draftPages,
  draftReasons,
  assertServiceCardTargets,
} from "./src/data/landingPages";
import { services } from "./src/lib/site";
import {
  validateLandingPages,
  formatIssues,
  maxPairwiseSimilarity,
  DEFAULT_THRESHOLDS,
} from "./src/data/landingPages/validate";

// ---------------------------------------------------------------------------
// THE QUALITY GATE
//
// Runs here rather than as a `prebuild` npm script so it uses the framework's
// own module resolution (path aliases, extensionless imports), runs identically
// under npm/pnpm/bun, and needs no extra dev dependency such as tsx that could
// be missing on the deploy runner.
//
// It THROWS. A failing build is the only enforcement that does not get ignored.
// Do not weaken a threshold to make a page pass — rewrite the page.
// ---------------------------------------------------------------------------
const issues = validateLandingPages(landingPages);

if (issues.length) {
  throw new Error(
    `\n\n✗ Landing-page quality gate failed (${issues.length} issue${
      issues.length === 1 ? "" : "s"
    }):\n\n` +
      formatIssues(issues) +
      `\n\nThresholds: ${JSON.stringify(DEFAULT_THRESHOLDS)}\n` +
      `Fix the page. Do not lower the threshold.\n`
  );
}

// The retrofit linking existing service cards to their landing pages breaks
// silently if a title is renamed, so it is checked here rather than discovered
// months later as "why do those links not show up any more".
const linkProblems = assertServiceCardTargets(services.map((s) => s.title));
if (linkProblems.length) {
  throw new Error(
    `\n\n✗ Service-card internal linking is stale:\n` +
      linkProblems.map((p) => `     ${p}`).join("\n") +
      `\n\nUpdate SERVICE_CARD_TARGETS in src/data/landingPages/index.ts.\n`
  );
}

if (landingPages.length) {
  const { value, pair } = maxPairwiseSimilarity(landingPages);
  // Reported on every build so similarity drift is visible before it fails.
  console.log(
    `✓ Quality gate passed — ${landingPages.length} landing page(s), ` +
      `max pairwise similarity ${(value * 100).toFixed(2)}%` +
      (pair ? ` (${pair[0]} ↔ ${pair[1]})` : "") +
      ` against a ${(DEFAULT_THRESHOLDS.maxSimilarity * 100).toFixed(0)}% ceiling.`
  );
}

// Drafts are written and reviewed but held back until their imagery exists.
// Surfaced loudly so "we wrote that page" never quietly means "it is live".
if (draftPages.length) {
  console.log(
    `\n⏸  ${draftPages.length} landing page(s) written but HELD:\n` +
      draftPages
        .map((p) => `     ${p.slug}\n${draftReasons(p).map((r) => `        - ${r}`).join("\n")}`)
        .join("\n") +
      `\n   Each publishes automatically once its blocker clears.\n`
  );
}

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
