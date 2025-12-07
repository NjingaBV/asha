import type { Meta, StoryObj } from '@storybook/sveltekit';
import ChapterNav from '$lib/components/molecules/ChapterNav.svelte';

const meta = {
	title: 'Molecules/ChapterNav',
	component: ChapterNav,
	tags: ['autodocs'],
	argTypes: {
		items: { control: 'object' }
	}
} satisfies Meta<typeof ChapterNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: [
			{
				label: 'MacBook Air',
				icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookair15.macbookair13_7e8b978ec.svg',
				href: '#'
			},
			{
				label: 'MacBook Pro',
				icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookpro16.macbookpro14_c495bb45b.svg',
				href: '#',
				isNew: true
			},
			{
				label: 'iMac',
				icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/imac24_065a2bf21.svg',
				href: '#'
			},
			{
				label: 'Mac mini',
				icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macmini_f7eabee7b.svg',
				href: '#'
			},
			{
				label: 'Mac Studio',
				icon: 'https://www.apple.com/assets-www/en_WW/mac/chapternav/macstudio_d48bbc5a3.svg',
				href: '#'
			}
		]
	}
};
