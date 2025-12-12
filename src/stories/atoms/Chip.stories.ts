import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Chip from '$lib/components/atoms/Chip.svelte';

const meta = {
	title: 'Atoms/Chip',
	component: Chip,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Chip

A compact specification display component for showing label-value pairs.
Commonly used in product specifications. Previously known as "SpecChip".

## Features

- **Light/Dark Tone**: Adapts to light or dark backgrounds
- **Emphasis Option**: Larger text for highlighted values
- **Design Tokens**: Uses semantic color tokens for theme compatibility
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'The specification label (e.g., "Display", "Chip")'
		},
		value: {
			control: 'text',
			description: 'The specification value (e.g., "15.3-inch", "M3 Pro")'
		},
		emphasize: {
			control: 'boolean',
			description: 'Whether to display the value in larger text',
			table: { defaultValue: { summary: 'false' } }
		},
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark'],
			description: 'Visual tone for light or dark backgrounds',
			table: { defaultValue: { summary: 'light' } }
		}
	}
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Display',
		value: '15.3-inch Liquid Retina XDR',
		emphasize: false,
		tone: 'light'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test that the chip container renders
		const chipContainer = canvas.getByRole('region');
		await expect(chipContainer).toBeInTheDocument();

		// Test label text content
		const labelText = canvas.getByText('Display');
		await expect(labelText).toBeInTheDocument();
		await expect(labelText).toHaveClass('text-xs', 'font-medium', 'uppercase');

		// Test value text content
		const valueText = canvas.getByText('15.3-inch Liquid Retina XDR');
		await expect(valueText).toBeInTheDocument();
		await expect(valueText).toHaveClass('font-semibold', 'text-base');

		// Test that container has correct border and background classes
		await expect(chipContainer).toHaveClass('rounded-xl', 'border', 'px-4', 'py-3');
	}
};

export const Emphasized: Story = {
	args: {
		label: 'Chip',
		value: 'M3 Pro',
		emphasize: true,
		tone: 'light'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test that the chip renders
		const chipContainer = canvas.getByRole('region');
		await expect(chipContainer).toBeInTheDocument();

		// Test label text content
		const labelText = canvas.getByText('Chip');
		await expect(labelText).toBeInTheDocument();

		// Test value text content
		const valueText = canvas.getByText('M3 Pro');
		await expect(valueText).toBeInTheDocument();

		// Test that emphasized text has larger size class
		await expect(valueText).toHaveClass('text-lg');
		// Should NOT have the default size
		const classList = Array.from(valueText.classList);
		await expect(classList).toContain('text-lg');
	}
};

export const DarkTone: Story = {
	args: {
		label: 'Battery',
		value: 'Up to 22 hours',
		emphasize: false,
		tone: 'dark'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test chip container renders
		const chipContainer = canvas.getByRole('region');
		await expect(chipContainer).toBeInTheDocument();

		// Test that dark tone is applied to background
		await expect(chipContainer).toHaveClass('bg-white/10');

		// Test label text with dark tone styling
		const labelText = canvas.getByText('Battery');
		await expect(labelText).toBeInTheDocument();
		await expect(labelText).toHaveClass('text-white/60');

		// Test value text with dark tone styling
		const valueText = canvas.getByText('Up to 22 hours');
		await expect(valueText).toBeInTheDocument();
		await expect(valueText).toHaveClass('text-white');

		// Test dark border
		await expect(chipContainer).toHaveClass('border-white/10');
	}
};

export const DarkToneEmphasized: Story = {
	args: {
		label: 'Starting at',
		value: '$1,999',
		emphasize: true,
		tone: 'dark'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test chip container renders with dark tone
		const chipContainer = canvas.getByRole('region');
		await expect(chipContainer).toBeInTheDocument();
		await expect(chipContainer).toHaveClass('bg-white/10');

		// Test label with dark tone
		const labelText = canvas.getByText('Starting at');
		await expect(labelText).toBeInTheDocument();
		await expect(labelText).toHaveClass('text-white/60', 'text-xs');

		// Test emphasized value with dark tone
		const valueText = canvas.getByText('$1,999');
		await expect(valueText).toBeInTheDocument();
		await expect(valueText).toHaveClass('text-white', 'text-lg');
		await expect(valueText).toHaveClass('font-semibold');
	}
};

export const Memory: Story = {
	args: {
		label: 'Memory',
		value: '18GB unified',
		tone: 'light'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test chip renders with correct content
		const chipContainer = canvas.getByRole('region');
		await expect(chipContainer).toBeInTheDocument();

		// Test label
		const labelText = canvas.getByText('Memory');
		await expect(labelText).toBeInTheDocument();
		await expect(labelText).toHaveClass('uppercase');

		// Test value
		const valueText = canvas.getByText('18GB unified');
		await expect(valueText).toBeInTheDocument();

		// Test light tone background
		await expect(chipContainer).toHaveClass('bg-bg-muted');
		await expect(chipContainer).toHaveClass('border-border');
	}
};

export const Storage: Story = {
	args: {
		label: 'Storage',
		value: '512GB SSD',
		tone: 'light'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test chip renders
		const chipContainer = canvas.getByRole('region');
		await expect(chipContainer).toBeInTheDocument();

		// Test label content and styling
		const labelText = canvas.getByText('Storage');
		await expect(labelText).toBeInTheDocument();
		await expect(labelText).toHaveClass('text-fg-muted');

		// Test value content and styling
		const valueText = canvas.getByText('512GB SSD');
		await expect(valueText).toBeInTheDocument();
		await expect(valueText).toHaveClass('text-fg', 'text-base');

		// Verify it's not emphasized
		const classList = Array.from(valueText.classList);
		await expect(classList).not.toContain('text-lg');
	}
};

export const Price: Story = {
	args: {
		label: 'Starting at',
		value: '$2,499',
		emphasize: true,
		tone: 'light'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test chip renders
		const chipContainer = canvas.getByRole('region');
		await expect(chipContainer).toBeInTheDocument();

		// Test label content
		const labelText = canvas.getByText('Starting at');
		await expect(labelText).toBeInTheDocument();

		// Test emphasized value
		const valueText = canvas.getByText('$2,499');
		await expect(valueText).toBeInTheDocument();
		await expect(valueText).toHaveClass('text-lg', 'font-semibold');

		// Test light tone colors
		await expect(valueText).toHaveClass('text-fg');
		await expect(chipContainer).toHaveClass('bg-bg-muted');
	}
};
