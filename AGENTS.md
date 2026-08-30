# AGENTS.md — Layer 0: Repository Identity & Routing

> This is the **first file any agent session reads.** It says what this repo is and where
> to go for a given task. Keep it short; detail lives in the routed files.

## What this repo is

**garmani** — the website for **Garmani**, a boutique two-person business that connects
clients to a curated network of service and goods providers across many industries
(farming, technology, legal, business, sports, entertainment). Its pitch is *access
without the middlemen*: personal introductions from a network the pair maintain by hand.

Next.js (App Router) with **JavaScript, not TypeScript** (`.jsx`, `jsconfig.json`),
Tailwind CSS, Headless UI, MDX for articles, Prettier. There is a `Dockerfile` and a
`compose.yaml` alongside the usual Vercel path.

> **`README.md` is the template's, not the project's.** This site is built on the
> commercial **Tailwind Plus "Spotlight"** template, and the README still describes
> Spotlight. Two consequences: the template is licensed commercial code, so keep its
> `LICENSE.md` intact and do not publish its source outside this repo; and the README is
> not a description of Garmani — this file is.

Some Spotlight demo assets are still in place — `src/images/logos/` ships Planetaria and
Starbucks logos, and `src/images/photos/` the stock photography. Treat any of it as
placeholder until replaced with Garmani's own.

## Routing — "if the task is… → go to…"

| The task | Go to |
|---|---|
| Home page and its pitch copy | [`src/app/page.jsx`](src/app/page.jsx) |
| Site metadata and global chrome | [`src/app/layout.jsx`](src/app/layout.jsx) — title template and description |
| The other pages | [`src/app/about/`](src/app/about/) · [`src/app/uses/`](src/app/uses/) (the "how we work" process) · [`src/app/projects/`](src/app/projects/) · [`src/app/thank-you/`](src/app/thank-you/) |
| Articles (MDX) and the feed | [`src/app/articles/`](src/app/articles/) · [`src/app/feed.xml/`](src/app/feed.xml/) · `src/lib/articles` |
| Images — logos, photography, avatars | [`src/images/`](src/images/) — check whether an asset is still Spotlight's demo content |
| Typography and theme | `typography.js` · `postcss.config.js` · Tailwind config |
| MDX rendering | [`mdx-components.jsx`](mdx-components.jsx) |
| Container/deploy config | `Dockerfile` · `compose.yaml` |
| Plan or track work on this repo | [`.icm/intake/`](.icm/intake/) — epics and stubs, contract in its README |

## Standing rules

- **This is JavaScript, not TypeScript.** Match what is there; do not introduce `.ts`/`.tsx`
  or type annotations without a decision from Jamie.
- **Never invent a business fact.** Garmani's claims about its network, its people and what
  it can arrange come from the client. Vague is safer than specific-and-wrong.
- **Spotlight is licensed commercial code.** Keep `LICENSE.md`; do not lift its source into
  another repo or publish it.
- **CI is the source of truth.** Never run `build`/`lint`/`typecheck` locally — push and
  read the Vercel deployment check.
- **Planning is tickets.** Any plan or backlog becomes stubs in `.icm/intake/`, never a
  loose `TODO.md`. Ticket-only commits go straight to `main`; everything else through a PR
  on a `claude/` branch.
- **Gates are human checkboxes** — read them, never tick them.
- **No secrets in git, ever.** Env vars only; flag any plaintext credential found. The
  tracked `.env` holds `NEXT_PUBLIC_SITE_URL` only — keep it that way.
