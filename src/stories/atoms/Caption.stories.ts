import type { Meta, StoryObj } from '@storybook/sveltekit';
import Caption from '$lib/components/atoms/Caption.svelte';

const meta = {
	title: 'Atoms/Caption',
	component: Caption,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Caption

A small uppercase label that appears above headings to provide context, category, or branding information.
Previously known as "Eyebrow".

## Features

- **Uppercase Style**: Automatically transforms text to uppercase with wide spacing
- **Semantic Hierarchy**: Positions above main headings to establish content hierarchy
- **Simple Alignment**: Left or center alignment options
- **Subtle Style**: Muted color and small size for non-intrusive labeling
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		text: {
			control: 'text',
			description: 'The caption text content. Keep it short (1-3 words) for best results.'
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center'],
			description: 'Text alignment',
			table: { defaultValue: { summary: 'center' } }
		}
	}
} satisfies Meta<typeof Caption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: 'Apple Watch',
		align: 'center'
	}
};

export const Center: Story = {
	args: {
		text: 'Featured Product',
		align: 'center'
	}
};

export const Left: Story = {
	args: {
		text: 'Series 10',
		align: 'left'
	}
};

export const NewRelease: Story = {
	args: {
		text: 'New Release',
		align: 'center'
	}
};

export const Category: Story = {
	args: {
		text: 'MacBook Pro',
		align: 'left'
	}
};
