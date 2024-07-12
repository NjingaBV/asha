import type { Meta, StoryObj } from '@storybook/svelte';

import Footer from './Footer.svelte';

const meta: Meta<typeof Footer> = {
	title: 'Organism/Footer',
	component: Footer
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Ouranos: Story = {
	args: {
		logo: {
			title: 'uranos',
			subtitle: "Courtier d'assurances",
			showTitle: true,
			imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format'
		},
		brandName: 'Ouranos'
	}
};
