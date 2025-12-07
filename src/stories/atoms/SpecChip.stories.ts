import type { Meta, StoryObj } from '@storybook/sveltekit';
import SpecChip from '@/lib/components/atoms/SpecChip.svelte';

const meta = {
	title: 'Atoms/SpecChip',
	component: SpecChip,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# SpecChip

A compact specification display component for showing label-value pairs, commonly used in product specifications.

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
			description: 'Whether to display the value in larger text'
		},
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark'],
			description: 'Visual tone for light or dark backgrounds'
		}
	}
} satisfies Meta<typeof SpecChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Display',
		value: '15.3-inch Liquid Retina XDR',
		emphasize: false,
		tone: 'light'
	}
};

export const Emphasized: Story = {
	args: {
		label: 'Chip',
		value: 'M3 Pro',
		emphasize: true,
		tone: 'light'
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
	}
};

export const SpecGrid: Story = {
	render: () => ({
		Component: SpecChip,
		props: { label: '', value: '' },
		// Render multiple chips in a grid
		template: `
			<div class="grid grid-cols-2 gap-4 p-4">
				<SpecChip label="Display" value="15.3-inch" />
				<SpecChip label="Chip" value="M3 Pro" emphasize />
				<SpecChip label="Memory" value="18GB unified" />
				<SpecChip label="Storage" value="512GB SSD" />
			</div>
		`
	})
};
