# Liquid glass trial

Baseline commit: `3f8a7ef` — Save Autally landing page before liquid glass experiment. Created before package installation or visual changes. The founder accepted the softened glass treatment and requested a new commit before exploring scrolling and animation. The earlier baseline remains available for comparison.

## Approach

Uses `simple-liquid-glass` 5.3.0, following its bundled `skills/simple-liquid-glass/SKILL.md` and `llms.txt`. The package includes the skill; no separate global skill installation was needed. Sources: https://github.com/lucaperullo/simple-liquid-glass and https://github.com/rdev/liquid-glass-react. The latter was considered, but its documented Safari/Firefox displacement limitation favored trying the explicit WebGL renderer here.

Two independent placements share a small decorative component:

- Network hub: a compact refractive lens with a mint ribbon behind the supplied logo.
- Contact panel: a broad glass surface over a curved mint ribbon. Text, email links, and other controls are normal DOM content above the optics.

Each surface has an explicit sibling backdrop and an explicit size. The library selects its renderer automatically: the verified Chromium preview uses SVG refraction, while iOS can use the supplied sibling backdrop for WebGL. CSS frosting is the fallback. Forced WebGL was tried and replaced after a resize artifact appeared on the large panel. Glass surfaces are hidden from assistive technology and cannot intercept pointer input. No repeating animation or pointer-follow effect is enabled. Reduced-transparency and forced-color modes use the original mint surface without glass.

The experiment is isolated in `components/glass-surface.tsx` and `app/liquid-glass.css`, plus two component placements, one stylesheet import, and the package dependency/lockfile. Copy, links, logo assets, and other sections are preserved.

## Checks

Production build and lint passed. Chromium Playwright verified both visible surfaces and the final SVG strategy at desktop/mobile sizes, no page errors, no overflow at 320/390/768/1024/1440/1920px, working network routes, email and LinkedIn destinations, and keyboard/mobile navigation. No active CSS animations under reduced motion.

Axe reported zero violations, with contrast marked for manual review because of the glass canvas. Contact text uses navy: 7.35:1 against the darkest authored mint before the light glass tint. Desktop/mobile screenshots were visually checked. Browser engine verification is limited to Chromium; cross-browser fallback behavior is provided by the library but not independently tested here.

Review images are in `.impeccable/review/glass-*.png` (local artifacts excluded from Git).


## Softer palette revision

At the founder's request, both backdrops now use Mint Surface (#CCF0E7) and Soft Mint (#EEFBF6), with Porcelain behind the hub. The hub has stronger frosting and background blur, and its fine ribbon highlight was removed so the original logo's mint stroke remains distinct. The contact ribbon is also lighter and softly blurred. The logo itself is unchanged. Production build/lint passed, and both surfaces were visually checked at 1440px and 390px without overflow.

