import type { Meta, StoryObj } from '@storybook/sveltekit';
import MacAppleLike from '$lib/components/pages/MacAppleLike.svelte';

/**
 * Apple Mac Page Reproduction
 *
 * Cette story reproduit fidèlement la structure et le design de https://www.apple.com/mac/
 * en utilisant notre design system complet
 */

const meta = {
	title: 'Pages/Mac Apple-Like',
	component: MacAppleLike,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Page Mac Inspirée d'Apple

Une reproduction fidèle de https://www.apple.com/mac/ en utilisant notre design system complet.

## 🎯 Structure de la Page

### 1. Hero Section ⭐
**Composant:** Hero (variant="default")
- Titre: "If you can dream it, Mac can do it"
- Sous-titre: "Great ideas start here"
- CTAs: "Watch the film" & "Learn more"
- Fond: Noir minimaliste

### 2. Product Showcase Grid 🖥️
**Composant:** Custom grid layout
- 6 produits Mac (MacBook Air, Pro, iMac, mini, Studio)
- Images responsive
- Sélecteur de couleurs
- CTAs "Learn more" et "Buy"

### 3. Why Buy at Apple (Benefits) 💡
**Composant:** BenefitCard x5
- Education Pricing
- Personal Setup
- Customize Your Mac
- Delivery & Pickup
- Guided Video Shopping

### 4. Get to Know Mac 🔍
**Composant:** Features alternantes
- 8 sections thématiques
- Layout alternant image/texte
- Performance, AI, Intelligence, Ecosystem, etc.

### 5. Help Me Choose 🤖
- Simple CTA card
- "Answer questions to find best Mac"

### 6. Mac Ecosystem 🔗
- Mac + iPhone integration
- Mac + iPad features
- Mac + Apple Watch capabilities

### 7. Footer
- Footer organism

## 📱 Responsive Design
- Mobile first approach
- 3-column grids on desktop
- Optimized spacing & typography

## 🎨 Composants Asha Utilisés
- Hero, Footer (Organisms)
- Card, Button (Molecules/Atoms)
- Heading, Paragraph, Button (Atoms)
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['full', 'essentials', 'compact'],
			description:
				'Page variant: full (all sections), essentials (main sections), compact (hero + products)'
		}
	}
} satisfies Meta<typeof MacAppleLike>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Page Mac Complète
 * Reproduit fidèlement https://www.apple.com/mac/ point par point
 */
export const FullPage: Story = {
	args: {
		variant: 'full'
	},
	parameters: {
		docs: {
			description: {
				story: `
Page Mac complète reproduisant https://www.apple.com/mac/ avec tous les éléments:

1. **Hero Section** - "If you can dream it, Mac can do it"
2. **6 Product Showcase** - MacBook Air, Pro, iMac, mini, Studio
3. **5 Benefits Cards** - Why Buy at Apple
4. **8 Feature Sections** - Get to Know Mac (alternating layout)
5. **Help Me Choose CTA** - Interactive selection
6. **Ecosystem Section** - Mac + iPhone, iPad, Apple Watch
7. **Footer** - Navigation complète

Cette page utilise uniquement les composants de notre design system Asha.
				`
			}
		}
	}
};

/**
 * Page Mac Version Essentiels
 * Version avec les sections principales uniquement
 */
export const EssentialsPage: Story = {
	args: {
		variant: 'essentials'
	},
	parameters: {
		docs: {
			description: {
				story: `
Version simplifiée avec les sections essentielles:
- Hero section
- Product showcase (6 produits)
- Why Buy at Apple (5 benefits)
- Help Me Choose CTA
- Footer

Parfait pour une page produit rapide sans surcharge visuelle.
				`
			}
		}
	}
};

/**
 * Page Mac Compacte
 * Version minimale avec hero et products seulement
 */
export const CompactPage: Story = {
	args: {
		variant: 'compact'
	},
	parameters: {
		docs: {
			description: {
				story: `
Version minimale idéale pour:
- Landing pages spécifiques
- Intégration dans d'autres pages
- Mobile-first design

Inclut seulement:
- Hero section
- Product grid (3 produits)
- Basic footer
				`
			}
		}
	}
};

/**
 * Section Produits
 * Affichage de la grille de 6 produits
 */
export const ProductShowcase: Story = {
	args: {
		variant: 'compact'
	},
	parameters: {
		docs: {
			description: {
				story: `
Showcase de 6 produits Mac avec:
- MacBook Air 13" & 15"
- MacBook Pro 14" & 16"
- iMac (7 couleurs)
- Mac mini
- Mac Studio

Chaque produit affiche:
- Image responsive
- Titre et chip
- Description
- Sélecteur couleurs
- Learn more & Buy links
				`
			}
		}
	}
};

/**
 * Section Avantages
 * "Why Apple is the best place to buy Mac"
 */
export const BenefitsShowcase: Story = {
	args: {
		variant: 'essentials'
	},
	parameters: {
		docs: {
			description: {
				story: `
Section "Why Apple is the best place to buy Mac" avec 5 avantages:

1. **Education Pricing** - Savings for students & educators
2. **Personal Setup** - One-on-one online sessions
3. **Customize Your Mac** - Build your own configuration
4. **Delivery & Pickup** - Flexible options
5. **Guided Video Shopping** - Shop live with specialist

Layout: Grille responsive 1-2-5 colonnes
				`
			}
		}
	}
};

/**
 * Get to Know Mac Section
 * 8 sections thématiques en layout alternant
 */
export const GetToKnowMacSection: Story = {
	args: {
		variant: 'essentials'
	},
	parameters: {
		docs: {
			description: {
				story: `
8 sections thématiques explorables:

1. **Performance and Battery Life** - "Go fast. Go far"
2. **Built for AI** - "Smart. Secure. On device"
3. **macOS and Apple Intelligence** - "Easy to use. Easy to love"
4. **Mac + iPhone** - "Together they work wonders"
5. **Compatibility** - "Mac runs your favorite apps"
6. **Privacy and Security** - "Your business is nobody else's"
7. **Durability** - "Built to stand the test of time"
8. **Apple Values** - "Our values drive everything we do"

Layout: Alternant image-gauche/texte-droite
				`
			}
		}
	}
};

/**
 * Ecosystem Integration
 * Mac + other Apple devices
 */
export const EcosystemIntegration: Story = {
	args: {
		variant: 'full'
	},
	parameters: {
		docs: {
			description: {
				story: `
Section "Unlock the world of Apple" avec 3 subsections:

1. **Mac and iPhone**
   - Answer calls from iPhone on Mac
   - Universal Clipboard
   - iCloud integration

2. **Mac and iPad**
   - iPad as second display
   - Sketch sync
   - Handoff features

3. **Mac and Apple Watch**
   - Auto Unlock
   - Seamless authentication
   - Continuity features

Démontre la synergie et continuité Apple.
				`
			}
		}
	}
};
