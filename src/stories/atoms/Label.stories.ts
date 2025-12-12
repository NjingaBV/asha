import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Label from '$lib/components/atoms/Label.svelte';

const meta = {
	title: 'Atoms/Label',
	component: Label,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# Étiquette (Label)

Petite étiquette/badge pour mettre en avant les nouveaux produits ou fonctionnalités, inspiré par le design d'Apple.

## Caractéristiques
- Plusieurs schémas de couleurs sémantiques.
- Design compact.
- Style de texte en majuscules.
- Utilisé pour les badges "Nouveau".
`
			}
		}
	},
	argTypes: {
		text: {
			control: 'text',
			description: 'Label text'
		},
		tone: {
			control: 'select',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'],
			description: 'Semantic color tone'
		}
	}
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: 'New',
		tone: 'warning'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test: Label renders
		const label = canvas.getByText('New');
		expect(label).toBeInTheDocument();

		// Test: Verify text content
		expect(label).toHaveTextContent('New');

		// Test: Verify label is a span element
		expect(label.tagName).toBe('SPAN');

		// Test: Verify accessible styling classes are applied
		expect(label).toHaveClass('inline-flex');
		expect(label).toHaveClass('uppercase');
		expect(label).toHaveClass('font-semibold');

		// Test: Verify tone-specific classes
		expect(label).toHaveClass('bg-warning');
		expect(label).toHaveClass('text-white');
	}
};

export const Primary: Story = {
	args: {
		text: 'Featured',
		tone: 'primary'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test: Label renders with correct text
		const label = canvas.getByText('Featured');
		expect(label).toBeInTheDocument();

		// Test: Verify primary tone styling
		expect(label).toHaveClass('bg-accent');
		expect(label).toHaveClass('text-fg-on-accent');

		// Test: Verify base styling
		expect(label).toHaveClass('px-2');
		expect(label).toHaveClass('py-0.5');
		expect(label).toHaveClass('rounded');
		expect(label).toHaveClass('text-xs');
	}
};

export const Success: Story = {
	args: {
		text: 'Available',
		tone: 'success'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test: Label renders
		const label = canvas.getByText('Available');
		expect(label).toBeInTheDocument();

		// Test: Verify success tone styling
		expect(label).toHaveClass('bg-success');
		expect(label).toHaveClass('text-white');

		// Test: Verify tracking-wide class for uppercase text
		expect(label).toHaveClass('tracking-wide');
	}
};

export const Danger: Story = {
	args: {
		text: 'Limited',
		tone: 'danger'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test: Label renders
		const label = canvas.getByText('Limited');
		expect(label).toBeInTheDocument();

		// Test: Verify danger tone styling (error background)
		expect(label).toHaveClass('bg-error');
		expect(label).toHaveClass('text-white');

		// Test: Verify inline-flex layout
		expect(label).toHaveClass('inline-flex');
		expect(label).toHaveClass('items-center');
	}
};

export const Neutral: Story = {
	args: {
		text: 'Default',
		tone: 'neutral'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test: Label renders
		const label = canvas.getByText('Default');
		expect(label).toBeInTheDocument();

		// Test: Verify neutral tone styling
		expect(label).toHaveClass('bg-fg-muted');
		expect(label).toHaveClass('text-white');
	}
};

export const DefaultContent: Story = {
	args: {
		tone: 'primary'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test: When no text prop, defaults to "New"
		const label = canvas.getByText('New');
		expect(label).toBeInTheDocument();

		// Test: Default text is rendered
		expect(label.textContent).toBe('New');

		// Test: Verify it's rendered as uppercase text
		expect(label).toHaveClass('uppercase');
	}
};

export const Secondary: Story = {
	args: {
		text: 'Spotlight',
		tone: 'secondary'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test: Label renders
		const label = canvas.getByText('Spotlight');
		expect(label).toBeInTheDocument();

		// Test: Verify secondary tone styling
		expect(label).toHaveClass('bg-secondary');
		expect(label).toHaveClass('text-fg-on-accent');

		// Test: Verify semantic markup
		expect(label).toHaveClass('font-semibold');
		expect(label).toHaveClass('text-xs');
	}
};

export const WithLongText: Story = {
	args: {
		text: 'Latest Feature',
		tone: 'primary'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test: Label renders with longer text
		const label = canvas.getByText('Latest Feature');
		expect(label).toBeInTheDocument();

		// Test: Verify text content is preserved
		expect(label).toHaveTextContent('Latest Feature');

		// Test: Verify padding classes handle longer content
		expect(label).toHaveClass('px-2');
		expect(label).toHaveClass('py-0.5');

		// Test: Verify text layout
		expect(label).toHaveClass('inline-flex');
		expect(label).toHaveClass('items-center');
	}
};

export const AccessibleMarkup: Story = {
	args: {
		text: 'New',
		tone: 'warning'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test: Element is rendered
		const label = canvas.getByText('New');
		expect(label).toBeInTheDocument();

		// Test: Verify it's a semantic span element
		expect(label.tagName).toBe('SPAN');

		// Test: Verify all required classes for proper styling
		const requiredClasses = [
			'inline-flex',
			'items-center',
			'px-2',
			'py-0.5',
			'rounded',
			'text-xs',
			'font-semibold',
			'uppercase',
			'tracking-wide'
		];

		requiredClasses.forEach((className) => {
			expect(label).toHaveClass(className);
		});

		// Test: Verify text is visible and readable
		expect(label.textContent?.trim().length).toBeGreaterThan(0);
	}
};
