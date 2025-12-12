import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Text from '$lib/components/atoms/Text.svelte';

const meta = {
	title: 'Atoms/Text',
	component: Text,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Text (Paragraph)

A semantic paragraph component for body text with customizable sizing, colors, and line height.

## Features

- **Semantic HTML**: Renders \`<p>\` tag for proper document structure
- **Flexible Sizing**: sm, base, lg, xl, 2xl sizes
- **Color Control**: Supports any Tailwind color class
- **Line Height**: tight, normal, relaxed, loose options
- **Custom Classes**: Apply additional Tailwind or custom CSS
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'base', 'lg', 'xl', '2xl'],
			description: 'Text size',
			table: { defaultValue: { summary: 'base' } }
		},
		color: {
			control: 'text',
			description: 'Text color class (e.g., "text-slate-700", "text-blue-600")',
			table: { defaultValue: { summary: 'text-fg-muted' } }
		},
		leading: {
			control: { type: 'select' },
			options: ['tight', 'normal', 'relaxed', 'loose'],
			description: 'Line height',
			table: { defaultValue: { summary: 'relaxed' } }
		},
		class: {
			control: 'text',
			description: 'Additional CSS classes'
		},
		children: {
			control: 'text',
			description: 'Text content'
		}
	}
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 'base',
		color: 'text-fg-muted',
		leading: 'relaxed',
		children: () =>
			'This is a default paragraph with base size, muted color, and relaxed line height.'
	}
};

export const Small: Story = {
	args: {
		size: 'sm',
		color: 'text-fg-muted',
		children: () => 'Small text for captions, metadata, or less important information.'
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		color: 'text-fg',
		children: () => 'Large text for emphasis or featured content with prominent display.'
	}
};

export const ExtraLarge: Story = {
	args: {
		size: 'xl',
		color: 'text-fg',
		children: () => 'Extra large text for hero sections or prominent messaging.'
	}
};

export const DoubleExtraLarge: Story = {
	args: {
		size: '2xl',
		color: 'text-fg',
		children: () => '2XL text for major headlines and display purposes.'
	}
};

export const DarkColor: Story = {
	args: {
		size: 'base',
		color: 'text-slate-900',
		children: () => 'Paragraph with dark color for high contrast and strong visibility.'
	}
};

export const PrimaryColor: Story = {
	args: {
		size: 'base',
		color: 'text-blue-600',
		children: () => 'Paragraph with primary brand color for emphasis.'
	}
};

export const TightLeading: Story = {
	args: {
		size: 'lg',
		color: 'text-fg',
		leading: 'tight',
		children: () =>
			'Paragraph with tight line height. This compact spacing works well for headings or dense content.'
	}
};

export const LooseLeading: Story = {
	args: {
		size: 'base',
		color: 'text-fg-muted',
		leading: 'loose',
		children: () =>
			'Paragraph with loose line height. This open spacing improves readability for longer text passages and body copy.'
	}
};

export const LongText: Story = {
	args: {
		size: 'base',
		color: 'text-fg-muted',
		leading: 'relaxed',
		children: () =>
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
	}
};

// ============================================
// Play Tests - Rendering & Accessibility
// ============================================

export const TestTextRendering: Story = {
	args: {
		size: 'base',
		color: 'text-fg-muted',
		children: () => 'Test paragraph rendering'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const paragraph = canvas.getByText('Test paragraph rendering');
		expect(paragraph).toBeInTheDocument();
		expect(paragraph.tagName).toBe('P');
	}
};

export const TestSmallSize: Story = {
	args: {
		size: 'sm',
		color: 'text-fg-muted',
		children: () => 'Small text'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const paragraph = canvas.getByText('Small text');
		expect(paragraph).toBeInTheDocument();
		expect(paragraph).toHaveClass('text-sm');
	}
};

export const TestLargeSize: Story = {
	args: {
		size: 'lg',
		color: 'text-fg',
		children: () => 'Large text'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const paragraph = canvas.getByText('Large text');
		expect(paragraph).toBeInTheDocument();
		expect(paragraph).toHaveClass('text-lg');
	}
};

export const TestColor: Story = {
	args: {
		size: 'base',
		color: 'text-blue-600',
		children: () => 'Colored text'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const paragraph = canvas.getByText('Colored text');
		expect(paragraph).toBeInTheDocument();
		expect(paragraph).toHaveClass('text-blue-600');
	}
};

export const TestLeading: Story = {
	args: {
		size: 'base',
		color: 'text-fg-muted',
		leading: 'loose',
		children: () => 'Text with loose leading'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const paragraph = canvas.getByText('Text with loose leading');
		expect(paragraph).toBeInTheDocument();
		expect(paragraph).toHaveClass('leading-loose');
	}
};

export const TestSemanticHtml: Story = {
	args: {
		size: 'base',
		color: 'text-fg-muted',
		children: () => 'Semantic paragraph test'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const paragraph = canvasElement.querySelector('p');
		expect(paragraph).toBeInTheDocument();
		expect(paragraph?.tagName).toBe('P');
	}
};
