import type { Meta, StoryObj } from '@storybook/sveltekit';
import SectionHeader from '$lib/components/organisms/SectionHeader.svelte';

const meta = {
	title: 'Organisms/SectionHeader',
	component: SectionHeader,
	tags: ['autodocs'],
	argTypes: {
		eyebrow: { control: 'text' },
		title: { control: 'text' },
		description: { control: 'text' },
		level: {
			control: { type: 'select' },
			options: [1, 2, 3, 4, 5, 6]
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center', 'right']
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		}
	}
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		eyebrow: 'Features',
		title: 'Everything you need to succeed',
		description:
			'Our platform provides all the tools necessary to build, deploy, and scale your applications.',
		level: 2,
		align: 'center',
		size: 'md'
	}
};

export const LeftAligned: Story = {
	args: {
		...Default.args,
		align: 'left'
	}
};

export const RightAligned: Story = {
	args: {
		...Default.args,
		align: 'right'
	}
};

export const Small: Story = {
	args: {
		...Default.args,
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		...Default.args,
		size: 'lg'
	}
};

export const NoEyebrow: Story = {
	args: {
		title: 'Section Title Only',
		description: 'Sometimes you just need a title and description.',
		align: 'center',
		size: 'md'
	}
};

export const TitleOnly: Story = {
	args: {
		title: 'Simple Section Header',
		align: 'center',
		size: 'md'
	}
};
