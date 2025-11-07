import type { Meta, StoryObj } from '@storybook/sveltekit';
import PillButton from '@/lib/components/atoms/PillButton.svelte';

const meta = {
	title: 'Atoms/PillButton',
	component: PillButton,
	parameters: {
		layout: 'centered',
		actions: { handles: ['click'] },
		docs: {
			description: {
				component: `# Pill Button

A prominent, pill-shaped call-to-action button with smooth rounded corners inspired by modern UI design patterns.

## Key Features

- **Pill Shape**: Fully rounded corners create a distinctive, modern appearance
- **Link or Button**: Automatically renders as \`<a>\` when href is provided, otherwise \`<button>\`
- **Three Tones**: Primary (blue), secondary (white), and dark (black) variants
- **Flexible Sizing**: Small, medium, and large sizes for different contexts
- **Full Width Option**: Can expand to fill container width
- **Accessibility Built-in**: Focus rings, disabled states, and proper ARIA attributes

## Use Cases

- **Primary CTAs**: Main call-to-action buttons in hero sections or landing pages
- **Navigation**: Link buttons for "Learn More" or "Explore" actions
- **Form Actions**: Submit or action buttons in forms and modals
- **Product Cards**: "Buy Now" or "Add to Cart" buttons
- **Marketing Content**: High-visibility action buttons in promotional content

## Best Practices

- **Hierarchy**: Use primary tone for main actions, secondary for alternatives, dark for bold statements
- **One Primary**: Limit to one primary button per section to maintain clear hierarchy
- **Button vs Link**: Use href for navigation, omit for in-page actions or form submissions
- **Size Context**: lg for heroes, md for general use, sm for compact spaces
- **Label Clarity**: Use clear, action-oriented text (e.g., "Buy Now" not "Click Here")

## Accessibility

- Semantic HTML: Renders \`<button>\` or \`<a>\` based on context
- Keyboard accessible with visible focus indicators
- Disabled state prevents interaction and reduces opacity
- Links with disabled state use aria-disabled and tabindex=-1
- Focus ring meets WCAG contrast requirements`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description:
				'Button text label. Keep it short and action-oriented (1-3 words recommended).'
		},
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'dark'],
			description:
				'Visual style: "primary" (blue background, high emphasis), "secondary" (white background with border, medium emphasis), "dark" (black background, bold statement). Default is "primary".'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description:
				'Button size: "sm" (compact padding, text-sm), "md" (standard padding, base text), "lg" (large padding, text-lg). Default is "md".'
		},
		href: {
			control: 'text',
			description:
				'Optional URL for navigation. When provided, renders an <a> element instead of <button>. Omit for in-page actions.'
		},
		disabled: {
			control: 'boolean',
			description:
				'Disables interaction and reduces opacity to 50%. For links, adds aria-disabled and removes from tab order.'
		},
		fullWidth: {
			control: 'boolean',
			description:
				'Makes button expand to full width of its container. Useful for mobile layouts or form actions.'
		}
	}
} satisfies Meta<typeof PillButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'Acheter',
		tone: 'primary',
		size: 'md'
	},
	render: (args) => ({ Component: PillButton, props: args })
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		label: 'En savoir plus',
		tone: 'secondary'
	}
};

export const DarkLarge: Story = {
	args: {
		...Primary.args,
		label: 'Explorer',
		tone: 'dark',
		size: 'lg'
	}
};
