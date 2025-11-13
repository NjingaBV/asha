import type { Meta, StoryObj } from '@storybook/sveltekit';
import MacCard from '$lib/components/molecules/MacCard.svelte';

const meta = {
	title: 'Molecules/MacCard',
	component: MacCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# Carte Mac (MacCard)

Composant de carte produit pour afficher les modèles de Mac avec une image, un titre, un prix et des liens d'appel à l'action.

## Caractéristiques
- Affichage de l'image du produit.
- Titre et slogan.
- Affichage du prix.
- Nuanciers de couleurs.
- Prise en charge du badge "Nouveau".
- Appels à l'action "En savoir plus" et "Acheter".
- Effets de survol.
`
			}
		}
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'Product name'
		},
		tagline: {
			control: 'text',
			description: 'Product tagline'
		},
		price: {
			control: 'text',
			description: 'Starting price'
		},
		isNew: {
			control: 'boolean',
			description: 'Show new badge'
		}
	}
} satisfies Meta<typeof MacCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MacBookAir: Story = {
	args: {
		title: 'MacBook Air',
		tagline: 'Supercharged by M3',
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: 'MacBook Air',
		price: 'From $1,099',
		isNew: true,
		colors: ['#E8E8ED', '#1D1D1F', '#F0E4D3', '#7D7E80'],
		learnMoreHref: '#',
		buyHref: '#'
	}
};

export const MacBookPro: Story = {
	args: {
		title: 'MacBook Pro',
		tagline: 'Mind-blowing. Head-turning.',
		image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=450&fit=crop',
		imageAlt: 'MacBook Pro',
		price: 'From $1,599',
		isNew: false,
		colors: ['#E8E8ED', '#1D1D1F'],
		learnMoreHref: '#',
		buyHref: '#'
	}
};

export const IMac: Story = {
	args: {
		title: 'iMac',
		tagline: 'A statement. Instantly.',
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: 'iMac',
		price: 'From $1,299',
		isNew: false,
		colors: ['#5E9BED', '#E8518F', '#F0B54D', '#64D6A7', '#B576E8', '#EC7D6A', '#E8E8ED'],
		learnMoreHref: '#',
		buyHref: '#'
	}
};
