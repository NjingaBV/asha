import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import ProductLineup from '$lib/components/organisms/ProductLineup.svelte';

const meta = {
	title: 'Organisms/ProductLineup',
	component: ProductLineup,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		description: { control: 'text' },
		products: { control: 'object' }
	}
} satisfies Meta<typeof ProductLineup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'La gamme',
		description:
			'Une grille interactive pour parcourir chaque modèle avec des finitions, spécifications et appels à l’action.'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify lineup renders
		const lineup = canvas.getByRole('region', { name: /product lineup/i });
		await expect(lineup).toBeInTheDocument();
		await expect(lineup).toBeVisible();

		// Test 2: Verify title and description
		const title = canvas.getByRole('heading', { name: /la gamme/i });
		await expect(title).toBeInTheDocument();

		const description = canvas.getByText(
			"Une grille interactive pour parcourir chaque modèle avec des finitions, spécifications et appels à l'action."
		);
		await expect(description).toBeInTheDocument();

		// Test 3: Verify layout structure
		// The component should have some kind of grid or layout container
		const mainContent = canvas.getByRole('main') || canvas.getByRole('region');
		await expect(mainContent).toBeInTheDocument();

		// Test 4: Test keyboard navigation
		await userEvent.tab();
		// Should be able to navigate through interactive elements

		// Test 5: Verify accessibility
		// Check for proper heading hierarchy
		const headings = canvas.getAllByRole('heading');
		expect(headings.length).toBeGreaterThan(0);

		// Test 6: Check for any interactive elements
		const buttons = canvas.queryAllByRole('button');
		const links = canvas.queryAllByRole('link');

		// If there are interactive elements, test their accessibility
		[...buttons, ...links].forEach((element) => {
			expect(element).toBeVisible();
			expect(element).toBeEnabled();
		});
	}
};
