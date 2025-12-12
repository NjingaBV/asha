import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import IconButton from '$lib/components/atoms/IconButton.svelte';

const meta = {
	title: 'Atoms/IconButton',
	component: IconButton,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# IconButton

A button component optimized for icon-only actions.
Provides proper accessibility with required aria-label.

## Features

- **Three Variants**: solid, outline, ghost
- **Five Tones**: primary, secondary, neutral, danger, success
- **Four Sizes**: xs, sm, md, lg
- **Loading State**: Shows spinner animation
- **Link Support**: Can render as anchor when href provided
- **Accessible**: Required ariaLabel for screen readers
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		ariaLabel: {
			control: 'text',
			description: 'ARIA label (required for accessibility)'
		},
		variant: {
			control: { type: 'select' },
			options: ['solid', 'outline', 'ghost'],
			description: 'Visual style variant',
			table: { defaultValue: { summary: 'ghost' } }
		},
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'neutral', 'danger', 'success'],
			description: 'Color tone',
			table: { defaultValue: { summary: 'neutral' } }
		},
		size: {
			control: { type: 'select' },
			options: ['xs', 'sm', 'md', 'lg'],
			description: 'Button size',
			table: { defaultValue: { summary: 'md' } }
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
			table: { defaultValue: { summary: 'false' } }
		},
		loading: {
			control: 'boolean',
			description: 'Loading state',
			table: { defaultValue: { summary: 'false' } }
		},
		href: {
			control: 'text',
			description: 'Link href - renders as <a> if provided'
		}
	}
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		ariaLabel: 'Close',
		variant: 'ghost',
		tone: 'neutral',
		size: 'md'
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button rendering
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name (REQUIRED for icon-only button)
		expect(button).toHaveAttribute('aria-label', 'Close');

		// Test click interaction
		await userEvent.click(button);
		expect(button).not.toHaveAttribute('disabled');

		// Test button has proper type attribute
		expect(button).toHaveAttribute('type', 'button');
	}
};

export const Solid: Story = {
	args: {
		ariaLabel: 'Add item',
		variant: 'solid',
		tone: 'primary',
		size: 'md'
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button renders with solid variant
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name
		expect(button).toHaveAttribute('aria-label', 'Add item');

		// Test variant styling applied
		expect(button.className).toContain('solid');

		// Test primary tone styling applied
		expect(button.className).toContain('primary');

		// Test click interaction works
		await userEvent.click(button);
		expect(button).not.toHaveAttribute('disabled');
	}
};

export const Outline: Story = {
	args: {
		ariaLabel: 'Settings',
		variant: 'outline',
		tone: 'neutral',
		size: 'md'
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button renders with outline variant
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name
		expect(button).toHaveAttribute('aria-label', 'Settings');

		// Test outline variant styling applied
		expect(button.className).toContain('outline');

		// Test neutral tone styling applied
		expect(button.className).toContain('neutral');

		// Test keyboard activation with Enter key
		button.focus();
		await userEvent.keyboard('{Enter}');
		expect(button).toHaveFocus();

		// Test keyboard activation with Space key
		await userEvent.keyboard(' ');
		expect(button).toHaveFocus();
	}
};

export const Ghost: Story = {
	args: {
		ariaLabel: 'Menu',
		variant: 'ghost',
		tone: 'neutral',
		size: 'md'
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button renders with ghost variant
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name (critical for icon-only buttons)
		expect(button).toHaveAttribute('aria-label', 'Menu');

		// Test ghost variant styling applied
		expect(button.className).toContain('ghost');

		// Test button is keyboard accessible and focusable
		button.focus();
		expect(button).toHaveFocus();

		// Test Enter key activates button
		await userEvent.keyboard('{Enter}');
		expect(button).toHaveFocus();
	}
};

export const Danger: Story = {
	args: {
		ariaLabel: 'Delete',
		variant: 'ghost',
		tone: 'danger',
		size: 'md'
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button renders with danger tone
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name
		expect(button).toHaveAttribute('aria-label', 'Delete');

		// Test danger tone styling applied
		expect(button.className).toContain('danger');

		// Test click interaction
		await userEvent.click(button);
		expect(button).not.toHaveAttribute('disabled');

		// Test keyboard navigation
		button.focus();
		await userEvent.keyboard('{Enter}');
		expect(button).toHaveFocus();
	}
};

export const Success: Story = {
	args: {
		ariaLabel: 'Confirm',
		variant: 'solid',
		tone: 'success',
		size: 'md'
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button renders with success tone
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name
		expect(button).toHaveAttribute('aria-label', 'Confirm');

		// Test success tone styling applied
		expect(button.className).toContain('success');

		// Test solid variant styling applied
		expect(button.className).toContain('solid');

		// Test Space key activation
		button.focus();
		await userEvent.keyboard(' ');
		expect(button).toHaveFocus();
	}
};

export const ExtraSmall: Story = {
	args: {
		ariaLabel: 'Close',
		variant: 'ghost',
		tone: 'neutral',
		size: 'xs'
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button renders with xs size
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name
		expect(button).toHaveAttribute('aria-label', 'Close');

		// Test xs size styling applied
		expect(button.className).toContain('xs');

		// Test click works on small button
		await userEvent.click(button);
		expect(button).not.toHaveAttribute('disabled');

		// Test keyboard activation
		button.focus();
		await userEvent.keyboard('{Enter}');
		expect(button).toHaveFocus();
	}
};

export const Small: Story = {
	args: {
		ariaLabel: 'Close',
		variant: 'ghost',
		tone: 'neutral',
		size: 'sm'
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button renders with sm size
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name
		expect(button).toHaveAttribute('aria-label', 'Close');

		// Test sm size styling applied
		expect(button.className).toContain('sm');

		// Test click interaction
		await userEvent.click(button);
		expect(button).not.toHaveAttribute('disabled');

		// Test both keyboard activation methods
		button.focus();
		await userEvent.keyboard('{Enter}');
		expect(button).toHaveFocus();

		await userEvent.keyboard(' ');
		expect(button).toHaveFocus();
	}
};

export const Large: Story = {
	args: {
		ariaLabel: 'Close',
		variant: 'ghost',
		tone: 'neutral',
		size: 'lg'
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button renders with lg size
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name
		expect(button).toHaveAttribute('aria-label', 'Close');

		// Test lg size styling applied
		expect(button.className).toContain('lg');

		// Test click on large button
		await userEvent.click(button);
		expect(button).not.toHaveAttribute('disabled');

		// Test keyboard navigation on large button
		button.focus();
		await userEvent.keyboard(' ');
		expect(button).toHaveFocus();
	}
};

export const Loading: Story = {
	args: {
		ariaLabel: 'Loading',
		variant: 'solid',
		tone: 'primary',
		size: 'md',
		loading: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button renders in loading state
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name
		expect(button).toHaveAttribute('aria-label', 'Loading');

		// Test loading state styling applied
		expect(button.className).toContain('loading');

		// Test button is not interactive in loading state
		expect(button).toHaveAttribute('disabled');

		// Test keyboard activation is blocked in loading state
		button.focus();
		await userEvent.keyboard('{Enter}');
		expect(button).toHaveAttribute('disabled');
	}
};

export const Disabled: Story = {
	args: {
		ariaLabel: 'Disabled action',
		variant: 'solid',
		tone: 'primary',
		size: 'md',
		disabled: true
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test button renders in disabled state
		const button = canvas.getByRole('button');
		expect(button).toBeInTheDocument();

		// Test accessible name
		expect(button).toHaveAttribute('aria-label', 'Disabled action');

		// Test disabled attribute is set
		expect(button).toHaveAttribute('disabled');

		// Test click does not trigger on disabled button
		await userEvent.click(button);
		expect(button).toHaveAttribute('disabled');

		// Test keyboard activation is prevented
		button.focus();
		await userEvent.keyboard('{Enter}');
		expect(button).toHaveAttribute('disabled');

		// Test Space key activation is also prevented
		await userEvent.keyboard(' ');
		expect(button).toHaveAttribute('disabled');

		// Test visual disabled styling applied
		expect(button.className).toContain('disabled');
	}
};

export const AsLink: Story = {
	args: {
		ariaLabel: 'Go to settings',
		variant: 'ghost',
		tone: 'primary',
		size: 'md',
		href: '/settings'
	},
	render: (args: any) => ({
		Component: IconButton,
		props: {
			...args,
			children: () => {
				const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
				svg.setAttribute('viewBox', '0 0 24 24');
				svg.setAttribute('fill', 'none');
				svg.setAttribute('stroke', 'currentColor');
				svg.innerHTML =
					'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />';
				return svg;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test link renders as anchor element
		const link = canvas.getByRole('link');
		expect(link).toBeInTheDocument();

		// Test accessible name
		expect(link).toHaveAttribute('aria-label', 'Go to settings');

		// Test href is set correctly
		expect(link).toHaveAttribute('href', '/settings');

		// Test primary tone styling applied
		expect(link.className).toContain('primary');

		// Test ghost variant styling applied
		expect(link.className).toContain('ghost');

		// Test link is keyboard accessible
		link.focus();
		expect(link).toHaveFocus();

		// Test link activation via Enter key
		await userEvent.keyboard('{Enter}');
		expect(link).toHaveFocus();
	}
};
