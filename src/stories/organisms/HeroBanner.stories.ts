import type { Meta, StoryObj } from '@storybook/sveltekit';
import HeroBanner from '$lib/components/organisms/HeroBanner.svelte';

const meta = {
	title: 'Organisms/HeroBanner',
	component: HeroBanner,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Welcome to Our Platform',
		subtitle: 'Discover amazing features',
		description:
			'Experience the power of modern web development with our comprehensive toolkit.',
		primaryAction: { label: 'Get Started', href: '#' },
		secondaryAction: { label: 'Learn More', href: '#' },
		backgroundColor: '#000000',
		textColor: 'light'
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render banner title', async () => {
			expect(canvas.getByText('Welcome to Our Platform')).toBeInTheDocument();
		});

		await step('Display banner subtitle', async () => {
			expect(canvas.getByText('Discover amazing features')).toBeInTheDocument();
		});

		await step('Show banner description', async () => {
			expect(canvas.getByText(/Experience the power/)).toBeInTheDocument();
		});

		await step('Render primary CTA button', async () => {
			const primaryButton = canvas.getByRole('link', { name: 'Get Started' });
			expect(primaryButton).toBeInTheDocument();
			expect(primaryButton).toHaveAttribute('href', '#');
		});

		await step('Render secondary CTA button', async () => {
			const secondaryButton = canvas.getByRole('link', { name: 'Learn More' });
			expect(secondaryButton).toBeInTheDocument();
			expect(secondaryButton).toHaveAttribute('href', '#');
		});

		await step('Banner has proper heading hierarchy', async () => {
			const heading = canvas.getByRole('heading', { level: 1 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Welcome to Our Platform');
		});
	}
};

export const WithImageBackground: Story = {
	args: {
		title: 'Explore Our Products',
		subtitle: 'Quality and Innovation',
		description: 'Discover our range of high-quality products designed for modern lifestyles.',
		primaryAction: { label: 'Shop Now', href: '/products' },
		secondaryAction: { label: 'View Gallery', href: '/gallery' },
		backgroundImage:
			'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop',
		textColor: 'light',
		overlayOpacity: 0.3
	}
};

export const WithVideoBackground: Story = {
	args: {
		title: 'Experience the Future',
		description: 'See how our technology transforms everyday experiences.',
		primaryAction: { label: 'Watch Demo', href: '/demo' },
		backgroundVideo:
			'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
		textColor: 'light',
		overlayOpacity: 0.5
	}
};

export const LightTheme: Story = {
	args: {
		title: 'Clean and Simple',
		subtitle: 'Minimalist Design',
		description: 'Enjoy a clean interface that focuses on what matters most.',
		primaryAction: { label: 'Try It Free', href: '/signup' },
		secondaryAction: { label: 'Contact Us', href: '/contact' },
		backgroundColor: '#ffffff',
		textColor: 'dark'
	}
};

export const Minimal: Story = {
	args: {
		title: 'Just the Essentials',
		primaryAction: { label: 'Start Here', href: '/start' },
		backgroundColor: '#f8f9fa',
		textColor: 'dark',
		showScrollIndicator: false
	}
};
