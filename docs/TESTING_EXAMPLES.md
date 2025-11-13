# Testing Examples - Guide Pratique

Des exemples détaillés pour tester différents types de composants.

## 📋 Table des matières

1. [Atoms - Composants Simples](#atoms---composants-simples)
2. [Molecules - Composants Interactifs](#molecules---composants-interactifs)
3. [Organisms - Composants Complexes](#organisms---composants-complexes)
4. [Patterns Spécifiques](#patterns-spécifiques)

## Atoms - Composants Simples

### Badge Component

```typescript
import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Badge from './Badge.svelte';

const meta = {
	title: 'Atoms/Badge',
	component: Badge,
	tags: ['autodocs']
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'New',
		color: 'primary',
		variant: 'solid'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Vérifier que le badge est rendu
		const badge = canvas.getByText('New');
		await expect(badge).toBeInTheDocument();
		await expect(badge).toBeVisible();

		// Test 2: Vérifier que le badge a le bon texte
		await expect(badge).toHaveTextContent('New');
	}
};

export const Success: Story = {
	args: {
		label: 'Available',
		color: 'success',
		variant: 'solid'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Available');
		await expect(badge).toBeInTheDocument();
	}
};
```

### Button Component

```typescript
import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Button from './Button.svelte';

const meta = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'primary',
		children: 'Click me'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /click me/i });

		// Test 1: Vérifier le rendu et la visibilité
		await expect(button).toBeInTheDocument();
		await expect(button).toBeVisible();

		// Test 2: Vérifier que le bouton n'est pas désactivé
		await expect(button).toBeEnabled();

		// Test 3: Tester le clic
		await userEvent.click(button);

		// Test 4: Vérifier que le focus a changé
		await expect(button).toHaveFocus();

		// Test 5: Accessibilité - Vérifier le nom accessible
		await expect(button).toHaveAccessibleName('Click me');
	}
};

export const Disabled: Story = {
	args: {
		variant: 'primary',
		disabled: true,
		children: 'Disabled'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /disabled/i });

		// Test 1: Vérifier que le bouton est désactivé
		await expect(button).toBeDisabled();

		// Test 2: Le bouton doit avoir l'attribut disabled
		await expect(button).toHaveAttribute('disabled');
	}
};

export const Loading: Story = {
	args: {
		variant: 'primary',
		loading: true,
		children: 'Loading...'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /loading/i });

		// Test 1: Le bouton doit être désactivé pendant le chargement
		await expect(button).toBeDisabled();

		// Test 2: Vérifier le texte de chargement
		await expect(button).toHaveTextContent('Loading...');
	}
};
```

---

## Molecules - Composants Interactifs

### Card Component (avec contenu et interactions)

```typescript
import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Card from './Card.svelte';

const meta = {
	title: 'Molecules/Card',
	component: Card,
	tags: ['autodocs']
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Product Card',
		description: 'This is a product card'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Vérifier que la carte est rendue
		const card = canvas.getByRole('article'); // ou l'élément approprié
		await expect(card).toBeInTheDocument();

		// Test 2: Vérifier le contenu
		const title = canvas.getByRole('heading', { name: /product card/i });
		await expect(title).toBeInTheDocument();

		const description = canvas.getByText('This is a product card');
		await expect(description).toBeInTheDocument();
	}
};

export const WithAction: Story = {
	args: {
		title: 'Product Card',
		description: 'This is a product card',
		hasButton: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Vérifier que le bouton existe
		const button = canvas.getByRole('button', { name: /action/i });
		await expect(button).toBeInTheDocument();

		// Test 2: Simuler le clic sur le bouton
		await userEvent.click(button);

		// Test 3: Vérifier l'état après le clic
		// (ex: classe active, focus, etc.)
		await expect(button).toHaveFocus();
	}
};
```

### Form Input Component

```typescript
import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Input from './Input.svelte';

const meta = {
	title: 'Molecules/Input',
	component: Input,
	tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Email',
		placeholder: 'Enter your email',
		type: 'email'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Vérifier que l'input existe
		const input = canvas.getByLabelText('Email');
		await expect(input).toBeInTheDocument();

		// Test 2: Vérifier le placeholder
		await expect(input).toHaveAttribute('placeholder', 'Enter your email');

		// Test 3: Tester la saisie
		await userEvent.type(input, 'test@example.com');
		await expect(input).toHaveValue('test@example.com');

		// Test 4: Accessibilité - Vérifier que l'input a un label
		const label = canvas.getByText('Email');
		await expect(label).toBeInTheDocument();
	}
};

export const WithValidation: Story = {
	args: {
		label: 'Email',
		type: 'email',
		required: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Email');

		// Test 1: Vérifier que l'input est required
		await expect(input).toHaveAttribute('required');

		// Test 2: Tester la validation (si implémentée)
		await userEvent.type(input, 'invalid-email');
		// Vérifier les messages d'erreur si présents

		// Test 3: Tester la saisie valide
		await userEvent.clear(input);
		await userEvent.type(input, 'valid@example.com');
		// Vérifier que l'erreur disparaît
	}
};

export const Disabled: Story = {
	args: {
		label: 'Email',
		disabled: true,
		value: 'disabled@example.com'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Email');

		// Test 1: Vérifier que l'input est désactivé
		await expect(input).toBeDisabled();

		// Test 2: Le contenu ne doit pas être modifiable
		const initialValue = input.value;
		await userEvent.type(input, 'new-text');
		await expect(input).toHaveValue(initialValue);
	}
};
```

---

## Organisms - Composants Complexes

### Modal/Dialog Component

```typescript
import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Modal from './Modal.svelte';

const meta = {
	title: 'Organisms/Modal',
	component: Modal,
	tags: ['autodocs']
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		isOpen: true,
		title: 'Confirm Action',
		message: 'Are you sure?'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Vérifier que le modal est visible
		const dialog = canvas.getByRole('dialog');
		await expect(dialog).toBeInTheDocument();

		// Test 2: Vérifier le titre
		const title = canvas.getByRole('heading', { name: /confirm action/i });
		await expect(title).toBeInTheDocument();

		// Test 3: Vérifier le message
		const message = canvas.getByText('Are you sure?');
		await expect(message).toBeInTheDocument();

		// Test 4: Vérifier les boutons d'action
		const confirmBtn = canvas.getByRole('button', { name: /confirm/i });
		const cancelBtn = canvas.getByRole('button', { name: /cancel/i });
		await expect(confirmBtn).toBeInTheDocument();
		await expect(cancelBtn).toBeInTheDocument();

		// Test 5: Tester le clic sur le bouton d'annulation
		await userEvent.click(cancelBtn);
		// Vérifier que le modal se ferme (cela dépend de l'implémentation)
	}
};

export const WithLongContent: Story = {
	args: {
		isOpen: true,
		title: 'Terms and Conditions',
		message: 'A very long terms and conditions text...'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const dialog = canvas.getByRole('dialog');

		// Test 1: Le dialog doit être présent
		await expect(dialog).toBeInTheDocument();

		// Test 2: Vérifier que le contenu est scrollable si nécessaire
		// (dépend de l'implémentation CSS)
	}
};
```

### Carousel/Slider Component

```typescript
import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Carousel from './Carousel.svelte';

const meta = {
	title: 'Organisms/Carousel',
	component: Carousel,
	tags: ['autodocs']
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: [
			{ id: 1, title: 'Slide 1' },
			{ id: 2, title: 'Slide 2' },
			{ id: 3, title: 'Slide 3' }
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Vérifier que le carousel est rendu
		const carousel = canvas.getByRole('region', { name: /carousel/i });
		await expect(carousel).toBeInTheDocument();

		// Test 2: Vérifier le premier slide
		const firstSlide = canvas.getByText('Slide 1');
		await expect(firstSlide).toBeInTheDocument();

		// Test 3: Tester le bouton suivant
		const nextBtn = canvas.getByRole('button', { name: /next/i });
		await userEvent.click(nextBtn);

		// Test 4: Vérifier que le slide a changé
		const secondSlide = canvas.getByText('Slide 2');
		await expect(secondSlide).toBeInTheDocument();

		// Test 5: Tester le bouton précédent
		const prevBtn = canvas.getByRole('button', { name: /previous/i });
		await userEvent.click(prevBtn);

		// Test 6: Vérifier le retour au premier slide
		await expect(firstSlide).toBeInTheDocument();
	}
};
```

---

## Patterns Spécifiques

### Pattern 1: Tester l'Accessibilité au Clavier

```typescript
export const KeyboardNavigation: Story = {
	args: {
		/* ... */
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test: Navigation au clavier
		// Tab pour passer au prochain élément focusable
		await userEvent.tab();
		const firstFocusable = canvas.getByRole('button');
		await expect(firstFocusable).toHaveFocus();

		// Espace ou Entrée pour activer
		await userEvent.keyboard('{Enter}');
		// Vérifier l'action

		// Tab pour passer au suivant
		await userEvent.tab();
		const nextFocusable = canvas.getByRole('button', { name: /next/i });
		await expect(nextFocusable).toHaveFocus();

		// Échapper pour fermer si applicable
		await userEvent.keyboard('{Escape}');
	}
};
```

### Pattern 2: Tester les Changements d'État

```typescript
export const StateChanges: Story = {
	args: {
		/* ... */
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByRole('checkbox');

		// État initial
		await expect(element).not.toBeChecked();

		// Changement d'état
		await userEvent.click(element);
		await expect(element).toBeChecked();

		// Changement inverse
		await userEvent.click(element);
		await expect(element).not.toBeChecked();
	}
};
```

### Pattern 3: Tester les Validations de Formulaire

```typescript
export const FormValidation: Story = {
	args: {
		/* ... */
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const form = canvas.getByRole('form');
		const input = canvas.getByLabelText('Email');
		const submitBtn = canvas.getByRole('button', { name: /submit/i });

		// Test 1: Soumission avec valeur invalide
		await userEvent.type(input, 'invalid-email');
		await userEvent.click(submitBtn);

		// Vérifier le message d'erreur
		const error = canvas.getByText(/invalid email/i);
		await expect(error).toBeInTheDocument();

		// Test 2: Correction et soumission réussie
		await userEvent.clear(input);
		await userEvent.type(input, 'valid@example.com');
		await userEvent.click(submitBtn);

		// Vérifier que l'erreur disparaît
		await expect(error).not.toBeInTheDocument();
	}
};
```

### Pattern 4: Tester les Async/Loading States

```typescript
export const AsyncOperation: Story = {
	args: {
		/* ... */
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /submit/i });

		// Test 1: État initial
		await expect(button).toBeEnabled();
		await expect(button).not.toHaveAttribute('aria-busy', 'true');

		// Test 2: Clic et loading
		await userEvent.click(button);
		await expect(button).toBeDisabled();

		// Attendre l'état final (peut nécessiter waitFor)
		// Cela dépend du timing de votre composant
	}
};
```

---

## 🎯 Bonnes Pratiques

✅ **À faire:**

- Utiliser `getByRole` pour une meilleure accessibilité
- Tester les comportements, pas les implémentations
- Vérifier l'accessibilité dans chaque test
- Utiliser des commentaires pour les tests complexes

❌ **À éviter:**

- `querySelector` ou `getElementById` (manque d'accessibilité)
- Tester les détails d'implémentation CSS
- Ignorer les tests d'accessibilité
- Tests fragiles qui dépendent du timing

---

## 📚 Ressources

- [Storybook Play Function](https://storybook.js.org/docs/writing-stories/play-function)
- [Testing Library Docs](https://testing-library.com/)
- [WCAG 2.1 Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)
