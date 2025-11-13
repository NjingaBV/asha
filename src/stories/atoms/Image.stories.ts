import type { Meta, StoryObj } from '@storybook/sveltekit';
import Image from '$lib/components/atoms/Image.svelte';

const meta = {
	title: 'Atoms/Image',
	component: Image,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# Image

Un composant d'image responsive qui prend en charge des sources multiples (\`srcset\`) pour différentes tailles d'écran.

## Caractéristiques
- Sources d'images responsives (ordinateur, tablette, mobile).
- Options d'ajustement de l'objet (\`object-fit\`).
- Prise en charge du chargement différé (\`lazy loading\`).
- Accessibilité avec le texte alternatif (\`alt\`).
`
			}
		}
	},
	argTypes: {
		src: {
			control: 'text',
			description: 'Image source URL (single)'
		},
		alt: {
			control: 'text',
			description: 'Alt text for accessibility'
		},
		objectFit: {
			control: 'select',
			options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
			description: 'Object fit style'
		}
	}
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		alt: 'MacBook on desk',
		className: 'w-full h-64 rounded-lg'
	}
};

export const Responsive: Story = {
	args: {
		desktop:
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
		tablet: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		mobile: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
		alt: 'Responsive MacBook image',
		className: 'w-full h-64 rounded-lg'
	}
};
