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
				icon: 'https://www.apple.com/v/mac/home/ca/images/chapternav/macbookair_light__dfypt7o35y6q_large.svg',
				href: '#'
			},
			{
				label: 'MacBook Pro',
				icon: 'https://www.apple.com/v/mac/home/ca/images/chapternav/macbookpro_light__catcn1btfr6q_large.svg',
				href: '#',
				isNew: true
			},
			{
				label: 'iMac',
				icon: 'https://www.apple.com/v/mac/home/ca/images/chapternav/imac_light__colyztscbeeu_large.svg',
				href: '#'
			},
			{
				label: 'Mac mini',
				icon: 'https://www.apple.com/v/mac/home/ca/images/chapternav/macmini_light__ndsz6p44ol2y_large.svg',
				href: '#'
			},
			{
				label: 'Mac Studio',
				icon: 'https://www.apple.com/v/mac/home/ca/images/chapternav/macstudio_light__dt1p4074j96q_large.svg',
				href: '#'
			}
		]
	}
};
