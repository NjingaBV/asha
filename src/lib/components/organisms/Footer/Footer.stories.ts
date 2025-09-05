import type { Meta, StoryObj } from '@storybook/sveltekit';
import Footer from './Footer.svelte';

const meta = {
	title: 'Organisms/Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		logo: { control: 'object' },
		brandName: { control: 'text' }
	}
} satisfies Meta<Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		logo: {
			title: 'uranos',
			subtitle: "Courtier d'assurances",
			imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format',
			imgAlt: 'Ouranos logo',
			showTitle: true
		},
		brandName: 'Ouranos'
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args
	}
};
