# Contact form delivery options

Reviewed 23 September 2026. No form service has been connected and no test messages were sent.

## What the reference repository actually does

Reviewed `Startup-Klubik/new-landing-page`, default branch `develop`, tree revision `532e45675d09b22ded19d8895592971ec2fa9686`.

- [Main contact form](https://github.com/Startup-Klubik/new-landing-page/blob/532e45675d09b22ded19d8895592971ec2fa9686/index.html): plain form without a submission endpoint. Its fields have IDs but no submission names.
- [Main-page JavaScript](https://github.com/Startup-Klubik/new-landing-page/blob/532e45675d09b22ded19d8895592971ec2fa9686/js/dokero.js) and [shared JavaScript](https://github.com/Startup-Klubik/new-landing-page/blob/532e45675d09b22ded19d8895592971ec2fa9686/js/shared.js): navigation and visual behavior, no contact delivery.
- [Specy form handlers](https://github.com/Startup-Klubik/new-landing-page/blob/532e45675d09b22ded19d8895592971ec2fa9686/js/specy.js): prevent normal submission, change the button to a success label and reset the form after three seconds. They make no request to an email or form service.

The layout is a reference, but its apparent submission success is a simulation. There is no delivery integration to reuse.

## Options for Autally

| Option | Fit | Trade-off |
| --- | --- | --- |
| Zoho Forms | Collect submissions and notify tomas@autally.com within the Zoho ecosystem; no website server needed. | Hosted embedding is the straightforward route. The form styling is managed in Zoho and plan-dependent. |
| Formspree | Keep the current React form, including its appearance, and send submissions to the existing Zoho inbox. | Another service processes submissions; it needs its own form endpoint and recipient configuration. |
| Zoho Mail SMTP through a backend | Full control over the submission handler and delivery. | Requires a separately hosted server/function, credentials, validation and spam handling. More maintenance than this landing page needs. |

Recommendation: start with **Zoho Forms** if keeping enquiry management in Zoho is the priority. Use its hosted embed, themed to Autally, with notifications to tomas@autally.com. If retaining the current custom form exactly is more important, **Formspree** is the simpler integration.

Zoho Forms currently lists a free tier of 3 forms and 500 submissions per month. Formspree lists 50 monthly submissions on its free tier. Check account entitlements and current limits before connecting; using Zoho Mail does not establish which Zoho Forms plan is enabled.

Zoho's downloadable HTML/CSS option allows custom styling, but its documentation excludes CAPTCHA/reCAPTCHA validation and limits website redirects to paid plans. It should not be treated as interchangeable with a hosted embed.

## Zoho Forms setup

1. Sign into Zoho Forms with the intended Autally account. Create **Autally pilot enquiry**.
2. Add Name, Email and Message as required fields; Company and Phone as optional fields.
3. Configure **Settings → Email & Notifications → Email → New Record** to notify **tomas@autally.com** and include all submitted fields. Configure the visitor's email as Reply-To where the chosen sender configuration allows it.
4. Set an honest confirmation such as “Thanks. Your enquiry has been received.” Enable the available spam protection for the hosted form.
5. Style the form with Autally's navy, mint and fonts where supported; use the existing right-hand contact area for the embed.
6. Obtain the published embed code from **Share → Embed**. That code/public form URL is the remaining input needed to connect the site. No Zoho password or SMTP secret belongs in the frontend or in chat.
7. After integration, test a real submission, verify the saved entry and inbox delivery, then trigger the normal GitHub Pages deployment.

## Formspree alternative

Create a form with **tomas@autally.com** as its verified recipient and supply its `https://formspree.io/f/...` endpoint. The existing fields can submit there. Add pending, success and error states; keep entered text on errors, handle rate limits and spam checks, and show success only after the service accepts the request. This works independently of who hosts the receiving mailbox.

## Sources

- [Zoho Forms pricing](https://www.zoho.com/forms/pricing.html)
- [Zoho Forms email notifications](https://help.zoho.com/portal/en/kb/forms/form-settings/notifications/email-notifications/articles/email-notifications-overview)
- [Zoho Forms HTML/CSS embedding and limitations](https://help.zoho.com/portal/en/kb/forms/embedding-forms/embedding-forms-in-webpages/articles/embed-a-form-using-html-css-codes)
- [Zoho Mail SMTP configuration](https://www.zoho.com/mail/help/zoho-smtp.html)
- [Formspree HTML form integration](https://formspree.io/html/)
- [Formspree pricing](https://formspree.io/plans/)
