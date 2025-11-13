import type { Meta, StoryObj } from '@storybook/sveltekit';
import Label from '$lib/components/atoms/Label.svelte';

const meta = {
	title: 'Atoms/Label',
	component: Label,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `# Label Component

Small badge/tag for highlighting new products or features, inspired by Apple's design.

## Features
- Multiple color schemes
- Compact design
- Uppercase text styling
- Used for "New" badges`
			}
		}
	},
	argTypes: {
		text: {
			control: 'text',
			description: 'Label text'
		},
		color: {
			control: 'select',
			options: ['blue', 'orange', 'red', 'green', 'purple', 'slate'],
			description: 'Color scheme'
		}
	}
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const New: Story = {
	args: {
		text: 'New',
		color: 'orange'
	}
};

export const Blue: Story = {
	args: {
		text: 'Featured',
		color: 'blue'
	}
};

export const Green: Story = {
	args: {
		text: 'Available',
		color: 'green'
	}
};

export const Red: Story = {
	args: {
		text: 'Limited',
		color: 'red'
	}
};
