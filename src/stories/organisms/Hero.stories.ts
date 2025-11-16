import type { Meta, StoryObj } from '@storybook/sveltekit';
import Hero from '$lib/components/organisms/Hero.svelte';

const meta = {
	title: 'Organisms/Hero',
	component: Hero,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Héros Mac (Hero)

Grande bannière héros pour la page Mac, présentant une image de produit, un titre et des liens d'appel à l'action.

## Caractéristiques
- Section héros pleine largeur.
- Prise en charge du badge "Nouveau".
- Titre, sous-titre et description.
- Images réactives.
- Appels à l'action "En savoir plus" et "Acheter".
- Couleurs d'arrière-plan et de texte personnalisables.
`
			}
		}
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'Hero title'
		},
		backgroundColor: {
			control: 'color',
			description: 'Background color'
		},
		textColor: {
			control: 'select',
			options: ['light', 'dark'],
			description: 'Text color scheme'
		}
	}
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MacBookAir: Story = {
	args: {
		title: 'MacBook Air',
		subtitle: 'Supercharged by M3',
		description: "The world's best-selling laptop is now even more powerful.",
		imageDesktop:
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
		imageAlt: 'MacBook Air',
		isNew: true,
		learnMoreHref: '#learn-more',
		buyHref: '#buy',
		backgroundColor: '#000000',
		textColor: 'light'
	}
};

export const IMac: Story = {
	args: {
		title: 'iMac',
		subtitle: 'A statement. Instantly.',
		description: "The all-in-one that's all yours. In seven stunning colors.",
		imageDesktop:
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
		imageAlt: 'iMac',
		isNew: false,
		learnMoreHref: '#learn-more',
		buyHref: '#buy',
		backgroundColor: '#FFFFFF',
		textColor: 'dark'
	}
};
