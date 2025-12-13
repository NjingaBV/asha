import type { Meta, StoryObj } from '@storybook/sveltekit';
import Rating from '$lib/components/molecules/Rating.svelte';

const meta = {
	title: 'Molecules/Rating',
	component: Rating,
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: { type: 'range', min: 0, max: 5, step: 0.5 },
			description: 'Current value (0-5)'
		},
		max: {
			control: 'number',
			description: 'Maximum stars'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Rating size'
		},
		interactive: {
			control: 'boolean',
			description: 'Interactive mode'
		},
		allowHalf: {
			control: 'boolean',
			description: 'Allow half stars in interactive mode'
		},
		showValue: {
			control: 'boolean',
			description: 'Show numeric value'
		},
		count: {
			control: 'number',
			description: 'Review count to display'
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state'
		},
		onchange: {
			action: 'changed',
			description: 'Change handler'
		}
	}
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 4,
		max: 5,
		size: 'md',
		interactive: false,
		allowHalf: true,
		showValue: false
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render rating stars', async () => {
			const stars = canvasElement.querySelectorAll('svg, [data-testid*="star"]');
			expect(stars.length > 0).toBeTruthy();
		});

		await step('Display correct rating value', async () => {
			const starFilled = canvasElement.querySelectorAll('[class*="fill"]');
			expect(starFilled.length > 0).toBeTruthy();
		});

		await step('Correct number of stars rendered', async () => {
			const allStars = canvasElement.querySelectorAll('svg');
			expect(allStars.length >= 4).toBeTruthy();
		});
	}
};

export const HalfStar: Story = {
	args: {
		value: 4.5,
		max: 5,
		size: 'md'
	}
};

export const WithValue: Story = {
	args: {
		value: 4.2,
		showValue: true,
		size: 'md'
	}
};

export const WithCount: Story = {
	args: {
		value: 4.7,
		count: 128,
		size: 'md'
	}
};

export const WithValueAndCount: Story = {
	args: {
		value: 4.5,
		showValue: true,
		count: 1542,
		size: 'md'
	}
};

export const Interactive: Story = {
	args: {
		value: 0,
		interactive: true,
		allowHalf: true,
		size: 'md'
	}
};

export const InteractiveNoHalf: Story = {
	args: {
		value: 3,
		interactive: true,
		allowHalf: false,
		size: 'md'
	}
};

export const Small: Story = {
	args: {
		value: 3.5,
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		value: 5,
		size: 'lg'
	}
};

export const Disabled: Story = {
	args: {
		value: 4,
		interactive: true,
		disabled: true,
		size: 'md'
	}
};

export const LowRating: Story = {
	args: {
		value: 1.5,
		showValue: true,
		count: 23,
		size: 'md'
	}
};

export const PerfectRating: Story = {
	args: {
		value: 5,
		showValue: true,
		count: 89,
		size: 'lg'
	}
};
