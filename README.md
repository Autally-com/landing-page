# Autally Exchange

Partner landing page built with Next.js, TypeScript, Tailwind CSS and Lucide icons. Instrument Sans, Inter and IBM Plex Mono are served locally from the installed font packages.

## Run locally

Use Node.js 22, matching the deployment workflow.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Development serves the site at the root URL.

## Production checks

```sh
npm run build
npm run typecheck
npm run lint
npm test
npm start
```

`npm run build` exports the site to `out/`. `npm start` serves that folder at http://127.0.0.1:3000; it does not rebuild it. Stop the development server first if it uses that port. For another port, use `npm start -- --port 3001`.

This is a static site, so `next start` is not supported. Run the checks again after changing the page. Local builds use the root path unless you set a path override or `GITHUB_REPOSITORY` is present in your environment.

## Deploy to GitHub Pages

This repository is configured for static Next.js export and GitHub Pages deployment via `.github/workflows/deploy-pages.yml`.

1. In GitHub, open **Settings → Pages** for this repository.
2. Set **Source** to **GitHub Actions**.
3. Merge the deployment pull request into `master`. Every subsequent push to `master` builds and deploys the site automatically.
4. Alternatively, open **Actions → Deploy to GitHub Pages → Run workflow**, select **master**, and run it.
5. Wait for both the build and deployment jobs to succeed, then open the deployment URL shown in the workflow or **Settings → Pages**.

Pull requests targeting `master` run the build, type, lint, and deployment-path checks without deploying, even before Pages is enabled. Only a push or manual run on `master` can deploy. The build uses read-only repository permissions; Pages write and OIDC permissions are limited to the deployment job. No personal access token or deployment secret is required.

### Deploy a small change

Commit the change to `master` (or merge your change's pull request into `master`). Deployment runs automatically. To redeploy that version manually, open **Actions → Deploy to GitHub Pages → Run workflow**, select **master**, then click **Run workflow**. You do not need to build or upload files yourself.

The workflow must be merged into `master` before the **Run workflow** button is available. It always deploys the selected branch's committed files; changes still on your computer are not included.

Expected Pages URL for this repository:

- https://autally-com.github.io/landing-page/

Notes:

- The workflow prepares deployment; it does not guarantee Pages is enabled in repository settings.
- GitHub Pages for private repositories depends on your GitHub plan (for example, GitHub Pro/Team/Enterprise support it). Public repositories can use Pages without a paid plan.

### Paths and custom domains

GitHub Actions automatically builds this project with `/landing-page` as its base path. A repository named `<owner>.github.io` uses the root path instead. The path is embedded in scripts, styles, fonts, logo URLs, and metadata during the build; changing it requires a new build and deployment.

For a custom domain serving this site at the domain root:

1. Under **Settings → Secrets and variables → Actions → Variables**, create a repository variable named `PAGES_BASE_PATH` with the value `/`.
2. Configure the custom domain under **Settings → Pages** and set its DNS records with your domain provider using [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site). The workflow does not configure DNS or the domain for you.
3. Run the workflow on `master` again. Enable HTTPS in Pages settings when the certificate becomes available.

Leave `PAGES_BASE_PATH` unset for the default GitHub project URL. An explicit path such as `/preview` is also supported. To return to the GitHub project URL, remove the custom domain setting and path variable, then redeploy.

To preview a specific build path locally, set `NEXT_PUBLIC_BASE_PATH` before building. For example, in PowerShell:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/'
npm run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
npm start
```

To check the project-path export, build it with the same prefix that the preview server will use:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = '/landing-page'
npm run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
$env:STATIC_BASE_PATH = '/landing-page'
npm start -- --port 3001
Remove-Item Env:STATIC_BASE_PATH
```

Open http://127.0.0.1:3001/landing-page/. Stop the preview with Ctrl+C before clearing `STATIC_BASE_PATH`.

The normal `npm start` preview serves root-path builds when `STATIC_BASE_PATH` is unset.

### Troubleshooting

- **Site or assets return 404:** confirm the workflow deployed successfully, Pages uses **GitHub Actions**, and the build path matches the public URL. The default project URL includes `/landing-page/`; a custom domain at root needs `PAGES_BASE_PATH=/` and a fresh deployment.
- **Deployment fails with a permissions or environment error:** confirm Pages is enabled, repository policy allows GitHub Actions, and the `github-pages` environment allows deployments from `master`.
- **Local changes are missing:** run `npm run build` again before `npm start`, or use `npm run dev` while editing.
- **Port already in use:** stop the other local server or select a different preview port as shown above.
- **Need to roll back:** revert the relevant commit on `master`; the next successful workflow rebuilds and deploys that revision.

## Browser verification

The project includes Playwright CLI as a development dependency. With a local preview running, you can inspect desktop and mobile layouts without a global install:

```sh
npx --no-install playwright-cli install
npx --no-install playwright-cli -s=autally open http://127.0.0.1:3000
npx --no-install playwright-cli -s=autally resize 1440 1000
npx --no-install playwright-cli -s=autally snapshot
npx --no-install playwright-cli -s=autally screenshot --filename=desktop.png --full-page
npx --no-install playwright-cli -s=autally resize 390 844
npx --no-install playwright-cli -s=autally screenshot --filename=mobile.png --full-page
npx --no-install playwright-cli -s=autally close
```

Check the logo and favicon, watch the illustrative network packets, read the three benefits below the diagram, open the FAQs, and verify the contact and LinkedIn links. There is no animation switch or pause/resume button. Packets should stop offscreen, in a hidden tab, and when reduced motion is enabled. Test the contact form's required fields and inspect the prepared email draft without sending test messages. Deployment-path regression tests are available with `npm test`.

## Content and contact behavior

The supplied `autally-exchange-landing-page-codex.md` and `design.md` remain unchanged. The founder's subsequently approved content direction supersedes the original page structure: five sections focus on hotel invoices, business travel, and business buyers. Providers include hotels, PMS, POS, and receipt platforms. Compensation is an exploratory possibility; the broader commerce-data vision is retained. Illustrative transaction data is labeled as such; no live network or partner claims are made.

The header and hero **Explore a pilot** links scroll to the closing contact card. Its left side offers **Contact on LinkedIn**, opening the Autally company page in a new tab, plus a direct email alternative.

The right side contains name, email, company (optional), phone (optional), and message fields. **Prepare email** validates the fields and creates an encoded draft addressed to tomas@autally.com with the subject **Autally pilot enquiry**. **Open email draft** opens the visitor's email app; they must send the message there. **Copy message** provides an alternative for visitors using webmail. Editing a field clears the previous draft so stale details cannot be sent. Values stay in browser memory; the website does not submit them to a server or save them in storage. Without JavaScript, the form has a mailto fallback and a direct contact link.

GitHub Pages hosts static files and provides no contact-form backend. Direct in-page sending would require connecting a form service or a separate backend. No such service is configured, and the interface does not claim a message has been sent.

See [Contact form options](docs/contact-form-options.md) for the reference-repository findings, Zoho Forms versus Formspree, and the setup needed for direct submission.

The exchange diagram shows fictional example businesses (hotel, restaurants, supermarket and supplier) sending illustrative packets through Autally to financial applications. Paths are measured from the actual layout, including the stacked mobile layout. At most three packets animate at a time, with randomized routes and timings. The central Autally mark and application destinations retain their existing presentation.

No third-party analytics, cookie storage, or data collection is included. A successful local build does not confirm that a hosted deployment is live; check the GitHub workflow and public URL after launch.

## Design resources

See `docs/design-resources/README.md` for the installed Taste, Impeccable, Vercel, Awesome DESIGN.md reference, their sources and their application to Autally's brand.
