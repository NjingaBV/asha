import type { Meta, StoryObj } from '@storybook/sveltekit';
import Paragraph from '@/lib/components/atoms/Paragraph.svelte';

const meta = {
	title: 'Atoms/Paragraph',
	component: Paragraph,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Paragraph Component

A semantic paragraph component for structured text content with customizable sizing, color, and line height.

## Features

- **Semantic HTML**: Uses proper \`<p>\` tag for accessibility
- **Four Sizes**: sm, base, lg, xl for flexible text hierarchy
- **Color Support**: Tailwind color classes for text styling
- **Line Height Control**: tight, normal, relaxed, loose options
- **Svelte 5 Pattern**: Uses snippet \`children\` for flexible content
- **Composable**: Easily combine with other text components

## Use Cases

- Body text and descriptions
- Feature descriptions
- Product details
- Blog content
- Form labels and help text
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['sm', 'base', 'lg', 'xl'],
			description:
				'Text size: "sm" (14px), "base" (16px), "lg" (18px), "xl" (20px). Default is "base".'
		},
		color: {
			control: 'text',
			description:
				'Tailwind color class (e.g., "text-gray-700", "text-blue-600", "text-red-500"). Default is "text-gray-700".'
		},
		leading: {
			control: 'select',
			options: ['tight', 'normal', 'relaxed', 'loose'],
			description:
				'Line height: "tight" (1.25), "normal" (1.5), "relaxed" (1.625), "loose" (2). Default is "relaxed".'
		},
		class: {
			control: 'text',
			description: 'Additional CSS classes for custom styling'
		}
	}
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		size: 'base',
		color: 'text-gray-700',
		leading: 'relaxed'
	},
	render: ({ size, color, leading, class: className }) => ({
		Component: Paragraph,
		props: { size, color, leading, class: className },
		children:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
	})
};

export const Small: Story = {
	args: {
		size: 'sm',
		color: 'text-gray-600',
		leading: 'normal'
	},
	render: ({ size, color, leading, class: className }) => ({
		Component: Paragraph,
		props: { size, color, leading, class: className },
		children: 'Small paragraph text for captions, helper text, or secondary information.'
	})
};

export const Large: Story = {
	args: {
		size: 'lg',
		color: 'text-gray-800',
		leading: 'relaxed'
	},
	render: ({ size, color, leading, class: className }) => ({
		Component: Paragraph,
		props: { size, color, leading, class: className },
		children:
			'Large paragraph text for highlighted content, introductions, or featured descriptions.'
	})
};

export const ExtraLarge: Story = {
	args: {
		size: 'xl',
		color: 'text-gray-900',
		leading: 'loose'
	},
	render: ({ size, color, leading, class: className }) => ({
		Component: Paragraph,
		props: { size, color, leading, class: className },
		children:
			'Extra large paragraph text for prominent content, hero sections, or main messages.'
	})
};

export const Tight: Story = {
	args: {
		size: 'base',
		color: 'text-gray-700',
		leading: 'tight'
	},
	render: ({ size, color, leading, class: className }) => ({
		Component: Paragraph,
		props: { size, color, leading, class: className },
		children:
			'Tight line height for dense text presentation.\nUseful for headlines or compact layouts.\nProvides visual emphasis through compression.'
	})
};

export const Loose: Story = {
	args: {
		size: 'base',
		color: 'text-gray-700',
		leading: 'loose'
	},
	render: ({ size, color, leading, class: className }) => ({
		Component: Paragraph,
		props: { size, color, leading, class: className },
		children:
			'Loose line height for improved readability.\nGreat for long-form content.\nIncreases visual breathing room and reduces cognitive load.'
	})
};

export const Colored: Story = {
	args: {
		size: 'base',
		color: 'text-blue-600',
		leading: 'relaxed'
	},
	render: ({ size, color, leading, class: className }) => ({
		Component: Paragraph,
		props: { size, color, leading, class: className },
		children:
			'This paragraph uses a blue color (text-blue-600) to demonstrate color customization.'
	})
};

export const WithCustomClass: Story = {
	args: {
		size: 'base',
		color: 'text-gray-700',
		leading: 'relaxed',
		class: 'italic font-semibold'
	},
	render: ({ size, color, leading, class: className }) => ({
		Component: Paragraph,
		props: { size, color, leading, class: className },
		children:
			'This paragraph has custom classes applied (italic font-semibold) for additional styling flexibility.'
	})
};
