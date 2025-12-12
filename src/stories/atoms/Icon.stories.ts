import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Icon from '$lib/components/atoms/Icon.svelte';

const meta = {
	title: 'Atoms/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Icon Component

SVG icon system with predefined icon names and customizable sizing.

## Features

- **7 Built-in Icons**: search, sun, moon, chevron-right, chip, color, external
- **Customizable Size**: Any pixel value for flexible scaling
- **Custom CSS**: Apply Tailwind or custom classes via \`class\` prop
- **Lightweight**: Pure SVG, no font dependencies

## Icon Catalog

- **search**: Magnifying glass search icon
- **sun**: Sun/light mode icon
- **moon**: Moon/dark mode icon
- **chevron-right**: Right chevron/arrow
- **chip**: Processor/chip icon
- **color**: Color picker/palette icon
- **external**: External link icon
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: 'select',
			options: ['search', 'sun', 'moon', 'chevron-right', 'chip', 'color', 'external'],
			description: 'Icon name to display from the catalog'
		},
		size: {
			control: { type: 'number', min: 12, max: 64, step: 2 },
			description: 'Icon size in pixels (width and height)'
		},
		class: {
			control: 'text',
			description: 'Custom CSS classes (e.g., "text-red-500 opacity-50")'
		}
	}
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Search: Story = {
	args: { name: 'search', size: 24 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	})
};

export const Sun: Story = {
	args: { name: 'sun', size: 24 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	})
};

export const Moon: Story = {
	args: { name: 'moon', size: 24 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	})
};

export const ChevronRight: Story = {
	args: { name: 'chevron-right', size: 24 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	})
};

export const Chip: Story = {
	args: { name: 'chip', size: 24 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	})
};

export const Color: Story = {
	args: { name: 'color', size: 24 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	})
};

export const External: Story = {
	args: { name: 'external', size: 24 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	})
};

export const Small: Story = {
	args: { name: 'search', size: 16 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	})
};

export const Large: Story = {
	args: { name: 'search', size: 48 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	})
};

export const Colored: Story = {
	args: { name: 'sun', size: 32, class: 'text-yellow-500' },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	})
};

export const Catalog: Story = {
	args: { size: 24 },
	render: ({ size, class: className }) => ({
		Component: () => ({
			Component: 'div',
			children: [
				{
					Component: 'div',
					props: { class: 'flex gap-4 flex-wrap items-center' },
					children: [
						{ Component: Icon, props: { name: 'search', size, class: className } },
						{ Component: Icon, props: { name: 'sun', size, class: className } },
						{ Component: Icon, props: { name: 'moon', size, class: className } },
						{
							Component: Icon,
							props: { name: 'chevron-right', size, class: className }
						},
						{ Component: Icon, props: { name: 'chip', size, class: className } },
						{ Component: Icon, props: { name: 'color', size, class: className } },
						{ Component: Icon, props: { name: 'external', size, class: className } }
					]
				}
			]
		}),
		props: {}
	})
};

// ============================================
// Play Tests - Rendering & Accessibility
// ============================================

export const TestSearchIcon: Story = {
	args: { name: 'search', size: 24 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const svg = canvasElement.querySelector('svg');
		expect(svg).toBeInTheDocument();
		expect(svg).toHaveAttribute('aria-hidden', 'true');
	}
};

export const TestIconRendering: Story = {
	args: { name: 'sun', size: 32 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const svg = canvasElement.querySelector('svg');
		expect(svg).toBeInTheDocument();
		expect(svg).toBeVisible();
	}
};

export const TestSmallSize: Story = {
	args: { name: 'search', size: 16 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const svg = canvasElement.querySelector('svg');
		expect(svg).toBeInTheDocument();
		expect(svg).toHaveAttribute('width', '16');
		expect(svg).toHaveAttribute('height', '16');
	}
};

export const TestLargeSize: Story = {
	args: { name: 'search', size: 48 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const svg = canvasElement.querySelector('svg');
		expect(svg).toBeInTheDocument();
		expect(svg).toHaveAttribute('width', '48');
		expect(svg).toHaveAttribute('height', '48');
	}
};

export const TestColoredIcon: Story = {
	args: { name: 'sun', size: 32, class: 'text-yellow-500' },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const svg = canvasElement.querySelector('svg');
		expect(svg).toBeInTheDocument();
		// Verify the color class is applied to the icon
		expect(svg).toHaveClass('text-yellow-500');
	}
};

export const TestIconAriaHidden: Story = {
	args: { name: 'moon', size: 24 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const svg = canvasElement.querySelector('svg');
		expect(svg).toBeInTheDocument();
		// Icons should be aria-hidden by default (decorative)
		expect(svg).toHaveAttribute('aria-hidden', 'true');
	}
};

export const TestChevronIcon: Story = {
	args: { name: 'chevron-right', size: 24 },
	render: ({ name, size, class: className }) => ({
		Component: Icon,
		props: { name, size, class: className }
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const svg = canvasElement.querySelector('svg');
		expect(svg).toBeInTheDocument();
		expect(svg).toHaveAttribute('width', '24');
		expect(svg).toHaveAttribute('height', '24');
	}
};
