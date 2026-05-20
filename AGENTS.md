# AGENTS.md

Guidance for agents working in this repository.

## Project

- Project name: Aegean Emergency STS / AES Response
- Business domain: commercial maritime emergency response, emergency STS, lightering, salvage pumping, bunker removal, pollution prevention, and distressed vessel cargo recovery.
- Tech stack: Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Core Rules

- Preserve the existing route structure, SEO metadata, JSON-LD, sitemap, robots, and article routing.
- Do not rebuild the project from scratch unless the user explicitly instructs you to do so.
- Keep changes scoped to the requested task and consistent with the existing code patterns.
- Use reusable components and static data structures already present in the project when possible.
- Avoid adding backend behavior unless explicitly requested.

## Copy And Positioning

- Tone must remain professional, technical, calm, commercial maritime, and safety-focused.
- Avoid fake claims, unverifiable certifications, unsupported approvals, invented years of experience, or overpromising.
- Avoid military, tactical, or conflict-oriented wording.
- Prefer careful language such as "built for", "designed to support", "prepared for", "documentation support", and "authority and insurer-ready documentation".
- Keep all operational language commercial, safety-led, and suitable for owners, managers, insurers, authorities, and appointed stakeholders.

## Visual And Responsive Standards

- Maintain the premium dark maritime brand identity.
- Keep mobile layouts compact and avoid excessive vertical empty space.
- Avoid large fixed heights on mobile unless they are essential.
- Keep CTAs visible and clear, especially "Activate Response Team" and "Request Capability Statement".
- The React Three Fiber / WebGL hero must remain performant, readable, and professional.
- Always provide a graceful fallback for WebGL failure or unavailable WebGL support.
- Respect reduced-motion preferences where practical.

## SEO And Content Integrity

- Preserve existing metadata API usage, Open Graph metadata, JSON-LD, sitemap, robots, and article templates.
- Keep article routing stable.
- Maintain semantic HTML structure for pages and articles.
- Internal links should support services, equipment, process, insights, and contact conversion paths.

## Verification

- Run `npm run typecheck` and `npm run build` after meaningful code changes.
- For frontend visual changes, browser-test the affected routes and relevant desktop/mobile viewports.
- Before the final response, summarize changed files and QA performed.
- If a requested check was not run, state that clearly and explain why.
