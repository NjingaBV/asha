import type { Meta, StoryObj } from '@storybook/sveltekit';
import Alert from '$lib/components/molecules/Alert.svelte';

/**
 * # Alert
 *
 * A notification component for displaying important messages to users.
 * Supports different tones for various message types and can be dismissible.
 *
 * ## Features
 *
 * - **4 Tones**: `info`, `success`, `warning`, `error`
 * - **3 Variants**: `filled`, `outline`, `subtle`
 * - **Optional icon**: Contextual icon based on tone
 * - **Dismissible**: Optional close button
 * - **Accessible**: Uses `role="alert"` for screen readers
 *
 * ## Accessibility
 *
 * - Uses `role="alert"` for immediate announcement to screen readers
 * - Dismiss button is keyboard accessible
 * - Color is not the only indicator—icons provide additional context
 * - Sufficient color contrast in all variants
 *
 * ## Usage
 *
 * ```svelte
 * <Alert tone="success" title="Saved!">
 *   Your changes have been saved successfully.
 * </Alert>
 *
 * <Alert tone="error" dismissible>
 *   An error occurred. Please try again.
 * </Alert>
 * ```
 */
const meta = {
	title: 'Molecules/Alert',
	component: Alert,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A notification component for displaying contextual feedback messages with different severity levels.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: ['info', 'success', 'warning', 'error'],
			description: 'Semantic tone indicating the message type',
			table: {
				type: { summary: 'info | success | warning | error' },
				defaultValue: { summary: 'info' }
			}
		},
		variant: {
			control: { type: 'select' },
			options: ['filled', 'outline', 'subtle'],
			description: 'Visual style variant',
			table: {
				type: { summary: 'filled | outline | subtle' },
				defaultValue: { summary: 'subtle' }
			}
		},
		title: {
			control: 'text',
			description: 'Bold title text displayed at the top of the alert',
			table: {
				type: { summary: 'string' }
			}
		},
		dismissible: {
			control: 'boolean',
			description: 'Show a close button to dismiss the alert',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' }
			}
		},
		showIcon: {
			control: 'boolean',
			description: 'Display a contextual icon based on the tone',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' }
			}
		}
	}
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Tone Stories
// ============================================

export const Default: Story = {
	args: {
		tone: 'info',
		variant: 'subtle',
		title: 'Information',
		showIcon: true,
		dismissible: false
	}
};

export const Success: Story = {
	args: {
		tone: 'success',
		variant: 'subtle',
		title: 'Success',
		showIcon: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Use for successful operations, confirmations, or positive feedback.'
			}
		}
	}
};

export const Warning: Story = {
	args: {
		tone: 'warning',
		variant: 'subtle',
		title: 'Warning',
		showIcon: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Use for cautionary messages that require user attention but are not critical.'
			}
		}
	}
};

export const Error: Story = {
	args: {
		tone: 'error',
		variant: 'subtle',
		title: 'Error',
		showIcon: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Use for error messages, failed operations, or critical issues.'
			}
		}
	}
};

// ============================================
// Variant Stories
// ============================================

export const Filled: Story = {
	args: {
		tone: 'info',
		variant: 'filled',
		title: 'Filled Alert',
		showIcon: true
	},
	parameters: {
		docs: {
			description: {
				story: 'High-emphasis variant with solid background. Use for important messages.'
			}
		}
	}
};

export const Outline: Story = {
	args: {
		tone: 'success',
		variant: 'outline',
		title: 'Outline Alert',
		showIcon: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Medium-emphasis variant with border. Balanced visibility without dominating the UI.'
			}
		}
	}
};

export const Subtle: Story = {
	args: {
		tone: 'warning',
		variant: 'subtle',
		title: 'Subtle Alert',
		showIcon: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Low-emphasis variant with light background. Best for inline or less critical messages.'
			}
		}
	}
};

// ============================================
// Feature Stories
// ============================================

export const Dismissible: Story = {
	args: {
		tone: 'warning',
		variant: 'subtle',
		title: 'Dismissible Alert',
		dismissible: true,
		showIcon: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Alert with a close button. Use when the user can acknowledge and dismiss the message.'
			}
		}
	}
};

export const NoIcon: Story = {
	args: {
		tone: 'info',
		variant: 'subtle',
		title: 'Alert without icon',
		showIcon: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Alert without an icon. Use when the context is already clear from surrounding elements.'
			}
		}
	}
};

export const NoTitle: Story = {
	args: {
		tone: 'info',
		variant: 'subtle',
		showIcon: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Alert without a title. Use for brief, self-explanatory messages.'
			}
		}
	}
};

// ============================================
// Combinations
// ============================================

export const ErrorFilled: Story = {
	args: {
		tone: 'error',
		variant: 'filled',
		title: 'Critical Error',
		showIcon: true,
		dismissible: true
	},
	parameters: {
		docs: {
			description: {
				story: 'High-emphasis error alert. Use for critical errors that need immediate attention.'
			}
		}
	}
};

export const SuccessOutline: Story = {
	args: {
		tone: 'success',
		variant: 'outline',
		title: 'Changes Saved',
		showIcon: true,
		dismissible: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Dismissible success message with outline style.'
			}
		}
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **info** for neutral information and tips.
 * - Use **success** for confirmations and completed actions.
 * - Use **warning** for non-critical issues that need attention.
 * - Use **error** for failures and critical problems.
 *
 * ## Variant Selection
 * - **filled**: Highest emphasis, use sparingly for critical messages.
 * - **outline**: Balanced emphasis, good default for most alerts.
 * - **subtle**: Lowest emphasis, inline or contextual messages.
 *
 * ## Do's
 * - Keep alert text concise and actionable.
 * - Provide a clear title when the message needs context.
 * - Make alerts dismissible when appropriate.
 * - Use icons to reinforce the message type.
 *
 * ## Don'ts
 * - Don't stack multiple alerts of the same type.
 * - Avoid using error tone for non-critical issues.
 * - Don't rely on color alone—always include an icon or clear text.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	args: {
		...Default.args,
		title: 'See Guidelines in Docs'
	}
};
