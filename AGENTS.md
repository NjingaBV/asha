# AGENTS.md - Guide de l'Architecture et des Agents IA

## Vue d'ensemble

**Asha** est une bibliothèque de composants Svelte 5 suivant les principes de l'**Atomic Design**, inspirée du design system d'Apple. Elle fournit un ensemble de composants réutilisables, accessibles et performants pour créer des interfaces utilisateur modernes.

**Version** : 0.3.1
**Mainteneur** : NjingaBV
**Licence** : MIT

---

## Table des Matières

1. [Architecture Atomic Design](#architecture-atomic-design)
2. [Structure du Projet](#structure-du-projet)
3. [Stack Technologique](#stack-technologique)
4. [Tests et Qualité](#tests-et-qualité)
5. [Développement](#développement)
6. [CI/CD et Release](#cicd-et-release)
7. [Agents IA Recommandés](#agents-ia-recommandés)
8. [Ressources](#ressources)

---

## Architecture Atomic Design

L'Atomic Design décompose les interfaces en cinq niveaux distincts, du plus simple au plus complexe.

### 1. Atomes (Atoms) - 🧩 Blocs de Base

Les **atomes** sont les éléments de base irréductibles (boutons, textes, icônes).

**Composants** : Button, Heading, Paragraph, Badge, Icon, PillButton, Eyebrow, ColorSwatch, FeatureItem, Blob, PathLine, Youtube, Hamburger, Nav, Linkable

**Fichiers** : `src/lib/components/atoms/`
**Tests** : `src/lib/components/atoms/*.test.ts`
**Stories** : `src/stories/atoms/*.stories.ts`

### 2. Molécules (Molecules) - 🔗 Groupes Fonctionnels

Les **molécules** combinent plusieurs atomes pour former des unités fonctionnelles (cartes, hero, groupes de boutons).

**Composants** : Card, Hero, CTAGroup, ProductCard, FeatureCard, CallToAction, Logo, Player, Tile, Feature, ColorSelector, AnimatedBlob

**Fichiers** : `src/lib/components/molecules/`
**Tests** : `src/lib/components/molecules/*.test.ts`
**Stories** : `src/stories/molecules/*.stories.ts`

### 3. Organismes (Organisms) - 🏛️ Sections Complexes

Les **organismes** assemblent molécules et atomes en sections distinctes (header, footer, grilles).

**Composants** : Header, Footer, ProductGrid, FeatureGrid, HeroBanner, HeroSection, HeroTile, Carousel, Features, PromoStrip, Slogan, TextAnimation, StickyProductNav

**Fichiers** : `src/lib/components/organisms/`
**Tests** : `src/lib/components/organisms/*.test.ts`
**Stories** : `src/stories/organisms/*.stories.ts`

### 4. Templates - 📐 Structures de Page

Les **templates** définissent la mise en page avec emplacements pour composants.

**Templates** : WatchLanding, Shelf

**Fichiers** : `src/lib/components/templates/`
**Stories** : `src/stories/templates/*.stories.ts`

### 5. Pages - 📄 Instances Complètes

Les **pages** sont des instances de templates avec contenu réel.

**Pages** : Home

**Fichiers** : `src/lib/components/pages/`
**Stories** : `src/stories/pages/*.stories.ts`

---

## Structure du Projet

```
asha/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── atoms/           # 🧩 Composants atomiques
│   │   │   ├── molecules/       # 🔗 Composants moléculaires
│   │   │   ├── organisms/       # 🏛️ Composants d'organisme
│   │   │   ├── templates/       # 📐 Templates de page
│   │   │   └── pages/           # 📄 Pages complètes
│   │   ├── machines/            # 🤖 Machines d'état XState
│   │   ├── models/              # 📦 Types TypeScript
│   │   └── index.ts             # 🚪 Point d'entrée
│   ├── stories/                 # 📖 Stories Storybook
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   ├── templates/
│   │   ├── pages/
│   │   └── utils/
│   ├── routes/                  # 🛣️ Routes SvelteKit (dev local)
│   └── app.css                  # 🎨 Styles globaux
├── .storybook/                  # ⚙️ Configuration Storybook
├── .github/workflows/           # 🔄 CI/CD GitHub Actions
├── dist/                        # 📦 Build de la librairie
├── static/                      # 🖼️ Assets statiques
├── tests/                       # 🧪 Tests additionnels
├── package.json                 # 📋 Dépendances et scripts
├── svelte.config.js             # ⚙️ Config SvelteKit
├── vite.config.ts               # ⚙️ Config Vite
├── vitest.config.ts             # ⚙️ Config Vitest
├── tailwind.config.js           # ⚙️ Config Tailwind
└── tsconfig.json                # ⚙️ Config TypeScript
```

---

## Stack Technologique

### Core Technologies

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Svelte** | 5.43+ | Framework réactif avec compilation |
| **TypeScript** | 5.9+ | Typage statique |
| **Tailwind CSS** | 4.1+ | Framework CSS utility-first |
| **Vite** | 7.2+ | Build tool et dev server |
| **SvelteKit** | 2.48+ | Framework meta pour Svelte |
| **pnpm** | 10.20+ | Gestionnaire de packages |

### Testing & Quality

| Outil | Usage |
|-------|-------|
| **Vitest** | Tests unitaires |
| **Testing Library** | Tests orientés utilisateur |
| **Playwright** | Tests d'accessibilité |
| **Storybook** | Développement et documentation |
| **ESLint** | Linter JavaScript/TypeScript |
| **Prettier** | Formateur de code |

### State Management

| Outil | Usage |
|-------|-------|
| **XState** | Machines d'état pour logique complexe |
| **Svelte Runes** | Réactivité native ($state, $derived, $props) |

---

## Tests et Qualité

### Tests Unitaires

**Framework** : Vitest + Testing Library
**Couverture** : Tous les composants atoms, molecules, organisms

**Structure de test** :
```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Button from './Button.svelte';

describe('Button', () => {
  describe('Rendu de base', () => {
    it('devrait rendre un bouton avec du texte', () => {
      render(Button, { props: { children: 'Cliquez-moi' } });
      expect(screen.getByRole('button')).toBeInTheDocument();
    });
  });

  describe('Variantes', () => {
    it('devrait appliquer la variante primary', () => {
      const { container } = render(Button, {
        props: { variant: 'primary', children: 'Primary' }
      });
      expect(container.querySelector('button')?.className).toContain('bg-primary');
    });
  });

  describe('États', () => {
    it('devrait être désactivé quand disabled est true', () => {
      render(Button, { props: { disabled: true, children: 'Désactivé' } });
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('Interactions', () => {
    it('devrait appeler onClick quand cliqué', async () => {
      const onClick = vi.fn();
      render(Button, { props: { onClick, children: 'Cliquer' } });
      await userEvent.click(screen.getByRole('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
```

**Catégories de tests** :
- ✅ Rendu de base (props par défaut)
- ✅ Variantes (styles, tailles, tons)
- ✅ États (loading, disabled, error)
- ✅ Interactions (click, hover, focus)
- ✅ Accessibilité (ARIA, keyboard)
- ✅ Responsive (breakpoints, classes)

### Tests Visuels (Storybook)

**Stories** documentent et testent visuellement les composants.

**Structure** :
```typescript
import type { Meta, StoryObj } from '@storybook/svelte';
import Button from '$lib/components/atoms/Button.svelte';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Documentation du composant...'
      }
    }
  }
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary', children: 'Bouton' }
};
```

### Commandes de Test

```bash
# Tests unitaires
pnpm test:unit

# Tests avec coverage
pnpm test:unit --coverage

# Tests en mode watch
pnpm test:unit --watch

# Lancer Storybook
pnpm storybook

# Build Storybook
pnpm build-storybook
```

---

## Développement

### Installation

```bash
# Cloner le repo
git clone https://github.com/NjingaBV/asha.git
cd asha

# Installer les dépendances
pnpm install

# Lancer Storybook
pnpm storybook
```

### Workflow de Développement

1. **Créer une branche** :
   ```bash
   git checkout -b feature/nom-feature
   ```

2. **Développer** :
   - Créer le composant dans `src/lib/components/`
   - Écrire les tests dans `*.test.ts`
   - Créer la story dans `src/stories/`

3. **Tester localement** :
   ```bash
   pnpm test:unit
   pnpm check
   pnpm lint
   ```

4. **Commit** (Convention Conventional Commits) :
   ```bash
   git commit -m "feat(atoms): ajouter variante outline au Button"
   ```

5. **Push et PR** :
   ```bash
   git push origin feature/nom-feature
   ```

### Convention de Commit

**Format** : `type(scope): description`

**Types** :
- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation
- `style`: Formatage (sans changement de code)
- `refactor`: Refactorisation
- `test`: Ajout/modification de tests
- `chore`: Maintenance (build, deps)

**Exemples** :
```bash
feat(button): ajouter variante outline
fix(card): corriger aspect ratio sur mobile
docs(readme): mettre à jour la documentation
test(heading): ajouter tests de responsive
chore(deps): mettre à jour Tailwind CSS
```

### Coding Guidelines

1. **TypeScript** : Toujours typer les props et retours
2. **Svelte 5** : Utiliser `$props()`, `$state()`, `$derived()`
3. **Tailwind** : Préférer les classes utilitaires
4. **Accessibilité** : Tester au clavier et lecteur d'écran
5. **Tests** : Écrire des tests pour chaque composant
6. **Documentation** : Documenter l'API dans les stories

---

## CI/CD et Release

### Automated CI Pipeline

**CI Workflow** (`.github/workflows/ci.yml`) :
- Runs on every push to `main` and on all pull requests
- Parallel jobs: commitlint, lint, typecheck, test, build-package, build-storybook
- Uses Playwright for browser-based tests
- Concurrency controls to cancel outdated runs

**Security Scanning** (`.github/workflows/codeql.yml`) :
- CodeQL analysis for JavaScript/TypeScript
- Runs on pushes, PRs, and weekly schedule
- Detects security vulnerabilities and code quality issues

**Dependency Management** (`.github/dependabot.yml`) :
- Automated dependency updates grouped by type
- Weekly schedule on Mondays at 09:00 CET
- Groups: Storybook, Svelte, TypeScript, Vitest, Tailwind, XState

**Release & Deployment** :
- Automated releases via semantic-release on `main`
- Tags: `vX.Y.Z`, changelog, GitHub Release
- Publish to GitHub Packages
- Storybook deployed to GitHub Pages

### Running CI Locally

```bash
pnpm run lint              # Prettier & ESLint
pnpm run check             # TypeScript type checking
pnpm run test:unit -- --run  # Unit tests
pnpm run build             # Build the package
pnpm run build-storybook   # Build Storybook
```

### Git Hooks

**Setup** :
```bash
git config core.hookspath .githooks
```

**Hooks** :
- `commit-msg`: Runs commitlint
- `pre-commit`: Formats code
- `pre-push`: Runs install + lint + check

---

## Agents IA Recommandés

### Pour le Développement de Composants

#### 1. **Claude (Anthropic)** ⭐ Recommandé
- ✅ Génération de composants Svelte 5
- ✅ Refactorisation TypeScript
- ✅ Architecture et patterns
- ✅ Génération de tests unitaires

**Prompts recommandés** :
```
"Crée un composant Svelte 5 Button avec TypeScript et Tailwind CSS,
suivant les principes Atomic Design. Inclus les variantes primary,
ghost, outline, et les états loading, disabled."

"Génère des tests unitaires Vitest pour le composant Button,
couvrant le rendu de base, les variantes, les états et les interactions."
```

#### 2. **GitHub Copilot**
- ✅ Autocomplétion de code en temps réel
- ✅ Génération de tests
- ✅ Suggestions de patterns Svelte

#### 3. **Cursor**
- ✅ Édition assistée de code
- ✅ Recherche sémantique dans le codebase
- ✅ Refactoring intelligent multi-fichiers

### Pour la Documentation

#### 1. **Claude (Anthropic)** ⭐ Recommandé
- ✅ Génération de documentation MDX
- ✅ Création de stories Storybook avec descriptions
- ✅ Rédaction de README et guides

**Prompts recommandés** :
```
"Génère une story Storybook complète pour le composant Button
avec documentation en français, incluant tous les variants,
états et exemples d'utilisation."

"Crée une documentation README.md pour expliquer l'architecture
Atomic Design du projet Asha."
```

#### 2. **ChatGPT (OpenAI)**
- ✅ Traduction de documentation
- ✅ Génération d'exemples de code
- ✅ FAQ et guides utilisateur

### Pour les Tests

#### 1. **Claude (Anthropic)** ⭐ Recommandé
- ✅ Génération de suites de tests complètes
- ✅ Tests d'accessibilité (ARIA, keyboard)
- ✅ Scénarios de test edge cases
- ✅ Mocks et fixtures TypeScript

**Prompts recommandés** :
```
"Génère une suite de tests Vitest complète pour le composant Card,
incluant les tests de rendu, d'interactions, d'accessibilité et
de responsive design."

"Crée des tests d'accessibilité pour le composant Button,
vérifiant ARIA labels, navigation au clavier et focus-visible."
```

#### 2. **Codeium**
- ✅ Suggestions de tests inline
- ✅ Complétion d'assertions
- ✅ Génération de mocks

### Pour l'Architecture et Refactoring

#### 1. **Claude (Anthropic)** ⭐ Recommandé
- ✅ Analyse d'architecture
- ✅ Suggestions de refactoring
- ✅ Patterns de design
- ✅ Optimisation de performance

**Prompts recommandés** :
```
"Analyse l'architecture du composant Hero et suggère des
améliorations pour la performance, l'accessibilité et la
maintenabilité."

"Refactorise le composant Card pour mieux suivre les principes
de composition Svelte 5 avec $props() et $derived()."
```

### Workflow Recommandé avec Claude

1. **Phase de Design** :
   ```
   "Je veux créer un composant [nom] inspiré du design Apple.
   Il doit avoir [fonctionnalités]. Suggère une API de props
   TypeScript et une structure Svelte 5."
   ```

2. **Phase de Développement** :
   ```
   "Implémente le composant [nom] avec Svelte 5, TypeScript,
   et Tailwind CSS v4. Applique les principes Atomic Design."
   ```

3. **Phase de Tests** :
   ```
   "Génère une suite de tests complète pour [nom], couvrant
   tous les cas d'usage, variantes, et scénarios d'erreur."
   ```

4. **Phase de Documentation** :
   ```
   "Crée une story Storybook avec documentation en français
   pour [nom], incluant exemples et best practices."
   ```

---

## Ressources

### Documentation Officielle

- 📚 [Svelte 5 Docs](https://svelte.dev/docs/svelte/overview)
- 📚 [SvelteKit Docs](https://kit.svelte.dev/docs)
- 📚 [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- 📚 [Vitest Docs](https://vitest.dev)
- 📚 [Storybook Docs](https://storybook.js.org/docs)
- 📚 [XState Docs](https://xstate.js.org/docs)

### Atomic Design

- 📖 [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com)
- 📖 [Pattern Lab](https://patternlab.io)
- 📖 [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)

### Design Systems

- 🎨 [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- 🎨 [Material Design](https://material.io/design)
- 🎨 [Shopify Polaris](https://polaris.shopify.com)
- 🎨 [IBM Carbon](https://carbondesignsystem.com)

### Accessibilité

- ♿ [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- ♿ [A11y Project](https://www.a11yproject.com)
- ♿ [WebAIM](https://webaim.org)
- ♿ [Inclusive Components](https://inclusive-components.design)

### Testing

- 🧪 [Testing Library Best Practices](https://testing-library.com/docs/guiding-principles)
- 🧪 [Vitest UI](https://vitest.dev/guide/ui.html)
- 🧪 [Playwright Best Practices](https://playwright.dev/docs/best-practices)

---

## Support et Contact

- 🐛 **Issues** : [GitHub Issues](https://github.com/NjingaBV/asha/issues)
- 💬 **Discussions** : [GitHub Discussions](https://github.com/NjingaBV/asha/discussions)
- 📧 **Email** : support@njinga.com
- 📖 **Storybook** : [Asha Storybook](https://njingabv.github.io/asha)

---

## Licence

MIT © NjingaBV

**Dernière mise à jour** : 2025-01-10
**Version** : 0.3.1
