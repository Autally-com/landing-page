# Design resource provenance

Autally's supplied `design.md` and landing brief are the source of truth. External resources inform execution; none replace the supplied identity, copy, or data-control constraints.

Installed on 2026-09-20 using the Codex skill installer's Git transport:

| Requested resource | Local installation / reference | Applied guidance |
| --- | --- | --- |
| [Taste](https://www.tasteskill.dev/) | `~/.codex/skills/design-taste-frontend`, from `Leonxlnx/taste-skill/skills/taste-skill` | Infer from the audience; spacious asymmetric hero; consistent color/radius rules; self-hosted fonts; low motion. |
| [Impeccable](https://impeccable.style/) | `~/.codex/skills/impeccable`, from `pbakaus/impeccable/.agents/skills/impeccable`; local engine 0.1.5 | Preserve established brand; show the mechanism; varied section rhythm; deliberate typography; bounded visual review. Context launcher unavailable initially because its binary cache required installation; direct project-context fallback used. Engine then installed for the final detector pass. |
| [Awesome DESIGN.md](https://github.com/voltagent/awesome-design-md) | `awesome-vercel-DESIGN.md` and upstream license in this folder | Adopt the reference's disciplined grid, fine borders, clear action hierarchy and structured technical data. Preserve Autally's palette, font families and button shapes. This resource is a reference collection rather than an executable package. |
| [Vercel Web Interface Guidelines](https://vercel.com/design/guidelines) | `~/.codex/skills/web-design-guidelines`; current `vercel-web-interface-guidelines.md` snapshot | Semantic controls, skip link, visible focus, navigation offset, reduced motion, correct labels, responsive overflow checks. |
| [Playwright CLI](https://playwright.dev/agent-cli/introduction) | Project dev dependency `@playwright/cli` | Production-browser functional and responsive verification; captures and accessibility checks. |

The original user files are preserved. No third-party visual identity, customer logo, testimonial, or performance metric is presented as Autally's.
