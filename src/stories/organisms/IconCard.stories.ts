import type { Meta, StoryObj } from '@storybook/sveltekit';
import IconCard from '$lib/components/organisms/IconCard.svelte';

const meta = {
	title: 'Organisms/IconCard',
	component: IconCard,
	tags: ['autodocs'],
	argTypes: {
		icon: { control: 'text' },
		title: { control: 'text' },
		description: { control: 'text' },
		iconBg: { control: 'text' },
		iconColor: { control: 'text' },
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center']
		},
		href: { control: 'text' }
	}
} satisfies Meta<typeof IconCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		icon: 'star',
		title: 'Feature Title',
		description: 'This is a description of the feature that explains what it does.',
		size: 'md',
		align: 'center'
	}
};

export const Small: Story = {
	args: {
		...Default.args,
		size: 'sm',
		title: 'Small Card'
	}
};

export const Large: Story = {
	args: {
		...Default.args,
		size: 'lg',
		title: 'Large Card'
	}
};

export const LeftAligned: Story = {
	args: {
		...Default.args,
		align: 'left',
		title: 'Left Aligned'
	}
};

export const WithLink: Story = {
	args: {
		...Default.args,
		href: '/features',
		title: 'Clickable Card'
	}
};

export const CustomColors: Story = {
	args: {
		icon: 'zap',
		title: 'Custom Styled',
		description: 'Card with custom icon colors.',
		iconBg: 'bg-yellow-100',
		iconColor: 'text-yellow-600',
		size: 'md',
		align: 'center'
	}
};
