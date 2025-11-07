import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureItem from '@/lib/components/atoms/FeatureItem.svelte';

const meta = {
	title: 'Molecules/FeatureItem',
	component: FeatureItem,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# Feature Item

A compact feature list item component displaying an optional icon, title, and description in a horizontal layout.

## Key Features

- **Icon Support**: Optional SVG icon with consistent sizing and alignment
- **Flexible Content**: Title and description with semantic HTML
- **Horizontal Layout**: Icon and text aligned horizontally with proper spacing
- **Extensible**: Children slot for additional custom content
- **Styled Typography**: Semibold titles and muted descriptions for hierarchy
- **Compact Design**: Efficient use of space for feature lists

## Use Cases

- **Feature Lists**: Display product features or service offerings
- **Benefits Sections**: Highlight key benefits with icons
- **Specifications**: Technical specs or product details
- **Checklists**: Visual list of included features or capabilities
- **Comparison Tables**: Feature rows in comparison layouts
- **Onboarding**: Step-by-step features in tutorials

## Best Practices

- **Icon Consistency**: Use icons from same set for visual cohesion
- **Title Length**: Keep titles brief (2-5 words) for scannability
- **Description Length**: One sentence (8-15 words) is ideal
- **Icon Meaning**: Icons should reinforce, not replace, text meaning
- **Vertical Stacking**: Use multiple FeatureItems in a vertical list
- **Spacing**: Apply consistent gap between multiple items

## Accessibility

- Uses semantic heading (h4) for titles
- Paragraph element for descriptions maintains proper structure
- SVG icons use currentColor for theme compatibility
- Text provides all essential information (icons are supplementary)
- Maintains natural reading order for screen readers
- Proper heading hierarchy when used in context`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description:
				'The feature title/heading. Displayed in large, semibold text. Keep concise (2-5 words) for best readability.'
		},
		description: {
			control: 'text',
			description:
				'Brief description of the feature. Shown in smaller, muted text below title. One sentence recommended (8-15 words).'
		},
		icon: {
			control: 'text',
			description:
				'SVG path data for the icon. Should be a valid SVG path string. Icon is rendered at 24x24px with currentColor stroke. Optional - omit to show text-only.'
		},
		children: {
			description:
				'Svelte snippet for additional custom content. Use for extended descriptions, badges, or interactive elements.'
		}
	}
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Autonomie',
		description: "Jusqu'à 18 heures d'autonomie pour vous accompagner toute la journée."
	}
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};
