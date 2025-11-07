import type { Meta, StoryObj } from '@storybook/sveltekit';
import PathLine from '@/lib/components/atoms/PathLine.svelte';

const meta = {
	title: 'Atoms/PathLine',
	component: PathLine,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# PathLine

A decorative timeline or step indicator featuring a vertical line, numbered badge, and title with optional gradient effects.

## Key Features

- **Vertical Timeline**: Connects steps in a vertical flow with a colored line
- **Numbered Badge**: Circular badge displaying step number or order
- **Gradient Support**: Optional gradient effects for line, badge, and title
- **Color Theming**: Customizable color with automatic light/dark variations
- **Bold Typography**: Large, eye-catching title with tight tracking

## Use Cases

- **Process Steps**: Show sequential steps in a process or workflow
- **Feature Highlights**: Display numbered features in a vertical timeline
- **Journey Maps**: Illustrate user journeys or product timelines
- **Progress Indicators**: Visual representation of multi-step progress
- **Marketing Content**: Numbered value propositions or selling points

## Best Practices

- **Sequential Order**: Use ascending numbers to show progression (1, 2, 3...)
- **Consistent Spacing**: Use multiple PathLines in sequence for cohesive timelines
- **Color Meaning**: Choose colors that match your brand or convey meaning
- **Gradient Usage**: Enable gradients for more dynamic, premium appearance
- **Title Length**: Keep titles concise (1-3 words) for maximum impact

## Accessibility

- Uses semantic heading (h3) for titles
- Color is supplemented by numbered order for non-color users
- Bold text improves readability
- Structural layout maintains logical flow for screen readers`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		order: {
			control: 'number',
			description:
				'The step number or sequence order displayed in the circular badge. Typically starts at 1 and increments for each step.'
		},
		title: {
			control: 'text',
			description:
				'The heading text for this step. Rendered as h3 with large, bold styling. Keep concise for best visual impact.'
		},
		color: {
			control: 'color',
			description:
				'Base color for the line, badge, and title. Hex color format recommended. When gradient is enabled, lighter and darker shades are automatically generated.'
		},
		gradient: {
			control: 'boolean',
			description:
				'Enables gradient effects. When true, creates light/dark color variations and applies gradient backgrounds to line, badge, and text. Default is false for solid colors.'
		}
	}
} satisfies Meta<typeof PathLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Simple',
		order: 1,
		color: '#22c55e'
	}
};

export const GreenPathLine: Story = {
	args: {
		...Primary.args
	}
};

export const YellowPathLine: Story = {
	args: {
		...Primary.args,
		title: 'Transparente',
		order: 2,
		color: '#eab308'
	}
};

export const BluePathLine: Story = {
	args: {
		...Primary.args,
		title: 'Révolutionnaire',
		order: 3,
		color: '#3b82f6'
	}
};
