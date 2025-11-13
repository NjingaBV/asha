# 🚀 Testing Quick Start - Démarrage Rapide

Démarrez les tests de vos composants rapidement!

---

## ⚡ Résumé en 30 secondes

```bash
# 1. Lancer Storybook
npm run storybook

# 2. Ouvrir une story
# Exemple: Atoms > Button > Default

# 3. Vérifier l'accessibilité
# Cliquez sur l'onglet "Accessibility" pour les tests A11y
```

**Note:** Cette configuration utilise Storybook 10 Svelte avec des stories bien documentées et des tests d'accessibilité intégrés.

---

## 📋 Étape 1: Comprendre Storybook + A11y

Avec Storybook 10 Svelte, nous avons:

✅ **Stories bien documentées** - Chaque composant est décrit et visualisé
✅ **Tests d'accessibilité (A11y)** - Contrôle automatique WCAG 2.1
✅ **Visual regression (Chromatic)** - Intégré via addon
✅ **Documentation intégrée** - Docs auto-générées par Storybook

## 🎯 Étape 2: Visualiser les Stories

```bash
# Lancez Storybook
npm run storybook

# Ouvrez http://localhost:6006
# Explorez: Atoms > Button > Default
```

---

## 🔍 Étape 3: Vérifier l'Accessibilité

Dans Storybook:

1. Ouvrez une story (ex: **Button > Default**)
2. Cliquez sur l'onglet **"Accessibility"** en bas à gauche
3. Vous verrez les résultats des tests A11y:

```
✅ Passing: heading hierarchy
✅ Passing: form field labels
✅ Passing: color contrast
❌ Failing: (s'il y a des erreurs)
```

**Addon A11y** utilise `axe-core` pour vérifier:

- Les labels manquants
- Le contraste des couleurs
- La hiérarchie des headings
- Les attributs ARIA
- Et plus...

---

## 🛠️ Étape 4: Documentation

Chaque story inclut:

✅ **Description du composant** - Cas d'usage et meilleures pratiques
✅ **Args Controls** - Modifier les props en direct dans Storybook
✅ **Multiple Variants** - Voir tous les états (disabled, loading, etc.)
✅ **Responsive Preview** - Vérifier sur différentes résolutions

---

## 🎨 Étape 5: Contribuer de Nouvelles Stories

Pour ajouter des tests à un nouveau composant:

```typescript
import type { Meta, StoryObj } from '@storybook/sveltekit';
import MyComponent from './MyComponent.svelte';

const meta = {
  title: 'Atoms/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],  // ← Auto-génère la documentation!
  parameters: {
    docs: {
      description: {
        component: 'Description and usage...'
      }
    }
  },
  argTypes: {
    prop1: { control: 'text', description: '...' },
    prop2: { control: 'select', options: [...] }
  }
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { prop1: 'value', prop2: 'value' }
};

export const Variant: Story = {
  args: { prop1: 'different', prop2: 'value' }
};
```

**Résultat:** ✅ Story documentée et vérifiable dans Storybook

---

## 🎨 Exemples de Stories

### Button - Exemple Complet

```typescript
export const Default: Story = {
	args: {
		variant: 'primary',
		size: 'md',
		children: 'Click me'
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: 'Disabled'
	}
};

export const Loading: Story = {
	args: {
		loading: true,
		children: 'Loading...'
	}
};
```

### Badge - Exemple Simple

```typescript
export const Primary: Story = {
	args: {
		label: 'New',
		color: 'primary',
		variant: 'solid'
	}
};

export const Success: Story = {
	args: {
		label: 'Available',
		color: 'success'
	}
};
```

### Heading - Sémantique HTML

```typescript
export const H1: Story = {
	args: {
		level: 1,
		size: '6xl',
		children: 'Main Title'
	}
};

export const H2: Story = {
	args: {
		level: 2,
		size: '5xl',
		children: 'Section Title'
	}
};
```

---

## ✅ Checklist pour Tester

- [ ] Lancer `npm run storybook`
- [ ] Ouvrir http://localhost:6006
- [ ] Consulter les stories (Atoms > Button > Default)
- [ ] Cliquer sur "Accessibility" tab en bas à gauche
- [ ] Vérifier que les tests A11y passent ✅
- [ ] Modifier les args et vérifier les changements
- [ ] Consulter la documentation de chaque composant

---

## 📚 Types de Vérifications

### 1. Documentation (Auto-généré)

Chaque story crée une page docs Storybook avec:

- Description du composant
- Table des props (argTypes)
- Tous les variants
- Contrôles interactifs

### 2. Accessibilité (A11y Tab)

Utilise l'addon A11y pour vérifier:

- ✅ Hiérarchie correcte
- ✅ Labels présents
- ✅ Contraste des couleurs
- ✅ Attributs ARIA

### 3. Visual Regression (Chromatic)

Avec `npm run build-storybook`:

- Snapshots automatiques
- Détection de changements visuels
- Comparaison avant/après

---

## 🚀 Prochaines Étapes

1. Lancez Storybook: `npm run storybook`
2. Explorez les stories existantes (Button, Badge, Heading)
3. Cliquez sur "Accessibility" pour voir les tests A11y
4. Modifiez les args pour tester différents états
5. Créez vos propres stories pour nouveaux composants

**Pattern à suivre:**

```
1. Importer: import type { Meta, StoryObj } from '@storybook/sveltekit'
2. Créer meta avec description et argTypes
3. Exporter stories avec différents args
4. Ajouter tags: ['autodocs'] pour auto-docs
```

---

## 📚 Ressources

- **Storybook Docs**: https://storybook.js.org/docs/
- **A11y Testing**: https://www.deque.com/axe/
- **Exemples réels**: `src/stories/atoms/Button.stories.ts`
- **Full Strategy**: `docs/TESTING_STRATEGY.md`

---

## 🎉 C'est Prêt!

Storybook fonctionne avec:
✅ 40+ composants documentés
✅ Tests d'accessibilité intégrés
✅ Stories avec variantes
✅ Documentation auto-générée
✅ Prêt pour Chromatic visual regression

Lancez `npm run storybook` et explorez maintenant! 🚀
