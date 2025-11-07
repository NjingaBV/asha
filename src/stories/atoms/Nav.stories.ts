import type { Meta, StoryObj } from '@storybook/sveltekit';
import Nav from '@/lib/components/atoms/Nav.svelte';

const meta = {
	title: 'Atoms/Nav',
	component: Nav,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# Navigation

A responsive, dual-mode navigation component that adapts between horizontal header menu and vertical sidebar navigation.

## Key Features

- **Dual Layouts**: Horizontal header menu for desktop, vertical sidebar for mobile
- **Responsive Behavior**: Automatically adjusts based on screen size
- **Smart Text Color**: Automatically calculates optimal text color based on background for accessibility
- **Smooth Transitions**: Fly-in animation for elegant appearance
- **Flexible Styling**: Customizable background color with automatic contrast handling
- **Link Management**: Accepts array of link objects with label and href

## Use Cases

- **Header Navigation**: Primary navigation in page headers (horizontal layout)
- **Mobile Menus**: Full-screen mobile navigation (vertical sidebar)
- **Sidebar Navigation**: Sticky sidebar for internal pages
- **App Navigation**: Main navigation for web applications
- **Multi-page Sites**: Consistent navigation across pages

## Best Practices

- **Link Count**: Keep to 3-7 links for optimal usability
- **Link Labels**: Use clear, concise labels (1-2 words)
- **Mobile First**: Test on mobile devices to ensure readability
- **Color Contrast**: Component automatically ensures contrast, but test with your colors
- **Active States**: Consider implementing active link highlighting
- **Keyboard Navigation**: Test tab navigation through links

## Accessibility

- Uses semantic \`<nav>\` element for proper landmark
- Unordered list structure for link collection
- Links maintain proper focus states
- Automatic contrast calculation ensures WCAG compliance
- Text color adjusts based on background brightness
- Keyboard navigable with standard tab/enter controls
- Screen readers properly announce navigation role

## Technical Notes

- Brightness calculation: (R*299 + G*587 + B*114) / 1000
- Threshold: 125 brightness switches between black/white text
- Mobile breakpoint: 768px (md: Tailwind breakpoint)
- Transition: Fly animation with 400ms duration`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		headerMenu: {
			control: 'boolean',
			description:
				'Layout mode: true for horizontal header navigation (desktop), false for vertical sidebar navigation (mobile). Affects positioning, spacing, and visibility. Default is false.'
		},
		color: {
			control: 'color',
			description:
				'Background color for mobile navigation. Hex format required. Component automatically calculates optimal text color for contrast. On desktop (md+), background becomes transparent. Default is "#ffffff".'
		},
		links: {
			control: 'object',
			description:
				'Array of navigation link objects. Each object should have "label" (string) and "href" (string) properties. Example: [{ label: "Home", href: "/" }]'
		}
	}
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	},
	args: {
		headerMenu: true,
		color: '#ffffff',
		links: [
			{
				label: 'Home',
				href: '#'
			},
			{
				label: 'About',
				href: '#about'
			},
			{
				label: 'Contact',
				href: '#contact'
			}
		]
	}
};

export const HeaderNavigation: Story = {
	args: {
		...Primary.args
	}
};

export const AsideNavigation: Story = {
	args: {
		...Primary.args,
		headerMenu: false
	}
};
