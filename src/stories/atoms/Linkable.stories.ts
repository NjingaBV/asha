import type { Meta, StoryObj } from '@storybook/sveltekit';
import LinkableComp from '$lib/components/atoms/Linkable.svelte';

const meta = {
	title: 'Atoms/Linkable',
	component: LinkableComp,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Linkable Component

A wrapper component that conditionally renders content as a link or plain content based on the \`isLinkable\` prop.

## Features

- **Conditional Rendering**: Renders as \`<a>\` or plain snippet based on \`isLinkable\` prop
- **Target Control**: Supports standard link target attributes (_self, _blank, etc.)
- **Security**: Includes \`rel="noreferrer"\` for external links
- **Snippet Pattern**: Uses Svelte 5 \`children\` snippet for flexible content
- **Composability**: Perfect wrapper for making elements optionally linkable

## Use Cases

- Cards that may or may not be clickable
- Products that link conditionally
- Feature items with optional navigation
- Dynamic content wrappers
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		isLinkable: {
			control: 'boolean',
			description: 'Whether to render as a link (true) or plain content (false)'
		},
		link: {
			control: 'text',
			description: 'URL to navigate to when isLinkable is true'
		},
		target: {
			control: 'select',
			options: ['_self', '_blank', '_parent', '_top'],
			description: 'Link target attribute. Use "_blank" to open in new tab'
		}
	}
} satisfies Meta<LinkableComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotLinkable: Story = {
	args: {
		isLinkable: false,
		link: undefined,
		target: '_self'
	},
	render: ({ isLinkable, link, target }: any) => ({
		Component: LinkableComp,
		props: { isLinkable, link, target }
	})
};

export const LinkableActive: Story = {
	args: {
		isLinkable: true,
		link: '/about',
		target: '_self'
	},
	render: ({ isLinkable, link, target }: any) => ({
		Component: LinkableComp,
		props: { isLinkable, link, target }
	})
};

export const ExternalLink: Story = {
	args: {
		isLinkable: true,
		link: 'https://example.com',
		target: '_blank'
	},
	render: ({ isLinkable, link, target }: any) => ({
		Component: LinkableComp,
		props: { isLinkable, link, target }
	})
};
