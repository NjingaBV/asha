import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Badge from '$lib/components/atoms/Badge.svelte';

const meta = {
	title: 'Atoms/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Badge

A compact and versatile label component for highlighting status, categories, or additional information.

## Key Features

- **Multiple Variants**: _solid_, _outline_, and _ghost_ styles for different emphasis levels.
- **Semantic Colors**: Color options to represent success, warning, danger, etc.
- **Flexible Sizes**: Multiple sizes to adapt to various UI contexts.
- **Customizable Content**: Use the \`label\` prop for simple text or the default slot for rich content (icons, etc.).
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description:
				'Text content for the badge. Use for simple string labels. Omit to use children slot for custom content.'
		},
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral', 'info'],
			description:
				'Semantic color tone: "primary" (accent) for brand/main actions, "secondary" for less prominent info, "success" for positive states, "warning" for caution, "danger" for errors/critical, "neutral" for general labels. Default is "primary".'
		},
		variant: {
			control: { type: 'select' },
			options: ['solid', 'outline', 'ghost'],
			description:
				'Visual style: "solid" for filled backgrounds (high emphasis), "outline" for bordered badges (medium emphasis), "ghost" for text-only (low emphasis). Default is "solid".'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description:
				'Size variant: "sm" (text-xs, compact padding) for inline use, "md" (text-xs, standard padding) for general use, "lg" (text-sm, larger padding) for prominent displays. Default is "md".'
		},
		rounded: {
			control: 'boolean',
			description:
				'Shape style: true for fully rounded pill shape, false for subtle rounded corners. Default is true.'
		},
		children: {
			description:
				'Svelte snippet for custom badge content. Use when you need more than simple text (e.g., icons, counts, complex layouts).'
		}
	}
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Default Story with Play Test
// ============================================

export const Primary: Story = {
	args: {
		label: 'New',
		tone: 'primary',
		variant: 'solid',
		size: 'md',
		children: null
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('New');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test base classes are applied
		await expect(badge).toHaveClass('inline-flex');
		await expect(badge).toHaveClass('items-center');
		await expect(badge).toHaveClass('font-medium');

		// Test label content
		await expect(badge).toHaveTextContent('New');

		// Test tone and variant specific classes
		await expect(badge).toHaveClass('bg-accent');
		await expect(badge).toHaveClass('text-fg-on-accent');

		// Test size classes (md default)
		await expect(badge).toHaveClass('px-2.5');
		await expect(badge).toHaveClass('py-0.5');
		await expect(badge).toHaveClass('text-xs');

		// Test rounded shape (default true)
		await expect(badge).toHaveClass('rounded-full');
	}
};

// ============================================
// Tone Variants with Play Tests
// ============================================

export const Secondary: Story = {
	args: {
		...Primary.args,
		tone: 'secondary'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('New');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test secondary tone classes
		await expect(badge).toHaveClass('bg-secondary');
		await expect(badge).toHaveClass('text-fg-on-accent');

		// Verify accent classes are not applied
		await expect(badge).not.toHaveClass('bg-accent');
	}
};

export const Success: Story = {
	args: {
		...Primary.args,
		label: 'Available',
		tone: 'success'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Available');

		// Test badge renders with correct content
		await expect(badge).toBeInTheDocument();
		await expect(badge).toHaveTextContent('Available');

		// Test success tone classes
		await expect(badge).toHaveClass('bg-success');
		await expect(badge).toHaveClass('text-fg-on-accent');

		// Verify it's solid variant (background color present)
		await expect(badge).toHaveClass('bg-success');
	}
};

export const Warning: Story = {
	args: {
		...Primary.args,
		label: 'Limited',
		tone: 'warning'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Limited');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test warning tone classes
		await expect(badge).toHaveClass('bg-warning');
		await expect(badge).toHaveClass('text-fg-on-accent');

		// Test label content
		await expect(badge).toHaveTextContent('Limited');
	}
};

export const Danger: Story = {
	args: {
		...Primary.args,
		label: 'Sold Out',
		tone: 'danger'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Sold Out');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test danger tone classes (uses error token)
		await expect(badge).toHaveClass('bg-error');
		await expect(badge).toHaveClass('text-fg-on-accent');

		// Test text content
		await expect(badge).toHaveTextContent('Sold Out');
	}
};

export const Info: Story = {
	args: {
		...Primary.args,
		label: 'Update',
		tone: 'info'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Update');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test info tone classes
		await expect(badge).toHaveClass('bg-info');
		await expect(badge).toHaveClass('text-fg-on-accent');

		// Test label content
		await expect(badge).toHaveTextContent('Update');
	}
};

export const Neutral: Story = {
	args: {
		...Primary.args,
		label: 'Edition',
		tone: 'neutral',
		size: 'sm'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Edition');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test neutral tone classes
		await expect(badge).toHaveClass('bg-fg');
		await expect(badge).toHaveClass('text-bg');

		// Test size is sm
		await expect(badge).toHaveClass('px-2');
		await expect(badge).toHaveClass('py-0.5');
		await expect(badge).toHaveClass('text-xs');
	}
};

// ============================================
// Size Variants with Play Tests
// ============================================

export const SizeSmall: Story = {
	args: {
		...Primary.args,
		label: 'Small',
		size: 'sm'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Small');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test sm size classes
		await expect(badge).toHaveClass('px-2');
		await expect(badge).toHaveClass('py-0.5');
		await expect(badge).toHaveClass('text-xs');

		// Verify md classes are not applied
		await expect(badge).not.toHaveClass('px-2.5');
		await expect(badge).not.toHaveClass('px-3');
	}
};

export const SizeMedium: Story = {
	args: {
		...Primary.args,
		label: 'Medium',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Medium');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test md size classes (default)
		await expect(badge).toHaveClass('px-2.5');
		await expect(badge).toHaveClass('py-0.5');
		await expect(badge).toHaveClass('text-xs');

		// Verify other size classes are not applied
		await expect(badge).not.toHaveClass('px-2');
		await expect(badge).not.toHaveClass('px-3');
	}
};

export const SizeLarge: Story = {
	args: {
		...Primary.args,
		label: 'Large',
		size: 'lg'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Large');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test lg size classes
		await expect(badge).toHaveClass('px-3');
		await expect(badge).toHaveClass('py-1');
		await expect(badge).toHaveClass('text-sm');

		// Verify other size classes are not applied
		await expect(badge).not.toHaveClass('px-2');
		await expect(badge).not.toHaveClass('px-2.5');
	}
};

// ============================================
// Variant Styles with Play Tests
// ============================================

export const Outline: Story = {
	args: {
		...Primary.args,
		variant: 'outline'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('New');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test outline variant classes
		await expect(badge).toHaveClass('border');
		await expect(badge).toHaveClass('border-accent');
		await expect(badge).toHaveClass('text-accent');

		// Verify solid variant classes are not applied
		await expect(badge).not.toHaveClass('bg-accent');
	}
};

export const Ghost: Story = {
	args: {
		...Primary.args,
		variant: 'ghost'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('New');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test ghost variant classes
		await expect(badge).toHaveClass('text-accent');

		// Verify solid and outline variant classes are not applied
		await expect(badge).not.toHaveClass('bg-accent');
		await expect(badge).not.toHaveClass('border');
	}
};

// ============================================
// Variant + Tone Combinations with Play Tests
// ============================================

export const OutlineSuccess: Story = {
	args: {
		...Primary.args,
		label: 'Approved',
		tone: 'success',
		variant: 'outline'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Approved');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test outline variant with success tone
		await expect(badge).toHaveClass('border');
		await expect(badge).toHaveClass('border-success');
		await expect(badge).toHaveClass('text-success');

		// Verify solid classes are not applied
		await expect(badge).not.toHaveClass('bg-success');
	}
};

export const GhostDanger: Story = {
	args: {
		...Primary.args,
		label: 'Error',
		tone: 'danger',
		variant: 'ghost'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Error');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test ghost variant with danger tone
		await expect(badge).toHaveClass('text-error');

		// Verify solid and outline classes are not applied
		await expect(badge).not.toHaveClass('bg-error');
		await expect(badge).not.toHaveClass('border');
	}
};

export const OutlineNeutral: Story = {
	args: {
		...Primary.args,
		label: 'Tag',
		tone: 'neutral',
		variant: 'outline'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Tag');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test outline variant with neutral tone
		await expect(badge).toHaveClass('border');
		await expect(badge).toHaveClass('border-fg');
		await expect(badge).toHaveClass('text-fg');

		// Verify solid classes are not applied
		await expect(badge).not.toHaveClass('bg-fg');
	}
};

// ============================================
// Shape Variants with Play Tests
// ============================================

export const RoundedPill: Story = {
	args: {
		...Primary.args,
		label: 'Pill Shape',
		rounded: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Pill Shape');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test rounded pill shape
		await expect(badge).toHaveClass('rounded-full');

		// Verify subtle rounded class is not applied
		await expect(badge).not.toHaveClass('rounded');
	}
};

export const RoundedCorners: Story = {
	args: {
		...Primary.args,
		label: 'Rounded Corners',
		rounded: false
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Rounded Corners');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test subtle rounded corners
		await expect(badge).toHaveClass('rounded');

		// Verify full pill shape is not applied
		await expect(badge).not.toHaveClass('rounded-full');
	}
};

// ============================================
// Comprehensive Variant Test (All Tones)
// ============================================

export const AllTonesSolid: Story = {
	render: () => ({
		Component: Badge,
		props: {
			label: 'Badge',
			variant: 'solid'
		}
	}),
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral', 'info']
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'Display all tone variants with solid style. Select different tones from the controls.'
			}
		}
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const badge = canvas.getByText('Badge');

		// Test badge renders
		await expect(badge).toBeInTheDocument();

		// Test base classes are always applied
		await expect(badge).toHaveClass('inline-flex');
		await expect(badge).toHaveClass('items-center');
		await expect(badge).toHaveClass('font-medium');
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Solid** badges for high-priority status indicators (e.g., "New", "Sold Out").
 * - Use **Outline** badges for secondary attributes (e.g., "Beta", "v1.0").
 * - Use **Ghost** badges for subtle metadata (e.g., tags, counts).
 *
 * ## Do's
 * - Keep label text short (1-2 words).
 * - Use semantic tones (Success, Warning) appropriately for their meaning.
 * - Use the rounded pill shape for standard status indicators.
 *
 * ## Don'ts
 * - Don't use badges for interactive elements (use Buttons or Chips instead).
 * - Avoid using too many badges in a single view (clutter).
 * - Don't mix different badge sizes in the same context.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	render: () => ({
		Component: Badge,
		props: {
			label: 'See Guidelines in Docs',
			tone: 'primary',
			variant: 'solid'
		}
	})
};
