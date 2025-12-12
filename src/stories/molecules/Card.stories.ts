import type { Meta, StoryObj } from '@storybook/sveltekit';
import Card from '$lib/components/molecules/Card.svelte';

const meta = {
	title: 'Molecules/Card',
	component: Card,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Card

A versatile card molecule for displaying content, products, or media with optional images, text overlays, and action buttons.

## Key Features

- **Flexible Layouts**: Text overlay on image or below image.
- **Responsive Images**: \`<picture>\` element with sources for mobile, tablet, and desktop.
- **Aspect Ratio Control**: Automatically adjusts based on content (4:5, square, video).
- **Hover Effects**: Subtle scaling animation on hover.
- **Clickable Wrapper**: The entire card becomes clickable when the button name is omitted.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description:
				'Card heading displayed prominently. Rendered as H2 with responsive sizing (2xl-5xl). Also used as alt text for the image.'
		},
		subtitle: {
			control: 'text',
			description:
				'Secondary text above title (e.g., price, category). Styled in smaller, uppercase text with tracking. Useful for product prices or content metadata.'
		},
		overview: {
			control: 'text',
			description:
				'Description text automatically truncated to 4 lines. Provides additional context about the card content. Uses relaxed line height for readability.'
		},
		imgSrc: {
			control: 'object',
			description:
				'Responsive image object with desktop, tablet, and mobile URLs. Component uses picture element for optimal delivery. Lazy loaded for performance.'
		},
		buttonName: {
			control: 'text',
			description:
				'Text for the CTA button. When omitted (but buttonLink present), entire card becomes clickable via Linkable wrapper.'
		},
		buttonLink: {
			control: 'text',
			description:
				'URL for the button or card link. If buttonName is omitted, entire card links here. Required for interactive cards.'
		},
		backgroundColor: {
			control: 'color',
			description:
				'Hex color for button and background. Used for button styling and as fallback background color when no image.'
		},
		mixColor: {
			control: 'boolean',
			description:
				'Enable CSS mix-blend-screen on image. Creates creative overlay effect blending image with background color. Default false.'
		},
		textOnImage: {
			control: 'boolean',
			description:
				'Display text overlaid on image with gradient (true) or below image (false). Overlay includes dark gradient for text readability. Default true.'
		},
		rounded: {
			control: 'boolean',
			description:
				'Apply rounded corners (rounded-2xl) to card and image. Modern look when true, editorial when false. Default true.'
		},
		isVideo: {
			control: 'boolean',
			description:
				'Use video aspect ratio (16:9) instead of square. Only applies when buttonName and imgSrc are both present. Default false.'
		},
		showExpandButton: {
			control: 'boolean',
			description:
				'Show an expand button (+) in the bottom-right corner. Apple-style expandable card control. Default false.'
		},
		onExpandClick: {
			action: 'expand clicked',
			description: 'Callback function triggered when the expand button is clicked.'
		}
	}
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Simples Thérapies',
		subtitle: '',
		overview:
			'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
		},
		buttonName: 'Boostez votre quotidien',
		buttonLink: 'https://djfacemaker.com/simples-therapies/',
		backgroundColor: '#6c00e2',
		mixColor: false,
		textOnImage: true,
		rounded: true,
		titleSize: 'sm',
		isVideo: false
	}
};

export const SimplesTherapies: Story = {
	args: {
		...Primary.args
	}
};

export const AfroClub: Story = {
	args: {
		...Primary.args,
		title: "L'Afro Club",
		overview:
			"Chaque semaine, sur RFI Musique, faites le tour des tendances afro-urbaines avec DJ Face Maker dans l'Afro Club. À cette sélection, s'ajoute désormais une session acoustique Live avec les artistes phares et émergents de la scène africaine francophone.",
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format'
		},
		buttonName: 'Entrez dans le club',
		buttonLink: 'https://musique.rfi.fr/tag/auteur/herve-mandina',
		backgroundColor: '#990505',
		rounded: false
	}
};

export const UrbanXra: Story = {
	args: {
		...Primary.args,
		title: 'Urban Xra',
		overview:
			'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi sont dans le show de la radio. Disponible du lundi au vendredi sur Urban FM 104.5 à Libreville et également sur toutes vos plateformes préférées de podcast.',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
		},
		buttonName: 'Entrez dans la danse',
		buttonLink: 'https://audioboom.com/channels/4993780/episodes',
		backgroundColor: '#024a99'
	}
};

export const WithoutImage: Story = {
	args: {
		...Primary.args,
		title: "L'Afro Club",
		overview:
			"Chaque semaine, sur RFI Musique, faites le tour des tendances afro-urbaines avec DJ Face Maker dans l'Afro Club. À cette sélection, s'ajoute désormais une session acoustique Live avec les artistes phares et émergents de la scène africaine francophone.",
		buttonName: 'Entrez dans le club',
		buttonLink: 'https://musique.rfi.fr/tag/auteur/herve-mandina',
		backgroundColor: '#990505'
	}
};

export const WithoutDescription: Story = {
	args: {
		...Primary.args,
		title: 'Urban Xra',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
		}
		// omit overview/buttonName/buttonLink/backgroundColor
	}
};

export const NjingaBuy: Story = {
	args: {
		...Primary.args,
		title: 'Bonnet jour et nuit',
		overview:
			'Nos turbans modulables, pratiques et designs vous font gagner du temps et vous coiffent en une minute top chrono ! Vous apportez la pièce forte à votre look tout en protégeant vos cheveux grâce à la doublure en satin. Nos turbans sont résistants et peuvent se ranger facilement sans prendre de place !',
		imgSrc: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_155_7d3e18cc-aadf-48ee-a292-dda3cd25ad82_540x.jpg?v=1645794291',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_155_7d3e18cc-aadf-48ee-a292-dda3cd25ad82_540x.jpg?v=1645794291',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_155_7d3e18cc-aadf-48ee-a292-dda3cd25ad82_540x.jpg?v=1645794291'
		},
		buttonName: 'Je veux du style',
		buttonLink: '/buy'
		// omit backgroundColor
	}
};

export const NjingaHeadband: Story = {
	args: {
		...Primary.args,
		title: 'Headband',
		subtitle: '9,99€',
		imgSrc: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/PhotoRoom_20211019_022805_large.jpg?v=1634650638',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/PhotoRoom_20211019_022805_large.jpg?v=1634650638',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/PhotoRoom_20211019_022805_large.jpg?v=1634650638'
		}
		// omit overview/buttonName/buttonLink/backgroundColor
	}
};

export const TurbanMalabo: Story = {
	args: {
		...Primary.args,
		title: 'Turban Modulable Malabo',
		subtitle: '€49,99',
		imgSrc: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836'
		}
		// omit overview/buttonName/buttonLink/backgroundColor
	}
};

export const TurbanMalaboVariant: Story = {
	args: {
		...Primary.args,
		title: 'Turban Modulable Malabo',
		subtitle: '€49,99',
		imgSrc: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836'
		},
		textOnImage: false,
		rounded: false
		// omit overview/buttonName/buttonLink/backgroundColor
	}
};

export const AppleStylePerformance: Story = {
	args: {
		title: 'Go fast. Go far.',
		subtitle: 'Performance and Battery Life',
		imgSrc: 'https://www.apple.com/v/macbook-pro/ai/images/overview/hero/hero_static__bpt7y5o1cgqe_large.jpg',
		textOnImage: true,
		textPosition: 'top',
		textColor: 'white',
		titleSize: 'xl',
		rounded: true,
		backgroundColor: '#000000',
		showExpandButton: true,
		onExpandClick: () => {
			alert('Card expanded!');
		}
	},
	parameters: {
		layout: 'fullscreen',
		viewport: {
			defaultViewport: 'responsive'
		}
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Text Overlay** cards (textOnImage=true) for high-impact visual content like hero cards or featured items.
 * - Use **Standard** cards (textOnImage=false) for editorial content, news, or lists where readability is paramount.
 * - Use **Video** cards (isVideo=true) for media content.
 *
 * ## Do's
 * - Ensure high-quality images are used, especially for overlay cards.
 * - Keep titles concise to prevent wrapping issues on smaller screens.
 * - Use the "Mix Color" effect sparingly for artistic direction.
 *
 * ## Don'ts
 * - Don't use text overlay on busy images without ensuring sufficient contrast.
 * - Don't overload the card with too much text in the "overview" section.
 * - Avoid mixing rounded and non-rounded cards in the same grid.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	render: () => ({
		Component: Card,
		props: {
			...Primary.args,
			title: 'Design Guidelines',
			overview: 'See guidelines in the Docs tab.',
			textOnImage: false
		}
	})
};
