# Autally Exchange implementation design

Updated 20 September 2026 for the founder-approved shorter business-travel page. The supplied design.md remains the brand authority. The original content brief is preserved; the subsequent conversation authorizes the revised five-section structure and copy.

## Content and composition

### Mint opening revision

Final ribbon simplification: following the founder's request and Impeccable's distill guidance, the broad decorative loop was replaced with a 2.5-unit SVG connection line. Its curve now runs from beneath the hotel source through the Autally block into the buyer panel. It uses the existing dark green interaction color for visibility against Mint Surface. The 1.6-second drawing animation and static reduced-motion fallback remain; the headline, layout, and contact/network animations are unchanged. Build/lint and desktop/mobile animation checks passed, with rendered endpoint inspection.

Latest copy and ribbon refinement (21 September): the headline now reads “Automate hotel invoices. Make business stays easier.” Supporting copy connects reduced hotel invoice administration with delivery into the business traveller's company expense tools, retaining the network's development-stage wording. The ribbon's endpoints are rounded and contained within its SVG instead of clipping at the left edge. It draws once over 1.6 seconds on load; reduced-motion users see the complete static ribbon. Desktop/mobile visual inspection, animation progression, reduced motion, build/lint, and eight-width layout checks passed. This supersedes the original-headline/no-animation notes below.

After baseline commit `a04c3eb`, the founder approved a stronger first screen using the existing brand palette. The hero now has a Mint Surface background and a Mint Flow ribbon connecting an illustrative hotel/PMS source, Autally Exchange, and the business buyer's expense application. This is a conceptual connection, not a product screenshot or live-network claim; its caption explicitly identifies the network as in development. The original headline and primary email action remain. The introduction is shortened to one paragraph, with additional audience/application context directly below the hero. On mobile, the illustration follows the primary action. Styling is isolated in `app/hero.css`.

This revision passed production build and lint, plus Playwright CLI checks at 320/390/709/768/800/1024/1440/1920px for overflow, visible primary action, caption clearance, and working section links. Desktop/mobile screenshots were reviewed. Axe found no violations at 1440/768/390px; existing glass surfaces still require manual contrast review. No new dependency, photo, or animation was introduced. The following original composition and verification notes record the earlier page revision.

1. A clear hotel-invoice headline, business-buyer pain, provider audience, and one primary action: Express interest in joining.
2. An illustrative hotel payment alongside the invoice data the business needs, followed by the traveller and finance-team benefit. Restaurant receipts are an adjacent example.
3. Three provider benefits: serve business buyers, reach participating applications, and explore compensation for successful authorized retrievals. Hotels, PMS, POS, and receipt platforms are explicit source types. Receipt platforms can supply and retrieve data.
4. An illustrative, interactive three-route diagram: hotel, restaurant, and receipt-app exchange. Business-buyer applications are destinations. Native FAQ disclosures explain participation by competitors and the network's founding stage.
5. A mint invitation panel paired with the long-term commerce-data vision. An expression of interest opens a copyable message, with no submission or invented contact destination.

Visible main copy fell from 1,330 to 472 words with disclosures closed. The page has five main sections instead of twelve. The older ecosystem lists, duplicated process/capability explanations, bilateral-network comparison, and separate vision/final-CTA sections were consolidated. The network diagram moved below the concrete hotel example.

## Preserved identity

The supplied logo and square favicon remain intact. Instrument Sans, Inter, and IBM Plex Mono remain locally bundled. Navy, mint, porcelain, and the supplied border colors carry the hierarchy. Inter is intentionally retained despite Impeccable's generic font advisory because it is prescribed by the brand guide.

The 1248px content grid, editorial hero, navy payment record, white invoice record, and mint invitation remain. Provider benefits are open columns with one softly tinted compensation panel. Details/summary controls reveal secondary explanations without lengthening the initial read.

The established responsive system is retained. The diagram uses three source and three application nodes, with stacked groups on smaller screens. Its descriptions and accessible names explicitly identify the business buyer. Route changes are keyboard accessible and motion respects reduced-motion preferences. Navigation links and page metadata follow the new focus.

## Verification

Production build (including TypeScript) and ESLint passed. Playwright CLI verified nine widths from 320px to 1920px, all 14 anchors, reduced motion, keyboard navigation, menu dismissal, expression-of-interest disclosure, clipboard success and failure recovery, and all three illustrative routes. Desktop, tablet, and mobile screenshots were inspected. Axe reported zero violations and no incomplete checks at all three tested sizes.

The current scripts, screenshots, and source manifest are in .agent-team/runs/travel-copy. Older run folders are historical evidence. The contact flow still requires a supplied contact destination before standalone acquisition use.

## Contact update

The founder supplied tomas@autally.com. All interest CTAs now open an email with a prefilled subject; the closing action says Get in touch and displays the address. The previous inquiry-copy disclosure was removed. The footer includes a LinkedIn icon and link to https://www.linkedin.com/company/autally. Earlier clipboard/disclosure verification is historical and no longer applies to this flow. Liquid-glass treatment is being discussed and has not been implemented.
