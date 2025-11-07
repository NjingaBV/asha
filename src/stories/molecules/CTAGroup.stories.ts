import type { Meta, StoryObj } from '@storybook/sveltekit';
import CTAGroup from '@/lib/components/molecules/CTAGroup.svelte';

const meta = {
	title: 'Molecules/CTAGroup',
	component: CTAGroup,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# CTAGroup

A grouped button molecule for displaying primary and optional secondary call-to-action buttons with consistent spacing and alignment. Simplifies dual-action patterns common in UI design.

## Key Features

- **Dual Button Support**: Primary and optional secondary actions
- **Flexible Alignment**: Left or center alignment options
- **Consistent Spacing**: Unified gap between buttons
- **Responsive Layout**: Stacks on mobile, side-by-side on desktop
- **Tone Control**: Independent tone settings per button
- **Optional Secondary**: Works with primary-only or dual-button layouts

## Use Cases

- **Form Actions**: Submit and cancel buttons
- **Product Pages**: Buy and details buttons
- **Modal Dialogs**: Confirm and cancel actions
- **Content Actions**: Download and preview buttons
- **Navigation Flows**: Next and back buttons
- **Conversion Points**: Primary and alternative actions

## Best Practices

- Primary action should be most important path (e.g., "Buy", "Submit")
- Secondary provides alternative (e.g., "Cancel", "Learn More")
- Use center alignment for hero sections and modals
- Use left alignment for forms and content sections
- Keep button labels concise (1-3 words)
- Ensure color contrast for both button types

## Accessibility Notes

- Proper button semantics from Button atoms
- Keyboard navigation supported
- Focus states on all buttons
- Clear visual hierarchy between primary and secondary
- Touch-friendly spacing on mobile

## Composition

- **Button atoms**: For individual action buttons
- **Flex layout**: For responsive arrangement
- **Gap utilities**: For consistent spacing

## Responsive Behavior

- Buttons stack vertically on small screens
- Side-by-side layout on tablet and desktop
- Spacing adjusts for different viewports
- Button widths adapt to content and layout

## Differences from Atoms

Unlike standalone Button atoms, CTAGroup provides coordinated multi-button layout with consistent spacing, alignment control, and responsive stacking behavior.`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		primary: {
			control: 'object',
			description:
				'Primary action button configuration. Object with: label (string), href (string), tone (string, e.g., "primary"). This is the main conversion action.'
		},
		secondary: {
			control: 'object',
			description:
				'Optional secondary action button. Same structure as primary. Set to null to display only primary button. Provides alternative user path.'
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center'],
			description:
				'Horizontal alignment of button group. "center" for hero sections and modals, "left" for forms and content sections. Default is "center".'
		}
	}
} satisfies Meta<typeof CTAGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: { label: 'Acheter', href: '#', tone: 'primary' },
		secondary: { label: 'En savoir plus', href: '#', tone: 'secondary' },
		align: 'center'
	}
};

export const PrimaryAndSecondary: Story = {
	args: {
		...Primary.args
	}
};

export const OnlyPrimary: Story = {
	args: {
		...Primary.args,
		secondary: null,
		align: 'left'
	}
};
