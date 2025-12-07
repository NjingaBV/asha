import type { Meta, StoryObj } from '@storybook/sveltekit';
import Header from '@/lib/components/organisms/Header.svelte';

const meta = {
	title: 'Organisms/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# En-tête (Header)

Un en-tête de site réactif qui inclut un logo, des liens de navigation pour le bureau et un menu hamburger pour le mobile.

## Caractéristiques Clés
- **Navigation Réactive**: S'adapte pour afficher les liens sur les grands écrans et un menu hamburger sur les plus petits.
- **Intégration du Logo**: Affiche le logo de la marque de manière cohérente.
- **Gestion de l'État du Menu**: L'état ouvert/fermé du menu mobile est gérable.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		open: { control: 'boolean' },
		logo: { control: 'object' },
		navLinks: { control: 'object' }
	}
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		logo: {
			title: 'DJ FMK',
			subtitle: '',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
			imgAlt: 'DJ FMK logo',
			showTitle: false
		},
		open: false,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Contact', href: '/contact' }
		]
	}
};

export const MenuClose: Story = {
	args: {
		...Primary.args
	}
};

export const MenuOpen: Story = {
	args: {
		...Primary.args,
		logo: {
			title: 'DJ FMK',
			subtitle: '',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
			imgAlt: 'DJ FMK logo',
			showTitle: false
		},
		open: true
	}
};
