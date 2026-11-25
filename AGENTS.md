<!-- BEGIN:nextjs-agent-rules -->
This project follows strict conventions:

- Use Tailwind for layout, responsive design and standard visual styles, always through the design tokens defined in globals.css (no hardcoded hex values)
- Use CSS modules only for specific styles or effects that Tailwind utilities do not express cleanly
- Do not add backend, auth, or database unless explicitly requested
- Use existing components when possible; keep the page → screen → sections composition
- Keep pages simple and SEO-focused
<!-- END:nextjs-agent-rules -->

# Instructions pour les assistants IA

Portfolio d'un développeur web freelance : Next.js 16 (App Router), React 19, JavaScript, Tailwind 4, Prisma/PostgreSQL. Contenu en **français**. Détails et état des lieux : [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

En cas de doute sur une API Next.js / React, vérifier la documentation de la version installée plutôt que de se fier à sa mémoire.

## Règles impératives

- Respecter le bloc de règles ci-dessus.
- Pas de backend, d'auth ou de base de données supplémentaires sans demande explicite.
- Ne pas installer ni modifier de dépendance sans demande.
- Pas de refactoring non demandé : limiter chaque intervention à son objet.
- Ne jamais lire, afficher ou committer `.env` / `.env.local`. Citer uniquement les noms de variables (référence : `.env.example`).
- Ne pas éditer `src/generated/prisma/` (généré).
- Le module CRM (`src/app/admin/crm`, `src/components/crm`, `src/screens/admin`) est en cours de développement par le propriétaire : n'y intervenir que sur demande explicite.
- Aucun commit ni push sans demande explicite.

## Composition et responsabilités

Pattern à préserver : **page → screen → sections**.

| Couche | Responsabilité | À ne pas y mettre |
| --- | --- | --- |
| `app/**/page.js` | Route, `metadata`, rendu d'un screen | Logique d'affichage, styles |
| `screens/` | Assemblage ordonné des sections d'une page | Style propre, markup détaillé |
| `components/<domaine>/` | Sections propres à une page ou un domaine | Accès aux données, logique serveur |
| `components/UI`, `layout`, `patterns`, `form` | Briques partagées | Contenu propre à une page |
| `data/` | Contenu statique (textes, FAQ, projets) | Composants, JSX |
| `server/` (guards, repositories, services) | Accès base, règles métier, emails | Code importé par un Client Component |

Principes :

- **Réutiliser avant de créer** : chercher d'abord dans `UI/`, `layout/`, `patterns/`, `form/` et dans les sections voisines.
- Composer par props (`children`, `primaryAction`, `link`, `align`…) plutôt que dupliquer un composant ; créer une variante ou une prop quand le besoin se répète.
- Séparer contenu (`data/`), structure (sections) et présentation (tokens + classes).
- Un composant = une responsabilité. Ne pas y mélanger fetch de données, logique métier et mise en forme.
- **Composant partagé** (`UI`, `layout`, `patterns`, `form`, header/footer…) : avant modification, rechercher ses usages (`grep`) et évaluer l'effet sur chaque page qui l'emploie. Privilégier un changement rétrocompatible (prop optionnelle, valeur par défaut inchangée) ; signaler l'impact dans le compte rendu.
- Nommer et organiser un nouveau composant comme ses voisins (dossier par domaine, PascalCase, commentaire de chemin en tête de fichier quand le dossier le fait).

## Server / Client

- Server Component par défaut ; `"use client"` seulement pour état, effets, événements, hooks de navigation ou animations.
- Garder la frontière client **la plus basse possible** : isoler la partie interactive dans un petit composant client plutôt que de marquer toute une section ou un screen.
- Mutations par Server Actions (`"use server"`, `actions.js` proche de la route), validées avec `zod`.
- Pages dépendant de la base ou de la session : `export const dynamic = "force-dynamic"`.
- Alias d'import `@/` → `src/`.

## Styling et design system

- Tailwind pour la mise en page (flex, grid, espacements, responsive) **et** pour les styles visuels standards, à condition d'utiliser les tokens (`bg-canvas`, `bg-surface`, `text-accent`, `border-line`, `from-blue`, `to-violet`…). Liste : `docs/ARCHITECTURE.md` §7 et `src/app/globals.css`.
- **Aucun hex en dur** dans les classes ou les styles : ajouter un token dans `globals.css` si une couleur manque. Exception connue : valeurs animées par `motion` (non interpolables via `var()`).
- Opacité sur une couleur issue d'une variable : `alpha(color, "18")` (`src/utils/color.js`), pas `${color}18`.
- Module CSS : réservé aux effets spécifiques (ex. `LandingSection.module.css`), en utilisant `var(--color-*)`.
- Sections : `<Section>` → `<SectionWrapper>` → contenu ; titres via `SectionHeading` ; un seul `h1` par page (`PageHero` / `PageTitle`). Ne pas réécrire paddings et largeurs : ils vivent dans ces composants.
- Mobile-first, breakpoints `sm` / `md` / `lg` / `xl` cohérents avec l'existant ; vérifier alignements et rythme vertical sur mobile et desktop.
- Polices : `font-heading`, `font-name`, `font-code`.

## Animations

- Bibliothèque : `motion/react` exclusivement. Ne pas importer `framer-motion` (dépendance supprimée du projet).
- **Sobriété** : l'animation sert la lecture (apparition, hiérarchie, feedback), jamais la décoration continue ou envahissante.
- **Système commun** : valeurs de référence dans `src/lib/motion.js` (`EASE`, `DURATION`, `DISTANCE`, `VIEWPORT`, `STAGGER`…), composants dans `src/components/animations/`. Ne pas écrire de `whileInView` ad hoc pour une simple apparition au scroll.
  - `Reveal` : un élément qui apparaît (props `as`, `y`, `x`, `scale`, `delay`, `duration`).
  - `RevealGroup` + `RevealItem` : un ensemble qui tient dans l'écran, avec décalage progressif plafonné.
  - Grille qui s'empile plus haut que l'écran sur mobile : un `Reveal` par élément, avec `delay={(index % colonnes) * STAGGER}` (un `RevealGroup` ferait attendre les éléments du bas).
  - Titres : `<SectionHeading reveal>` et `<HomeSectionWrapper reveal>` (désactivés par défaut ; activer explicitement). Éviter la double animation (pas de `Reveal` autour d'un titre déjà `reveal`).
  - Animation spécifique (mockup, jauge, frise) : `useGatedInView` (`Reveal.jsx`) et `AnimatePresence initial={false}`.
- **Visible sans JS et au chargement** : `Reveal` rend le contenu visible côté serveur ; après hydratation, seuls les éléments situés sous le pli sont masqués puis révélés. Ne pas masquer d'élément visible au chargement (LCP) : `h1`, image principale, `PageHero`, `LandingSection` conservent leurs animations propres.
- **Réduction de mouvement** : `MotionConfig reducedMotion="user"` est posé dans `SiteLayout` ; `Reveal` ne garde alors qu'un fondu court. Les boucles infinies doivent être couvertes (`useReducedMotion()`).
- **Cohérence** : ne pas introduire un nouveau style de mouvement sans raison.
- **Mutualisation** : si un pattern se répète, l'extraire (variants partagés, petit composant) plutôt que le recopier.
- **Accessibilité** : respecter `useReducedMotion()` (supprimer déplacements et durées) ; ne pas masquer de contenu essentiel derrière une animation ; ne pas piéger le focus.
- **Performances** : animer `transform` et `opacity` de préférence ; pas de boucles infinies lourdes ; pas d'animation sur de grandes listes sans nécessité ; `once: true` pour les apparitions au scroll.
- **Server Components** : n'ajouter `"use client"` que sur le plus petit composant animé et lui passer le contenu en `children` ou en props, au lieu de convertir toute la section ou le screen en client.

## Sécurité

- Toute page, layout ou action admin appelle `requireAdmin()` (`src/server/guards/requireAdmin.js`) ; ne pas compter sur le layout seul pour protéger une Server Action.
- Formulaires publics : honeypot + validation `zod` ; réservations : rate-limit par IP.
- Échapper le contenu injecté dans les emails HTML.
- Le contrôle d'accès (session) et l'indexation (`robots`) sont deux sujets distincts : une page protégée n'est pas pour autant « non indexée ».

## SEO et accessibilité

- Chaque page publique : `metadata` (title, description, `alternates.canonical`) ; ajouter les nouvelles pages statiques à `src/app/sitemap.js` (liste manuelle).
- Pages privées ou sans valeur SEO : `robots: { index: false }`.
- Sémantique : `section` + `aria-labelledby`, éléments décoratifs en `aria-hidden`, focus visibles, `alt` sur les images, hiérarchie de titres respectée.

## Données

- Prisma 7 avec adapter `pg`, client généré dans `src/generated/prisma`. Accès aux données via `repositories`, appelés par les `services` ou les Server Actions. Toute modification du schéma passe par une migration (`prisma/migrations`).

## Avant de conclure

- `npm run lint` et, si possible, `npm run build` (le build peut échouer à cause du module CRM en cours de développement : le signaler sans le corriger). Pas de tests automatisés.
- Vérifier le rendu mobile et desktop pour tout changement visuel ; lister les pages impactées par une modification de composant partagé.
