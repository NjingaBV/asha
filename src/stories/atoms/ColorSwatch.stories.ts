import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import ColorSwatch from '$lib/components/atoms/ColorSwatch.svelte';

const meta = {
	title: 'Atoms/ColorSwatch',
	component: ColorSwatch,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# ColorSwatch

A unified, selectable color indicator button for displaying and selecting colors.
Supports both custom CSS colors and Apple's color palette with optional gradient effects.
Previously known as "ColorDot".

## Features

- **Flexible Color Support**: CSS colors (hex, rgb, names) or Apple color names
- **Apple Color Palette**: 10+ built-in colors with optional dual-tone gradients
- **Selection State**: Visual feedback with border, ring, and scale animation
- **Multiple Size Options**: Pixel-based (any number) or named sizes (sm, md, lg)
- **Gradient Effects**: Optional dual-tone gradient for visual richness
- **Accessible**: Full ARIA support, keyboard navigation, and screen reader text

## Use Cases

- Product color picker
- Mac variant selector
- Color palette selector
- Design system color reference
- Theme switcher
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'text',
			description:
				'Color value: CSS color (hex, rgb, names) or Apple color name (blue, purple, pink, orange, yellow, green, silver, space-black, sky-blue, starlight, midnight)'
		},
		selected: {
			control: 'boolean',
			description: 'Whether the color swatch is selected',
			table: { defaultValue: { summary: 'false' } }
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Size: named sizes (sm=16px, md=24px, lg=32px)',
			table: { defaultValue: { summary: 'md' } }
		},
		type: {
			control: { type: 'select' },
			options: ['solid', 'dual-tone'],
			description: 'Color type: "solid" for flat color, "dual-tone" for gradient effect',
			table: { defaultValue: { summary: 'solid' } }
		},
		label: {
			control: 'text',
			description: 'Accessible label for the color (used as aria-label and title)'
		}
	}
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default ColorSwatch with hex color and medium size.
 * Tests: rendering, color display, accessible name, default state.
 */
export const Default: Story = {
	args: {
		color: '#0a84ff',
		selected: false,
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: swatch renders
		await expect(button).toBeInTheDocument();

		// Test: color display with hex value
		await expect(button).toHaveStyle({
			background: '#0a84ff'
		});

		// Test: medium size (24px default)
		await expect(button).toHaveStyle({
			width: '24px',
			height: '24px'
		});

		// Test: has accessible name from color value
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBeDefined();
		await expect(ariaLabel).not.toEqual('');

		// Test: sr-only text is present
		const srText = button.querySelector('.sr-only');
		await expect(srText).toBeInTheDocument();

		// Test: not selected state
		await expect(button).toHaveAttribute('aria-pressed', 'false');
	}
};

/**
 * Selected ColorSwatch with visual indicator.
 * Tests: selected state, aria-pressed attribute, ring/scale classes, accessible label.
 */
export const Selected: Story = {
	args: {
		color: '#0a84ff',
		selected: true,
		size: 'md',
		label: 'Blue'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists and is selected
		await expect(button).toBeInTheDocument();

		// Test: aria-pressed indicates selected state
		await expect(button).toHaveAttribute('aria-pressed', 'true');

		// Test: selected state visual indicator (ring and scale)
		const classString = button.className;
		await expect(classString).toMatch(/ring-2/);
		await expect(classString).toMatch(/ring-offset-2/);
		await expect(classString).toMatch(/scale-105/);

		// Test: accessible name is "Blue"
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBe('Blue');

		// Test: title attribute matches label
		const title = button.getAttribute('title');
		await expect(title).toBe('Blue');

		// Test: sr-only content matches label
		const srText = button.querySelector('.sr-only');
		await expect(srText?.textContent).toBe('Blue');
	}
};

/**
 * Small ColorSwatch (16px).
 * Tests: size variant rendering, color application, accessibility.
 */
export const Small: Story = {
	args: {
		color: '#0a84ff',
		selected: false,
		size: 'sm'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: small size (16px)
		await expect(button).toHaveStyle({
			width: '16px',
			height: '16px'
		});

		// Test: color is applied
		await expect(button).toHaveStyle({
			background: '#0a84ff'
		});

		// Test: button is not selected
		await expect(button).toHaveAttribute('aria-pressed', 'false');
	}
};

/**
 * Large ColorSwatch (32px).
 * Tests: size variant rendering, color application, accessibility.
 */
export const Large: Story = {
	args: {
		color: '#0a84ff',
		selected: false,
		size: 'lg'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: large size (32px)
		await expect(button).toHaveStyle({
			width: '32px',
			height: '32px'
		});

		// Test: color is applied
		await expect(button).toHaveStyle({
			background: '#0a84ff'
		});

		// Test: button is not selected
		await expect(button).toHaveAttribute('aria-pressed', 'false');
	}
};

/**
 * Red ColorSwatch with descriptive label.
 * Tests: custom color, accessible color name, sr-only text.
 */
export const Red: Story = {
	args: {
		color: '#ff3b30',
		selected: false,
		size: 'md',
		label: 'Red'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: red color is applied
		await expect(button).toHaveStyle({
			background: '#ff3b30'
		});

		// Test: accessible name is "Red"
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBe('Red');

		// Test: sr-only text is "Red"
		const srText = button.querySelector('.sr-only');
		await expect(srText?.textContent).toBe('Red');
	}
};

/**
 * Green ColorSwatch with descriptive label.
 * Tests: custom color, accessible color name, screen reader text.
 */
export const Green: Story = {
	args: {
		color: '#34c759',
		selected: false,
		size: 'md',
		label: 'Green'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: green color is applied
		await expect(button).toHaveStyle({
			background: '#34c759'
		});

		// Test: accessible color name is provided
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBe('Green');
	}
};

/**
 * Apple Blue solid color (not gradient).
 * Tests: Apple color palette, solid type, accessible label.
 */
export const AppleBlue: Story = {
	args: {
		color: 'blue',
		type: 'solid',
		size: 'md',
		label: 'Blue'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: Apple blue color is applied (solid)
		await expect(button).toHaveStyle({
			background: '#0a84ff'
		});

		// Test: accessible name is "Blue"
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBe('Blue');

		// Test: solid type (not gradient)
		const style = button.getAttribute('style');
		await expect(style).not.toMatch(/linear-gradient/);
	}
};

/**
 * Apple Blue with dual-tone gradient effect.
 * Tests: gradient rendering, Apple color palette, accessible color description.
 */
export const AppleBlueDualTone: Story = {
	args: {
		color: 'blue',
		type: 'dual-tone',
		size: 'md',
		label: 'Blue Gradient'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: gradient effect is applied
		const style = button.getAttribute('style');
		await expect(style).toMatch(/linear-gradient/);
		await expect(style).toMatch(/135deg/);

		// Test: accessible name indicates gradient
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBe('Blue Gradient');

		// Test: sr-only text matches
		const srText = button.querySelector('.sr-only');
		await expect(srText?.textContent).toBe('Blue Gradient');
	}
};

/**
 * Apple Silver solid color.
 * Tests: Apple color palette, light color rendering, accessibility.
 */
export const AppleSilver: Story = {
	args: {
		color: 'silver',
		type: 'solid',
		size: 'md',
		label: 'Silver'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: Apple silver color is applied
		await expect(button).toHaveStyle({
			background: '#c7c7cc'
		});

		// Test: accessible name is "Silver"
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBe('Silver');
	}
};

/**
 * Apple Space Black solid color.
 * Tests: Apple color palette, dark color, accessible color name.
 */
export const AppleSpaceBlack: Story = {
	args: {
		color: 'space-black',
		type: 'solid',
		size: 'md',
		label: 'Space Black'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: Apple space black color is applied
		await expect(button).toHaveStyle({
			background: '#1a1a1a'
		});

		// Test: accessible color name describes the color
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBe('Space Black');

		// Test: screen reader text is accessible
		const srText = button.querySelector('.sr-only');
		await expect(srText?.textContent).toBe('Space Black');
	}
};

/**
 * Apple Purple with dual-tone gradient and large size.
 * Tests: gradient, large size, Apple color, accessible description.
 */
export const ApplePurple: Story = {
	args: {
		color: 'purple',
		type: 'dual-tone',
		size: 'lg',
		label: 'Purple Gradient'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: large size applied
		await expect(button).toHaveStyle({
			width: '32px',
			height: '32px'
		});

		// Test: gradient effect is applied
		const style = button.getAttribute('style');
		await expect(style).toMatch(/linear-gradient/);
		await expect(style).toMatch(/d4a5ff/); // light purple

		// Test: accessible color name
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBe('Purple Gradient');
	}
};

/**
 * Apple Starlight solid color.
 * Tests: Apple color palette, unique color, accessibility.
 */
export const AppleStarlight: Story = {
	args: {
		color: 'starlight',
		type: 'solid',
		size: 'md',
		label: 'Starlight'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: Apple starlight color is applied
		await expect(button).toHaveStyle({
			background: '#fef3c7'
		});

		// Test: accessible label
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBe('Starlight');
	}
};

/**
 * Apple Midnight solid color.
 * Tests: Apple color palette, dark color rendering, accessibility.
 */
export const AppleMidnight: Story = {
	args: {
		color: 'midnight',
		type: 'solid',
		size: 'md',
		label: 'Midnight'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists
		await expect(button).toBeInTheDocument();

		// Test: Apple midnight color is applied
		await expect(button).toHaveStyle({
			background: '#0f172a'
		});

		// Test: accessible color name
		const ariaLabel = button.getAttribute('aria-label');
		await expect(ariaLabel).toBe('Midnight');

		// Test: sr-only content
		const srText = button.querySelector('.sr-only');
		await expect(srText?.textContent).toBe('Midnight');
	}
};

/**
 * Interactive ColorSwatch demonstrating click behavior and focus states.
 * Tests: button interaction, focus handling, hover states, accessibility, click behavior.
 */
export const Interactive: Story = {
	args: {
		color: '#ff9500',
		selected: false,
		size: 'md',
		label: 'Orange'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		// Test: button exists and is interactive
		await expect(button).toBeInTheDocument();

		// Test: initial state is not selected
		await step('Verify initial state', async () => {
			await expect(button).toHaveAttribute('aria-pressed', 'false');
		});

		// Test: button is clickable and focusable
		await step('Test click and focus interaction', async () => {
			// Verify button is not disabled
			await expect(button).not.toBeDisabled();

			// Verify button can be focused
			button.focus();
			// Check if button is actually focused
			const activeElement = document.activeElement;
			await expect(activeElement).toBe(button);
		});

		// Test: hover state classes present
		await step('Test hover state classes', async () => {
			const classString = button.className;
			await expect(classString).toMatch(/hover:ring-2/);
			await expect(classString).toMatch(/hover:ring-offset-2/);
		});

		// Test: accessible color name for screen readers
		await step('Verify accessibility attributes', async () => {
			const ariaLabel = button.getAttribute('aria-label');
			await expect(ariaLabel).toBe('Orange');

			const title = button.getAttribute('title');
			await expect(title).toBe('Orange');

			const srText = button.querySelector('.sr-only');
			await expect(srText?.textContent).toBe('Orange');
		});

		// Test: orange color is displayed
		await step('Verify color application', async () => {
			await expect(button).toHaveStyle({
				background: '#ff9500'
			});
		});

		// Test: focus visible styles
		await step('Verify focus visible styles', async () => {
			const classString = button.className;
			await expect(classString).toMatch(/focus-visible:ring-2/);
			await expect(classString).toMatch(/focus:outline-none/);
		});
	}
};
