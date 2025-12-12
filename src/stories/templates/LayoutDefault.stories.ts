import type { Meta, StoryObj } from '@storybook/sveltekit';
import LayoutDefault from '$lib/components/templates/LayoutDefault.svelte';

const meta = {
	title: 'Templates/LayoutDefault',
	component: LayoutDefault,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		class: {
			control: 'text',
			description: 'Custom CSS classes for main content'
		}
	}
} satisfies Meta<typeof LayoutDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const WithCustomClass: Story = {
	args: {
		class: 'bg-gray-100'
	}
};
