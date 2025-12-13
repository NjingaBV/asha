import type { Meta, StoryObj } from '@storybook/sveltekit';
import Shelf from '$lib/components/templates/Shelf.svelte';

const meta = {
	title: 'Templates/Shelf',
	component: Shelf,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Modèle d'Étagère (Shelf Template)

Un modèle flexible basé sur des "tranches" (slices) qui permet la création de mises en page de page dynamiques et multi-sections avec une navigation optionnelle et des couleurs de fond alternées.

## Vue d'ensemble

Le modèle Shelf est un composant de mise en page fondamental qui orchestre plusieurs tranches de contenu en une structure de page cohérente. Il fournit un conteneur flexible qui peut afficher divers organismes et molécules dans une pile verticale, ce qui le rend idéal pour construire des pages de destination, des sites marketing et des applications riches en contenu.

## Caractéristiques Clés

- **Architecture Basée sur les Tranches**: Rend dynamiquement différents types de contenu (héros, carrousel, caractéristiques, etc.) en fonction de la configuration.
- **Intégration de la Navigation**: Superposition de navigation plein écran optionnelle qui peut être basculée.
- **Arrière-plans Alternés**: Prend en charge les couleurs de fond alternées pour un rythme visuel et une séparation du contenu.
- **Composition de Contenu Flexible**: Intègre de manière transparente divers organismes.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		open: {
			control: 'boolean',
			description:
				'Controls the visibility of the full-screen navigation overlay. When true, displays the navigation menu and applies fixed positioning to prevent scrolling.'
		},
		alternateColor: {
			control: 'boolean',
			description:
				'Enables alternating background colors between slices. When true, odd-indexed slices use #f5f5f5 (light gray) and even-indexed slices use #ffffff (white). This creates visual rhythm and helps separate content sections.'
		},
		navLinks: {
			control: 'object',
			description:
				'Array of navigation link objects. Each link should have a `label` (string) and `href` (string) property. These links are displayed in the full-screen navigation overlay when `open` is true. Typically includes main site sections like Home, About, Contact, Products, etc.'
		},
		slices: {
			control: 'object',
			description:
				"Array of slice configuration objects that define the page content. Each slice object must have a `name` property that corresponds to a component type ('call-to-action', 'carousel', 'hero', 'slogan', 'features', 'text-animation', 'tiles'). Additional properties vary by slice type and are spread directly to the corresponding component. Slices are rendered in the order they appear in the array."
		}
	}
} satisfies Meta<typeof Shelf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		open: false,
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
				story: 'Basic example of the Shelf template with a single HeroTile slice. Demonstrates the tile-based layout with logo and image grid, perfect for portfolio or gallery homepages. The alternating color feature is enabled to showcase the background color alternation capability.'
			}
		}
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render shelf layout structure', async () => {
			const main = canvasElement.querySelector('main');
			expect(main).toBeInTheDocument();
		});

		await step('Navigation links are present', async () => {
			expect(canvas.getByText('Home')).toBeInTheDocument();
			expect(canvas.getByText('About')).toBeInTheDocument();
			expect(canvas.getByText('Contact')).toBeInTheDocument();
		});

		await step('Shelf content slices are rendered', async () => {
			// Check for slice content - depends on the slice components
			const sliceElements = canvasElement.querySelectorAll(
				'[data-testid="slice"], .slice, section'
			);
			expect(sliceElements.length).toBeGreaterThan(0);
		});

		await step('Logo is displayed', async () => {
			const logoElements = canvasElement.querySelectorAll('img[alt*="DJ FMK"]');
			expect(logoElements.length).toBeGreaterThan(0);
		});

		await step('Images are present in shelf', async () => {
			const images = canvasElement.querySelectorAll('img');
			expect(images.length).toBeGreaterThan(1); // Logo + content images
		});

		await step('Skip link is accessible', async () => {
			const skipLink = canvas.getByRole('link', { name: /skip to main content/i });
			expect(skipLink).toBeInTheDocument();
		});
	}
};

export const DjFmkHome: Story = {
	args: {
		...Primary.args
	},
	parameters: {
		docs: {
			description: {
				story: 'DJ FMK homepage example showcasing the tile-based hero layout. This demonstrates a real-world use case for a DJ/artist website with a clean, image-focused presentation. Uses the HeroTile organism to create an engaging visual entry point.'
			}
		}
	}
};

export const NjingaHome: Story = {
	args: {
		...Primary.args,
		navLinks: [
			{
				label: 'Turbans modulables',
				href: '/'
			},
			{
				label: 'Headbands modulables',
				href: '/'
			},
			{
				label: 'Turbans croisés',
				href: '/'
			},
			{
				label: 'Echarpes capuches',
				href: '/'
			},
			{
				label: 'Bijoux',
				href: '/'
			}
		],
		slices: [
			{
				name: 'hero',
				title: "Des accessoires chics et malins pour avoir de l'allure.",
				overview: "Et si être élégante au quotidien n'était qu'une affaire de secondes?",
				details: '',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759',
					mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759',
					tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759'
				},
				backgroundColor: '#ffffff',
				ctaLabel: 'Découvrez comment',
				ctaIcon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'E-commerce homepage for Njinga fashion accessories. Demonstrates using the Hero slice type for product-focused landing pages with custom navigation links for product categories. Shows responsive image handling with desktop/mobile/tablet variants and custom CTA with icon. Ideal for fashion, retail, or product-based businesses.'
			}
		}
	}
};

export const OuranosHome: Story = {
	args: {
		...Primary.args,
		alternateColor: false,
		slices: [
			{
				name: 'text-animation',
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
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Minimalist homepage featuring the TextAnimation slice. Perfect for SaaS products, tech startups, or modern brands that want to emphasize key value propositions with animated, color-coded messaging. Demonstrates the text-animation slice type with custom color-coded labels that cycle through brand values. No alternating colors used for a cleaner, more focused presentation.'
			}
		}
	}
};
