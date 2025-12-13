import type { Meta, StoryObj } from '@storybook/sveltekit';
import CTASection from '$lib/components/organisms/CTASection.svelte';

const meta = {
	title: 'Organisms/CTASection',
	component: CTASection,
	tags: ['autodocs']
} satisfies Meta<typeof CTASection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render section title', async () => {
			expect(canvas.getByText('Why Apple is the best place to buy Mac.')).toBeInTheDocument();
		});

		await step('Display main CTA button', async () => {
			const mainButton = canvas.getByRole('link', { name: 'Shop Mac' });
			expect(mainButton).toBeInTheDocument();
			expect(mainButton).toHaveAttribute('href', '/us/shop/goto/buy_mac');
		});

		await step('Render benefit cards', async () => {
			expect(
				canvas.getByText('Save on a new Mac with education pricing.')
			).toBeInTheDocument();
			expect(canvas.getByText('Join an online Personal Setup session.')).toBeInTheDocument();
			expect(canvas.getByText('Customize your Mac.')).toBeInTheDocument();
		});

		await step('Show benefit descriptions', async () => {
			expect(
				canvas.getByText('Available to college students and educators.')
			).toBeInTheDocument();
			expect(canvas.getByText(/Talk one on one with a Specialist/)).toBeInTheDocument();
			expect(
				canvas.getByText('Choose your chip, memory, storage, even color.')
			).toBeInTheDocument();
		});

		await step('Render benefit CTA buttons', async () => {
			const educationButton = canvas.getByRole('link', { name: 'Education Pricing' });
			expect(educationButton).toBeInTheDocument();
			expect(educationButton).toHaveAttribute('href', '/us/shop/goto/educationrouting');

			const setupButton = canvas.getByRole('link', { name: 'Personal Setup' });
			expect(setupButton).toBeInTheDocument();
		});

		await step('CTA section has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Why Apple is the best place to buy Mac.');
		});
	}
};
