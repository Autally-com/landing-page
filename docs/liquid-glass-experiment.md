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

## Restrained motion trial

Accepted glass baseline: `7243f10`. The subsequent motion trial uses native CSS and IntersectionObserver, with no additional dependency. Its styles are isolated in `app/motion.css`.

- The selected network route draws from the provider through Autally to the buyer's application on first arrival. Changing the example replays the drawing; scrolling away and back does not. Desktop paths take 440ms each, with the second starting after 320ms. Mobile connectors use a shorter 300ms drawing with a 220ms offset.
- The contact panel's mint ribbon plays a 2.4-second sweep when 35% of its surface first enters view, then settles into its original position. The initial scroll-linked versions were not perceptible enough for the founder, so they were replaced with this timed arrival. Desktop starts at a -22% horizontal/+18% vertical offset and 1.5 scale; mobile uses -14%/+12% and 1.3 scale. Text, logo, controls, and glass edges stay stationary. A completed-state flag prevents renderer changes from replaying a finished sweep.
- Reduced-motion preferences leave all paths and backgrounds static. Glass surfaces using the WebGL snapshot renderer retain the static backdrop. Content remains visible without animation or IntersectionObserver support.

Production build and lint passed. Chromium checks confirmed the first-view sequence, example changes, no replay on re-entry, stationary text/logo, reduced-motion behavior, and no runtime errors. Keyboard selection passed for all three routes at desktop/mobile sizes. No horizontal overflow at 320/390/768/1024/1440/1920px. Desktop/mobile screenshots were visually reviewed; other browser engines have not been independently tested. Local verification artifacts are in `.agent-team/runs/motion/` (excluded from Git).

The final contact arrival passed focused checks at 1440/709/390px: live playback, fixed text, completion without replay, static reduced-motion styling, no overflow, and no runtime errors. Rendered start/end frames were compared, and completion was confirmed in the in-app browser. `verify-contact-arrival.js` supersedes the contact-parallax assertions in the earlier `verify-motion.js` trial.

