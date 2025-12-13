import type { Meta, StoryObj } from '@storybook/sveltekit';
import ComparisonSection from '$lib/components/organisms/ComparisonSection.svelte';

const meta = {
	title: 'Organisms/ComparisonSection',
	component: ComparisonSection,
	tags: ['autodocs']
} satisfies Meta<typeof ComparisonSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render section title', async () => {
			expect(canvas.getByText('Help me choose.')).toBeInTheDocument();
		});

		await step('Display section description', async () => {
			expect(
				canvas.getByText('Answer a few questions to find the best Mac for you.')
			).toBeInTheDocument();
		});

		await step('Render CTA button', async () => {
			const button = canvas.getByRole('link', { name: 'Get started' });
			expect(button).toBeInTheDocument();
			expect(button).toHaveAttribute('href', '/mac/best-mac/#help-me-choose');
		});

		await step('Display illustration image', async () => {
			const image = canvas.getByRole('img', { name: 'Help me choose illustration' });
			expect(image).toBeInTheDocument();
		});

		await step('Comparison section has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Help me choose.');
		});
	}
};
