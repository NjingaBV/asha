import type { Meta, StoryObj } from '@storybook/sveltekit';
import CallToAction from '@/lib/components/molecules/CallToAction.svelte';

const meta = {
	title: 'Molecules/CallToAction',
	component: CallToAction,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
		description: { control: 'text' },
		primaryAction: { control: 'object' },
		secondaryAction: { control: 'object' },
		backgroundImage: { control: 'text' },
		backgroundColor: { control: 'color' },
		backgroundType: {
			control: { type: 'select' },
			options: ['none', 'color', 'image', 'gradient']
		},
		overlay: { control: 'boolean' },
		overlayColor: {
			control: { type: 'select' },
			options: ['black', 'blue', 'gray', 'transparent']
		},
		overlayOpacity: { control: { type: 'range', min: 0, max: 100, step: 10 } },
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
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
	}
};

export const WithSubtitle: Story = {
	args: {
		...Default.args,
		subtitle: "Commencez votre essai gratuit aujourd'hui"
	}
};

// Size Variants
export const Small: Story = {
	args: {
		...Default.args,
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		...Default.args,
		size: 'lg'
	}
};

// Background Types - None (default)
export const NoBackground: Story = {
	args: {
		...Default.args,
		backgroundType: 'none'
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
	}
};
