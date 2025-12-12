import type { Meta, StoryObj } from '@storybook/sveltekit';
import FormField from '$lib/components/molecules/FormField.svelte';

const meta = {
	title: 'Molecules/FormField',
	component: FormField,
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description: 'Field label'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Field size'
		},
		helperText: {
			control: 'text',
			description: 'Helper text displayed below input'
		},
		error: {
			control: 'text',
			description: 'Error message'
		},
		success: {
			control: 'text',
			description: 'Success message'
		},
		required: {
			control: 'boolean',
			description: 'Mark field as required'
		},
		optional: {
			control: 'boolean',
			description: 'Show optional indicator'
		},
		id: {
			control: 'text',
			description: 'ID for the field'
		}
	}
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Email',
		size: 'md',
		helperText: 'Enter your email address'
	}
};

export const Required: Story = {
	args: {
		label: 'Password',
		size: 'md',
		required: true,
		helperText: 'Must be at least 8 characters'
	}
};

export const Optional: Story = {
	args: {
		label: 'Phone Number',
		size: 'md',
		optional: true,
		helperText: 'We will only use this for account recovery'
	}
};

export const WithError: Story = {
	args: {
		label: 'Email',
		size: 'md',
		required: true,
		error: 'Please enter a valid email address'
	}
};

export const WithSuccess: Story = {
	args: {
		label: 'Username',
		size: 'md',
		success: 'Username is available!'
	}
};

export const Small: Story = {
	args: {
		label: 'Search',
		size: 'sm',
		helperText: 'Enter search term'
	}
};

export const Large: Story = {
	args: {
		label: 'Description',
		size: 'lg',
		helperText: 'Provide a detailed description'
	}
};
