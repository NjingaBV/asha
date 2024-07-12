import type { Meta, StoryObj } from '@storybook/svelte'

import Logo from './Logo.svelte'

const meta: Meta<typeof Logo> = {
	title: 'Molecules/Logo',
	component: Logo,
}

export default meta
type Story = StoryObj<typeof meta>

export const DJFMK: Story = {
	args: {
		title: 'DJ FMK Logo',
		imgUrl:
			'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
	},
}

export const Linkable: Story = {
	args: {
		title: 'DJ FMK Logo',
		imgUrl:
			'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
		link: 'https://www.djfacemaker.com',
	},
}

export const Njinga: Story = {
	args: {
		title: 'Njinga Logo',
		imgUrl:
			'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Logo_njinga_raccourci_540x.png?v=1645790543',
	},
}

export const Ouranos: Story = {
	args: {
		title: 'uranos',
		subtitle: "Courtier d'assurances",
		showTitle: true,
		imgUrl:
			'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format',
	},
}
