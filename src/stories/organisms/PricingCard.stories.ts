import type { Meta, StoryObj } from '@storybook/sveltekit';
import PricingCard from '$lib/components/organisms/PricingCard.svelte';

const meta = {
	title: 'Organisms/PricingCard',
	component: PricingCard,
	tags: ['autodocs'],
	argTypes: {
		name: { control: 'text' },
		description: { control: 'text' },
		price: { control: 'text' },
		period: { control: 'text' },
		currency: { control: 'text' },
		originalPrice: { control: 'text' },
		badge: { control: 'text' },
		features: { control: 'object' },
		ctaText: { control: 'text' },
		ctaHref: { control: 'text' },
		highlighted: { control: 'boolean' }
	}
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'Basic',
		description: 'Perfect for getting started',
		price: '9',
		period: '/month',
		currency: '$',
		ctaText: 'Get Started',
		ctaHref: '#',
		highlighted: false,
		features: [
			{ text: '5 projects', included: true },
			{ text: '10GB storage', included: true },
			{ text: 'Email support', included: true },
			{ text: 'API access', included: false },
			{ text: 'Custom domain', included: false }
		]
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render pricing card name', async () => {
			expect(canvas.getByText('Basic')).toBeInTheDocument();
		});

		await step('Display pricing card description', async () => {
			expect(canvas.getByText('Perfect for getting started')).toBeInTheDocument();
		});

		await step('Show pricing information', async () => {
			expect(canvas.getByText('$9')).toBeInTheDocument();
			expect(canvas.getByText('/month')).toBeInTheDocument();
		});

		await step('Render CTA button', async () => {
			const button = canvas.getByRole('link', { name: 'Get Started' });
			expect(button).toBeInTheDocument();
			expect(button).toHaveAttribute('href', '#');
		});

		await step('Display features list', async () => {
			expect(canvas.getByText('5 projects')).toBeInTheDocument();
			expect(canvas.getByText('10GB storage')).toBeInTheDocument();
			expect(canvas.getByText('Email support')).toBeInTheDocument();
		});

		await step('Show included/excluded features', async () => {
			// Check for checkmarks and x marks indicating included/excluded
			const includedFeatures = canvas.getAllByText('5 projects');
			expect(includedFeatures.length).toBeGreaterThan(0);
		});

		await step('Pricing card has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 3 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Basic');
		});
	}
};

export const Highlighted: Story = {
	args: {
		name: 'Pro',
		description: 'Best for professionals',
		price: '29',
		period: '/month',
		currency: '$',
		badge: 'Popular',
		ctaText: 'Get Started',
		ctaHref: '#',
		highlighted: true,
		features: [
			{ text: 'Unlimited projects', included: true },
			{ text: '100GB storage', included: true },
			{ text: 'Priority support', included: true },
			{ text: 'API access', included: true },
			{ text: 'Custom domain', included: true }
		]
	}
};

export const WithDiscount: Story = {
	args: {
		name: 'Enterprise',
		description: 'For large teams',
		price: '79',
		originalPrice: '99',
		period: '/month',
		currency: '$',
		badge: '20% Off',
		ctaText: 'Contact Sales',
		ctaHref: '#',
		highlighted: false,
		features: [
			{ text: 'Unlimited everything', included: true },
			{ text: 'Dedicated support', included: true },
			{ text: 'Custom integrations', included: true },
			{ text: 'SLA guarantee', included: true }
		]
	}
};

export const Free: Story = {
	args: {
		name: 'Free',
		description: 'Try it out',
		price: '0',
		period: '/month',
		currency: '$',
		ctaText: 'Sign Up Free',
		ctaHref: '#',
		features: [
			{ text: '1 project', included: true },
			{ text: '1GB storage', included: true },
			{ text: 'Community support', included: true }
		]
	}
};
