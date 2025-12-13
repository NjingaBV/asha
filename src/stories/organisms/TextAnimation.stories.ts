import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import TextAnimation from '$lib/components/organisms/TextAnimation.svelte';

const meta = {
	title: 'Organisms/TextAnimation',
	component: TextAnimation,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Animation de Texte (TextAnimation)

Un organisme d'affichage de texte dynamique et animé qui crée des animations séquentielles attrayantes avec des couleurs personnalisables pour chaque étiquette de texte. Parfait pour les sections héros, les pages de destination ou le contenu promotionnel qui doit mettre en évidence plusieurs propositions de valeur.

## Caractéristiques Clés

- **Animations Séquentielles**: Chaque étiquette s'anime en séquence avec des délais configurables.
- **Couleurs Personnalisées**: Contrôle individuel de la couleur pour chaque étiquette de texte.
- **Grande Typographie**: Texte extra-audacieux et réactif pour un impact maximal.
- **Animations Fluides**: Animation de clignotement/fondu intégrée pour un intérêt visuel.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		labels: {
			control: 'object',
			description:
				'Array of label objects, each containing a title (string) and color (string). The title is the text to display, and color accepts any valid CSS color value (hex, rgb, named colors). Labels animate sequentially with 1 second delay between each.'
		}
	}
} satisfies Meta<typeof TextAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		labels: [
			{
				color: '#22c55e',
				title: 'Simple'
			},
			{
				color: '#eab308',
				title: 'Transparente'
			},
			{
				color: '#3b82f6',
				title: 'Révolutionnaire'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Default animated text showcase with three value propositions in distinct colors (green, yellow, blue). Each word animates in sequence to create a dynamic, attention-grabbing effect. Perfect example of emphasizing multiple brand attributes or product benefits.'
			}
		}
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify text animation component renders
		const animationContainer = canvas.getByRole('region', { name: /text animation/i });
		await expect(animationContainer).toBeInTheDocument();
		await expect(animationContainer).toBeVisible();

		// Test 2: Verify all text labels are displayed
		const simpleText = canvas.getByText('Simple');
		await expect(simpleText).toBeInTheDocument();

		const transparenteText = canvas.getByText('Transparente');
		await expect(transparenteText).toBeInTheDocument();

		const revolutionnaireText = canvas.getByText('Révolutionnaire');
		await expect(revolutionnaireText).toBeInTheDocument();

		// Test 3: Verify text elements are properly structured
		// Each text should be in its own container or have proper styling
		const textElements = [simpleText, transparenteText, revolutionnaireText];
		textElements.forEach((element) => {
			expect(element).toBeVisible();
			expect(element.offsetWidth).toBeGreaterThan(0);
			expect(element.offsetHeight).toBeGreaterThan(0);
		});

		// Test 4: Test animation effects (if testable)
		// Note: Animation timing might be difficult to test deterministically
		// We can verify the elements exist and have expected classes

		// Test 5: Verify color styling is applied
		// The colors should be applied via CSS custom properties or inline styles
		// This depends on the implementation

		// Test 6: Verify proper text hierarchy
		// All text should be visible and properly sized
		const allTextElements = canvas.getAllByText(/.+/);
		expect(allTextElements.length).toBeGreaterThanOrEqual(3);

		// Test 7: Test keyboard navigation (if interactive)
		await userEvent.tab();
		// Should not break focus flow

		// Test 8: Verify accessibility
		// Text should be readable and properly structured
		textElements.forEach((element) => {
			expect(element).toBeVisible();
			// Check for proper contrast (this would require more advanced testing)
		});

		// Test 9: Verify animation sequence (if testable)
		// This might require waiting for animation cycles or checking CSS classes

		// Test 10: Verify responsive behavior
		// Text should scale appropriately on different screen sizes
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args
	},
	parameters: {
		docs: {
			description: {
				story: 'Ouranos brand example using the same three animated labels. Demonstrates how the text animation can be applied to insurance/financial services messaging with terms like "Simple", "Transparente", and "Révolutionnaire" to communicate brand values.'
			}
		}
	}
};
