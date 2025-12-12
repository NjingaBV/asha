import type { Meta, StoryObj } from '@storybook/sveltekit';
import Tooltip from '$lib/components/organisms/Tooltip.svelte';

const meta = {
	title: 'Organisms/Tooltip',
	component: Tooltip,
	tags: ['autodocs'],
	argTypes: {
		content: { control: 'text' },
		position: {
			control: { type: 'select' },
			options: ['top', 'bottom', 'left', 'right']
		},
		delay: { control: { type: 'number', min: 0 } }
	}
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		content: 'This is a tooltip',
		position: 'top',
		delay: 200
	}
};

export const Bottom: Story = {
	args: {
		...Default.args,
		position: 'bottom',
		content: 'Tooltip on bottom'
	}
};

export const Left: Story = {
	args: {
		...Default.args,
		position: 'left',
		content: 'Tooltip on left'
	}
};

export const Right: Story = {
	args: {
		...Default.args,
		position: 'right',
		content: 'Tooltip on right'
	}
};

export const NoDelay: Story = {
	args: {
		...Default.args,
		delay: 0,
		content: 'Instant tooltip'
	}
};

export const LongDelay: Story = {
	args: {
		...Default.args,
		delay: 500,
		content: 'Delayed tooltip (500ms)'
	}
};

export const LongContent: Story = {
	args: {
		...Default.args,
		content: 'This is a tooltip with a longer piece of content to display.'
	}
};
