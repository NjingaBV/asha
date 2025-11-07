import type { Meta, StoryObj } from '@storybook/sveltekit';
import AnimatedBlob from '@/lib/components/molecules/AnimatedBlob.svelte';

const meta = {
	title: 'Molecules/AnimatedBlob',
	component: AnimatedBlob,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# AnimatedBlob

A dynamic, animated gradient blob molecule for adding visual interest and modern aesthetics to backgrounds. Features smooth morphing animations and customizable color gradients.

## Key Features

- **Fluid Animation**: Smooth, organic morphing animations
- **Custom Colors**: Multi-color gradient support
- **Full-screen Coverage**: Designed for background use
- **Performance Optimized**: GPU-accelerated CSS animations
- **Configurable Gradients**: Flexible color combinations
- **Non-intrusive**: Works as decorative background element

## Use Cases

- **Hero Backgrounds**: Dynamic landing page backgrounds
- **Section Dividers**: Animated transitions between sections
- **Loading States**: Engaging loading experiences
- **Brand Elements**: Unique visual identity elements
- **Modal Backgrounds**: Backdrop for overlays and dialogs
- **Ambient Decoration**: Subtle motion in otherwise static layouts

## Best Practices

- Use 2-4 colors for optimal gradient appearance
- Choose colors that complement your brand palette
- Consider color contrast with foreground content
- Use as background layer, not primary content
- Test performance on lower-end devices
- Ensure animations respect prefers-reduced-motion

## Accessibility Notes

- Respects prefers-reduced-motion user preference
- Purely decorative (does not convey information)
- Does not interfere with interactive elements
- Background role - content remains accessible
- No flashing or seizure-inducing patterns

## Composition

- **CSS Animations**: For blob morphing
- **Gradient Backgrounds**: Multi-color transitions
- **SVG or CSS shapes**: For blob shapes
- **Keyframe animations**: For smooth motion

## Responsive Behavior

- Scales to fill container or viewport
- Animation speed consistent across devices
- Performance degrades gracefully on slower devices
- May reduce complexity on mobile for performance

## Differences from Atoms

Unlike static background elements, AnimatedBlob provides dynamic, continuously animated gradient backgrounds with complex morphing shapes for modern, engaging visual experiences.`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		colors: {
			control: 'object',
			description:
				'Array of hex color codes for the gradient blob. Recommend 2-4 colors for best visual effect. Colors blend smoothly in the animated gradient. Example: ["#6c00e2", "#ff00e2", "#00e2ff"]'
		}
	}
} satisfies Meta<typeof AnimatedBlob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		colors: ['#6c00e2', '#ff00e2', '#00e2ff']
	}
};

export const Animated: Story = {
	args: {
		...Primary.args
	}
};
