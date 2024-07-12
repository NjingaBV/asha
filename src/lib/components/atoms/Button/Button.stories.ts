import type { Meta, StoryObj } from '@storybook/svelte'

import Button from './Button.svelte'

const meta: Meta<typeof Button> = {
	title: 'Atoms/Button',
	component: Button,
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		slot: 'Button',
	},
}

export const Purple: Story = {
	args: {
		color: '#6c00e2',
	},
}

export const Blue: Story = {
	args: {
		color: '#024a99',
	},
}

export const Red: Story = {
	args: {
		color: '#990505',
	},
}
