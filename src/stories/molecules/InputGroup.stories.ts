import type { Meta, StoryObj } from '@storybook/sveltekit';
import InputGroup from '$lib/components/molecules/InputGroup.svelte';

const meta = {
	title: 'Molecules/InputGroup',
	component: InputGroup,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Group size'
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state for all children'
		}
	}
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 'md',
		disabled: false
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render input group', async () => {
			expect(canvasElement).toBeInTheDocument();
		});

		await step('Input group has medium size class', async () => {
			const group = canvasElement.querySelector('[class*="size"]');
			expect(group).toBeInTheDocument();
		});

		await step('Group is not disabled by default', async () => {
			const inputs = canvasElement.querySelectorAll('input');
			inputs.forEach((input) => {
				expect(input).not.toBeDisabled();
			});
		});
	}
};

export const Small: Story = {
	args: {
		size: 'sm',
		disabled: false
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		disabled: false
	}
};

export const Disabled: Story = {
	args: {
		size: 'md',
		disabled: true
	}
};
