# Satish Kumar N — Portfolio

A Next.js App Router portfolio built with TypeScript, Tailwind CSS, Motion and Lucide React. Content is kept editable in a central data file and unverified details are marked rather than assumed.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify and deploy

```bash
npm run lint
npm run build
```

Deploy through Vercel by importing the repository. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain so canonical metadata, the sitemap and robots file use the production URL.

## Contact delivery

The contact form validates on the server and includes a honeypot field. To enable email delivery, set these Vercel environment variables:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

Without all three values, the endpoint clearly reports that no message was sent. Keep secrets server-side; do not prefix them with `NEXT_PUBLIC_`.

## Update portfolio content

Edit `src/data/portfolio.ts` for the profile, experience, education, skills, analytics projects, websites, karate medals, timeline and training details.

- Add a genuine portrait under `public/images/profile/` and replace the CSS placeholder only when the image and alt text are ready.
- Add genuine karate, university and certificate images under `public/images/karate/`, `public/images/education/` and `public/images/certificates/`.
- Add approved project screenshots under `public/images/projects/`; until then, branded CSS previews are used.
- Add a CV under `public/documents/` and set `profile.cvPath` in the data file.
- Add verified email, LinkedIn and GitHub URLs to `profile` to enable those contact links.
- Replace the BCA placeholders, record titles and verification details only when confirmed.
- Keep the portion-weight exercise marked as proposed until it is completed and approved for public sharing.
- Never publish sensitive certificate numbers, DBS details, insurance policy numbers, employee information or confidential employer data.

## Routes

- `/` — portfolio story and sections
- `/projects` — case studies and selected web work
- `/karate` — competition, coaching and recognition
- `/contact` — server-validated contact form
- `/sitemap.xml` and `/robots.txt` — generated SEO endpoints
# satish-kumar-nagaraj-portfolio
# Portfolio
# Portfolio
# portfolio
# portfolio
