# Autally Exchange implementation design

Updated 20 September 2026 for the founder-approved shorter business-travel page. The supplied design.md remains the brand authority. The original content brief is preserved; the subsequent conversation authorizes the revised five-section structure and copy.

## Content and composition

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

The founder supplied tomas@autally.com. All interest CTAs now open an email with a prefilled subject; the closing action says Email Tomas and displays the address. The previous inquiry-copy disclosure was removed. The footer includes a LinkedIn icon and link to https://www.linkedin.com/company/autally. Earlier clipboard/disclosure verification is historical and no longer applies to this flow. Liquid-glass treatment is being discussed and has not been implemented.
