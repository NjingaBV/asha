import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Button from '$lib/components/atoms/Button.svelte';

/**
 * # Button
 *
 * A versatile button component with multiple variants, tones, and sizes.
 * Renders as `<button>` or `<a>` depending on whether `href` is provided.
 *
 * ## Features
 *
 * - **4 Variants**: `solid`, `outline`, `ghost`, `link`
 * - **5 Tones**: `primary`, `secondary`, `neutral`, `danger`, `success`
 * - **3 Sizes**: `sm`, `md`, `lg`
 * - **Loading State**: Shows spinner and disables interaction
 * - **Icon Support**: Left and right icon slots
 * - **Link Mode**: Renders as `<a>` when `href` is provided
 *
 * ## Accessibility
 *
 * - Focus-visible ring for keyboard navigation
 * - `aria-busy` during loading state
 * - `aria-disabled` for disabled links
 * - Proper `type` attribute for form buttons
 *
 * ## Usage
 *
 * ```svelte
 * <Button tone="primary" variant="solid" size="md">Click me</Button>
 * <Button href="/about" variant="ghost">Learn more</Button>
 * <Button loading={isSubmitting}>Submit</Button>
 * ```
 */
const meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A versatile button component with multiple variants, tones, and sizes. Follows Apple-like design principles with refined focus states and smooth transitions.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['solid', 'outline', 'ghost', 'link'],
			description: 'Visual style variant',
			table: {
				type: { summary: 'solid | outline | ghost | link' },
				defaultValue: { summary: 'solid' }
			}
		},
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'neutral', 'danger', 'success', 'warning', 'info'],
			description: 'Color tone/scheme',
			table: {
				type: {
					summary: 'primary | secondary | neutral | danger | success | warning | info'
				},
				defaultValue: { summary: 'primary' }
			}
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Button size',
			table: {
				type: { summary: 'sm | md | lg' },
				defaultValue: { summary: 'md' }
			}
		},
		href: {
			control: 'text',
			description: 'Link href - renders as <a> if provided'
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
			table: { defaultValue: { summary: 'false' } }
		},
		loading: {
			control: 'boolean',
			description: 'Loading state with spinner',
			table: { defaultValue: { summary: 'false' } }
		},
		fullWidth: {
			control: 'boolean',
			description: 'Full width button',
			table: { defaultValue: { summary: 'false' } }
		},
		type: {
			control: { type: 'select' },
			options: ['button', 'submit', 'reset'],
			description: 'Button type (only for <button>)',
			table: { defaultValue: { summary: 'button' } }
		}
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Variant Stories
// ============================================

export const Solid: Story = {
	args: {
		variant: 'solid',
		tone: 'primary',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Solid Button'
		}
	})
};

export const Outline: Story = {
	args: {
		variant: 'outline',
		tone: 'primary',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Outline Button'
		}
	})
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		tone: 'primary',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Ghost Button'
		}
	})
};

export const Link: Story = {
	args: {
		variant: 'link',
		tone: 'primary',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Link Button'
		}
	})
};

// ============================================
// Tone Stories
// ============================================

export const Primary: Story = {
	args: {
		variant: 'solid',
		tone: 'primary',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Primary'
		}
	})
};

export const Secondary: Story = {
	args: {
		variant: 'solid',
		tone: 'secondary',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Secondary'
		}
	})
};

export const Neutral: Story = {
	args: {
		variant: 'solid',
		tone: 'neutral',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Neutral'
		}
	})
};

export const Danger: Story = {
	args: {
		variant: 'solid',
		tone: 'danger',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Danger'
		}
	})
};

export const Success: Story = {
	args: {
		variant: 'solid',
		tone: 'success',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Success'
		}
	})
};

export const Warning: Story = {
	args: {
		variant: 'solid',
		tone: 'warning',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Warning'
		}
	})
};

export const Info: Story = {
	args: {
		variant: 'solid',
		tone: 'info',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Info'
		}
	})
};

// ============================================
// Size Stories
// ============================================

export const Small: Story = {
	args: {
		variant: 'solid',
		tone: 'primary',
		size: 'sm'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Small'
		}
	})
};

export const Medium: Story = {
	args: {
		variant: 'solid',
		tone: 'primary',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Medium'
		}
	})
};

export const Large: Story = {
	args: {
		variant: 'solid',
		tone: 'primary',
		size: 'lg'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Large'
		}
	})
};

// ============================================
// State Stories
// ============================================

export const Loading: Story = {
	args: {
		variant: 'solid',
		tone: 'primary',
		size: 'md',
		loading: true
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Loading...'
		}
	})
};

export const Disabled: Story = {
	args: {
		variant: 'solid',
		tone: 'primary',
		size: 'md',
		disabled: true
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Disabled'
		}
	})
};

export const FullWidth: Story = {
	args: {
		variant: 'solid',
		tone: 'primary',
		size: 'md',
		fullWidth: true
	},
	parameters: {
		layout: 'padded'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Full Width Button'
		}
	})
};

// ============================================
// Link Stories
// ============================================

export const AsLink: Story = {
	args: {
		variant: 'solid',
		tone: 'primary',
		size: 'md',
		href: '/about'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Navigate'
		}
	})
};

export const ExternalLink: Story = {
	args: {
		variant: 'outline',
		tone: 'primary',
		size: 'md',
		href: 'https://example.com',
		target: '_blank'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'External Link'
		}
	})
};

// ============================================
// Form Stories
// ============================================

export const SubmitButton: Story = {
	args: {
		variant: 'solid',
		tone: 'primary',
		size: 'md',
		type: 'submit'
	},
	render: (args: any) => ({
		Component: Button,
		props: {
			...args,
			children: () => 'Submit Form'
		}
	})
};

// ============================================
// All Variants Grid (for visual testing)
// ============================================

export const AllVariants: Story = {
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				story: 'Visual overview of all button variants and tones. Use this to compare styles and ensure visual consistency.'
			}
		}
	},
	render: () => ({
		Component: Button,
		props: {
			variant: 'solid',
			tone: 'primary',
			children: () => 'All Variants - See Docs for Grid'
		}
	})
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Solid** buttons for primary actions (e.g., "Save", "Submit").
 * - Use **Outline** buttons for secondary actions (e.g., "Cancel", "Back").
 * - Use **Ghost** buttons for tertiary actions or in toolbars.
 * - Use **Link** buttons for navigation within text or less prominent actions.
 *
 * ## Do's
 * - Use clear, action-oriented labels (e.g., "Create Account" instead of "Go").
 * - Maintain hierarchy by using different variants on the same page.
 * - Use the `loading` state for async actions to prevent double submissions.
 *
 * ## Don'ts
 * - Avoid using multiple **Solid** buttons in the same group (competing attention).
 * - Don't use **Danger** tone unless the action is destructive and irreversible.
 * - Don't overcrowd the interface with too many buttons; group them if necessary.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	render: () => ({
		Component: Button,
		props: {
			children: () => 'See Guidelines in Docs'
		}
	})
};
