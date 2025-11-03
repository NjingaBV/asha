import type { Meta, StoryObj } from '@storybook/sveltekit';
import Heading from './Heading.svelte';

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
			control: 'color'
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center', 'right', 'justify']
		}
	}
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		color: 'text-slate-900',
		align: 'left',
		children: 'Default Heading'
	},
	render: (args) => ({
		Component: Heading,
		props: args
	})
};

export const H1Large: Story = {
	args: {
		...Default.args,
		level: 1,
		size: '6xl',
		children: 'Apple Watch'
	}
};

export const H2Medium: Story = {
	args: {
		...Default.args,
		level: 2,
		size: '3xl',
		children: 'La montre ultime'
	}
};

export const H3Small: Story = {
	args: {
		...Default.args,
		level: 3,
		size: 'xl',
		weight: 'semibold',
		children: 'Fonctionnalités principales'
	}
};

export const Centered: Story = {
	args: {
		...Default.args,
		align: 'center',
		children: 'Titre centré'
	}
};
