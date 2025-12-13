import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureDiscovery from '$lib/components/organisms/FeatureDiscovery.svelte';

const meta = {
	title: 'Organisms/FeatureDiscovery',
	component: FeatureDiscovery,
	tags: ['autodocs']
} satisfies Meta<typeof FeatureDiscovery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render section title', async () => {
			expect(canvas.getByText('Get to know Mac.')).toBeInTheDocument();
		});

		await step('Display feature cards', async () => {
			expect(canvas.getByText('Performance and Battery Life')).toBeInTheDocument();
			expect(canvas.getByText('Built for AI')).toBeInTheDocument();
			expect(canvas.getByText('macOS and Apple Intelligence')).toBeInTheDocument();
		});

		await step('Show feature descriptions', async () => {
			expect(canvas.getByText('Go fast. Go far.')).toBeInTheDocument();
			expect(canvas.getByText('Smart. Secure. On device.')).toBeInTheDocument();
			expect(canvas.getByText('Easy to use. Easy to love.')).toBeInTheDocument();
		});

		await step('Render feature links', async () => {
			const links = canvas.getAllByRole('link');
			expect(links.length).toBeGreaterThan(0);
			expect(links[0]).toHaveAttribute('href', expect.stringContaining('?focus='));
		});

		await step('Feature discovery has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Get to know Mac.');
		});
	}
};
