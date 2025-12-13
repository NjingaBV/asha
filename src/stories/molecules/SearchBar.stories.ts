import type { Meta, StoryObj } from '@storybook/sveltekit';
import SearchBar from '$lib/components/molecules/SearchBar.svelte';

const meta = {
	title: 'Molecules/SearchBar',
	component: SearchBar,
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: 'text',
			description: 'Current value'
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Search bar size'
		},
		variant: {
			control: { type: 'select' },
			options: ['outline', 'filled'],
			description: 'Visual style'
		},
		showSubmit: {
			control: 'boolean',
			description: 'Show submit button'
		},
		submitText: {
			control: 'text',
			description: 'Submit button text'
		},
		loading: {
			control: 'boolean',
			description: 'Loading state'
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state'
		},
		showClear: {
			control: 'boolean',
			description: 'Show clear button when has value'
		},
		autofocus: {
			control: 'boolean',
			description: 'Autofocus on mount'
		},
		oninput: {
			action: 'input',
			description: 'Input event handler'
		},
		onsubmit: {
			action: 'submit',
			description: 'Submit handler'
		},
		onclear: {
			action: 'clear',
			description: 'Clear handler'
		}
	}
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Search...',
		size: 'md',
		variant: 'outline',
		showSubmit: false,
		showClear: true
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render search input', async () => {
			const input = canvas.getByRole('textbox') || canvas.getByPlaceholderText(/Search/i);
			expect(input).toBeInTheDocument();
		});

		await step('Input has correct placeholder', async () => {
			const input = canvas.getByPlaceholderText('Search...');
			expect(input).toBeInTheDocument();
		});

		await step('Can type in search input', async () => {
			const input = canvas.getByRole('textbox') || canvas.getByPlaceholderText(/Search/i);
			await userEvent.type(input, 'MacBook Pro');
			expect(input).toHaveValue('MacBook Pro');
		});

		await step('Input has proper accessibility', async () => {
			const input = canvas.getByRole('textbox') || canvas.getByPlaceholderText(/Search/i);
			expect(input).toHaveAttribute('type', 'text');
		});
	}
};

export const WithValue: Story = {
	args: {
		value: 'MacBook Pro',
		placeholder: 'Search products...',
		size: 'md',
		showClear: true
	}
};

export const WithSubmitButton: Story = {
	args: {
		placeholder: 'Search products...',
		showSubmit: true,
		submitText: 'Search',
		size: 'md'
	}
};

export const Filled: Story = {
	args: {
		placeholder: 'Search...',
		variant: 'filled',
		size: 'md'
	}
};

export const Loading: Story = {
	args: {
		value: 'searching...',
		placeholder: 'Search...',
		loading: true,
		size: 'md'
	}
};

export const Disabled: Story = {
	args: {
		placeholder: 'Search disabled',
		disabled: true,
		size: 'md'
	}
};

export const Small: Story = {
	args: {
		placeholder: 'Search...',
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		placeholder: 'What are you looking for?',
		size: 'lg',
		showSubmit: true,
		submitText: 'Go'
	}
};

export const FilledWithSubmit: Story = {
	args: {
		placeholder: 'Search the store...',
		variant: 'filled',
		showSubmit: true,
		submitText: 'Find',
		size: 'md'
	}
};

export const ProductSearch: Story = {
	args: {
		placeholder: 'Search for iPhone, MacBook, iPad...',
		size: 'lg',
		variant: 'outline',
		showSubmit: true,
		submitText: 'Search'
	}
};
