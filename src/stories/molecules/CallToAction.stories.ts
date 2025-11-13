import type { Meta, StoryObj } from '@storybook/sveltekit';
import CallToAction from '@/lib/components/molecules/CallToAction.svelte';

const meta = {
	title: 'Molecules/CallToAction',
	component: CallToAction,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Appel à l'Action (CallToAction)

Un composant de section d'appel à l'action (CTA) polyvalent et puissant, conçu pour stimuler l'engagement et les conversions des utilisateurs. Il propose des options de contenu flexibles, plusieurs styles d'arrière-plan et des boutons d'action hautement personnalisables.

## Caractéristiques Clés

- **Contenu Flexible**: Prend en charge le titre, le sous-titre et la description avec des entrées de type chaîne ou des snippets Svelte.
- **Plusieurs Types d'Arrière-plan**: Aucun, couleur unie, dégradé ou image.
- **Système de Superposition d'Image**: Couleurs et opacité de superposition personnalisables pour les images d'arrière-plan.
- **Variantes de Taille**: Trois tailles prédéfinies (petite, moyenne, grande) avec une typographie et un remplissage réactifs.
- **Boutons à Double Action**: Actions principale et secondaire avec un style indépendant.
- **Coloration Intelligente du Texte**: Ajuste automatiquement la couleur du texte en fonction de l'arrière-plan pour une lisibilité optimale.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description:
				'Main heading text for the CTA. Can also accept a Svelte snippet for custom rendering. Typically action-oriented (e.g., "Ready to get started?"). Rendered as H2 with size based on the size prop.'
		},
		subtitle: {
			control: 'text',
			description:
				'Secondary heading displayed below title. Can also accept a Svelte snippet. Useful for additional context, taglines, or promotional text (e.g., "Limited Time Offer"). Rendered as H3 with XL sizing.'
		},
		description: {
			control: 'text',
			description:
				'Body text providing detail about the offer or action. Can also accept a Svelte snippet. Should expand on the title and motivate the user to take action. Uses large paragraph styling with relaxed leading.'
		},
		primaryAction: {
			control: 'object',
			description:
				'Configuration object for the primary action button. Properties: label (string, required), href (string, optional), onClick (function, optional), variant (string, optional). Primary action receives prominent styling and is the main conversion point.'
		},
		secondaryAction: {
			control: 'object',
			description:
				'Configuration object for the secondary action button. Same properties as primaryAction. Secondary action offers an alternative path (e.g., "Learn More" vs "Sign Up") with more subtle styling.'
		},
		backgroundImage: {
			control: 'text',
			description:
				'URL to background image. Only used when backgroundType is set to "image". Image will cover the full section with object-cover. Recommend high-resolution images (1920x1080 or larger) for best quality.'
		},
		backgroundColor: {
			control: 'color',
			description:
				'Hex color code for solid background. Only used when backgroundType is "color". Automatically adjusts text color to white for contrast. Common choices: dark slate, blue, or brand colors.'
		},
		backgroundType: {
			control: { type: 'select' },
			options: ['none', 'color', 'image', 'gradient'],
			description:
				'Type of background to display: "none" (transparent/white), "color" (solid backgroundColor), "image" (backgroundImage with optional overlay), "gradient" (linear gradient from gradientFrom to gradientTo).'
		},
		gradientFrom: {
			control: 'color',
			description:
				'Starting color for gradient background. Only used when backgroundType is "gradient". Gradient flows from top-left at 135deg angle. Use hex codes for consistency.'
		},
		gradientTo: {
			control: 'color',
			description:
				'Ending color for gradient background. Only used when backgroundType is "gradient". Creates smooth color transition to bottom-right. Works best with complementary or analogous colors.'
		},
		overlay: {
			control: 'boolean',
			description:
				'Enable or disable overlay on background images. Only applies when backgroundType is "image". Helps ensure text readability over complex images. Default is true.'
		},
		overlayColor: {
			control: { type: 'select' },
			options: ['black', 'blue', 'gray', 'transparent'],
			description:
				'Color of the overlay applied to background images. "black" provides neutral darkening, "blue" or "gray" add subtle color tints, "transparent" disables overlay visual effect. Works with overlayOpacity.'
		},
		overlayOpacity: {
			control: { type: 'range', min: 0, max: 100, step: 10 },
			description:
				'Opacity of the overlay as a percentage (0-100). Higher values create darker overlays for better text contrast. Typical range: 30-60. Automatically clamped between 0-100.'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description:
				'Size variant controlling padding, title size, and spacing. "sm" (py-8/py-12, 3xl title) for compact sections, "md" (py-16/py-24, 4xl title) for standard use, "lg" (py-20/py-32, 5xl title) for hero sections. Default is "md".'
		},
		class: {
			control: 'text',
			description:
				'Additional CSS classes to apply to the root section element. Use for custom spacing, positioning, or styling overrides.'
		}
	}
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
	args: {
		title: 'Ready to get started?',
		description:
			'Join thousands of happy users who are transforming their experience with our platform.',
		primaryAction: {
			label: 'Start Free Trial',
			href: '#'
		},
		secondaryAction: {
			label: 'Learn More',
			href: '#'
		},
		size: 'md'
	},
	parameters: {
		docs: {
			description: {
				story: 'Standard CTA with title, description, and dual actions. Uses default medium size with no background. Perfect for clean, minimal page sections.'
			}
		}
	}
};

export const WithSubtitle: Story = {
	args: {
		...Default.args,
		subtitle: "Commencez votre essai gratuit aujourd'hui"
	},
	parameters: {
		docs: {
			description: {
				story: 'Adds a subtitle between title and description. Useful for promotional text, taglines, or internationalization.'
			}
		}
	}
};

// Size Variants
export const Small: Story = {
	args: {
		...Default.args,
		size: 'sm'
	},
	parameters: {
		docs: {
			description: {
				story: 'Compact size variant with reduced padding (py-8/12) and smaller title (3xl). Ideal for footer CTAs or secondary page sections.'
			}
		}
	}
};

export const Large: Story = {
	args: {
		...Default.args,
		size: 'lg'
	},
	parameters: {
		docs: {
			description: {
				story: 'Hero-sized variant with generous padding (py-20/32) and large title (5xl). Perfect for landing page heroes and main conversion sections.'
			}
		}
	}
};

// Background Types - None (default)
export const NoBackground: Story = {
	args: {
		...Default.args,
		backgroundType: 'none'
	},
	parameters: {
		docs: {
			description: {
				story: 'Clean CTA with no background. Text uses default dark colors on white/transparent background.'
			}
		}
	}
};

// Background Types - Color
export const WithColorBackground: Story = {
	args: {
		...Default.args,
		backgroundType: 'color',
		backgroundColor: '#0f172a',
		title: 'Premium Experience',
		description: 'Unlock advanced features with our premium subscription.'
	},
	parameters: {
		docs: {
			description: {
				story: 'Solid color background (dark slate). Text automatically switches to white for contrast. Great for brand-colored sections.'
			}
		}
	}
};

export const WithBlueBackground: Story = {
	args: {
		...Default.args,
		backgroundType: 'color',
		backgroundColor: '#0369a1',
		title: 'Special Limited Offer',
		description: 'Get 50% off on all annual plans this month only.'
	}
};

// Background Types - Gradient
export const WithGradient: Story = {
	args: {
		...Default.args,
		backgroundType: 'gradient',
		gradientFrom: '#0f172a',
		gradientTo: '#0369a1',
		title: 'Transform Your Workflow',
		description: 'Experience the future of work with our AI-powered platform.'
	},
	parameters: {
		docs: {
			description: {
				story: 'Linear gradient background flowing from slate to blue at 135deg. Creates modern, dynamic visual impact for premium offerings.'
			}
		}
	}
};

export const WithVibrantGradient: Story = {
	args: {
		...Default.args,
		backgroundType: 'gradient',
		gradientFrom: '#7c3aed',
		gradientTo: '#ec4899',
		title: 'Next Generation Technology',
		description: 'Discover innovative solutions designed for modern teams.'
	}
};

// Background Types - Image
export const WithBackgroundImage: Story = {
	args: {
		...Default.args,
		backgroundType: 'image',
		backgroundImage: 'https://via.placeholder.com/1920x1080/2563eb/ffffff?text=Background',
		overlay: true,
		overlayColor: 'black',
		overlayOpacity: 40,
		title: 'Experience the Difference',
		description: 'Join us on a journey to excellence and innovation.'
	},
	parameters: {
		docs: {
			description: {
				story: 'Background image with 40% black overlay for text readability. Ideal for hero sections with compelling lifestyle or product photography.'
			}
		}
	}
};

// Overlay Customization
export const WithBlueOverlay: Story = {
	args: {
		...Default.args,
		backgroundType: 'image',
		backgroundImage: 'https://via.placeholder.com/1920x1080/2563eb/ffffff?text=Background',
		overlay: true,
		overlayColor: 'blue',
		overlayOpacity: 50,
		title: 'Premium Service',
		description: 'Experience excellence with our best-in-class solutions.'
	}
};

export const WithHighOpacityOverlay: Story = {
	args: {
		...Default.args,
		backgroundType: 'image',
		backgroundImage: 'https://via.placeholder.com/1920x1080/2563eb/ffffff?text=Background',
		overlay: true,
		overlayColor: 'black',
		overlayOpacity: 70,
		title: 'Premium Features',
		description: 'Unlock unlimited possibilities with our enterprise solution.'
	}
};

export const WithTransparentOverlay: Story = {
	args: {
		...Default.args,
		backgroundType: 'image',
		backgroundImage: 'https://via.placeholder.com/1920x1080/2563eb/ffffff?text=Background',
		overlay: true,
		overlayColor: 'transparent',
		title: 'No Overlay Effect',
		description: 'See the full background image without any overlay darkening.'
	}
};

// Action Variants
export const PrimaryActionOnly: Story = {
	args: {
		...Default.args,
		secondaryAction: undefined
	}
};

export const SecondaryActionOnly: Story = {
	args: {
		...Default.args,
		primaryAction: undefined
	}
};

export const WithCustomActions: Story = {
	args: {
		...Default.args,
		primaryAction: {
			label: 'Get Started',
			href: '/signup',
			variant: 'primary'
		},
		secondaryAction: {
			label: 'View Pricing',
			href: '/pricing',
			variant: 'outline'
		}
	}
};

// Full-Featured Examples
export const CompleteExample: Story = {
	args: {
		title: 'Apple Watch Series 11',
		subtitle: 'Innovation at your wrist',
		description:
			"Experience the ultimate health and fitness companion. Stay connected, track your wellness, and discover what's possible.",
		primaryAction: {
			label: 'Buy Now',
			href: '/shop'
		},
		secondaryAction: {
			label: 'Learn More',
			href: '/product'
		},
		backgroundType: 'gradient',
		gradientFrom: '#1e293b',
		gradientTo: '#0f172a',
		size: 'lg'
	},
	parameters: {
		docs: {
			description: {
				story: 'Product launch CTA with all features: title, subtitle, description, dual actions, and gradient background. Large size for hero placement.'
			}
		}
	}
};

export const MarketingExample: Story = {
	args: {
		title: 'Transform Your Business Today',
		subtitle: 'Limited Time Offer - 50% Off',
		description:
			'Join thousands of companies using our platform to streamline their operations, reduce costs, and accelerate growth. Start your free trial now.',
		primaryAction: {
			label: 'Start Free Trial',
			href: '/trial'
		},
		secondaryAction: {
			label: 'Schedule Demo',
			href: '/demo'
		},
		backgroundType: 'color',
		backgroundColor: '#0369a1',
		size: 'lg'
	},
	parameters: {
		docs: {
			description: {
				story: 'Marketing campaign CTA emphasizing urgency with subtitle. Solid blue background creates strong visual presence for conversion-focused sections.'
			}
		}
	}
};

export const ProductLaunch: Story = {
	args: {
		title: 'Introducing Premium Pro',
		subtitle: 'The most powerful version yet',
		description:
			'With advanced AI features, unlimited integrations, and 24/7 priority support, Premium Pro is designed for teams that demand the best.',
		primaryAction: {
			label: 'Upgrade Now',
			href: '/upgrade'
		},
		secondaryAction: {
			label: 'See Pricing',
			href: '/pricing'
		},
		backgroundType: 'gradient',
		gradientFrom: '#7c3aed',
		gradientTo: '#0369a1',
		size: 'md'
	},
	parameters: {
		docs: {
			description: {
				story: 'Feature announcement with vibrant purple-to-blue gradient. Medium size for mid-page placement. Shows premium positioning with color choice.'
			}
		}
	}
};
