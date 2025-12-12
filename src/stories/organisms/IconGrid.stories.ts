import type { Meta, StoryObj } from '@storybook/sveltekit';
import IconGrid from '$lib/components/organisms/IconGrid.svelte';

const meta = {
	title: 'Organisms/IconGrid',
	component: IconGrid,
	tags: ['autodocs'],
	argTypes: {
		eyebrow: { control: 'text' },
		title: { control: 'text' },
		description: { control: 'text' },
		items: { control: 'object' },
		columns: {
			control: { type: 'select' },
			options: [2, 3, 4, 6]
		},
		cardSize: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		cardAlign: {
			control: { type: 'select' },
			options: ['left', 'center']
		}
	}
} satisfies Meta<typeof IconGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		eyebrow: 'Features',
		title: 'Everything you need',
		description: 'Our platform provides all the tools you need to succeed.',
		columns: 3,
		cardSize: 'md',
		cardAlign: 'center',
		items: [
			{
				icon: 'zap',
				title: 'Fast Performance',
				description: 'Lightning fast load times and smooth interactions.'
			},
			{
				icon: 'shield',
				title: 'Secure',
				description: 'Enterprise-grade security for your data.'
			},
			{
				icon: 'users',
				title: 'Team Collaboration',
				description: 'Work together seamlessly with your team.'
			},
			{
				icon: 'bar-chart',
				title: 'Analytics',
				description: 'Detailed insights and reporting.'
			},
			{
				icon: 'globe',
				title: 'Global Scale',
				description: 'Deploy anywhere in the world.'
			},
			{
				icon: 'headphones',
				title: '24/7 Support',
				description: 'Round the clock customer support.'
			}
		]
	}
};

export const TwoColumns: Story = {
	args: {
		...Default.args,
		columns: 2,
		title: 'Key Benefits'
	}
};

export const FourColumns: Story = {
	args: {
		...Default.args,
		columns: 4
	}
};

export const SmallCards: Story = {
	args: {
		...Default.args,
		cardSize: 'sm',
		title: 'Quick Features'
	}
};

export const LeftAligned: Story = {
	args: {
		...Default.args,
		cardAlign: 'left'
	}
};

export const WithLinks: Story = {
	args: {
		title: 'Explore Features',
		columns: 3,
		items: [
			{
				icon: 'file-text',
				title: 'Documentation',
				description: 'Read the docs',
				href: '/docs'
			},
			{
				icon: 'book',
				title: 'Tutorials',
				description: 'Learn step by step',
				href: '/tutorials'
			},
			{
				icon: 'code',
				title: 'API Reference',
				description: 'Technical documentation',
				href: '/api'
			}
		]
	}
};
