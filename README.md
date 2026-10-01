# MYB LIMITED Website

Professional static website for **MYB LIMITED**, an information technology consultancy registered in England and Wales.

## Live site

- URL: https://moha66riu.github.io/myb-limited/
- Hosting: GitHub Pages
- HTTPS: Enabled by the hosting platform

## Project structure

- `index.html` — homepage
- `services.html` — consultancy services
- `about.html` — company overview and registered details
- `contact.html` — email-based enquiry form
- `privacy.html` — website privacy policy
- `terms.html` — website terms
- `404.html` — custom not-found page
- `assets/styles.css` — responsive visual design
- `assets/site.js` — mobile navigation, current year, and email form behaviour
- `assets/logo.svg` — original MYB LIMITED logo
- `assets/favicon.svg` — browser icon
- `assets/og-image.svg` — social sharing image
- `_headers` — optional security-header configuration for compatible hosts
- `robots.txt` and `sitemap.xml` — search engine discovery files

## Editing company text

Open the relevant `.html` file in a text editor, make the change, and save it. Shared company details appear in the footer of every page, so legal-name, company-number, activity, or email changes should be updated across all HTML files. The public email also appears in `assets/site.js`.

## Deploying updates

Commit changes to the `main` branch of the `moha66riu/myb-limited` GitHub repository. GitHub Pages publishes that branch automatically once configured in the repository settings:

```text
git add .
git commit -m "Update website"
git push origin main
```

After deployment, verify all navigation links, the contact form, page titles, favicon, and the HTTPS certificate on the live URL.

## Contact form

The contact form does not send information to a database. It opens the visitor's default email application with an enquiry addressed to `abedalrah99@gmail.com`. This avoids collecting form submissions on the website and ensures there is no broken server-side form endpoint.
