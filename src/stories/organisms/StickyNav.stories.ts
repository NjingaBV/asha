import type { Meta, StoryObj } from '@storybook/sveltekit';
import StickyNav from '$lib/components/organisms/StickyNav.svelte';

const meta = {
	title: 'Organisms/StickyNav',
	component: StickyNav,
	tags: ['autodocs'],
	argTypes: {
		logo: { control: 'object' },
		links: { control: 'object' },
		cta: { control: 'object' },
		dark: { control: 'boolean' }
	}
} satisfies Meta<typeof StickyNav>;

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

export const NoCTA: Story = {
	args: {
		logo: { title: 'Apple Watch' },
		links: [
			{ label: 'Overview', href: '#' },
			{ label: 'Features', href: '#' },
			{ label: 'Compare', href: '#' }
		],
		cta: null,
		dark: true
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};
