import type { Meta, StoryObj } from '@storybook/sveltekit';
import Button from '../Button.svelte';

const meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		},
		variant: {
			control: { type: 'select' },
			options: ['solid', 'outline', 'ghost']
		},
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'neutral', 'success', 'danger']
		},
		rounded: { control: 'boolean' },
		fullWidth: { control: 'boolean' },
		disabled: { control: 'boolean' },
		color: { control: 'color' },
		onClick: { action: 'onClick' }
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		size: 'medium',
		variant: 'solid',
		tone: 'primary',
		rounded: false,
		fullWidth: false,
		disabled: false,
		color: '',
		onClick: undefined
	},
	render: (args) => ({
		Component: Button,
		props: args,
		on: {
			click: () => args.onClick?.()
		}
	})
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};

export const OutlineSecondary: Story = {
	args: {
		...Primary.args,
		variant: 'outline',
		tone: 'secondary'
	}
};

export const GhostPrimary: Story = {
	args: {
		...Primary.args,
		variant: 'ghost',
		tone: 'primary'
	}
};

export const CustomColor: Story = {
	args: {
		...Primary.args,
		color: '#6c00e2'
	}
};

export const DangerLarge: Story = {
	args: {
		...Primary.args,
		size: 'large',
		variant: 'solid',
		tone: 'danger'
	}
};

export const FullWidthDisabled: Story = {
	args: {
		...Primary.args,
		fullWidth: true,
		disabled: true
	}
};
