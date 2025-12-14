import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureDiscovery from '$lib/components/organisms/FeatureDiscovery.svelte';

const meta = {
	title: 'Organisms/FeatureDiscovery',
	component: FeatureDiscovery,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
		pattern: {
			control: { type: 'select' },
			options: ['cards', 'tabs', 'accordion']
		}
	}
} satisfies Meta<typeof FeatureDiscovery>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFeatures = [
	{
		icon: 'performance',
		title: 'Performance and Battery Life',
		description: 'Go fast. Go far.',
		link: '/performance'
	},
	{
		icon: 'ai',
		title: 'Built for AI',
		description: 'Smart. Secure. On device.',
		link: '/ai'
	},
	{
		icon: 'compatibility',
		title: 'Compatibility',
		description: 'Runs your favorite apps.',
		link: '/compatibility'
	},
	{
		icon: 'security',
		title: 'Privacy and Security',
		description: "Your business is nobody else's.",
		link: '/security'
	},
	{
		icon: 'durability',
		title: 'Durability',
		description: 'Built to stand the test of time.',
		link: '/durability'
	},
	{
		icon: 'values',
		title: 'Company Values',
		description: 'Our values drive everything we do.',
		link: '/values'
	}
];

export const Default: Story = {
	args: {
		title: 'Discover Features',
		subtitle: 'Explore what makes this special',
		features: sampleFeatures,
		pattern: 'cards'
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render section title', async () => {
			expect(canvas.getByText('Discover Features')).toBeInTheDocument();
		});

		await step('Render subtitle', async () => {
			expect(canvas.getByText('Explore what makes this special')).toBeInTheDocument();
		});

		await step('Display feature cards', async () => {
			expect(canvas.getByText('Performance and Battery Life')).toBeInTheDocument();
			expect(canvas.getByText('Built for AI')).toBeInTheDocument();
			expect(canvas.getByText('Compatibility')).toBeInTheDocument();
		});

		await step('Show feature descriptions', async () => {
			expect(canvas.getByText('Go fast. Go far.')).toBeInTheDocument();
			expect(canvas.getByText('Smart. Secure. On device.')).toBeInTheDocument();
			expect(canvas.getByText('Runs your favorite apps.')).toBeInTheDocument();
		});

		await step('Render feature links', async () => {
			const links = canvas.getAllByRole('link');
			expect(links.length).toBeGreaterThan(0);
			expect(links[0]).toHaveAttribute('href', '/performance');
		});

		await step('Feature discovery has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Discover Features');
		});
	}
};

export const WithoutIcons: Story = {
	args: {
		title: 'Key Features',
		features: sampleFeatures.map(({ icon, ...feature }) => feature),
		pattern: 'cards'
	}
};

export const WithoutLinks: Story = {
	args: {
		title: 'Feature Overview',
		features: sampleFeatures.map(({ link, ...feature }) => feature),
		pattern: 'cards'
	}
};

export const Minimal: Story = {
	args: {
		title: 'Features',
		features: [
			{
				title: 'Simple Feature',
				description: 'A basic feature description.'
			}
		],
		pattern: 'cards'
	}
};
