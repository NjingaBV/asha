import type { Meta, StoryObj } from '@storybook/sveltekit';
import WatchLanding from '@/lib/components/templates/WatchLanding.svelte';

const meta = {
	title: 'Templates/WatchLanding',
	component: WatchLanding,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Modèle de Page de Destination pour Montre (WatchLanding Template)

Un modèle de page de destination complet et prêt pour la production, conçu pour les vitrines de produits de style Apple Watch. Comprend une section héros, une grille de produits, des points forts de caractéristiques et un appel à l'action.

## Vue d'ensemble

Le modèle WatchLanding est une page de destination sophistiquée et multi-sections, spécialement conçue pour présenter des produits haut de gamme comme des montres intelligentes ou d'autres produits technologiques. Inspiré par le langage de conception d'Apple, il combine une typographie épurée, des mises en page spacieuses et des présentations de produits convaincantes pour stimuler les conversions.

## Caractéristiques Clés

- **Section Héros avec Vitrine de Produits**: Héros pleine largeur avec titre, description, appels à l'action et cartes de produits.
- **Grille de Produits Détaillée**: Cartes de produits avec images, variantes de couleur et appels à l'action doubles.
- **Grille de Caractéristiques**: Mise en page alternée présentant les principaux avantages du produit.
- **Section d'Appel à l'Action**: Section finale axée sur la conversion.
- **Entièrement Personnalisable**: Remplacez n'importe quelle section indépendamment pour une image de marque flexible.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		heroData: {
			control: 'object',
			description:
				'Configuration object for the hero section. Contains: title (product name), subtitle (badge like "New"), description (value proposition), primaryAction (main CTA with label and onClick), secondaryAction (secondary CTA), and products array (2-3 product preview cards with name, image, and badge). If not provided, uses Apple Watch Series 11 defaults with 3 product variants.'
		},
		productsData: {
			control: 'object',
			description:
				'Array of detailed product configuration objects for the products section. Each product should have: title (product name), subtitle (descriptor), description (key selling point), image (product photo URL), colors (array of color variant names), primaryAction (CTA object), secondaryAction (CTA object), and badge (optional label). If empty array provided, defaults to 3 Apple Watch models with full specifications.'
		},
		featuresData: {
			control: 'object',
			description:
				'Array of feature highlight objects for the features section. Each feature should have: title (feature name like "Health" or "Fitness"), description (benefit explanation), image (feature illustration URL), icon (icon identifier), and badge (optional category label). If empty array provided, defaults to 3 Apple Watch features: Health, Fitness, and Safety with corresponding icons and images.'
		},
		ctaData: {
			control: 'object',
			description:
				'Configuration object for the final call-to-action section. Contains: title (compelling headline), description (supporting information about buying benefits), and primaryAction (main CTA with label and onClick). If not provided, uses default messaging about buying from Apple with free shipping and returns.'
		}
	}
} satisfies Meta<typeof WatchLanding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'Default configuration with comprehensive Apple Watch showcase. Demonstrates the complete template with all sections populated: hero with 3 product previews, detailed product grid with 3 models (Series 11, SE 3, Ultra 3), feature highlights (Health, Fitness, Safety), and final CTA. This story showcases how the template works out-of-the-box with sensible defaults, perfect for rapid prototyping or as a starting point for customization.'
			}
		}
	}
};

export const Primary: Story = {
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'Primary/default variant showcasing the full Apple Watch landing page experience. Identical to Default story, demonstrating the production-ready nature of the template with all sections fully populated and styled. Use this as a reference for complete landing page implementations.'
			}
		}
	}
};

export const CustomHero: Story = {
	args: {
		heroData: {
			title: 'Apple Watch Series 11',
			subtitle: 'Nouveau',
			description:
				"Profitez de 3 mois d'abonnement à Apple Fitness+ pour l'achat d'une Apple Watch. La montre ultime pour votre santé.",
			primaryAction: {
				label: 'Acheter maintenant',
				onClick: () => console.log('Primary action clicked')
			},
			secondaryAction: {
				label: 'En savoir plus',
				onClick: () => console.log('Secondary action clicked')
			},
			products: [
				{
					name: 'Apple Watch Series 11',
					image: 'https://via.placeholder.com/300x300/2563eb/ffffff?text=Series+11',
					badge: 'Nouveau'
				},
				{
					name: 'Apple Watch SE 3',
					image: 'https://via.placeholder.com/300x300/64748b/ffffff?text=SE+3',
					badge: 'Nouveau'
				}
			]
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates hero section customization while keeping other sections at defaults. Shows how to override the hero with custom messaging focused on Series 11, French localization, and a fitness promotion. Only shows 2 products instead of 3, demonstrating flexible product count. Perfect example for A/B testing different hero messages or seasonal promotions while maintaining consistent product catalog below.'
			}
		}
	}
};

export const WithCustomProducts: Story = {
	args: {
		productsData: [
			{
				title: 'Apple Watch Series 11',
				subtitle: 'Édition limitée',
				description: 'La montre ultime pour votre santé avec de nouvelles fonctionnalités.',
				image: 'https://via.placeholder.com/400x400/2563eb/ffffff?text=Series+11',
				colors: ['gris sidéral', 'argent', 'or rose', 'noir de jais'],
				primaryAction: { label: 'En savoir plus' },
				secondaryAction: { label: 'Acheter' },
				badge: 'Nouveau'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates product grid customization with a single limited edition model. Shows how to feature a special edition or exclusive product by reducing the product count to 1 and highlighting it with a custom subtitle and 4 premium color variants. Hero, features, and CTA sections remain at defaults. Useful for product launch campaigns or when focusing on a single hero product with multiple variants.'
			}
		}
	}
};

export const WithCustomFeatures: Story = {
	args: {
		featuresData: [
			{
				title: 'Santé avancée',
				description:
					'Surveillez votre tension artérielle, votre fréquence cardiaque et bien plus encore.',
				image: 'https://via.placeholder.com/800x600/10b981/ffffff?text=Sant%C3%A9',
				icon: 'heart',
				badge: 'Fonctionnalité principale'
			},
			{
				title: 'Forme optimale',
				description: 'Suivez vos entraînements et atteignez vos objectifs fitness.',
				image: 'https://via.placeholder.com/800x600/f59e0b/ffffff?text=Forme',
				icon: 'activity',
				badge: 'Sport'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Showcases feature section customization with 2 custom features instead of default 3. Demonstrates how to highlight specific product capabilities with custom titles, descriptions, icons, and category badges. Each feature uses color-coded images for visual differentiation. Useful when you want to focus on fewer, more detailed features or when targeting specific use cases (health & fitness in this example). Other sections use defaults.'
			}
		}
	}
};

export const WithCustomCTA: Story = {
	args: {
		ctaData: {
			title: "Prêt à découvrir l'Apple Watch?",
			description:
				'Livraison gratuite et retours gratuits. Profitez de notre service client exceptionnel.',
			primaryAction: {
				label: 'Acheter une Apple Watch',
				onClick: () => console.log('Buy now clicked')
			}
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates call-to-action section customization with French localization. Shows how to override the final conversion section with custom messaging emphasizing buying benefits (free shipping, free returns, customer service). The question format ("Ready to discover?") creates urgency and engagement. Other sections use defaults. Perfect for testing different CTA messaging, regional variations, or promotional periods.'
			}
		}
	}
};
