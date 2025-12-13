import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Slogan from '$lib/components/organisms/Slogan.svelte';

const meta = {
	title: 'Organisms/Slogan',
	component: Slogan,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Slogan

Un organisme qui affiche une série de slogans percutants avec des sous-titres, combinés à un appel à l'action final, pour créer un message marketing puissant.

## Caractéristiques Clés
- **Slogans Multiples**: Affiche une liste de slogans pour renforcer un message.
- **Appel à l'Action Final**: Se termine par un bouton d'appel à l'action clair.
- **Arrière-plan Personnalisable**: La couleur de fond peut être modifiée pour correspondre à l'identité de la marque.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		slogans: { control: 'object' },
		cta: { control: 'object' },
		backgroundColor: { control: 'color' }
	}
} satisfies Meta<typeof Slogan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		cta: {
			url: '/',
			label: 'Souscrire',
			color: '#0284c7'
		},
		backgroundColor: '#000000',
		slogans: [
			{
				title: 'Simple.',
				subtitle: '0% prise de tête'
			},
			{
				title: 'Transparente.',
				subtitle: 'Au juste prix'
			},
			{
				title: 'Révolutionnaire.',
				subtitle: '100% mobile et flexible'
			}
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify slogan component renders
		const sloganSection = canvas.getByRole('region', { name: /slogan/i });
		await expect(sloganSection).toBeInTheDocument();
		await expect(sloganSection).toBeVisible();

		// Test 2: Verify all slogan titles are displayed
		const simpleTitle = canvas.getByText('Simple.');
		await expect(simpleTitle).toBeInTheDocument();

		const transparenteTitle = canvas.getByText('Transparente.');
		await expect(transparenteTitle).toBeInTheDocument();

		const revolutionnaireTitle = canvas.getByText('Révolutionnaire.');
		await expect(revolutionnaireTitle).toBeInTheDocument();

		// Test 3: Verify all slogan subtitles are displayed
		const simpleSubtitle = canvas.getByText('0% prise de tête');
		await expect(simpleSubtitle).toBeInTheDocument();

		const transparenteSubtitle = canvas.getByText('Au juste prix');
		await expect(transparenteSubtitle).toBeInTheDocument();

		const revolutionnaireSubtitle = canvas.getByText('100% mobile et flexible');
		await expect(revolutionnaireSubtitle).toBeInTheDocument();

		// Test 4: Verify CTA button is displayed
		const ctaButton = canvas.getByRole('link', { name: /souscrire/i });
		await expect(ctaButton).toBeInTheDocument();
		await expect(ctaButton).toHaveAttribute('href', '/');

		// Test 5: Test CTA button interaction
		await userEvent.click(ctaButton);
		// Verify button is clickable (no errors thrown)

		// Test 6: Verify proper heading hierarchy
		const headings = canvas.getAllByRole('heading');
		expect(headings.length).toBe(3); // Three slogan titles

		// Test 7: Verify slogans are properly structured
		// Each slogan should have a title and subtitle pair
		const allHeadings = canvas.getAllByRole('heading');
		expect(allHeadings.length).toBe(3);

		// Test 8: Test keyboard navigation
		await userEvent.tab();
		// Should focus the CTA button

		await expect(ctaButton).toHaveFocus();

		// Test 9: Verify background color is applied (if testable)
		// This would depend on CSS custom properties or inline styles

		// Test 10: Verify animation effects (if present)
		// This would depend on the implementation having animations
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args
	}
};
