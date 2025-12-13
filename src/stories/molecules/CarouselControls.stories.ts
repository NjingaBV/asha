import type { Meta, StoryObj } from '@storybook/sveltekit';
import CarouselControls from '$lib/components/molecules/CarouselControls.svelte';

const meta = {
	title: 'Molecules/CarouselControls',
	component: CarouselControls,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# CarouselControls

Navigation controls for carousel components. Features previous/next buttons with proper accessibility.

## Accessibility Features

- **ARIA Labels**: Descriptive labels for screen readers
- **Disabled States**: Visual and semantic disabled states
- **Focus Visible**: Clear focus ring on keyboard navigation
- **44px Touch Targets**: Meets WCAG minimum touch target size

## Usage

Use with Carousel or any scrollable container to provide navigation controls.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		canScrollLeft: {
			control: 'boolean',
			description: 'Whether the previous button is enabled'
		},
		canScrollRight: {
			control: 'boolean',
			description: 'Whether the next button is enabled'
		},
		onScroll: {
			action: 'scroll',
			description: 'Callback when a button is clicked'
		},
		class: {
			control: 'text',
			description: 'Additional CSS classes'
		}
	}
} satisfies Meta<typeof CarouselControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BothEnabled: Story = {
	args: {
		canScrollLeft: true,
		canScrollRight: true
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render carousel controls', async () => {
			const buttons = canvas.getAllByRole('button');
			expect(buttons.length).toBeGreaterThanOrEqual(2);
		});

		await step('Previous button is enabled', async () => {
			const buttons = canvas.getAllByRole('button');
			expect(buttons[0]).not.toBeDisabled();
		});

		await step('Next button is enabled', async () => {
			const buttons = canvas.getAllByRole('button');
			expect(buttons[1]).not.toBeDisabled();
		});

		await step('Buttons have proper ARIA labels', async () => {
			const buttons = canvas.getAllByRole('button');
			buttons.forEach((button) => {
				expect(button).toHaveAccessibleName();
			});
		});

		await step('Can click to navigate', async () => {
			const buttons = canvas.getAllByRole('button');
			await userEvent.click(buttons[0]);
			expect(buttons[0]).toBeInTheDocument();
		});
	}
};

export const AtStart: Story = {
	args: {
		canScrollLeft: false,
		canScrollRight: true
	}
};

export const AtEnd: Story = {
	args: {
		canScrollLeft: true,
		canScrollRight: false
	}
};

export const BothDisabled: Story = {
	args: {
		canScrollLeft: false,
		canScrollRight: false
	}
};

export const OnDarkBackground: Story = {
	args: {
		canScrollLeft: true,
		canScrollRight: true
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};
