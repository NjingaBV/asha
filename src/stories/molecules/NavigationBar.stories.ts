import type { Meta, StoryObj } from '@storybook/sveltekit';
import NavigationBar from '$lib/components/molecules/NavigationBar.svelte';

const meta = {
	title: 'Molecules/NavigationBar',
	component: NavigationBar,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `# NavigationBar Component

Horizontal sticky navigation bar for Mac models. Features a clean, centered layout with multiple product links.

## Features
- Sticky positioning
- Centered navigation items
- Active state highlighting
- Responsive horizontal scrolling
- Backdrop blur effect`
			}
		}
	},
	argTypes: {
		items: {
			control: 'object',
			description: 'Navigation items array'
		},
		sticky: {
			control: 'boolean',
			description: 'Enable sticky positioning'
		}
	}
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MacNavigation: Story = {
	args: {
		items: [
			{ label: 'MacBook Air', href: '#macbook-air' },
			{ label: 'MacBook Pro', href: '#macbook-pro' },
			{ label: 'iMac', href: '#imac' },
			{ label: 'Mac mini', href: '#mac-mini' },
			{ label: 'Mac Studio', href: '#mac-studio' },
			{ label: 'Mac Pro', href: '#mac-pro' },
			{ label: 'Compare', href: '#compare' },
			{ label: 'Accessories', href: '#accessories' }
		],
		activeHref: '#macbook-air',
		sticky: true
	}
};

export const SimpleNav: Story = {
	args: {
		items: [
			{ label: 'MacBook Air', href: '#macbook-air' },
			{ label: 'MacBook Pro', href: '#macbook-pro' },
			{ label: 'iMac', href: '#imac' },
			{ label: 'Compare', href: '#compare' }
		],
		sticky: false
	}
};
