import type { Meta, StoryObj } from '@storybook/sveltekit';
import Hamburger from './Hamburger.svelte';

const meta = {
	title: 'Atoms/Hamburger',
	component: Hamburger,
	parameters: {
		layout: 'centered',
		actions: { handles: ['click'] }
	},
	tags: ['autodocs'],
	argTypes: {
		open: { control: 'boolean' },
		ariaLabel: { control: 'text' },
		width: { control: 'number' }
	}
} satisfies Meta<Hamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		open: false,
		ariaLabel: 'Menu',
		width: 24
	},
	render: (args) => ({ Component: Hamburger, props: args })
};

export const Close: Story = {
	args: {
		...Primary.args
	}
};

export const Open: Story = {
	args: {
		...Primary.args,
		open: true
	}
};

export const CustomWidth: Story = {
	args: {
		...Primary.args,
		width: 50
	}
};
