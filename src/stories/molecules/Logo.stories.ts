import type { Meta, StoryObj } from '@storybook/sveltekit';
import Logo from '@/lib/components/molecules/Logo.svelte';

const meta = {
	title: 'Molecules/Logo',
	component: Logo,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# Logo

A flexible logo display molecule combining image and optional text elements. Supports both standalone logos and clickable logo/wordmark combinations for brand identity presentation.

## Key Features

- **Image + Text Combination**: Logo image with optional title/subtitle display
- **Linkable**: Optional link wrapper for navigation to home or brand pages
- **Flexible Display**: Toggle title visibility independently
- **Semantic Structure**: Proper heading hierarchy when text shown
- **Responsive**: Adapts sizing for different contexts

## Use Cases

- **Site Headers**: Primary navigation logo
- **Footer Branding**: Company identification in footers
- **Partner Logos**: Display partner or sponsor logos
- **Product Branding**: Show product or service logos
- **Multi-brand Sites**: Switch between different brand identities

## Best Practices

- Use SVG or high-resolution PNG logos for crisp display
- Provide meaningful alt text via imgAlt prop
- Use link prop for clickable logos (typically to homepage)
- Keep subtitle short (tagline or company type)
- ShowTitle false for image-only logos, true for wordmark combinations

## Accessibility Notes

- Semantic heading elements when title shown
- Required alt text for logo images
- Keyboard accessible when linkable
- Focus states on interactive elements

## Composition

- **Linkable atom**: For optional link wrapping
- **Image element**: Logo display
- **Heading elements**: Optional text display

## Responsive Behavior

- Image sizing adapts to container
- Text scales responsively when shown
- Maintains aspect ratio of logo images

## Differences from Atoms

Unlike simple Image atoms, provides integrated logo-text combination with optional linking, proper semantic structure, and brand identity context.`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description:
				'Brand or company name displayed alongside logo when showTitle is true. Used for accessibility and brand recognition.'
		},
		subtitle: {
			control: 'text',
			description:
				'Tagline or company description (e.g., "Courtier d\'assurances"). Displayed when showTitle is true. Provides additional context about the brand.'
		},
		imgUrl: {
			control: 'text',
			description:
				'URL to the logo image file. Should be high-resolution (SVG preferred) for crisp display across devices.'
		},
		imgAlt: {
			control: 'text',
			description:
				'Alt text for the logo image. Critical for accessibility. Should describe the logo (e.g., "Company Name Logo").'
		},
		showTitle: {
			control: 'boolean',
			description:
				'Toggle visibility of title and subtitle text. False shows image only, true shows image with text wordmark. Default false.'
		},
		link: {
			control: 'text',
			description:
				'Optional URL to make the logo clickable. Typically links to homepage. Empty string means no link wrapper.'
		}
	}
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'DJ FMK Logo',
		subtitle: 'DJ FMK',
		imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
		imgAlt: 'DJ FMK Logo',
		showTitle: false,
		link: ''
	}
};

export const DjFmk: Story = {
	args: {
		...Primary.args
	}
};

export const DjFmkLinkable: Story = {
	args: {
		...Primary.args,
		link: 'https://www.djfacemaker.com'
	}
};

export const Njinga: Story = {
	args: {
		...Primary.args,
		title: 'Njinga Logo',
		imgUrl: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Logo_njinga_raccourci_540x.png?v=1645790543'
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args,
		title: 'uranos',
		subtitle: "Courtier d'assurances",
		showTitle: true,
		imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format'
	}
};

export const OuranosSquare: Story = {
	args: {
		...Primary.args,
		title: 'uranos',
		subtitle: "Courtier d'assurances",
		showTitle: true,
		imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format'
	}
};
