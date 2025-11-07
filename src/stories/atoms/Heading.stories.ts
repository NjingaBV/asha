import type { Meta, StoryObj } from '@storybook/sveltekit';
import Heading from '@/lib/components/atoms/Heading.svelte';

const meta = {
	title: 'Atoms/Heading',
	component: Heading,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		level: {
			control: { type: 'select' },
			options: [1, 2, 3, 4, 5, 6]
		},
		size: {
			control: { type: 'select' },
			options: [
				'xs',
				'sm',
				'base',
				'lg',
				'xl',
				'2xl',
				'3xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl'
			]
		},
		weight: {
			control: { type: 'select' },
			options: ['light', 'normal', 'medium', 'semibold', 'bold', 'black']
		},
		color: {
			control: 'text'
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center', 'right', 'justify']
		},
		leading: {
			control: { type: 'select' },
			options: ['tight', 'snug', 'normal', 'relaxed', 'loose']
		},
		tracking: {
			control: { type: 'select' },
			options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest']
		}
	}
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// Level Stories (h1 to h6)
export const H1: Story = {
	args: {
		level: 1,
		size: '6xl',
		weight: 'bold',
		color: 'text-slate-900',
		align: 'left',
		children: 'Heading Level 1'
	}
};

export const H2: Story = {
	args: {
		level: 2,
		size: '5xl',
		weight: 'bold',
		color: 'text-slate-900',
		children: 'Heading Level 2'
	}
};

export const H3: Story = {
	args: {
		level: 3,
		size: '4xl',
		weight: 'semibold',
		color: 'text-slate-900',
		children: 'Heading Level 3'
	}
};

export const H4: Story = {
	args: {
		level: 4,
		size: '3xl',
		weight: 'semibold',
		color: 'text-slate-900',
		children: 'Heading Level 4'
	}
};

export const H5: Story = {
	args: {
		level: 5,
		size: '2xl',
		weight: 'medium',
		color: 'text-slate-900',
		children: 'Heading Level 5'
	}
};

export const H6: Story = {
	args: {
		level: 6,
		size: 'xl',
		weight: 'medium',
		color: 'text-slate-900',
		children: 'Heading Level 6'
	}
};

// Size Variations
export const ExtraSmall: Story = {
	args: {
		level: 1,
		size: 'xs',
		weight: 'normal',
		children: 'Extra Small Heading'
	}
};

export const Small: Story = {
	args: {
		level: 1,
		size: 'sm',
		weight: 'normal',
		children: 'Small Heading'
	}
};

export const Large: Story = {
	args: {
		level: 1,
		size: '8xl',
		weight: 'bold',
		children: 'Large Heading'
	}
};

export const XLarge: Story = {
	args: {
		level: 1,
		size: '9xl',
		weight: 'black',
		children: 'Extra Large Heading'
	}
};

// Weight Variations
export const Light: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'light',
		children: 'Light Weight'
	}
};

export const Normal: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'normal',
		children: 'Normal Weight'
	}
};

export const Medium: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'medium',
		children: 'Medium Weight'
	}
};

export const Semibold: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'semibold',
		children: 'Semibold Weight'
	}
};

export const Bold: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		children: 'Bold Weight'
	}
};

export const Black: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'black',
		children: 'Black Weight'
	}
};

// Alignment Variations
export const LeftAligned: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		align: 'left',
		children: 'Left Aligned Heading'
	}
};

export const Centered: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		align: 'center',
		children: 'Centered Heading'
	}
};

export const RightAligned: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		align: 'right',
		children: 'Right Aligned Heading'
	}
};

export const Justified: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		align: 'justify',
		children:
			'Justified heading text that spans multiple lines and aligns to both left and right edges'
	}
};

// Color Variations
export const PrimaryColor: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		color: 'text-blue-600',
		children: 'Primary Color'
	}
};

export const SecondaryColor: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		color: 'text-slate-500',
		children: 'Secondary Color'
	}
};

export const SuccessColor: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		color: 'text-green-600',
		children: 'Success Color'
	}
};

// Typography Properties
export const WithLeading: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		leading: 'relaxed',
		children: 'Heading with relaxed line height that provides more breathing room between text'
	}
};

export const WithTracking: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		tracking: 'wide',
		children: 'Heading with Wide Letter Spacing'
	}
};

export const Combined: Story = {
	args: {
		level: 1,
		size: '5xl',
		weight: 'black',
		color: 'text-blue-600',
		align: 'center',
		leading: 'snug',
		tracking: 'wide',
		children: 'Apple Watch Series 11'
	}
};
