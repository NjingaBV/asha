import type { Meta, StoryObj } from '@storybook/sveltekit';
import Hamburger from '@/lib/components/atoms/Hamburger.svelte';

const meta = {
	title: 'Atoms/Hamburger',
	component: Hamburger,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		open: { control: 'boolean' },
		size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
		variant: { control: { type: 'select' }, options: ['default', 'cross', 'arrow', 'plus'] },
		color: {
			control: { type: 'select' },
			options: ['currentColor', 'inherit', 'primary', 'white', 'black', 'gray-600']
		},
		strokeWidth: { control: { type: 'number', min: 1, max: 10 } },
		duration: { control: { type: 'number', min: 100, max: 1000, step: 100 } },
		disabled: { control: 'boolean' },
		ariaLabel: { control: 'text' }
	}
} satisfies Meta<typeof Hamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
	args: {
		open: false,
		size: 'md',
		variant: 'default',
		color: 'currentColor',
		strokeWidth: 5,
		duration: 400,
		disabled: false,
		ariaLabel: 'Toggle menu'
	}
};

export const Opened: Story = {
	args: {
		...Default.args,
		open: true
	}
};

// Size Variants
export const SmallSize: Story = {
	args: {
		...Default.args,
		size: 'sm'
	}
};

export const MediumSize: Story = {
	args: {
		...Default.args,
		size: 'md'
	}
};

export const LargeSize: Story = {
	args: {
		...Default.args,
		size: 'lg'
	}
};

// Visual Variants
export const DefaultVariant: Story = {
	args: {
		...Default.args,
		variant: 'default'
	}
};

export const CrossVariant: Story = {
	args: {
		...Default.args,
		variant: 'cross'
	}
};

export const ArrowVariant: Story = {
	args: {
		...Default.args,
		variant: 'arrow'
	}
};

export const PlusVariant: Story = {
	args: {
		...Default.args,
		variant: 'plus'
	}
};

// Color Variants
export const ColorPrimary: Story = {
	args: {
		...Default.args,
		color: 'primary'
	}
};

export const ColorBlack: Story = {
	args: {
		...Default.args,
		color: 'black'
	}
};

export const ColorWhite: Story = {
	args: {
		...Default.args,
		color: 'white',
		class: 'bg-gray-900 p-4'
	}
};

export const ColorGray: Story = {
	args: {
		...Default.args,
		color: 'gray-600'
	}
};

// State Variants
export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true
	}
};

export const DisabledOpened: Story = {
	args: {
		...Default.args,
		open: true,
		disabled: true
	}
};

// Customization Examples
export const ThickStroke: Story = {
	args: {
		...Default.args,
		strokeWidth: 8
	}
};

export const ThinStroke: Story = {
	args: {
		...Default.args,
		strokeWidth: 2
	}
};

export const FastAnimation: Story = {
	args: {
		...Default.args,
		duration: 200
	}
};

export const SlowAnimation: Story = {
	args: {
		...Default.args,
		duration: 800
	}
};

// Combined Variations
export const SmallCross: Story = {
	args: {
		...Default.args,
		size: 'sm',
		variant: 'cross',
		color: 'primary'
	}
};

export const LargeArrowDark: Story = {
	args: {
		...Default.args,
		size: 'lg',
		variant: 'arrow',
		color: 'black',
		strokeWidth: 6
	}
};

export const MediumPlusLight: Story = {
	args: {
		...Default.args,
		size: 'md',
		variant: 'plus',
		color: 'gray-600',
		duration: 300
	}
};

// With Custom Labels
export const CustomLabel: Story = {
	args: {
		...Default.args,
		ariaLabel: 'Open main navigation menu'
	}
};

export const CustomLabelFr: Story = {
	args: {
		...Default.args,
		ariaLabel: 'Ouvrir le menu principal'
	}
};

// With Callbacks
export const WithCallbacks: Story = {
	args: {
		...Default.args,
		onToggle: (open: boolean) => console.log('Menu toggled:', open)
	}
};

// Real-world Usage Examples
export const DarkNavbar: Story = {
	args: {
		...Default.args,
		size: 'md',
		color: 'white',
		variant: 'default',
		class: 'bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-lg'
	}
};

export const ModernDesign: Story = {
	args: {
		...Default.args,
		size: 'lg',
		variant: 'cross',
		color: 'primary',
		strokeWidth: 4,
		duration: 350,
		class: 'bg-white p-4 rounded-full shadow-lg'
	}
};

export const MinimalDesign: Story = {
	args: {
		...Default.args,
		size: 'sm',
		variant: 'default',
		color: 'gray-600',
		strokeWidth: 3,
		duration: 250
	}
};

export const AccessibleMenu: Story = {
	args: {
		...Default.args,
		size: 'md',
		variant: 'default',
		color: 'primary',
		ariaLabel: 'Toggle primary navigation',
		duration: 400
	}
};
