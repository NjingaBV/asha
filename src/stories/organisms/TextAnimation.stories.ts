import type { Meta, StoryObj } from '@storybook/sveltekit';
import TextAnimation from '@/lib/components/organisms/TextAnimation.svelte';

const meta = {
	title: 'Organisms/TextAnimation',
	component: TextAnimation,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# TextAnimation

A dynamic, animated text display organism that creates eye-catching sequential animations with customizable colors for each text label. Perfect for hero sections, landing pages, or promotional content that needs to emphasize multiple value propositions.

## Key Features

- **Sequential Animations**: Each label animates in sequence with configurable delays
- **Custom Colors**: Individual color control for each text label
- **Large Typography**: Extra-bold, responsive text (5xl to 8xl) for maximum impact
- **Smooth Animations**: Built-in blink/fade animation for visual interest
- **Stacked Layout**: Vertical text arrangement for dramatic effect
- **Responsive Sizing**: Scales from mobile (text-5xl) to desktop (text-8xl)
- **Color Gradient Support**: Text uses CSS color property for full customization

## Use Cases

- **Value Propositions**: Highlight multiple product benefits with animated emphasis
- **Brand Attributes**: Showcase brand qualities or mission statements
- **Feature Highlights**: Draw attention to key features one at a time
- **Landing Page Heroes**: Create engaging, animated hero content
- **Marketing Campaigns**: Emphasize campaign themes or taglines
- **Product Benefits**: Sequentially reveal product advantages

## Best Practices

- Limit to 3-5 labels for optimal impact and readability
- Use contrasting colors that align with your brand palette
- Keep label text short (1-3 words) for maximum punch
- Choose colors with sufficient contrast against the background
- Consider animation timing - default 1s delay per label works well
- Test on various devices to ensure text remains readable
- Use for high-impact sections where animation adds value

## Accessibility

- Uses semantic \`<h1>\` heading for proper document structure
- Text remains readable even without animation support
- Color is supplementary, not the sole means of conveying information
- High contrast recommended for all color choices
- Animations use standard CSS, respects prefers-reduced-motion
- Keyboard navigation unaffected by animations
- Screen readers announce text sequentially as it appears in markup

## Component Composition

This is a self-contained organism component that:
- Uses pure HTML and CSS for animations
- No external molecule or atom dependencies
- Implements custom animation timing via CSS variables
- Leverages Svelte's reactivity for color application

## Animation Behavior

- **Blink Animation**: Custom CSS animation defined in component styles
- **Delay Pattern**: Each label has staggered animation-delay (index * 1s)
- **Color Application**: CSS custom property (--txt-color) for dynamic coloring
- **Performance**: GPU-accelerated animations for smooth rendering

## Page Layout Considerations

- **Width**: Full width with responsive padding (px-4 sm:px-6 md:px-8)
- **Height**: Auto-sized based on text content and line-height
- **Spacing**:
  - Top padding: pt-20 (sm:pt-24 lg:pt-32) for breathing room
  - Bottom margin: mb-16 provides space below
- **Text Alignment**: Center-aligned for maximum visual impact
- **Positioning**: Best used in hero sections or focal points
- **Background**: Transparent, inherits from parent container
- **Responsive Behavior**:
  - Mobile: text-5xl with leading-none
  - Tablet: text-6xl or text-7xl
  - Desktop: text-8xl for maximum drama
- **Layout Context**: Works with 'centered' layout in Storybook
- **Integration**: Pairs well above CTAs or product showcases
- **Z-index**: No special z-index, flows with document order

## Styling Notes

- Uses \`bg-clip-text text-transparent\` for color effects
- \`tracking-tighter\` for modern, tight letter spacing
- Block display for each span creates vertical stack
- Custom CSS variables enable dynamic color injection
- Animation keyframes defined in component \`<style>\` block`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		labels: {
			control: 'object',
			description:
				'Array of label objects, each containing a title (string) and color (string). The title is the text to display, and color accepts any valid CSS color value (hex, rgb, named colors). Labels animate sequentially with 1 second delay between each.'
		}
	}
} satisfies Meta<typeof TextAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
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
	},
	parameters: {
		docs: {
			description: {
				story: 'Default animated text showcase with three value propositions in distinct colors (green, yellow, blue). Each word animates in sequence to create a dynamic, attention-grabbing effect. Perfect example of emphasizing multiple brand attributes or product benefits.'
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
				story: 'Ouranos brand example using the same three animated labels. Demonstrates how the text animation can be applied to insurance/financial services messaging with terms like "Simple", "Transparente", and "Révolutionnaire" to communicate brand values.'
			}
		}
	}
};
