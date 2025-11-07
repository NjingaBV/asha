import type { Meta, StoryObj } from '@storybook/sveltekit';
import ColorSwatch from '@/lib/components/atoms/ColorSwatch.svelte';

const meta = {
	title: 'Atoms/ColorSwatch',
	component: ColorSwatch,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# Color Swatch

An interactive, circular color picker button for selecting product colors or theme variations.

## Key Features

- **Circular Design**: Clean, rounded button showing the actual color
- **Selection State**: Visual ring indicator for selected state with hover effects
- **Accessible**: Includes aria-label, title tooltip, and keyboard support
- **Flexible Colors**: Accepts any valid CSS color value (hex, rgb, named colors)
- **Click Handler**: Optional onclick for custom selection logic

## Use Cases

- **Product Variants**: Select color options for products (e.g., phone cases, watches, clothing)
- **Theme Selection**: Choose color themes or accent colors
- **Color Pickers**: Simple color selection interfaces
- **Design Tools**: Color palette selectors in design systems
- **Customization**: Let users pick colors for customizable items

## Best Practices

- **Always Provide Labels**: Use descriptive labels for accessibility and tooltips
- **Group Swatches**: Display multiple swatches together for easy comparison
- **Visual Feedback**: The selected ring provides clear feedback of current choice
- **Touch Targets**: The 24px (h-6 w-6) size meets minimum touch target guidelines
- **Color Contrast**: Ensure border is visible against light and dark colors

## Accessibility

- Button element for proper keyboard navigation
- aria-label for screen reader announcement of color names
- title attribute provides tooltip on hover
- Visual focus states with ring effects
- Keyboard accessible (Enter/Space to select)`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'color',
			description:
				'The color to display. Accepts any valid CSS color value (hex, rgb, hsl, named colors). This value is applied as inline background style.'
		},
		selected: {
			control: 'boolean',
			description:
				'Whether this swatch is currently selected. When true, displays a prominent ring indicator. Default is false.'
		},
		label: {
			control: 'text',
			description:
				'Accessible label describing the color. Used for aria-label and tooltip (title). Essential for accessibility. Example: "Midnight Blue", "Product Red".'
		},
		onclick: {
			description:
				'Click event handler called when swatch is clicked. Use for selection logic or state management. Receives MouseEvent.'
		}
	}
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: '#0a84ff',
		label: 'Bleu',
		selected: true
	},
	render: (args) => ({
		Component: ColorSwatch,
		props: args
	})
};

export const Selected: Story = {
	args: {
		...Primary.args
	}
};

export const Unselected: Story = {
	args: {
		...Primary.args,
		color: '#ff3b30',
		label: 'Rouge',
		selected: false
	}
};

// Group story removed for v9 typing compatibility
