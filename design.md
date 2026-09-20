# Autally — Simple Design Rules

## 1. Overall style

- Clean, light, and minimal.
- Use generous white space.
- Business-friendly, calm, and precise.
- Avoid heavy decoration, strong gradients, noisy backgrounds, and flashy effects.
- The visual tone should feel clear, trustworthy, and modern.

## 2. Typography

### Typefaces

- **Instrument Sans** — headlines and brand presence
- **Inter** — UI, body text, and labels
- **IBM Plex Mono** — data, evidence, IDs, amounts, and technical references

### Hierarchy

| Style | Typeface | Weight | Suggested size |
|---|---|---:|---:|
| H1 | Instrument Sans | 600 | 56 / 64 |
| H2 | Instrument Sans | 500 | 32 / 40 |
| H3 | Instrument Sans | 500 | 22 / 28 |
| Body | Inter | 400 | 16 / 24 |
| Caption | Inter | 400 | 12 / 16 |
| Button / Nav | Inter | 500 | 14 / 20 |
| Data | IBM Plex Mono | 500 | 12–14 / 18 |

- Headlines should feel confident.
- Body text should feel neutral and highly readable.
- Mono text should feel precise and technical.

## 3. Colors

| Name | Hex | Use |
|---|---:|---|
| Deep Navy | `#00162C` | Logo, primary text, key headings, strong actions |
| Mint Flow | `#6FD7C1` | Highlights, accents, selected states, positive emphasis |
| Mint Surface | `#CCF0E7` | Stronger soft background, CTA bands, highlighted cards, selected sections |
| Soft Mint | `#EEFBF6` | Very light backgrounds, subtle fills, gentle hover or support surfaces |
| Porcelain | `#FAFAF8` | Main page background and light surfaces |
| Light Gray | `#E9ECEF` | Borders, dividers, and secondary surfaces |

### Color hierarchy

- **Mint Flow `#6FD7C1`** → primary accent
- **Mint Surface `#CCF0E7`** → secondary soft highlight surface
- **Soft Mint `#EEFBF6`** → faint background tint

### Ratio

- 70–80% white, porcelain, and light backgrounds
- 15–20% Deep Navy
- 5–10% Mint accents and mint surfaces

Use mint as an accent and supporting surface system, not as the dominant UI color.

## 4. Layout

- Use a clear grid.
- Align elements precisely.
- Prefer boxed sections and cards.
- Use thin dividers and soft borders.
- Keep spacing consistent and generous.

Spacing principle:

- Outer layout: spacious
- Inner UI: structured and compact

Suggested spacing scale:

`4, 8, 12, 16, 24, 32, 48, 64, 96`

## 5. Logo and brand expression

- Keep the logo simple and clean.
- The stylized A with the mint flow stroke is the key brand feature.
- Keep the wordmark dark and readable.
- Use the mint stroke as the main recognizable brand gesture.
- Do not add shadows, outlines, bevels, or decorative effects.

## 6. UI components

### Buttons

- Primary: Deep Navy background, white text
- Secondary: white or transparent background, thin outline
- Mint: active, selected, or confirmation accents only

### Cards

- White or very light background
- Rounded corners
- Thin Light Gray border
- Minimal shadow or no shadow
- `#CCF0E7` can be used for highlighted feature cards or soft CTA panels

### Status and metrics

- Use Mint Flow for positive or verified emphasis.
- Use Mint Surface for soft positive or selected sections.
- Use IBM Plex Mono for precise values where useful.
- Keep metric cards simple and readable.

## 7. Data styling

For transaction and evidence content:

- Use IBM Plex Mono.
- Align values neatly.
- Present data in simple structured blocks.
- Keep labels small and clean.
- Highlight only the most important values.

Good uses:

- `TXN_ID`
- booking ID
- VAT rate
- amount
- status
- timestamp

## 8. Icons and graphics

- Thin, simple, outline-based icons
- Rounded geometric shapes
- Operational and structured appearance
- Subtle line graphics
- Minimal system-flow diagrams
- Structured data blocks and cards

## 9. Writing style

The tone should be:

- Confident
- Clear
- Precise
- Professional
- Not overly promotional

Preferred examples:

- “Make every transaction accounting-ready.”
- “Confident. Clear. Precise.”
- “Reliable data for complete clarity.”

Avoid hype, buzzwords, playful copy, and emotional exaggeration.

## 10. Do and don’t

### Do

- Use generous white space.
- Keep typography highly readable.
- Use Deep Navy as the anchor.
- Use Mint Flow sparingly.
- Use Mint Surface for calm emphasis.
- Keep the UI calm and structured.
- Use mono only for technical or data content.

### Don’t

- Overload the interface with mint.
- Use too many colors.
- Make the product feel playful or consumer-tech.
- Use heavy shadows, glassmorphism, or flashy gradients.
- Mix too many font personalities.

---

## Figma style names

### Colors

- `Brand / Deep Navy`
- `Brand / Mint Flow`
- `Surface / Mint Surface`
- `Surface / Soft Mint`
- `Surface / Porcelain`
- `Surface / White`
- `Border / Light Gray`

### Typography

- `Heading / H1`
- `Heading / H2`
- `Heading / H3`
- `Body / Default`
- `Body / Caption`
- `UI / Button`
- `UI / Navigation`
- `Data / Default`
