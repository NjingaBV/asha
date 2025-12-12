import type { Meta, StoryObj } from '@storybook/sveltekit';
import PageHeader from '$lib/components/organisms/PageHeader.svelte';

const meta = {
	title: 'Organisms/PageHeader',
	component: PageHeader,
	tags: ['autodocs'],
	argTypes: {
		name: { control: 'text' },
		tagline: { control: 'text' },
		description: { control: 'text' },
		price: { control: 'text' },
		badge: { control: 'text' },
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark']
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center']
		},
		ctas: { control: 'object' }
	}
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'MacBook Air',
		tagline: 'Thin, light, and incredibly powerful.',
		description: 'M3 chip, up to 18 hours battery life, Liquid Retina display.',
		price: 'From $1,299',
		badge: 'New',
		tone: 'light',
		align: 'left',
		ctas: {
			primary: { label: 'Buy', href: '#' },
			secondary: { label: 'Learn more', href: '#' }
		}
	}
};

export const DarkMode: Story = {
	args: {
		...Default.args,
		tone: 'dark',
		name: 'MacBook Pro',
		tagline: 'Built for pros.'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};

export const Centered: Story = {
	args: {
		...Default.args,
		align: 'center'
	}
};
