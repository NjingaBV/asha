import type { Meta, StoryObj } from '@storybook/sveltekit';
import StatsSection from '$lib/components/organisms/StatsSection.svelte';

const meta = {
	title: 'Organisms/StatsSection',
	component: StatsSection,
	tags: ['autodocs'],
	argTypes: {
		eyebrow: { control: 'text' },
		title: { control: 'text' },
		description: { control: 'text' },
		stats: { control: 'object' },
		columns: {
			control: { type: 'select' },
			options: [2, 3, 4]
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		variant: {
			control: { type: 'select' },
			options: ['default', 'muted', 'accent']
		}
	}
} satisfies Meta<typeof StatsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Trusted by developers worldwide',
		columns: 4,
		size: 'md',
		variant: 'default',
		stats: [
			{ value: '10K+', label: 'Active Users' },
			{ value: '99.9%', label: 'Uptime' },
			{ value: '24/7', label: 'Support' },
			{ value: '150+', label: 'Countries' }
		]
	}
};

export const WithChange: Story = {
	args: {
		title: 'Growth Metrics',
		columns: 3,
		stats: [
			{ value: '2.5M', label: 'Revenue', prefix: '$', change: 12.5 },
			{ value: '48K', label: 'New Users', change: 8.2 },
			{ value: '32K', label: 'Active Sessions', change: -2.4 }
		]
	}
};

export const Muted: Story = {
	args: {
		...Default.args,
		variant: 'muted'
	}
};

export const Accent: Story = {
	args: {
		...Default.args,
		variant: 'accent'
	}
};

export const TwoColumns: Story = {
	args: {
		title: 'Key Statistics',
		columns: 2,
		stats: [
			{ value: '500+', label: 'Enterprise Clients' },
			{ value: '50M+', label: 'API Requests/Day' }
		]
	}
};

export const WithHeader: Story = {
	args: {
		eyebrow: 'By the numbers',
		title: 'Powering the future of development',
		description: 'See how our platform helps teams build better software faster.',
		columns: 4,
		stats: [
			{ value: '10K+', label: 'Active Users' },
			{ value: '99.9%', label: 'Uptime' },
			{ value: '24/7', label: 'Support' },
			{ value: '150+', label: 'Countries' }
		]
	}
};
