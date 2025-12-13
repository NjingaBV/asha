import type { Meta, StoryObj } from '@storybook/sveltekit';
import AuthPage from '$lib/components/templates/AuthPage.svelte';

/**
 * # AuthPage
 *
 * A full-page template for authentication flows including sign in, sign up,
 * password reset, and other auth-related pages.
 *
 * ## Features
 *
 * - **2 Layouts**: `centered` (form in middle) and `split` (side-by-side)
 * - **Background pattern**: Optional decorative background
 * - **Flexible content**: Slot for form content
 * - **Branding ready**: Title and subtitle for context
 *
 * ## Accessibility
 *
 * - Semantic heading hierarchy (h1 for title)
 * - Form content area properly structured
 * - High contrast text on background patterns
 * - Keyboard navigable form elements
 *
 * ## Usage
 *
 * ```svelte
 * <AuthPage title="Sign In" subtitle="Welcome back!">
 *   <form>
 *     <Input label="Email" type="email" />
 *     <Input label="Password" type="password" />
 *     <Button type="submit">Sign In</Button>
 *   </form>
 * </AuthPage>
 * ```
 */
const meta = {
	title: 'Templates/AuthPage',
	component: AuthPage,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'A full-page authentication template with support for centered and split layouts. Use for sign in, sign up, password reset, and similar flows.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description:
				'Main heading displayed above the form (e.g., "Sign In", "Create Account")',
			table: {
				type: { summary: 'string' }
			}
		},
		subtitle: {
			control: 'text',
			description: 'Secondary text below the title providing context or instructions',
			table: {
				type: { summary: 'string' }
			}
		},
		showPattern: {
			control: 'boolean',
			description: 'Display a decorative background pattern or image',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' }
			}
		},
		variant: {
			control: 'select',
			options: ['centered', 'split'],
			description: 'Layout variant: centered (card in middle) or split (side-by-side panels)',
			table: {
				type: { summary: 'centered | split' },
				defaultValue: { summary: 'centered' }
			}
		},
		class: {
			control: 'text',
			description: 'Additional CSS classes for customization',
			table: {
				type: { summary: 'string' }
			}
		}
	}
} satisfies Meta<typeof AuthPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Layout Variants
// ============================================

export const Default: Story = {
	args: {
		title: 'Sign In',
		subtitle: 'Welcome back! Please enter your credentials.',
		variant: 'centered',
		showPattern: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Default centered layout with the form card in the middle of the page.'
			}
		}
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render page title', async () => {
			expect(canvas.getByRole('heading', { level: 1, name: 'Sign In' })).toBeInTheDocument();
		});

		await step('Render page subtitle', async () => {
			expect(
				canvas.getByText('Welcome back! Please enter your credentials.')
			).toBeInTheDocument();
		});

		await step('Main content area is present', async () => {
			const main = canvas.getByRole('main');
			expect(main).toBeInTheDocument();
		});

		await step('Layout has proper structure for centered variant', async () => {
			// Check that the form area is centered
			const formContainer = canvasElement.querySelector('.max-w-md');
			expect(formContainer).toBeInTheDocument();
		});

		await step('Background pattern is applied when enabled', async () => {
			// Check for pattern elements
			const patternElements = canvasElement.querySelectorAll('svg, .opacity-5, .opacity-10');
			expect(patternElements.length).toBeGreaterThan(0);
		});

		await step('Skip link is present', async () => {
			const skipLink = canvas.getByRole('link', { name: /skip to main content/i });
			expect(skipLink).toBeInTheDocument();
		});
	}
};

export const SplitLayout: Story = {
	args: {
		title: 'Welcome Back',
		subtitle: 'Sign in to continue to your account.',
		variant: 'split',
		showPattern: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Split layout with form on one side and branding/pattern on the other. Great for desktop experiences.'
			}
		}
	}
};

// ============================================
// Auth Flow Examples
// ============================================

export const SignUp: Story = {
	args: {
		title: 'Create Account',
		subtitle: 'Join us today and start your journey.',
		variant: 'centered',
		showPattern: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Sign up page variant. Content slot would contain registration form fields.'
			}
		}
	}
};

export const ForgotPassword: Story = {
	args: {
		title: 'Reset Password',
		subtitle: "Enter your email and we'll send you a reset link.",
		variant: 'centered',
		showPattern: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Password reset flow. Simpler form with just email input.'
			}
		}
	}
};

export const VerifyEmail: Story = {
	args: {
		title: 'Verify Your Email',
		subtitle: 'We sent a verification code to your email address.',
		variant: 'centered',
		showPattern: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Email verification step. Form would contain code input field.'
			}
		}
	}
};

export const SetNewPassword: Story = {
	args: {
		title: 'Set New Password',
		subtitle: 'Create a strong password for your account.',
		variant: 'centered',
		showPattern: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Password reset completion. Form contains new password and confirmation fields.'
			}
		}
	}
};

// ============================================
// Style Variations
// ============================================

export const NoPattern: Story = {
	args: {
		title: 'Sign In',
		subtitle: 'Enter your email and password.',
		variant: 'centered',
		showPattern: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Clean layout without decorative background. More minimal appearance.'
			}
		}
	}
};

export const Minimal: Story = {
	args: {
		title: 'Login',
		variant: 'centered',
		showPattern: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Minimal variant with just a title, no subtitle or pattern.'
			}
		}
	}
};

export const SplitNoPattern: Story = {
	args: {
		title: 'Sign In',
		subtitle: 'Access your account dashboard.',
		variant: 'split',
		showPattern: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Split layout without decorative pattern. The side panel could contain custom content.'
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
 * ## Layout Selection
 * - Use **centered** for simple forms (sign in, forgot password).
 * - Use **split** for more branded experiences or sign up flows.
 *
 * ## Content Guidelines
 * - Keep titles short and action-oriented ("Sign In", not "Please Sign In to Your Account").
 * - Use subtitles to provide context or reassurance.
 * - Place social login options before or after the main form, clearly separated.
 *
 * ## Do's
 * - Provide clear error feedback inline with form fields.
 * - Include a link to the alternative action ("Don't have an account? Sign up").
 * - Add a "Remember me" option for returning users.
 * - Show password strength indicators on registration.
 *
 * ## Don'ts
 * - Don't require too many fields on sign up—ask for more later.
 * - Avoid complex layouts that distract from the form.
 * - Don't forget password visibility toggle.
 * - Avoid CAPTCHAs unless absolutely necessary.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	args: {
		title: 'See Guidelines in Docs',
		subtitle: 'Check the documentation panel for usage guidelines.',
		variant: 'centered',
		showPattern: true
	}
};
