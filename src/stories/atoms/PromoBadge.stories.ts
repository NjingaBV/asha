import type { Meta, StoryObj } from '@storybook/sveltekit';
import PromoBadge from '@/lib/components/atoms/PromoBadge.svelte';

const meta = {
	title: 'Atoms/PromoBadge',
	component: PromoBadge,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# PromoBadge

A promotional badge component for highlighting special offers, new products, or limited availability.

## Features

- **Accent Tone**: High-visibility warning/promotional colors
- **Neutral Tone**: Subtle, informational badges
- **Pill Shape**: Rounded full for a modern look
- **Uppercase Text**: Bold, attention-grabbing typography
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'The badge text'
		},
		tone: {
			control: { type: 'select' },
			options: ['accent', 'neutral'],
			description: 'Visual tone: accent for promotions, neutral for info'
		}
	}
} satisfies Meta<typeof PromoBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accent: Story = {
	args: {
		label: 'New',
		tone: 'accent'
	}
};

export const Neutral: Story = {
	args: {
		label: 'Coming Soon',
		tone: 'neutral'
	}
};

export const LimitedEdition: Story = {
	args: {
		label: 'Limited Edition',
		tone: 'accent'
	}
};

export const InStock: Story = {
	args: {
		label: 'In Stock',
		tone: 'neutral'
	}
};

export const Sale: Story = {
	args: {
		label: 'Save $200',
		tone: 'accent'
	}
};

export const AllVariants: Story = {
	render: () => ({
		Component: PromoBadge,
		props: { label: '' },
		template: `
			<div class="flex flex-wrap gap-4 items-center">
				<PromoBadge label="New" tone="accent" />
				<PromoBadge label="Limited" tone="accent" />
				<PromoBadge label="Coming Soon" tone="neutral" />
				<PromoBadge label="Pre-order" tone="neutral" />
			</div>
		`
	})
};
