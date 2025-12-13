import type { Meta, StoryObj } from '@storybook/sveltekit';
import TestimonialCard from '$lib/components/organisms/TestimonialCard.svelte';

const meta = {
	title: 'Organisms/TestimonialCard',
	component: TestimonialCard,
	tags: ['autodocs'],
	argTypes: {
		quote: { control: 'text' },
		author: { control: 'text' },
		title: { control: 'text' },
		company: { control: 'text' },
		avatar: { control: 'text' },
		rating: { control: { type: 'number', min: 1, max: 5 } },
		variant: {
			control: { type: 'select' },
			options: ['default', 'compact', 'featured']
		}
	}
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		quote: 'This product has completely transformed how our team works. The efficiency gains have been remarkable.',
		author: 'Sarah Johnson',
		title: 'Product Manager',
		company: 'TechCorp',
		avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
		rating: 5,
		variant: 'default'
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render testimonial quote', async () => {
			expect(canvas.getByText(/This product has completely transformed/)).toBeInTheDocument();
		});

		await step('Display author information', async () => {
			expect(canvas.getByText('Sarah Johnson')).toBeInTheDocument();
			expect(canvas.getByText('Product Manager')).toBeInTheDocument();
			expect(canvas.getByText('TechCorp')).toBeInTheDocument();
		});

		await step('Show rating stars', async () => {
			// Check for 5 stars (rating = 5)
			const stars = canvas.getAllByRole('img', { name: /star/i });
			expect(stars.length).toBe(5);
		});

		await step('Render avatar image', async () => {
			const avatar = canvas.getByRole('img', { name: 'Sarah Johnson' });
			expect(avatar).toBeInTheDocument();
		});

		await step('Testimonial card has proper accessibility structure', async () => {
			const blockquote = canvas.getByRole('blockquote');
			expect(blockquote).toBeInTheDocument();
		});
	}
};

export const Compact: Story = {
	args: {
		...Default.args,
		variant: 'compact'
	}
};

export const Featured: Story = {
	args: {
		...Default.args,
		variant: 'featured'
	}
};

export const NoAvatar: Story = {
	args: {
		quote: 'An incredible tool that has saved us countless hours.',
		author: 'Michael Chen',
		title: 'CTO',
		company: 'StartupXYZ',
		rating: 5,
		variant: 'default'
	}
};

export const NoRating: Story = {
	args: {
		quote: 'The best investment we have made for our development workflow.',
		author: 'Emily Davis',
		title: 'Engineering Lead',
		company: 'DevCo',
		avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
		variant: 'default'
	}
};

export const FourStars: Story = {
	args: {
		...Default.args,
		rating: 4,
		quote: 'Great product with some room for improvement, but overall very satisfied.'
	}
};
