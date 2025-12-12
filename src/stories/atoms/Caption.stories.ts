import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
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

// ============================================
// Play Tests - Rendering & Styling
// ============================================

export const TestDefaultRender: Story = {
	args: {
		text: 'Featured Product',
		align: 'center'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const caption = canvas.getByText('Featured Product');
		expect(caption).toBeInTheDocument();
		expect(caption.tagName).toBe('P');
	}
};

export const TestCenterAlignment: Story = {
	args: {
		text: 'Centered Caption',
		align: 'center'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const caption = canvas.getByText('Centered Caption');
		expect(caption).toBeInTheDocument();
		expect(caption).toHaveClass('text-center');
	}
};

export const TestLeftAlignment: Story = {
	args: {
		text: 'Left Aligned Caption',
		align: 'left'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const caption = canvas.getByText('Left Aligned Caption');
		expect(caption).toBeInTheDocument();
		expect(caption).toHaveClass('text-left');
	}
};

export const TestTextContent: Story = {
	args: {
		text: 'SERIES 10 LAUNCH',
		align: 'center'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const caption = canvas.getByText('SERIES 10 LAUNCH');
		expect(caption).toBeInTheDocument();
		// Caption should render the text
		expect(caption.textContent).toBe('SERIES 10 LAUNCH');
	}
};

export const TestUppercaseStyle: Story = {
	args: {
		text: 'new release',
		align: 'center'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const caption = canvas.getByText('new release');
		expect(caption).toBeInTheDocument();
		// Verify uppercase styling is applied
		expect(caption).toHaveClass('uppercase');
	}
};

export const TestLetterSpacing: Story = {
	args: {
		text: 'PREMIUM PRODUCT',
		align: 'left'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const caption = canvas.getByText('PREMIUM PRODUCT');
		expect(caption).toBeInTheDocument();
		// Verify letter spacing (tracking) is applied
		expect(caption).toHaveClass('tracking-wider');
	}
};
