import type { Meta, StoryObj } from '@storybook/sveltekit';
import Hero from '@/lib/components/molecules/Hero.svelte';

const meta = {
	title: 'Molecules/Hero',
	component: Hero,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# Hero

A powerful, full-screen hero section molecule combining dramatic imagery, bold typography, and action buttons. Features smart text color adaptation based on background, responsive images, and gradient overlays.

## Key Features

- **Responsive Image Support**: Different images for mobile, tablet, and desktop via picture element
- **Smart Text Coloring**: Automatically calculates optimal text color based on background brightness
- **Gradient Overlays**: Smooth gradient from solid background color to transparent over image
- **Text Truncation**: Expandable overview text with "Read more/Less" toggle
- **Multiple CTAs**: Support for multiple action buttons with custom colors and icons
- **Flexible Layouts**: Works with or without images and details badges
- **Aspect Ratio Control**: Different ratios for mobile (9:13) vs desktop (16:9)

## Use Cases

- **Landing Page Heroes**: Primary conversion point at top of landing pages
- **Content Intros**: Introduce video series, podcasts, or media content
- **Product Launches**: Showcase new products with dramatic visuals
- **Event Promotion**: Promote events, shows, or experiences
- **Portfolio Headers**: Display creative work or case study intros
- **Brand Storytelling**: Set the tone with immersive visual narratives

## Best Practices

- Use high-resolution images (2000px+ wide) for best quality across devices
- Choose background colors that complement your hero image
- Keep titles under 60 characters for single-line display
- Overview should be 1-2 sentences summarizing the offer
- Primary CTA should be most prominent (first in array)
- Test text readability on various backgrounds
- Consider detail badges for time-sensitive info (dates, durations, etc.)

## Accessibility Notes

- Picture element provides optimal image loading and performance
- Text color automatically adjusted for WCAG contrast compliance
- Semantic HTML with proper heading hierarchy (H1 for title)
- Button CTAs include proper focus states and keyboard navigation
- Lazy loading enabled for images to improve performance
- Alt text required for images via title prop

## Composition

This molecule is composed of:
- **Button atoms**: For call-to-action functionality with custom styling
- **Picture element**: For responsive image delivery
- **Gradient overlays**: CSS-based for smooth visual transitions
- **Badge elements**: For detail information display

## Responsive Behavior

- Images switch based on media queries (650px, 950px breakpoints)
- Aspect ratio changes from 9:13 (mobile) to 16:9 (desktop)
- Title scales from 4xl (mobile) to 6xl (tablet) to 7xl (desktop)
- CTAs stack vertically on mobile, horizontal on tablet+
- Gradient overlay height adjusts from 40% (mobile) to 60% (desktop)
- Padding and spacing scale up on larger screens
- Maximum content width constrained (2xl to 4xl based on viewport)

## Differences from Atoms

Unlike simple Button or Image atoms, this molecule provides:
- Complete hero section with integrated image and text
- Smart background brightness calculation and text color adaptation
- Gradient overlay system for image-text integration
- Multi-CTA orchestration with consistent styling
- Responsive image delivery via picture element
- Text truncation logic with user control
- Complex layout coordination across breakpoints`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description:
				'Main heading displayed prominently in the hero. Rendered as H1 with extra-large typography (4xl-7xl). Should be concise and action-oriented. Also used as alt text for hero image.'
		},
		overview: {
			control: 'text',
			description:
				'Supporting description text displayed below title. Automatically truncates with "Read more" toggle when exceeding ~200 characters (4 lines). Use for compelling value propositions or summaries.'
		},
		details: {
			control: 'text',
			description:
				'Small badge text displayed above title (e.g., "2 Avril 2020 • 53min", "En Direct • RFI Musique"). Useful for dates, durations, categories, or live indicators. Styled as a pill with backdrop blur.'
		},
		imgSrc: {
			control: 'object',
			description:
				'Responsive image object with desktop, tablet, and mobile URLs. Component uses picture element with srcset for optimal image delivery. Properties: desktop (string, for 950px+), tablet (string, for 650px+), mobile (string, default). Omit for text-only hero.'
		},
		backgroundColor: {
			control: 'color',
			description:
				'Hex color for gradient overlay background. Creates smooth gradient from solid color at bottom to transparent at top. Component automatically calculates optimal text color (white/black) based on brightness.'
		},
		callToActions: {
			control: 'object',
			description:
				'Array of CTA button objects. Each object has: label (string), url (string), icon (SVG path string), color (hex string). First button is typically primary action. Maximum 2-3 buttons recommended for clarity.'
		},
		onLineClampToggle: {
			description:
				'Callback function triggered when overview text is expanded/collapsed. Receives boolean (true = clamped, false = expanded). Useful for analytics or coordinating other UI elements.'
		}
	}
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Simples Thérapies',
		overview:
			'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
		details: '2 Avril 2020 • 53min',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
		},
		backgroundColor: '#6c00e2',
		callToActions: [
			{
				label: 'Regarder',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
				color: '#0a84ff'
			}
		]
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
		details: 'En direct • RFI Musique',
		overview: `Chaque semaine, explorez les meilleures tendances afro-urbaines avec DJ Face Maker. Sessions acoustiques en direct avec les artistes phares de la scène africaine francophone.`,
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format'
		},
		backgroundColor: '#990505',
		callToActions: [
			{
				label: 'Écouter',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				url: '#',
				color: '#ff6b6b'
			},
			{
				label: 'En savoir plus',
				icon: 'M 25 5 L 43.58 43.58 M 25 5 L 6.42 43.58',
				url: '#',
				color: '#ffd93d'
			}
		]
	}
};

export const UrbanXra: Story = {
	args: {
		...Primary.args,
		title: 'Urban Xra',
		details: 'Lundi - Vendredi • Urban FM 104.5',
		overview:
			'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi. Disponible sur Urban FM 104.5 à Libreville et toutes vos plateformes préférées de podcast.',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
		},
		backgroundColor: '#024a99',
		callToActions: [
			{
				label: 'Écouter',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				url: '#',
				color: '#00d4ff'
			},
			{
				label: 'Découvrir',
				icon: 'M 25 10 L 25 40 M 15 25 L 35 25',
				url: '#',
				color: '#ffd700'
			}
		]
	}
};

export const WithoutDescription: Story = {
	args: {
		...Primary.args,
		details: '',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
		}
	}
};

export const UrbanXraWithoutImage: Story = {
	args: {
		...Primary.args,
		title: 'Urban Xra',
		// omit image
		overview:
			'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi sont dans le show de la radio. Disponible du lundi au vendredi sur Urban FM 104.5 à Libreville et également sur toutes vos plateformes préférées de podcast.',
		backgroundColor: '#024a99',
		callToActions: [
			{
				label: 'En savoir plus',
				url: '#',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				color: '#0a84ff'
			}
		]
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args,
		overview: `Ouranos combine les meilleures offres d'assurance du marché avec la meilleure expérience utilisateur. Notre plateforme vous libère de la paperasse.`,
		callToActions: [
			{
				label: 'En savoir plus',
				url: '#',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				color: '#0284c7'
			},
			{
				label: "Contacter l'équipe",
				url: '#',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				color: '#1c1917'
			}
		]
	}
};

export const NjingaTurbans: Story = {
	args: {
		title: 'Turbans Njinga',
		details: 'Collection Premium • Modulable',
		overview:
			'Découvrez notre collection exclusive de turbans modulables. Qualité premium, confort inégalé et styles contemporains pour tous les moments de votre vie.',
		imgSrc: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269'
		},
		backgroundColor: '#d4a574',
		callToActions: [
			{
				label: 'Acheter',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				url: '#',
				color: '#8b5a3c'
			},
			{
				label: 'Découvrir',
				icon: 'M 25 10 L 25 40 M 15 25 L 35 25',
				url: '#',
				color: '#f4e4c1'
			}
		]
	}
};
