# Portfolio — Julien Lisita

Site portfolio de développeur web freelance (Bordeaux) : présentation des services, réalisations, tarifs, blog, prise de contact et réservation d'un échange. Il s'adresse aux indépendants, artisans et petites entreprises.

Production : https://www.julienlisita.com

## Fonctionnalités

**Public**

- Accueil, services (création de site, fonctionnalités sur mesure, suivi et évolutions), réalisations (liste + détail), tarifs, à propos, « comment je travaille », blog, mentions légales.
- Formulaire de contact (envoi d'un email via Brevo).
- Réservation d'un créneau d'échange (`/reservations`) avec emails de confirmation.
- SEO : metadata par page, JSON-LD `ProfessionalService`, `sitemap.xml`, `robots.txt`, Open Graph.
- Analytics GA4 optionnel (désactivé tant que les variables ne sont pas définies).

**Administration** (protégée par session, `/login` puis `/admin`)

- Gestion des réservations et des créneaux.
- Module CRM de prospection — **en cours de développement**.

## Stack

| Domaine | Technologie |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Langage | JavaScript (JS / JSX, pas de TypeScript) |
| Styles | Tailwind CSS 4 (`@tailwindcss/postcss`, plugin typography) |
| Animations | `motion` (import `motion/react`) |
| Icônes | `lucide-react`, `react-icons` |
| Base de données | PostgreSQL via Prisma 7 (`@prisma/adapter-pg`) |
| Auth admin | `jose` (JWT en cookie), `bcryptjs` |
| Validation | `zod` |
| Blog | Markdown (`front-matter`, `react-markdown`) |
| Emails | API Brevo (appel HTTP direct) |
| Déploiement | Vercel |

## Prérequis

- Node.js 24 (voir `.nvmrc`)
- npm
- Une base PostgreSQL (uniquement pour les réservations et l'administration)

## Installation

```bash
npm ci             # installation reproductible depuis package-lock.json (exécute aussi `prisma generate`)
cp .env.example .env   # puis renseigner les valeurs localement
npx prisma migrate dev # applique les migrations sur la base locale
npm run dev
```

`npm install` reste adapté pour ajouter ou mettre à jour une dépendance.

Le site est servi sur http://localhost:3000. Les pages publiques purement statiques fonctionnent sans base de données.

## Variables d'environnement

Les noms sont listés dans `.env.example` (versionné, sans valeurs). Renseigner les valeurs dans `.env` / `.env.local` (ignorés par git). Ne jamais committer de valeurs réelles.

| Variable | Rôle |
| --- | --- |
| `DATABASE_URL` | Connexion PostgreSQL (runtime et CLI Prisma) |
| `SHADOW_DATABASE_URL` | Base shadow pour `prisma migrate dev` (non référencée par `prisma7.config.ts` ni par le code) |
| `DATABASE_URL_PROD` | Facultative. Présente dans `.env` local, **non lue par le code** ni par la config Prisma ; sert vraisemblablement de mémo pour cibler la base de production (à confirmer). Absente de `.env.example` |
| `ADMIN_EMAIL` | Email de connexion admin |
| `ADMIN_PASSWORD_HASH_BASE64` | Hash bcrypt du mot de passe admin, encodé en base64 |
| `SESSION_SECRET` | Secret de signature du JWT de session admin |
| `BREVO_API_KEY` | Clé API Brevo pour l'envoi d'emails |
| `CONTACT_TO_EMAIL` | Destinataire des notifications de contact |
| `CONTACT_FROM_EMAIL` | Présente dans `.env` local, non lue par le code (l'expéditeur est fixé dans les services d'envoi). Absente de `.env.example` |
| `NEXT_PUBLIC_GA_ID` | Identifiant GA4 |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | `"true"` pour activer GA4 |

## Commandes

| Commande | Action |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run start` | Serveur de production |
| `npm run lint` | ESLint (`eslint-config-next/core-web-vitals`) |
| `npx prisma migrate dev` | Créer / appliquer une migration en local |
| `npx prisma generate` | Régénérer le client (sortie : `src/generated/prisma`) |

Il n'existe pas de script de test.

## Déploiement

Hébergement sur Vercel. Les variables d'environnement ci-dessus doivent y être configurées ; `postinstall` génère le client Prisma au build. Les migrations de production ne sont pas automatisées par un script du dépôt (procédure à confirmer).

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — architecture, design system, animations.
- [`AGENTS.md`](AGENTS.md) — conventions pour les assistants IA (point d'entrée Claude Code : [`CLAUDE.md`](CLAUDE.md)).
