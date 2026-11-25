# Architecture

Document de référence technique. Conventions de travail : voir [`AGENTS.md`](../AGENTS.md).

**Lecture du document** : sauf mention contraire, il décrit des **faits observés dans le code**. Les points marqués *(à confirmer)* sont des intentions architecturales que le code ne permet pas d'établir avec certitude ; ceux marqués *(recommandation)* sont des pistes, pas des pratiques existantes. Il évite volontairement les chiffres qui deviennent vite faux (nombre de fichiers, etc.).

## 1. Vue d'ensemble

Application Next.js 16 (App Router) en JavaScript, déployée sur Vercel. Deux parties :

- **Site public** : majoritairement statique, contenu écrit dans le code (`src/data`) et en Markdown.
- **Backend léger** : Server Actions + Prisma/PostgreSQL pour les réservations et l'administration ; un module CRM de prospection est en cours de développement (voir §6). Emails via l'API Brevo.

Pas de TypeScript, pas de tests automatisés, pas de `middleware`/`proxy` : la protection admin se fait côté serveur (voir §6).

## 2. Arborescence

```txt
src/
  app/            Routes (page.js fins), layouts, metadata, sitemap, robots, globals.css
  screens/        Assemblage des sections d'une page
  components/     Sections et composants, groupés par domaine
    UI/ layout/ patterns/ form/ navigation/ animations/   → briques réutilisables
    home/ services/ about/ howIWork/ pricing/ portfolio/ blog/ contact/
    reservations/ legal/ login/ analytics/ crm/   → domaines
  data/           Contenu statique (articles, faqs, projectsData, technologies)
  server/         guards/ repositories/ services/   (code serveur uniquement)
  lib/            prisma, auth (session), blog (lecture Markdown), analytics, motion (constantes d'animation)
  hooks/          useToggle
  utils/          formatDate, readingTime
  generated/prisma/   Client Prisma généré (ne pas éditer)
prisma/           schema.prisma + migrations ; prisma7.config.ts à la racine
public/           assets (images, logos), content/blog/*.md, og-image.jpg
```

Alias : `@/*` → `src/*` (`jsconfig.json`).

## 3. Routing et layouts

- `app/layout.js` : layout racine. `lang="fr"`, 4 polices Google (Inter, Poppins, Space Grotesk, JetBrains Mono, exposées en variables CSS), JSON-LD `ProfessionalService`, `SiteLayout`, `GoogleAnalytics`.
- `components/layout/SiteLayout.jsx` (client) : Header + `<main>` + Footer. Le padding horizontal et le `pt` de `main` diffèrent entre l'accueil (plein écran, sections pleine largeur) et les autres pages.
- `HeaderWrapper` (client) : sur l'accueil, le header n'apparaît qu'après la section `#landing` ; ailleurs il est toujours visible.
- `app/admin/layout.js` : layout dédié admin (`requireAdmin()` + navigation), `force-dynamic`. Fait observé : il est rendu à l'intérieur du `SiteLayout` racine (header et footer publics inclus) *(à confirmer : intention)*.

Routes publiques : `/`, `/services`, `/services/creation-site-internet`, `/services/creation-site-internet-fonctionnalites-sur-mesure`, `/services/suivi-et-evolutions`, `/realisations` et `/realisations/[slug]`, `/tarifs`, `/a-propos`, `/comment-je-travaille`, `/blog` et `/blog/[slug]`, `/contact`, `/merci`, `/reservations`, `/reservations/merci`, `/mentions-legales`.
Route d'authentification (publique, accessible sans session) : `/login`.
Routes d'administration (protégées par `requireAdmin()`) : `/admin` (redirige vers `/admin/reservations`), `/admin/reservations`, `/admin/slots`, et les routes du module CRM en développement sous `/admin/crm/`.

### Pattern page → screen → sections

```txt
app/services/suivi-et-evolutions/page.js   metadata + <MaintenanceScreen />
screens/services/MaintenanceScreen.jsx      Hero, Benefits, Services, …, FaqSection, CtaFinal
components/services/maintenance/*.jsx       sections propres à la page
```

Les `page.js` n'ont pas de logique d'affichage ; les screens n'ont pas de style propre. Les pages avec données dynamiques (`/realisations/[slug]`, `/blog/[slug]`) utilisent `generateStaticParams` et `generateMetadata`.

## 4. Composants structurants

| Composant | Rôle |
| --- | --- |
| `layout/Section` | `<section>` avec padding vertical responsive, `id`, `aria-labelledby`, `bgColor` optionnel |
| `layout/SectionWrapper` | Conteneur `max-w-7xl` + padding horizontal `px-4 sm:px-8 lg:px-12` ; option `spacing` |
| `layout/SectionHeading` | Eyebrow + `SectionTitle` (h2) + description, alignement `left`/`center` |
| `layout/PageHero` | Hero standard de page : eyebrow, `h1`, description, 2 CTA, enfants (mockup), légende. Animé (`motion`) |
| `home/HomeSectionWrapper` | Section d'accueil complète (Section + Wrapper + Heading + lien CTA) |
| `UI/Button` | Variantes `primary` / `secondary` / `text`, tailles `default` / `sm` ; rend `Link`, `<a>` ou `<button>` selon `href` |
| `UI/PageTitle`, `UI/SectionTitle` | `h1` / `h2` typographiés |
| `patterns/FaqSection` | FAQ en accordéon animé ; injecte du JSON-LD FAQ (prop `jsonLd`) ; alimenté par `data/faqs.js` |
| `patterns/CtaFinal` | Appel à l'action final (`title`, `tagline`, `primary`) |
| `form/FloatingInput`, `FloatingTextarea` | Champs à label flottant |
| `portfolio/ProjectCard`, `PortfolioGrid`, `projectDetail/*` | Liste et détail des réalisations, alimentés par `data/projectsData.js` |
| `blog/*` | Liste, carte, en-tête et contenu d'article (`react-markdown` + typography) |
| `analytics/*` | Chargement GA4 + suivi de navigation |

**Mécanismes de réutilisation** : composition par props (`children`, `primaryAction`, `link`), contenu séparé de la présentation (`src/data`), sections par domaine. Les sections de pages de services suivent un schéma répété (`Hero`, `Intro`, `Benefits`, …, `Mockup`) sans composant générique commun : la duplication existe entre domaines.

## 5. Server vs Client Components

- Par défaut : Server Components (pages, screens, la plupart des sections statiques).
- Client (`"use client"`) : `SiteLayout`, `Header`, `HeaderWrapper`, tout ce qui utilise `motion`, `useState`/`useEffect`, `usePathname`, formulaires interactifs, `AnalyticsTracker`.
- Conséquence à connaître : `SiteLayout` est client, donc toutes les pages sont rendues dans un layout client (les `children` restent des Server Components).
- Mutations : Server Actions (`actions.js`) appelées via `<form action={…}>`. Les erreurs remontent par redirection avec `?error=…` plutôt que par état client (contact, réservations, login).

## 6. Données, base, authentification

**Base** (`prisma/schema.prisma`, PostgreSQL) : `ReservationSlot` (`startAt`, `endAt`, `status` : `AVAILABLE` / `BOOKED` / `DISABLED`) et `Reservation` (1-1 avec un créneau : nom, email, message, IP). Une seule migration (`init_reservations`). Client Prisma instancié dans `lib/prisma.js` (adapter `pg`, singleton en dev).

**Couches serveur** : `repositories/*.repo.js` (requêtes Prisma, transaction de réservation) → `services/*.service.js` (règles métier : rate-limit d'1 réservation récente par IP, gestion des erreurs) → Server Actions / pages.

**Emails** : `services/contact.mail.js` et `reservations.mail.js` appellent Brevo ; absence de clé ⇒ avertissement et pas d'envoi. L'échec d'email n'annule pas une réservation.

**Authentification admin** (`lib/auth.js`, `server/guards/requireAdmin.js`, `app/login/actions.js`) :

- Un seul administrateur, défini par variables d'environnement (email + hash bcrypt en base64). Pas de table utilisateurs.
- Session = JWT HS256 (`jose`, 7 jours) dans un cookie `admin_session` `httpOnly`, `sameSite=lax`, `secure` en production.
- Contrôle d'accès : `requireAdmin()` dans `admin/layout.js` **et** dans les Server Actions admin. Le layout ne protège pas à lui seul les actions, d'où la double vérification.
- Le contrôle d'accès (qui peut voir une page) est indépendant de l'indexation (ce que les moteurs de recherche peuvent référencer) : voir §9.

**Contenu statique** : projets, articles (métadonnées), FAQ, technologies dans `src/data` ; corps d'article dans `public/content/blog/<slug>.md`, lu côté serveur par `lib/blog.js`.

### CRM (module en cours de développement)

Un module de prospection (gestion d'entreprises) est en cours de développement : routes sous `src/app/admin/crm/`, composants dans `src/components/crm/`, écran dans `src/screens/admin/`. Son état est volontairement incomplet ; il n'est pas considéré comme stable ni documenté plus en détail tant qu'il évolue.

## 7. Design system

Les tokens sont définis dans `src/app/globals.css` via `@theme static` (Tailwind 4). Ils génèrent des utilitaires (`bg-accent`, `border-line`, `from-blue`…) et des variables CSS (`var(--color-accent)`), utilisables dans les modules CSS et les valeurs arbitraires.

| Famille | Tokens |
| --- | --- |
| Marque | `accent` (#5AC8FA), `accent-strong`, `accent-soft`, `blue` (#007AFF), `blue-light`, `violet` (#9B59B6), `violet-light`, `violet-mid`, `indigo`, `pink` |
| Surfaces | `surface-deep` (#1C1C1C), `surface-admin`, `surface-alt`, `canvas` (#222222, fond du site), `surface` (#252525), `surface-soft`, `surface-raised` (#2A2A2A) |
| Bordures | `line-faint`, `line-subtle`, `line` (#333), `line-strong`, `line-hover` |

- Thème sombre uniquement. `--background` = `canvas`.
- Typographie : Space Grotesk (`font-heading`), Poppins (`font-name`), JetBrains Mono (`font-code`), Inter chargée ; `body` en `system-ui`.
- Rythme et largeurs : `Section` (`py-8 sm:py-10 md:py-12 lg:py-16`) + `SectionWrapper` (`max-w-7xl`, `px-4 sm:px-8 lg:px-12`) ; description `max-w-2xl`, hero centré `max-w-4xl`.
- Alignement : titres de section `left` par défaut, `center` possible ; grilles asymétriques en `lg` (ex. FAQ `lg:grid-cols-[0.8fr_1.2fr]`).
- CSS dédié : `home/LandingSection.module.css` (effets néon du hero), qui utilise les tokens.

**Couleurs dans les données et styles inline** : les tableaux de données utilisent `color: "var(--color-blue)"` (etc.). Pour appliquer une opacité, utiliser `alpha(color, "18")` de `src/utils/color.js` (génère un `color-mix(in srgb, …)`), jamais `${color}18`. Les `bgColor` de `Section` acceptent un nom de token (`bgColor="canvas"`).

**Reste en dur (volontairement)** : `HeroBookingAnimation` (couleurs hexadécimales animées par `motion`, qui n'interpole pas `var()`), quelques gris isolés (`#414141`, `#353535`, `#343434`, `#1D1D1D`, `#163B70`…), `#0E0E0E`, `#ECECEC` et `#FFFFFF` dans le CSS du hero, et les ombres `rgba(90,200,250,…)`.

## 8. Animations

- Bibliothèque : `motion`, importée uniquement via `motion/react`. La dépendance directe `framer-motion` a été retirée ; `motion` embarque sa propre copie en dépendance interne, qui n'est pas à importer directement.
- **Système commun** (pages publiques, hors Réservations et mentions légales) :
  - `src/lib/motion.js` : constantes de référence (easing `[0.22, 1, 0.36, 1]`, durées 0,3 / 0,65 / 0,8 s, distances 16 / 24 / 40 px, viewport `once` + `amount` 0,2, `STAGGER` 0,08 s plafonné à 0,5 s au total, durée réduite 0,2 s). Sans `"use client"`.
  - `src/components/animations/Reveal.jsx` : `Reveal` (apparition d'un élément), `useRevealGate`, `useGatedInView` (animations spécifiques).
  - `src/components/animations/RevealGroup.jsx` : `RevealGroup` + `RevealItem` (apparition échelonnée d'un ensemble).
  - `SiteLayout` enveloppe le site dans `MotionConfig reducedMotion="user"`.
  - `SectionHeading` et `HomeSectionWrapper` ont une prop `reveal` (désactivée par défaut). `Section` et `SectionWrapper` restent purement structurels.
- **Visibilité sans JS (« gate »)** : rendu serveur et premier rendu visibles ; après montage, seuls les éléments sous le pli sont masqués (instantanément) puis révélés au défilement. Un élément visible au chargement n'est jamais animé (LCP, contenu lisible sans JS).
- **Règle de choix** : `RevealGroup` pour un ensemble qui tient dans l'écran ; un `Reveal` par élément avec `delay={(index % colonnes) * STAGGER}` pour les grilles plus hautes que l'écran sur mobile.
- Accessibilité : `reducedMotion="user"` supprime les déplacements ; `Reveal` ne garde qu'un fondu court. `useReducedMotion()` reste utilisé localement quand c'est nécessaire (`PageHero`, `FaqSection`).
- **Hors système commun (volontairement conservés)** : `PageHero` (`variants` + `staggerChildren` 0,12 s), `LandingSection`, `FaqSection`, `CtaFinal`, `HeroBookingAnimation`, `ServicesMethod` (étapes pilotées par le défilement). Animations spécifiques des mockups de services via `useGatedInView`.
- **Limites connues** : `PageHero`, FAQ, `CtaFinal` et mockups du hero restent masqués (`opacity: 0`) avant hydratation et sans JS ; `ServicesMethod` et les panneaux d'accordéon repliés aussi ; animation de `box-shadow` (`ProjectCard`, `CtaFinal`) à optimiser ; `LazyMotion` non évalué. Le moteur `motion` est dupliqué entre groupes de routes dans les chunks (≈150 Ko gzip chacun, une seule copie chargée par page).
- Non animés : formulaire de contact, page article du blog, image principale du détail d'une réalisation (LCP).
- Transitions de survol : classes Tailwind (`transition`, `duration-300`), pas de `motion`.

## 9. SEO et accessibilité

- Metadata : défaut + template de titre (`%s | Julien Lisita`) dans `app/metadata.js` ; `title`, `description` et `alternates.canonical` dans chaque `page.js` ; Open Graph sur les articles.
- JSON-LD : `ProfessionalService` (layout racine) ; FAQ via `FaqSection`.
- `sitemap.js` : liste manuelle des pages + projets et articles générés depuis `src/data` (**toute nouvelle page statique doit y être ajoutée**) ; `lastModified` = date du jour pour les pages hors articles. `robots.js` autorise tout, y compris `/admin`.
- **Accès et indexation sont deux mécanismes distincts** : l'accès aux pages admin est contrôlé par la session (§6) ; l'indexation dépend de `robots.js` et de la balise `robots` des pages. Au moment de l'analyse, `noindex` est posé sur `login`, `merci` et la page CRM, mais pas systématiquement sur les autres pages admin. Une page protégée par session ne sera pas lisible par un robot, mais son URL peut quand même être explorée/listée *(recommandation : `noindex` systématique et `Disallow` sur `/admin`)*.
- Accessibilité : `Section` + `aria-labelledby`, hiérarchie h1/h2, éléments décoratifs `aria-hidden`, focus visibles sur les CTA du `PageHero`, blocage du scroll du menu mobile, `data-scroll-behavior="smooth"`.

## 10. Analytics

GA4 chargé via `next/script` si `NEXT_PUBLIC_GA_ID` est défini et `NEXT_PUBLIC_ENABLE_ANALYTICS === "true"`. `send_page_view: false` ; `AnalyticsTracker` (sous `Suspense`) envoie `page_view` à chaque changement de route. Aucun bandeau de consentement n'a été trouvé dans le code.

## 11. Configuration et déploiement

- `next.config.mjs` vide (aucune option). ESLint : `eslint-config-next/core-web-vitals`. PostCSS : `@tailwindcss/postcss`.
- Prisma : `prisma7.config.ts` (schéma, dossier de migrations, `DATABASE_URL`) ; client généré dans `src/generated/prisma` (ignoré par git, régénéré par `postinstall`).
- Déploiement : Vercel (indiqué par l'ancien README ; non vérifiable dans le dépôt, qui ne contient ni config Vercel ni CI).
- `skills-lock.json` : verrouille des skills d'assistants IA liées à Prisma.

## 12. Intentions à confirmer

1. Layout admin rendu dans le `SiteLayout` public : volontaire ?
2. `DATABASE_URL_PROD`, `SHADOW_DATABASE_URL` et `CONTACT_FROM_EMAIL` figurent dans le `.env` local mais ne sont pas lues par le code : usage prévu ?
3. Politique d'indexation de `/admin` et `/login` (voir §9).
4. Procédure de migration Prisma en production (aucun script ni CI dans le dépôt).
5. Gris isolés non tokenisés (voir §7) : à tokeniser ou à laisser.
