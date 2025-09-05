import type { Meta, StoryObj } from '@storybook/svelte';
import Logo from './Logo.svelte';

const meta = {
	title: 'Molecules/Logo',
	component: Logo,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
		imgUrl: { control: 'text' },
		imgAlt: { control: 'text' },
		showTitle: { control: 'boolean' },
		link: { control: 'text' }
	}
} satisfies Meta<Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'DJ FMK Logo',
		subtitle: 'DJ FMK',
		imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
		imgAlt: 'DJ FMK Logo',
		showTitle: false,
		link: ''
	}
};

export const DjFmk: Story = {
	args: {
		...Primary.args
	}
};

export const DjFmkLinkable: Story = {
	args: {
		...Primary.args,
		link: 'https://www.djfacemaker.com'
	}
};

export const Njinga: Story = {
	args: {
		...Primary.args,
		title: 'Njinga Logo',
		imgUrl: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Logo_njinga_raccourci_540x.png?v=1645790543'
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args,
		title: 'uranos',
		subtitle: "Courtier d'assurances",
		showTitle: true,
		imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format'
	}
};

export const OuranosSquare: Story = {
	args: {
		...Primary.args,
		title: 'uranos',
		subtitle: "Courtier d'assurances",
		showTitle: true,
		imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format'
	}
};
