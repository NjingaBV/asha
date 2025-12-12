import type { Meta, StoryObj } from '@storybook/sveltekit';
import Stat from '$lib/components/molecules/Stat.svelte';

const meta = {
	title: 'Molecules/Stat',
	component: Stat,
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Stat label/title'
		},
		value: {
			control: 'text',
			description: 'Stat value'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Stat size'
		},
		change: {
			control: 'number',
			description: 'Change percentage'
		},
		changeType: {
			control: { type: 'select' },
			options: ['increase', 'decrease', 'neutral'],
			description: 'Change type'
		},
		helpText: {
			control: 'text',
			description: 'Help text'
		}
	}
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Total Users',
		value: '12,345',
		size: 'md'
	}
};

export const WithIncrease: Story = {
	args: {
		label: 'Revenue',
		value: '$45,231',
		change: 12.5,
		changeType: 'increase',
		size: 'md'
	}
};

export const WithDecrease: Story = {
	args: {
		label: 'Bounce Rate',
		value: '32.1%',
		change: -5.2,
		changeType: 'decrease',
		size: 'md'
	}
};

export const WithHelpText: Story = {
	args: {
		label: 'Active Sessions',
		value: '1,234',
		helpText: 'Updated every 5 minutes',
		size: 'md'
	}
};

export const Small: Story = {
	args: {
		label: 'Downloads',
		value: '8.2K',
		change: 3.1,
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		label: 'Total Revenue',
		value: '$1.2M',
		change: 24.8,
		changeType: 'increase',
		size: 'lg'
	}
};

export const NeutralChange: Story = {
	args: {
		label: 'Conversion Rate',
		value: '4.5%',
		change: 0,
		changeType: 'neutral',
		size: 'md'
	}
};

export const FullExample: Story = {
	args: {
		label: 'Monthly Active Users',
		value: '847,293',
		change: 8.3,
		changeType: 'increase',
		helpText: 'Compared to last month',
		size: 'lg'
	}
};

export const Percentage: Story = {
	args: {
		label: 'Completion Rate',
		value: '89%',
		change: 5,
		size: 'md'
	}
};

export const Currency: Story = {
	args: {
		label: 'Average Order Value',
		value: '€127.50',
		change: -2.3,
		changeType: 'decrease',
		helpText: 'Down from last week',
		size: 'md'
	}
};
