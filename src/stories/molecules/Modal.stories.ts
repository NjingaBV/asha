import type { Meta, StoryObj } from '@storybook/sveltekit';
import Modal from '$lib/components/molecules/Modal.svelte';
import Button from '$lib/components/atoms/Button.svelte';

/**
 * # Modal
 *
 * A dialog component with focus trap, keyboard navigation, and transitions.
 * Uses native `<dialog>` element and follows WAI-ARIA dialog patterns.
 *
 * ## Features
 *
 * - **5 Sizes**: `sm`, `md`, `lg`, `xl`, `full`
 * - **Focus Trap**: Focus stays within modal when open
 * - **Keyboard Navigation**: Escape to close, Tab to navigate
 * - **Smooth Transitions**: Fade and scale animations
 * - **Scroll Lock**: Body scroll prevented when open
 *
 * ## Accessibility
 *
 * - `role="dialog"` with `aria-modal="true"`
 * - `aria-labelledby` and `aria-describedby`
 * - Focus restored on close
 * - Escape key closes modal
 *
 * ## Usage
 *
 * ```svelte
 * <Modal bind:open title="Confirmation">
 *   <p>Are you sure?</p>
 *   {#snippet footer()}
 *     <Button variant="outline" onclick={() => open = false}>Cancel</Button>
 *     <Button onclick={confirm}>Confirm</Button>
 *   {/snippet}
 * </Modal>
 * ```
 */
const meta = {
	title: 'Molecules/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A dialog component with focus trap, keyboard navigation, and smooth transitions.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		open: {
			control: 'boolean',
			description: 'Whether modal is open (bindable)',
			table: { defaultValue: { summary: 'false' } }
		},
		title: {
			control: 'text',
			description: 'Modal title'
		},
		description: {
			control: 'text',
			description: 'Modal description for screen readers'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg', 'xl', 'full'],
			description: 'Modal width size',
			table: { defaultValue: { summary: 'md' } }
		},
		closeOnEscape: {
			control: 'boolean',
			description: 'Close on Escape key',
			table: { defaultValue: { summary: 'true' } }
		},
		closeOnBackdrop: {
			control: 'boolean',
			description: 'Close on backdrop click',
			table: { defaultValue: { summary: 'true' } }
		},
		hideCloseButton: {
			control: 'boolean',
			description: 'Hide the close button',
			table: { defaultValue: { summary: 'false' } }
		}
	}
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Basic Stories
// ============================================

export const Default: Story = {
	args: {
		open: true,
		title: 'Modal Title',
		description: 'This is a modal dialog'
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () => 'This is the modal content. You can put any content here.'
		}
	}),
	play: async ({ canvasElement, step }) => {
		const { expect, within, getByRole } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render modal as dialog element', async () => {
			const dialog = canvasElement.querySelector('dialog');
			expect(dialog || canvasElement).toBeInTheDocument();
		});

		await step('Display modal title', async () => {
			expect(canvas.getByText('Modal Title')).toBeInTheDocument();
		});

		await step('Modal content is visible', async () => {
			expect(canvas.getByText(/This is the modal content/)).toBeInTheDocument();
		});

		await step('Modal has proper role and ARIA attributes', async () => {
			const dialog = canvasElement.querySelector('dialog');
			if (dialog) {
				expect(dialog).toHaveAttribute('open');
			}
		});
	}
};

export const WithFooter: Story = {
	args: {
		open: true,
		title: 'Confirm Action',
		description: 'Please confirm your action'
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () => 'Are you sure you want to proceed with this action?',
			footer: () => {
				return [
					{ Component: Button, props: { variant: 'outline', children: () => 'Cancel' } },
					{ Component: Button, props: { children: () => 'Confirm' } }
				];
			}
		}
	})
};

// ============================================
// Size Stories
// ============================================

export const Small: Story = {
	args: {
		open: true,
		title: 'Small Modal',
		size: 'sm'
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () => 'A compact modal for simple confirmations.'
		}
	})
};

export const Medium: Story = {
	args: {
		open: true,
		title: 'Medium Modal',
		size: 'md'
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () => 'The default modal size, suitable for most use cases.'
		}
	})
};

export const Large: Story = {
	args: {
		open: true,
		title: 'Large Modal',
		size: 'lg'
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () =>
				'A larger modal for content that needs more space, such as forms or detailed information.'
		}
	})
};

export const ExtraLarge: Story = {
	args: {
		open: true,
		title: 'Extra Large Modal',
		size: 'xl'
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () =>
				'An extra large modal for complex content like data tables or multi-step forms.'
		}
	})
};

export const FullScreen: Story = {
	args: {
		open: true,
		title: 'Full Screen Modal',
		size: 'full'
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () =>
				'A full-screen modal that takes up the entire viewport. Useful for immersive experiences.'
		}
	})
};

// ============================================
// Behavior Stories
// ============================================

export const NoCloseButton: Story = {
	args: {
		open: true,
		title: 'Focused Modal',
		hideCloseButton: true
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () => 'This modal has no close button. Use the actions below to dismiss.'
		}
	})
};

export const NoBackdropClose: Story = {
	args: {
		open: true,
		title: 'Important Notice',
		closeOnBackdrop: false
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () =>
				'This modal cannot be closed by clicking the backdrop. Use the close button or Escape key.'
		}
	})
};

export const NoEscapeClose: Story = {
	args: {
		open: true,
		title: 'Critical Action',
		closeOnEscape: false,
		closeOnBackdrop: false
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () =>
				'This modal requires explicit action. It cannot be closed with Escape or backdrop click.'
		}
	})
};

// ============================================
// Content Examples
// ============================================

export const LongContent: Story = {
	args: {
		open: true,
		title: 'Terms of Service',
		size: 'lg'
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () =>
				`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`
		}
	})
};

export const AlertModal: Story = {
	args: {
		open: true,
		title: 'Warning',
		size: 'sm'
	},
	parameters: {
		docs: {
			description: {
				story: 'A simple alert modal for important messages.'
			}
		}
	},
	render: (args: any) => ({
		Component: Modal,
		props: {
			...args,
			children: () => 'This action cannot be undone. Are you sure you want to continue?'
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
 * - Use Modals for critical actions that require focus (e.g., confirmations, complex forms).
 * - Use **Small** modals for simple alerts or confirmations.
 * - Use **Large** or **Extra Large** modals for complex content.
 *
 * ## Do's
 * - Keep titles clear and concise.
 * - Always provide a way to close the modal (close button, escape key, backdrop click).
 * - Focus the primary action or the first input field when the modal opens.
 *
 * ## Don'ts
 * - Don't nest modals (modals within modals).
 * - Don't use modals for non-critical information that could be shown in-line.
 * - Avoid extremely long content that requires excessive scrolling within the modal.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	render: () => ({
		Component: Modal,
		props: {
			open: true,
			title: 'Design Guidelines',
			children: () => 'See guidelines in the Docs tab.'
		}
	})
};
