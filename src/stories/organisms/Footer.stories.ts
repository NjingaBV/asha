import type { Meta, StoryObj } from '@storybook/sveltekit';
import Footer from '@/lib/components/organisms/Footer.svelte';

const meta = {
	title: 'Organisms/Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# Footer

A full-width footer organism that serves as the bottom-most section of a page, providing essential brand information and copyright notice.

## Key Features

- **Brand Identity Display**: Incorporates the Logo molecule to maintain consistent branding
- **Copyright Notice**: Automatically displays current year with brand name
- **Responsive Layout**: Adapts gracefully from mobile to desktop viewports
- **Semantic HTML**: Uses proper \`<footer>\` element for accessibility

## Use Cases

- **Site-wide Footer**: Place at the bottom of every page for consistent brand presence
- **Landing Pages**: Essential anchor point for single-page marketing sites
- **Web Applications**: Provides legal and brand information in app layouts
- **Marketing Sites**: Maintains brand consistency across all pages

## Best Practices

- Always provide a complete logo object with all required properties
- Use consistent brandName across your application
- Place at the bottom of your page layout (after all main content)
- Ensure the footer link navigates to your homepage or appropriate destination
- Test footer visibility on all viewport sizes

## Accessibility

- Uses semantic \`<footer>\` element for proper document structure
- Logo includes proper alt text and link semantics
- Copyright text is readable with sufficient color contrast
- Keyboard navigable links
- Screen reader friendly structure

## Component Composition

This organism composes:
- **Logo** (Molecule): Displays brand identity with image and text
- Inherits all Logo molecule accessibility features

## Page Layout Considerations

- **Width**: Full viewport width with contained content (max-w-7xl)
- **Spacing**: Generous padding (py-12 lg:py-16) for breathing room
- **Border**: Top border for visual separation from main content
- **Background**: Light gray (bg-gray-100) for subtle contrast
- **Responsive Padding**: Adjusts from mobile (px-4) to desktop (lg:px-8)
- **Positioning**: Should be placed after all main page content
- **Sticky Footer**: Can be combined with flexbox layouts for sticky-to-bottom behavior`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		logo: {
			control: 'object',
			description:
				'Logo configuration object containing title, imgUrl, imgAlt, and optional showTitle. Passed directly to the Logo molecule component.'
		},
		brandName: {
			control: 'text',
			description:
				'Brand or company name displayed in the copyright notice. Automatically combined with the current year.'
		},
		link: {
			control: 'text',
			description:
				"Optional URL for the logo link. Defaults to '/' (homepage). Determines where users navigate when clicking the footer logo."
		}
	}
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		logo: {
			title: 'uranos',
			subtitle: "Courtier d'assurances",
			imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format',
			imgAlt: 'Ouranos logo',
			showTitle: true
		},
		brandName: 'Ouranos'
	},
	parameters: {
		docs: {
			description: {
				story: 'Default footer configuration with complete logo information including title, subtitle, and image. Demonstrates the standard implementation for corporate or business sites with full branding.'
			}
		}
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args
	},
	parameters: {
		docs: {
			description: {
				story: 'Ouranos insurance broker brand footer example. Shows how the footer maintains brand consistency with the logo molecule integration and proper copyright attribution.'
			}
		}
	}
};
