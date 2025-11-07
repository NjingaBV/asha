import type { Meta, StoryObj } from '@storybook/sveltekit';
import ColorSelector from '@/lib/components/molecules/ColorSelector.svelte';

const meta = {
	title: 'Molecules/ColorSelector',
	component: ColorSelector,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# ColorSelector

An interactive color selection molecule allowing users to choose from predefined color options. Features visual color swatches with labels and selection states for product variants or theme customization.

## Key Features

- **Color Swatches**: Visual representation of available colors
- **Selection State**: Clear indication of selected color
- **Label Display**: Human-readable color names
- **Change Callback**: Event handling for color selection
- **Keyboard Accessible**: Full keyboard navigation support
- **Hover States**: Interactive feedback on hover

## Use Cases

- **Product Variants**: E-commerce color selection for clothing, accessories
- **Theme Customization**: UI theme or accent color selection
- **Design Tools**: Color picker for creative applications
- **Configuration**: User preference for color schemes
- **Filters**: Color-based product filtering
- **Customization**: Personalization options

## Best Practices

- Provide 3-8 color options for optimal choice without overwhelm
- Use descriptive labels (e.g., "Midnight Blue" vs "#1a2b3c")
- Ensure color swatches are large enough to see colors clearly (32px+ recommended)
- Include color names for accessibility (not color-only)
- Pre-select a default color for better UX
- Group similar colors logically

## Accessibility Notes

- Labels provide text alternative to color-only information
- Keyboard navigation supported (arrow keys, Enter/Space)
- Focus indicators on swatches
- Selected state indicated beyond color alone
- ARIA attributes for screen readers
- Sufficient color contrast for borders/indicators

## Composition

- **ColorSwatch atoms**: Individual selectable color options
- **Radio group pattern**: For mutually exclusive selection
- **Label elements**: For accessible color names

## Responsive Behavior

- Swatches wrap to multiple rows on narrow viewports
- Touch-friendly sizing on mobile devices
- Spacing adjusts for different screen sizes
- Labels may abbreviate or tooltip on small screens

## Differences from Atoms

Unlike simple ColorSwatch atoms, ColorSelector provides complete selection group management with state tracking, keyboard navigation, change events, and coordinated visual feedback across multiple options.`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		colors: {
			control: 'object',
			description:
				'Array of color option objects. Each object has: label (string, human-readable name), value (string, hex color code). Example: [{label: "Bleu", value: "#0a84ff"}, {label: "Rouge", value: "#ff3b30"}]'
		},
		selected: {
			control: 'text',
			description:
				'Currently selected color value (hex code). Should match one of the values in the colors array. Controls which swatch appears selected.'
		},
		onChange: {
			action: 'colorChanged',
			description:
				'Callback function triggered when user selects a color. Receives the selected color value (hex code) as argument. Use for updating application state.'
		}
	}
} satisfies Meta<typeof ColorSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		colors: [
			{ label: 'Bleu', value: '#0a84ff' },
			{ label: 'Rouge', value: '#ff3b30' },
			{ label: 'Noir', value: '#000000' }
		],
		selected: '#0a84ff'
	}
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};
