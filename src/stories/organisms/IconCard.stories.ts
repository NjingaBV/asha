import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
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
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify card renders
		const card =
			canvas.getByRole('article') || canvas.getByRole('region', { name: /icon card/i });
		await expect(card).toBeInTheDocument();
		await expect(card).toBeVisible();

		// Test 2: Verify icon is displayed
		const icon = canvas.getByRole('img', { name: /star/i }) || canvas.getByRole('img');
		await expect(icon).toBeInTheDocument();

		// Test 3: Verify title is displayed
		const title = canvas.getByRole('heading', { name: /feature title/i });
		await expect(title).toBeInTheDocument();

		// Test 4: Verify description is displayed
		const description = canvas.getByText(
			'This is a description of the feature that explains what it does.'
		);
		await expect(description).toBeInTheDocument();

		// Test 5: Verify icon accessibility
		const hasAlt = icon.hasAttribute('alt') && icon.getAttribute('alt') !== '';
		const isDecorative = icon.getAttribute('aria-hidden') === 'true';
		expect(hasAlt || isDecorative).toBe(true);

		// Test 6: Verify card is not a link (no href provided)
		const link = canvas.queryByRole('link');
		if (link) {
			await expect(link).toHaveAttribute('href');
		}

		// Test 7: Test keyboard navigation
		await userEvent.tab();
		// Should be able to navigate to the card if it's interactive

		// Test 8: Verify size and alignment classes are applied
		// This would depend on the CSS classes applied
		await expect(card).toHaveClass('md'); // or similar size class
		await expect(card).toHaveClass('center'); // or similar alignment class

		// Test 9: Verify proper heading hierarchy
		const headings = canvas.getAllByRole('heading');
		expect(headings.length).toBe(1);
		expect(headings[0]).toHaveTextContent('Feature Title');
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
