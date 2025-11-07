# Component Testing Strategy with Storybook

Ce document décrit la stratégie complète de test pour les composants Asha en utilisant Storybook 10, Vitest, et les outils d'accessibilité.

## 📋 Vue d'ensemble

Le projet utilise une approche **multi-niveaux** pour tester les composants:

1. **Tests d'interaction Storybook** - Tests comportementaux des interactions utilisateur
2. **Tests visuels de régression** - Détection des changements visuels (Chromatic)
3. **Tests d'accessibilité (A11y)** - Vérification des standards WCAG
4. **Tests de snapshot Storybook** - Capture des états des composants

## 🧪 Types de Tests

### 1. Tests d'Interaction Storybook (`play` functions)

Les `play` functions sont des fonctions asynchrones dans les stories qui simulent les interactions utilisateur.

#### Structure Basique

```typescript
import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import MyComponent from './MyComponent.svelte';

const meta = {
  title: 'Atoms/MyComponent',
  component: MyComponent,
  tags: ['autodocs']
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Click me',
    // ... other props
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test 1: Verify element exists and is visible
    const element = canvas.getByRole('button', { name: /click me/i });
    await expect(element).toBeInTheDocument();
    await expect(element).toBeVisible();

    // Test 2: Simulate user interaction
    await userEvent.click(element);

    // Test 3: Verify state after interaction
    await expect(element).toHaveFocus();
  }
};
```

#### API Available in play()

```typescript
// Queries
- canvas.getByRole(role, options)
- canvas.getByText(text)
- canvas.getByLabelText(text)
- canvas.getByPlaceholderText(text)
- canvas.queryByRole(role) // Doesn't throw

// User interactions
- userEvent.click(element)
- userEvent.type(element, 'text')
- userEvent.keyboard('{Escape}')
- userEvent.hover(element)
- userEvent.unhover(element)

// Assertions
- expect(element).toBeInTheDocument()
- expect(element).toBeVisible()
- expect(element).toBeDisabled()
- expect(element).toHaveTextContent('text')
- expect(element).toHaveFocus()
- expect(element).toHaveAccessibleName('name')
```

### 2. Tests d'Accessibilité

Les tests d'accessibilité vérifient que les composants respectent les standards WCAG 2.1 AA.

#### Checklist d'Accessibilité

Pour chaque composant, vérifiez:

- ✅ **Labels et noms accessibles**: Tous les éléments interactifs ont un nom (texte, aria-label, aria-labelledby)
- ✅ **Navigation au clavier**: Les éléments interactifs sont accessibles via Tab et entrée/espace
- ✅ **États ARIA**: Les changements d'état sont annoncés via ARIA (disabled, checked, expanded, etc.)
- ✅ **Contraste des couleurs**: Ratio WCAG AA (4.5:1 pour texte normal, 3:1 pour grand texte)
- ✅ **Images**: Toutes les images ont du texte alternatif approprié
- ✅ **Hiérarchie des headings**: Les headings suivent une hiérarchie logique (h1 → h2 → h3...)
- ✅ **Focus visible**: Les éléments recevant le focus doivent avoir un indicateur visible

#### Exemple de Test d'Accessibilité

```typescript
export const Default: Story = {
  args: { ... },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Test d'accessibilité basique
    await expect(button).toHaveAccessibleName('Click me');

    // Test de navigation au clavier
    await userEvent.tab(); // Focus le premier élément focusable
    await expect(button).toHaveFocus();

    // Simulation d'activation via clavier
    await userEvent.keyboard('{Enter}');
    // Vérifier l'état après activation
  }
};
```

### 3. Tests Visuels de Régression (Chromatic)

Chromatic (déjà intégré via `@chromatic-com/storybook`) capture automatiquement les snapshots visuels de vos stories.

**Pas d'action requise** - Les snapshots sont générés automatiquement lors du build Storybook.

Pour faciliter les reviews:
1. Les snapshots sont uploadés automatiquement
2. Vous pouvez accepter ou rejeter les changements visuels
3. Les baselines servent de référence pour détecter les régressions

## 📝 Patterns Recommandés

### Pattern 1: Tests Simples de Rendu

Pour les composants sans interactions:

```typescript
export const Primary: Story = {
  args: { label: 'My Badge' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByText('My Badge');
    await expect(badge).toBeInTheDocument();
    await expect(badge).toBeVisible();
  }
};
```

### Pattern 2: Tests d'Interactions

Pour les composants avec interactions (buttons, inputs, etc.):

```typescript
export const Clickable: Story = {
  args: { ... },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // État initial
    await expect(button).toBeEnabled();

    // Simulation d'interaction
    await userEvent.click(button);

    // Vérification de l'état après interaction
    await expect(button).toHaveFocus();
  }
};
```

### Pattern 3: Tests d'État

Pour les composants avec plusieurs états:

```typescript
export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Vérifier l'état
    await expect(button).toBeDisabled();

    // Vérifier que les interactions ne fonctionnent pas
    await userEvent.click(button);
    // Button ne doit pas déclencher d'action
  }
};

export const Loading: Story = {
  args: { loading: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    // Vérifier l'état de chargement
    await expect(button).toBeDisabled();
    await expect(button).toHaveTextContent(/loading/i);
  }
};
```

## 🎯 Checklist d'Implémentation

Quand vous ajoutez des tests à un composant:

### Pour les **Atoms** (composants simples):

- [ ] Au moins 1 test pour la story "Default"
- [ ] Tests pour chaque état significatif (disabled, loading, etc.)
- [ ] Vérification des variantes visuelles (couleurs, tailles)
- [ ] Test d'accessibilité basique (accessible name)

### Pour les **Molecules** (composants avec interactions):

- [ ] Tous les tests Atoms
- [ ] Tests des interactions utilisateur (clic, saisie)
- [ ] Tests des changements d'état après interaction
- [ ] Vérification du focus et de la navigation au clavier

### Pour les **Organisms** (composants complexes):

- [ ] Tous les tests Molecules
- [ ] Tests des workflows complets
- [ ] Tests des états d'erreur
- [ ] Tests d'accessibilité approfondis

## 🚀 Exécution des Tests

### Tests d'Interaction Storybook

```bash
# Exécuter Storybook localement
npm run storybook

# Chaque story avec une play() function exécute ses tests
# automatiquement dans Storybook
```

### Tests Visuels (Chromatic)

```bash
# Les snapshots sont générés automatiquement
npm run build-storybook

# Uploadez à Chromatic pour les comparaisons
```

## 📚 Exemples Complets

### Button Component

Voir: `src/stories/atoms/Button.stories.ts`

Démontre:
- Tests d'interaction (clic)
- Tests d'état (disabled, loading)
- Tests d'accessibilité
- Navigation au clavier

### Heading Component

Voir: `src/stories/atoms/Heading.stories.ts`

Démontre:
- Tests de sémantique HTML (h1-h6)
- Vérification de la hiérarchie
- Tests de contenu

### Badge Component

Voir: `src/stories/atoms/Badge.stories.ts`

Démontre:
- Tests de rendu simple
- Variations de couleurs et styles
- Contenu personnalisé

## 🔍 Debugging

### Outils Disponibles

1. **Storybook Inspector**: Inspect les éléments DOM dans Storybook
2. **Console Storybook**: Affiche les logs des play() functions
3. **Playwright Inspector**: Utilisable via `@vitest/browser`

### Commandes Utiles

```typescript
// Dans une play() function:
console.log(canvasElement); // Afficher le DOM
canvas.debug(); // Pretty-print du DOM
canvas.logTestingPlaygroundURL(); // Générer un URL Testing Playground
```

## 📖 Ressources

- [Storybook Testing Documentation](https://storybook.js.org/docs/writing-stories/play-function)
- [Testing Library API](https://testing-library.com/docs/queries/about)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Axe Accessibility Audit](https://www.deque.com/axe/)

## 🎓 Formation

### Pour Commencer

1. Lisez ce document
2. Consultez les exemples dans `src/stories/atoms/`
3. Copiez les patterns pour vos composants

### Cas d'Usage Courants

**Q: Comment tester un input?**
```typescript
const input = canvas.getByLabelText('Email');
await userEvent.type(input, 'test@example.com');
await expect(input).toHaveValue('test@example.com');
```

**Q: Comment tester un select/dropdown?**
```typescript
const select = canvas.getByRole('combobox');
await userEvent.click(select);
const option = canvas.getByRole('option', { name: /option 1/i });
await userEvent.click(option);
```

**Q: Comment tester un modal/dialog?**
```typescript
const button = canvas.getByRole('button', { name: /open modal/i });
await userEvent.click(button);
const dialog = canvas.getByRole('dialog');
await expect(dialog).toBeInTheDocument();
```

## 🤝 Contribution

Quand vous ajoutez de nouveaux tests:

1. Suivez les patterns de ce document
2. Assurez-vous que les tests sont déterministes (pas de timing issues)
3. Incluez des commentaires pour les tests complexes
4. Testez l'accessibilité pour tous les composants nouveaux
