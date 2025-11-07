import type { Meta, StoryObj } from '@storybook/sveltekit';
import Button from '@/lib/components/atoms/Button.svelte';

const meta = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered'
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'ghost', 'outline', 'solid']
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'neutral']
		},
		type: {
			control: { type: 'select' },
			options: ['button', 'submit', 'reset']
		},
		disabled: {
			control: 'boolean'
		},
		loading: {
			control: 'boolean'
		},
		fullWidth: {
			control: 'boolean'
		},
		rounded: {
			control: 'boolean'
		}
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default button
export const Default: Story = {
	args: {
		variant: 'primary',
		size: 'md',
		disabled: false,
		loading: false,
		children: 'Click me'
	}
};

// Variants
export const Ghost: Story = {
	args: {
		...Default.args,
		variant: 'ghost',
		children: 'Ghost Button'
	}
};

export const Outline: Story = {
	args: {
		...Default.args,
		variant: 'outline',
		children: 'Outline Button'
	}
};

export const Solid: Story = {
	args: {
		...Default.args,
		variant: 'solid',
		children: 'Solid Button'
	}
};

// Sizes
export const Small: Story = {
	args: {
		...Default.args,
		size: 'sm',
		children: 'Small'
	}
};

export const Large: Story = {
	args: {
		...Default.args,
		size: 'lg',
		children: 'Large'
	}
};

// Tones
export const Secondary: Story = {
	args: {
		...Default.args,
		tone: 'secondary',
		children: 'Secondary Button'
	}
};

export const Neutral: Story = {
	args: {
		...Default.args,
		tone: 'neutral',
		children: 'Neutral Button'
	}
};

// States
export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
		children: 'Disabled'
	}
};

export const Loading: Story = {
	args: {
		...Default.args,
		loading: true,
		children: 'Loading...'
	}
};

// Shapes
export const Rounded: Story = {
	args: {
		...Default.args,
		rounded: true,
		children: 'Rounded Pill'
	}
};

// Link button
export const AsLink: Story = {
	args: {
		...Default.args,
		href: '#',
		children: 'Link Button'
	}
};

// Full width
export const FullWidth: Story = {
	args: {
		...Default.args,
		fullWidth: true,
		children: 'Full Width Button'
	}
};

// Button types
export const Submit: Story = {
	args: {
		...Default.args,
		type: 'submit',
		children: 'Submit'
	}
};

export const Reset: Story = {
	args: {
		...Default.args,
		type: 'reset',
		children: 'Reset'
	}
};

// Custom color
export const CustomColor: Story = {
	args: {
		...Default.args,
		color: '#ff6b6b',
		children: 'Custom Color'
	}
};
