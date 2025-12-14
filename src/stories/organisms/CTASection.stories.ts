import type { Meta, StoryObj } from '@storybook/sveltekit';
import CTASection from '$lib/components/organisms/CTASection.svelte';

const meta = {
	title: 'Organisms/CTASection',
	component: CTASection,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
		reasons: { control: 'object' },
		ctaText: { control: 'text' },
		ctaHref: { control: 'text' },
		background: { control: 'text' }
	}
} satisfies Meta<typeof CTASection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Why choose Acme Corp?',
		subtitle: 'Discover what makes us the best choice for your business needs.',
		ctaText: 'Get Started',
		ctaHref: '/start',
		reasons: [
			{
				icon: 'star',
				title: 'Premium Quality',
				description: 'Industry-leading quality standards that exceed expectations.',
				ctaText: 'Learn More',
				ctaHref: '/quality'
			},
			{
				icon: 'shield',
				title: 'Secure & Reliable',
				description: 'Enterprise-grade security with 99.9% uptime guarantee.',
				ctaText: 'Security Info',
				ctaHref: '/security'
			},
			{
				icon: 'heart',
				title: '24/7 Support',
				description: 'Round-the-clock customer support from our expert team.',
				ctaText: 'Contact Support',
				ctaHref: '/support'
			}
		]
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render section title', async () => {
			expect(canvas.getByText('Why choose Acme Corp?')).toBeInTheDocument();
		});

		await step('Render subtitle', async () => {
			expect(
				canvas.getByText('Discover what makes us the best choice for your business needs.')
			).toBeInTheDocument();
		});

		await step('Display main CTA button', async () => {
			const mainButton = canvas.getByRole('link', { name: 'Get Started' });
			expect(mainButton).toBeInTheDocument();
			expect(mainButton).toHaveAttribute('href', '/start');
		});

		await step('Render benefit cards', async () => {
			expect(canvas.getByText('Premium Quality')).toBeInTheDocument();
			expect(canvas.getByText('Secure & Reliable')).toBeInTheDocument();
			expect(canvas.getByText('24/7 Support')).toBeInTheDocument();
		});

		await step('Show benefit descriptions', async () => {
			expect(
				canvas.getByText('Industry-leading quality standards that exceed expectations.')
			).toBeInTheDocument();
			expect(
				canvas.getByText('Enterprise-grade security with 99.9% uptime guarantee.')
			).toBeInTheDocument();
			expect(
				canvas.getByText('Round-the-clock customer support from our expert team.')
			).toBeInTheDocument();
		});

		await step('Render benefit CTA buttons', async () => {
			const qualityButton = canvas.getByRole('link', { name: 'Learn More' });
			expect(qualityButton).toBeInTheDocument();
			expect(qualityButton).toHaveAttribute('href', '/quality');

			const securityButton = canvas.getByRole('link', { name: 'Security Info' });
			expect(securityButton).toBeInTheDocument();
		});

		await step('CTA section has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Why choose Acme Corp?');
		});
	}
};

export const Minimal: Story = {
	args: {
		title: 'Why choose us?',
		ctaText: 'Learn More',
		reasons: [
			{
				title: 'Quality First',
				description: 'We prioritize quality in everything we do.'
			},
			{
				title: 'Expert Team',
				description: 'Our team consists of industry experts.'
			}
		]
	}
};

export const WithIcons: Story = {
	args: {
		title: 'Our Advantages',
		reasons: [
			{
				icon: 'star',
				title: 'Top Rated',
				description: 'Rated #1 by customers worldwide.'
			},
			{
				icon: 'shield',
				title: 'Trusted',
				description: 'Trusted by millions of users.'
			},
			{
				icon: 'heart',
				title: 'Loved',
				description: 'Loved by our community.'
			}
		],
		ctaText: 'Join Now',
		ctaHref: '/join'
	}
};

export const NoReasons: Story = {
	args: {
		title: 'Get Started Today',
		subtitle: 'Join thousands of satisfied customers.',
		ctaText: 'Sign Up',
		ctaHref: '/signup'
	}
};
