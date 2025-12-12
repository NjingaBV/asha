import type { Meta, StoryObj } from '@storybook/sveltekit';
import Home from '$lib/components/pages/Home.svelte';

const meta = {
	title: 'Pages/Home',
	component: Home,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Page d'Accueil (Home Page)

Une implémentation complète de page d'accueil qui combine un en-tête persistant avec une navigation et un système de contenu flexible basé sur des "étagères" (shelf) pour construire des pages d'accueil dynamiques et multi-sections.

## Vue d'ensemble

La page d'accueil est un composant de page complet qui étend le modèle Shelf en ajoutant un en-tête persistant avec navigation, logo et un bouton d'appel à l'action optionnel. Elle sert de point d'entrée principal pour les sites web et les applications, offrant une expérience cohérente de la navigation aux tranches de contenu.

## Caractéristiques Clés

- **En-tête Persistant**: En-tête de navigation collant avec logo et menu.
- **Appel à l'Action Optionnel**: Bouton d'appel à l'action configurable dans l'en-tête.
- **Tranches de Contenu Flexibles**: Prend en charge plusieurs types de contenu (héros, carrousel, caractéristiques, etc.).
- **Navigation Intégrée**: Navigation en superposition plein écran qui se synchronise avec l'en-tête.
- **Conception Réactive**: Approche "mobile-first" avec en-tête et navigation adaptatifs.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		logo: {
			control: 'object',
			description:
				'Logo configuration object for header branding. Contains: title (text logo fallback), imgUrl (logo image URL), imgAlt (alt text for accessibility), showTitle (boolean to display title alongside/instead of image). The logo typically links to the homepage and serves as the primary brand identifier in the header.'
		},
		cta: {
			control: 'object',
			description:
				'Optional call-to-action button configuration for the header. Contains: label (button text), url (destination), icon (optional SVG path), href (navigation target). Only include if there is a primary conversion action. The CTA appears in the header and is visible on desktop (may be hidden on mobile for space). Common examples: "Get Started", "Sign Up", "Buy Now".'
		},
		alternateColor: {
			control: 'boolean',
			description:
				'Enables alternating background colors for content slices (passed to Shelf). When true, odd-indexed slices use #f5f5f5 (light gray) and even-indexed slices use #ffffff (white). Creates visual rhythm and helps separate distinct content sections. Particularly effective for pages with 3+ slices.'
		},
		navLinks: {
			control: 'object',
			description:
				'Array of navigation link objects for both header and overlay menu. Each link should have: label (display text) and href (destination route). These links appear horizontally in the desktop header and vertically in the mobile full-screen overlay. Keep to 5-7 items maximum for usability. Examples: Home, About, Products, Services, Contact.'
		},
		slices: {
			control: 'object',
			description:
				'Array of content slice configuration objects (passed to Shelf). Each slice must have a `name` property matching a component type: "call-to-action", "carousel", "hero", "slogan", "features", "text-animation", or "tiles". Additional properties vary by slice type and are spread to the corresponding component. Slices are rendered sequentially below the header, creating the main page content structure.'
		}
	}
} satisfies Meta<typeof Home>;

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
		cta: { label: 'Action', url: '#', icon: 'M 10 5  L 40 25 L 10 45 Z', href: '#' },
		alternateColor: true,
		navLinks: [
			{
				label: 'Home',
				href: '/'
			},
			{
				label: 'About',
				href: '/about'
			},
			{
				label: 'Contact',
				href: '/contact'
			}
		],
		slices: [
			{
				name: 'tiles',
				logo: {
					title: 'DJ FMK',
					subtitle: '',
					imgUrl: 'https://images.prismic.io/djfacemakerv2/f8e0f24e-8600-4867-9691-9efb20be9ea9_fmk+transition+blanc.png?auto=compress,format',
					imgAlt: 'DJ FMK logo',
					showTitle: false
				},
				images: [
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format'
				]
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Complete homepage example for DJ FMK featuring persistent header with logo, CTA button, and navigation. Uses HeroTile slice for visual portfolio display with image grid. Demonstrates the full page structure with header remaining fixed while content scrolls beneath. Includes play icon CTA in header and simple navigation structure. Perfect for artist, photographer, or creative portfolios.'
			}
		}
	}
};

export const DjFmkHome: Story = {
	args: {
		...Primary.args
	},
	parameters: {
		docs: {
			description: {
				story: 'Identical to Primary story - DJ FMK homepage with complete header and tile-based content. Demonstrates a production-ready artist homepage with consistent branding (logo in both header and hero tile), simple three-item navigation, and engaging visual content. The alternating colors create visual separation despite having a single slice.'
			}
		}
	}
};

export const DjFmkShow: Story = {
	args: {
		...Primary.args,
		slices: [
			{
				name: 'hero',
				title: 'Simples Thérapies',
				overview:
					'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
				details: '',
				imgSrc: {
					desktop:
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
					mobile: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
					tablet: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
				},
				backgroundColor: '#6c00e2',
				ctaLabel: 'Dernier épisode',
				ctaIcon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Show/podcast homepage for "Simples Thérapies" - demonstrates using the Hero slice instead of tiles for content-focused pages. Features a bold purple background (#6c00e2), responsive imagery, and "Latest Episode" CTA with play icon. Shows how the same page structure can be adapted for different content types - from visual portfolio (tiles) to show landing page (hero). Same header branding maintained across different content approaches.'
			}
		}
	}
};
