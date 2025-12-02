# Component API Guidelines

## Vue d'ensemble

Ce document définit les standards d'API pour tous les composants du design system Asha, inspiré des principes de conception d'Apple : minimalisme, clarté, cohérence et accessibilité.

## Principes de Base

### 1. Cohérence avant tout
- Utiliser les mêmes noms de props pour les mêmes concepts
- Suivre les mêmes patterns de nomenclature
- Maintenir des valeurs par défaut prévisibles

### 2. TypeScript First
- Tous les composants doivent être typés avec TypeScript
- Exporter les types d'interface pour réutilisation
- Utiliser des types union pour les variantes/options

### 3. Accessibilité intégrée
- WCAG 2.2 AA minimum
- Support clavier complet
- ARIA attributes appropriés
- Focus management

### 4. SSR-Friendly
- Pas d'accès à `window`/`document` au niveau module
- Feature detection dans `onMount` uniquement
- Hydration sans surprises

## Props Standardisées

### Variantes Visuelles (`variant`)

Définit le style visuel principal du composant.

**Valeurs standards :**
- `solid` - Fond plein avec couleur (default pour la plupart)
- `outline` - Bordure seulement, fond transparent
- `ghost` - Texte coloré, pas de bordure ni fond
- `soft` - Fond subtil (semi-transparent)

**Type :**
```typescript
export type Variant = 'solid' | 'outline' | 'ghost' | 'soft';
```

**Usage :**
```svelte
<Button variant="solid">Solid Button</Button>
<Button variant="ghost">Ghost Button</Button>
```

---

### Tons/Couleurs (`tone`)

Définit le contexte sémantique ou la couleur du composant.

**Valeurs standards :**
- `default` - Couleur par défaut du thème
- `primary` - Action principale (bleu Apple)
- `neutral` - Neutre, gris
- `success` - Succès, validation (vert)
- `warning` - Attention, alerte (orange)
- `danger` - Erreur, destruction (rouge)
- `info` - Information (bleu clair)

**Type :**
```typescript
export type Tone = 'default' | 'primary' | 'neutral' | 'success' | 'warning' | 'danger' | 'info';
```

**Usage :**
```svelte
<Button tone="primary">Primary</Button>
<Badge tone="success">Success</Badge>
<Alert tone="danger">Error</Alert>
```

---

### Tailles (`size`)

Définit les dimensions du composant.

**Valeurs standards :**
- `sm` - Petit (small)
- `md` - Moyen (medium) - DEFAULT
- `lg` - Grand (large)
- `xl` - Très grand (optional pour certains composants)

**Type :**
```typescript
export type Size = 'sm' | 'md' | 'lg' | 'xl';
```

**Dimensions suggérées :**
- `sm`: padding `px-3 py-1`, text `text-sm`
- `md`: padding `px-4 py-2`, text `text-base`
- `lg`: padding `px-6 py-3`, text `text-lg`

**Usage :**
```svelte
<Button size="sm">Small</Button>
<Input size="md">Medium</Input>
<Heading size="lg">Large</Heading>
```

---

### États (`disabled`, `loading`, `readonly`)

**`disabled`** (boolean)
- Désactive les interactions
- Applique `opacity-disabled` (0.5)
- Cursor `not-allowed`
- Ajoute `aria-disabled="true"`

**`loading`** (boolean)
- Affiche un spinner/indicateur
- Désactive implicitement les interactions
- Garde le même layout (évite CLS)
- État temporaire pour actions async

**`readonly`** (boolean)
- Formulaires seulement
- Affiche la valeur mais empêche modification
- Différent de `disabled` (visible/focusable)

**Usage :**
```svelte
<Button disabled>Disabled</Button>
<Button loading>Loading...</Button>
<Input readonly value="Read only" />
```

---

### Classes personnalisées

**`class`** ou **`className`** (string)
- Permet d'ajouter des classes Tailwind personnalisées
- S'ajoute aux classes existantes (ne remplace pas)
- Utiliser `class` en Svelte 5

**Usage :**
```svelte
<Button class="mt-4">Custom Margin</Button>
<Card class="shadow-xl">Custom Shadow</Card>
```

---

## Patterns de Props Spécifiques

### Composants de Formulaire

**Props communes :**
```typescript
interface FormFieldProps {
	name?: string;          // Nom du champ
	value?: string;         // Valeur
	placeholder?: string;   // Placeholder
	disabled?: boolean;     // Désactivé
	readonly?: boolean;     // Lecture seule
	required?: boolean;     // Requis
	invalid?: boolean;      // État d'erreur
	error?: string;         // Message d'erreur
	hint?: string;          // Texte d'aide
	label?: string;         // Label du champ
	onChange?: (value: string) => void;
	onBlur?: () => void;
	onFocus?: () => void;
}
```

### Composants Interactifs

**Props communes :**
```typescript
interface InteractiveProps {
	onClick?: (event: MouseEvent) => void;
	onHover?: (hovered: boolean) => void;
	onFocus?: (focused: boolean) => void;
	ariaLabel?: string;     // Pour accessibilité
	tabIndex?: number;      // Ordre de tabulation
}
```

### Composants Containers

**Props communes :**
```typescript
interface ContainerProps {
	fullWidth?: boolean;    // Largeur 100%
	centered?: boolean;     // Centré
	padding?: Size;         // Padding interne
	gap?: Size;            // Espace entre enfants
	direction?: 'row' | 'column'; // Direction flex
}
```

---

## Nomenclature des Événements

### Préfixes standards

**`on` prefix** - Tous les événements
```typescript
onClick?: (event: MouseEvent) => void;
onChange?: (value: string) => void;
onSubmit?: (data: FormData) => void;
```

### Événements courants

- `onClick` - Clic/activation
- `onChange` - Changement de valeur
- `onInput` - Saisie en temps réel
- `onSubmit` - Soumission de formulaire
- `onFocus` - Focus
- `onBlur` - Perte de focus
- `onHover` - Survol (hover enter)
- `onOpen` - Ouverture (modals, dropdowns)
- `onClose` - Fermeture
- `onSelect` - Sélection d'item
- `onComplete` - Complétion d'action

---

## Slots Standards

### Svelte 5 Snippets

**`children`** - Contenu principal (default slot)
```svelte
<script lang="ts">
	import type { Snippet } from 'svelte';
	
	let { children }: { children?: Snippet } = $props();
</script>

{#if children}
	{@render children()}
{/if}
```

**`iconLeft` / `iconRight`** - Icônes avant/après
```svelte
<script lang="ts">
	let { iconLeft, iconRight }: { 
		iconLeft?: Snippet; 
		iconRight?: Snippet; 
	} = $props();
</script>

<button>
	{#if iconLeft}{@render iconLeft()}{/if}
	{#if children}{@render children()}{/if}
	{#if iconRight}{@render iconRight()}{/if}
</button>
```

**Slots nommés communs :**
- `header` - En-tête
- `footer` - Pied de page
- `leading` - Début (alternative à iconLeft)
- `trailing` - Fin (alternative à iconRight)
- `label` - Label custom
- `description` - Description
- `actions` - Boutons d'action

---

## Gestion d'État avec XState

### Quand utiliser XState

Utiliser XState pour :
- États complexes avec transitions multiples
- Comportements interactifs avancés (hover, press, focus)
- Gestion du focus trap (modals, dropdowns)
- Loading/async states avec retry
- Animations séquentielles

**Exemple : Button avec états**
```typescript
buttonMachine: idle → hover → pressed → loading → success/error
```

### Pattern d'intégration

```svelte
<script lang="ts">
	import { useMachine } from '@xstate/svelte';
	import { buttonMachine } from '$lib/machines';
	
	const { snapshot, send } = useMachine(buttonMachine);
	
	$effect(() => {
		// React to state changes
		console.log('Current state:', $snapshot.value);
	});
</script>

<button 
	onmouseenter={() => send({ type: 'HOVER' })}
	onmouseleave={() => send({ type: 'UNHOVER' })}
	onclick={() => send({ type: 'CLICK' })}
>
	Button
</button>
```

---

## Style avec Tailwind CSS

### Classes de base

Chaque composant doit définir des classes de base immuables :

```typescript
const baseClasses = [
	'inline-flex',
	'items-center',
	'justify-center',
	'font-medium',
	'transition-all',
	'duration-2',
	'ease-standard'
];
```

### Classes dérivées

Utiliser `$derived` pour calculer les classes dynamiques :

```typescript
const buttonClasses = $derived(
	[
		...baseClasses,
		getSizeClasses(size),
		getVariantClasses(variant, tone),
		disabled && 'opacity-disabled cursor-not-allowed',
		className
	]
	.filter(Boolean)
	.join(' ')
);
```

### Utiliser les tokens

Toujours référencer les tokens CSS au lieu de valeurs en dur :

**❌ Mauvais :**
```svelte
<button class="bg-blue-500 text-white px-4 py-2 rounded-lg">
```

**✅ Bon :**
```svelte
<button class="bg-primary text-bg px-4 py-2 rounded-md">
```

---

## Accessibilité (A11y)

### Checklist WCAG 2.2 AA

#### Clavier
- [ ] Accessible au clavier (Tab, Enter, Space, Esc)
- [ ] Focus visible (`focus-visible:ring-2`)
- [ ] Ordre de tabulation logique
- [ ] Pas de piège de focus (sauf modals avec trap intentionnel)

#### ARIA
- [ ] Roles appropriés (`button`, `dialog`, `tab`, etc.)
- [ ] Labels (`aria-label`, `aria-labelledby`)
- [ ] États (`aria-disabled`, `aria-expanded`, `aria-selected`)
- [ ] Relations (`aria-controls`, `aria-describedby`)
- [ ] Annonces dynamiques (`role="status"`, `aria-live`)

#### Contraste
- [ ] Texte normal : min 4.5:1
- [ ] Texte large (≥18px bold ou ≥24px) : min 3:1
- [ ] Éléments UI non-texte : min 3:1

#### Focus Management
- [ ] Focus visible avec `outline` ou `ring`
- [ ] Restaurer le focus après fermeture de modal
- [ ] Focus trap dans les overlays

### Patterns d'accessibilité

**Button :**
```svelte
<button
	type="button"
	disabled={isDisabled}
	aria-label={ariaLabel}
	aria-disabled={isDisabled}
	aria-busy={loading}
	tabindex={tabIndex}
>
	{content}
</button>
```

**Modal :**
```svelte
<div
	role="dialog"
	aria-modal="true"
	aria-labelledby="modal-title"
	aria-describedby="modal-description"
>
	<h2 id="modal-title">Title</h2>
	<p id="modal-description">Description</p>
</div>
```

**Form Input :**
```svelte
<label for={id}>{label}</label>
<input
	{id}
	{name}
	{required}
	aria-required={required}
	aria-invalid={invalid}
	aria-describedby={error ? `${id}-error` : undefined}
/>
{#if error}
	<span id="{id}-error" role="alert">{error}</span>
{/if}
```

---

## Tests

### Structure de test recommandée

Chaque composant doit avoir des tests couvrant :

1. **Rendu de base** - Props par défaut
2. **Variantes** - Toutes les combinaisons variant/tone/size
3. **États** - disabled, loading, error, focus
4. **Interactions** - Click, hover, keyboard
5. **Accessibilité** - ARIA, rôles, focus

**Exemple :**
```typescript
describe('Button', () => {
	describe('Rendu de base', () => {
		it('should render with default props', () => {
			// Test
		});
	});
	
	describe('Variantes', () => {
		it('should apply solid variant', () => {
			// Test
		});
		
		it('should apply ghost variant', () => {
			// Test
		});
	});
	
	describe('États', () => {
		it('should be disabled when disabled prop is true', () => {
			// Test
		});
		
		it('should show loading spinner', () => {
			// Test
		});
	});
	
	describe('Interactions', () => {
		it('should call onClick when clicked', () => {
			// Test
		});
		
		it('should not call onClick when disabled', () => {
			// Test
		});
	});
	
	describe('Accessibilité', () => {
		it('should have correct ARIA attributes', () => {
			// Test
		});
		
		it('should be keyboard accessible', () => {
			// Test
		});
	});
});
```

---

## Documentation Storybook

### Structure de story

Chaque composant doit avoir :

1. **Meta** avec description complète
2. **Controls** pour toutes les props
3. **Stories de variantes** (Default, Ghost, Outline, etc.)
4. **Stories d'états** (Disabled, Loading, Error, etc.)
5. **Stories de tailles** (Small, Medium, Large)
6. **Stories dark mode** (avec `data-theme="dark"`)
7. **Stories d'accessibilité** (Focus, Keyboard navigation)

**Template minimal :**
```typescript
import type { Meta, StoryObj } from '@storybook/sveltekit';
import Component from './Component.svelte';

const meta = {
	title: 'Atoms/Component',
	component: Component,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: 'Description complète du composant...'
			}
		}
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['solid', 'outline', 'ghost'],
			description: 'Style variant'
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Component size'
		}
	}
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'solid',
		size: 'md',
		children: 'Default'
	}
};

// Plus de stories...
```

---

## Migration des Composants Existants

### Checklist de refactoring

Lors de la refonte d'un composant existant :

- [ ] **Props** : Normaliser selon ce guide (variant, tone, size)
- [ ] **Types** : Ajouter/mettre à jour les interfaces TypeScript
- [ ] **Tokens** : Remplacer valeurs en dur par tokens CSS
- [ ] **Classes** : Utiliser Tailwind avec tokens mappés
- [ ] **État** : Extraire logique complexe en XState si nécessaire
- [ ] **A11y** : Ajouter ARIA, keyboard support, focus management
- [ ] **Tests** : Écrire tests unitaires complets
- [ ] **Stories** : Créer/mettre à jour stories Storybook
- [ ] **Docs** : Documenter usage, examples, do/don't
- [ ] **Breaking** : Noter les breaking changes dans CHANGELOG

### Dépréciation

Pour déprécier une prop :

1. Marquer comme `@deprecated` dans JSDoc
2. Logger warning en dev
3. Maintenir rétrocompatibilité 1-2 versions
4. Supprimer dans version majeure suivante

**Exemple :**
```typescript
interface ButtonProps {
	/**
	 * @deprecated Use `tone` instead. Will be removed in v2.0.0
	 */
	color?: 'primary' | 'secondary';
	
	/** Preferred: use tone */
	tone?: Tone;
}

// Dans le composant
let { color, tone = color as Tone }: ButtonProps = $props();

if (color && import.meta.env.DEV) {
	console.warn('Button: `color` prop is deprecated. Use `tone` instead.');
}
```

---

## Exemples de Composants

### Button (Atomic)

```typescript
interface ButtonProps {
	variant?: 'solid' | 'outline' | 'ghost';
	tone?: 'primary' | 'neutral' | 'danger';
	size?: 'sm' | 'md' | 'lg';
	disabled?: boolean;
	loading?: boolean;
	fullWidth?: boolean;
	type?: 'button' | 'submit' | 'reset';
	href?: string;
	onClick?: (event: MouseEvent) => void;
	ariaLabel?: string;
	class?: string;
	children?: Snippet;
	iconLeft?: Snippet;
	iconRight?: Snippet;
}
```

### Input (Molecule)

```typescript
interface InputProps {
	type?: 'text' | 'email' | 'password' | 'number';
	name?: string;
	value?: string;
	placeholder?: string;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	invalid?: boolean;
	error?: string;
	hint?: string;
	label?: string;
	size?: 'sm' | 'md' | 'lg';
	onChange?: (value: string) => void;
	onBlur?: () => void;
	onFocus?: () => void;
	class?: string;
}
```

### Modal (Organism)

```typescript
interface ModalProps {
	open?: boolean;
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
	closeOnBackdrop?: boolean;
	closeOnEscape?: boolean;
	onClose?: () => void;
	onOpen?: () => void;
	title?: string;
	description?: string;
	ariaLabel?: string;
	class?: string;
	children?: Snippet;
	header?: Snippet;
	footer?: Snippet;
}
```

---

## Ressources

- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [XState Documentation](https://xstate.js.org/docs)
- [Svelte 5 Documentation](https://svelte.dev/docs/svelte/overview)

---

**Dernière mise à jour** : 2025-01-10
**Version** : 1.0.0
