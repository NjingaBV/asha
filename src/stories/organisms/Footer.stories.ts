import type { Meta, StoryObj } from '@storybook/sveltekit';
import Footer from '$lib/components/organisms/Footer.svelte';

const meta = {
	title: 'Organisms/Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Pied de Page (Footer)

Un organisme de pied de page pleine largeur qui sert de section la plus basse d'une page, fournissant des informations essentielles sur la marque et un avis de droit d'auteur.

## Caractéristiques Clés

- **Affichage de l'Identité de la Marque**: Intègre la molécule \`Logo\` pour maintenir une image de marque cohérente.
- **Avis de Droit d'Auteur**: Affiche automatiquement l'année en cours avec le nom de la marque.
- **Mise en Page Réactive**: S'adapte avec élégance des affichages mobiles aux ordinateurs de bureau.
- **HTML Sémantique**: Utilise l'élément \`<footer>\` approprié pour l'accessibilité.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		logo: {
			control: 'object',
			description:
				'Logo configuration object containing title, imgUrl, imgAlt, and optional showTitle. Passed directly to the Logo molecule component.'
		},
		brandName: {
			control: 'text',
			description:
				'Brand or company name displayed in the copyright notice. Automatically combined with the current year.'
		},
		link: {
			control: 'text',
			description:
				"Optional URL for the logo link. Defaults to '/' (homepage). Determines where users navigate when clicking the footer logo."
		}
	}
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		logo: {
			title: 'uranos',
			subtitle: "Courtier d'assurances",
			imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format',
			imgAlt: 'Ouranos logo',
			showTitle: true
		},
		brandName: 'Ouranos'
	},
	parameters: {
		docs: {
			description: {
				story: 'Default footer configuration with complete logo information including title, subtitle, and image. Demonstrates the standard implementation for corporate or business sites with full branding.'
			}
		}
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args
	},
	parameters: {
		docs: {
			description: {
				story: 'Ouranos insurance broker brand footer example. Shows how the footer maintains brand consistency with the logo molecule integration and proper copyright attribution.'
			}
		}
	}
};
