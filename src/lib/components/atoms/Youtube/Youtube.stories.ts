import type { Meta, StoryObj } from '@storybook/svelte'
import Youtube from './Youtube.svelte'

const meta: Meta<typeof Youtube> = {
	title: 'Atoms/Youtube',
	component: Youtube,
}

export default meta
type Story = StoryObj<typeof meta>

export const Player: Story = {
	args: {
		videoId: 'G-ECTntZYtk',
	},
}
