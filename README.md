**ShipWise AI**

ShipWise AI is a starter full-stack Next.js app (App Router, TypeScript) for managing feature tickets, bug triage, daily updates, and AI-assisted suggestions.

**Quick Links**
- **Project root:** [package.json](package.json)
- **App routes:** [app/page.tsx](app/page.tsx)
- **Prisma schema:** [prisma/schema.prisma](prisma/schema.prisma)
- **Prisma client wrapper:** [lib/prisma.ts](lib/prisma.ts)

**Stack**
- Next.js (App Router) + TypeScript
- React Hook Form + Zod for forms & validation
- Prisma (PostgreSQL-ready schema)
- Recharts for data visualization
- Vitest for unit tests

**Getting started (local)**

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables and edit as needed:

```bash
cp .env.example .env
# Edit .env to set DATABASE_URL and NEXTAUTH_SECRET if using auth
```

3. (Optional) Generate Prisma client and push schema to your database:

```bash
npx prisma generate
npx prisma db push   # or run migrations if you prefer
```

4. Run the dev server:

```bash
npm run dev
```

5. Run tests:

```bash
npm run test
```

**Backend / API status**
- The project includes server-side REST API route handlers under `app/api` (e.g. tickets, bugs, daily-updates).
- A Prisma schema is included at [prisma/schema.prisma](prisma/schema.prisma). `lib/prisma.ts` provides a runtime-safe wrapper that falls back to a stub if the generated client isn't present — this lets the app build without a configured database for demos.
- To enable full backend functionality you must set `DATABASE_URL` in `.env`, run `npx prisma generate`, and push/migrate the schema.

**Deployment**
- Recommended: Vercel for seamless Next.js deployments. Connect the Git repository and set environment variables in the Vercel dashboard.
- Other hosting: Railway, Render, Fly, Heroku — ensure Node 24+ and the database are available and that Prisma client generation runs during your build.

**Vercel deployment checklist**
1. Link this repository to Vercel.
2. Set the following environment variables in the Vercel project settings:
   - `DATABASE_URL` — PostgreSQL database connection string
   - `NEXTAUTH_SECRET` — a secure random string for auth/session encryption
   - `NODE_ENV=production` (optional; Vercel will set this automatically during build)
3. Confirm the build command is `npm run build`.
4. Confirm the install command is `npm install`.
5. Confirm the output directory is left empty (Next.js App Router uses the default output handling).
6. Verify Prisma client generation by ensuring `postinstall` is present in `package.json`.
7. Deploy and monitor build logs for `prisma generate` and database connection initialization.

Example Vercel build step:

```bash
# Vercel will run `npm install` during build, and this project includes a postinstall hook to generate Prisma client types.
```

**Screenshots / Diff images**
- Add screenshots into `public/screenshots/`.
- A placeholder is already included at `public/screenshots/.gitkeep` if you want to keep the folder in Git.
- Example files:

```
public/screenshots/diff-1.png
public/screenshots/diff-2.png
```

Insert screenshots in this README where you'd like them to appear. Example markdown:

```markdown
![Diff tab example](/screenshots/diff-1.png)
```

**Scripts**
- **dev:** `npm run dev` — starts Next.js in development
- **build:** `npm run build` — production build
- **start:** `npm start` — run production server
- **test:** `npm run test` — runs Vitest

**Testing**
- Unit tests are in `test/` and use Vitest. Example: `npm run test`.

**Next steps / Notes**
- If you want, I can:
	- Add a `public/screenshots` folder and place example placeholders.
	- Add a `postinstall` script to run `npx prisma generate` during installs.
	- Prepare a Vercel deployment config with environment variable recommendations.
- Currently the repository contains the backend scaffolding (API routes + Prisma schema), but the database is not configured by default — run the Prisma commands above to enable it.

**License**
- See the repository `LICENSE` file.

---

If you want, I can commit a `public/screenshots/.gitkeep` placeholder and add the `postinstall` script now. What would you like me to do next?
