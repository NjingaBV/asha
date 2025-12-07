import type { Meta, StoryObj } from '@storybook/sveltekit';
import StickyProductNav from '$lib/components/organisms/StickyProductNav.svelte';

const meta = {
	title: 'Organisms/StickyProductNav',
	component: StickyProductNav,
	tags: ['autodocs'],
	argTypes: {
		logo: { control: 'object' },
		links: { control: 'object' },
		cta: { control: 'object' },
		dark: { control: 'boolean' }
	}
} satisfies Meta<typeof StickyProductNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		logo: { title: 'MacBook Pro' },
		links: [
			{ label: 'Overview', href: '#' },
			{ label: 'Tech Specs', href: '#' },
			{ label: 'Compare', href: '#' }
		],
		cta: { label: 'Buy', href: '#' },
		dark: true
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};

export const Light: Story = {
	args: {
		...Default.args,
		dark: false
	},
	parameters: {
		backgrounds: { default: 'light' }
	}
};
