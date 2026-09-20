# Autally Exchange

Partner landing page built with Next.js, TypeScript, Tailwind CSS and Lucide icons. Instrument Sans, Inter and IBM Plex Mono are served locally from the installed font packages.

## Run locally

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000.

## Production checks

```sh
npm run build
npm run typecheck
npm run lint
npm start
```

## Browser verification

The project includes the requested Playwright CLI as a pinned development dependency. No global install is required.

```sh
npx --no-install playwright-cli install
npx --no-install playwright-cli -s=autally open http://127.0.0.1:3000
npx --no-install playwright-cli -s=autally resize 1440 1000
npx --no-install playwright-cli -s=autally snapshot
npx --no-install playwright-cli -s=autally screenshot --filename=desktop.png --full-page
npx --no-install playwright-cli -s=autally resize 390 844
npx --no-install playwright-cli -s=autally screenshot --filename=mobile.png --full-page
npx --no-install playwright-cli -s=autally run-code --filename=.agent-team/runs/travel-copy/verify-layout.js
npx --no-install playwright-cli -s=autally run-code --filename=.agent-team/runs/travel-copy/verify-interactions.js
npx --no-install playwright-cli -s=autally run-code --filename=.agent-team/runs/travel-copy/verify-routes.js
npx --no-install playwright-cli -s=autally run-code --filename=.agent-team/runs/travel-copy/verify-content.js
npx --no-install playwright-cli -s=autally run-code --filename=.agent-team/runs/autally-landing/verify-accessibility.js
npx --no-install playwright-cli -s=autally close
```

Current verification records, source hashes, and screenshots live in `.agent-team/runs/travel-copy/`. Earlier run folders retain historical evidence.

## Content and contact behavior

The supplied `autally-exchange-landing-page-codex.md` and `design.md` remain unchanged. The founder's subsequently approved content direction supersedes the original page structure: five sections focus on hotel invoices, business travel, and business buyers. Providers include hotels, PMS, POS, and receipt platforms. Compensation is an exploratory possibility; the broader commerce-data vision is retained. Illustrative transaction data is labeled as such; no live network or partner claims are made.

All interest links open an email addressed to tomas@autally.com with the subject Interest in Autally Exchange. The closing action says Email Tomas and displays the address. The footer links to the Autally LinkedIn company page. The website does not send the email or collect form data.

The page has not been deployed. No third-party analytics, cookie storage, or data collection is included.

## Design resources

See `docs/design-resources/README.md` for the installed Taste, Impeccable, Vercel, Awesome DESIGN.md reference, their sources and their application to Autally's brand.

