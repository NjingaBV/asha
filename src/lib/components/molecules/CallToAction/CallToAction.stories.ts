import type { Meta, StoryObj } from '@storybook/svelte';
import CallToAction from './CallToAction.svelte';

const meta = {
	title: 'Molecules/CallToAction',
	component: CallToAction,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		overview: { control: 'text' },
		buttonBefore: { control: 'boolean' },
		buttons: { control: 'object' }
	}
} satisfies Meta<CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		overview: `Ouranos combine les meilleures offres d'assurance du marché avec la meilleure expérience utilisateur. Notre plateforme vous libère de la paperasse.`,
		buttonBefore: false,
		buttons: [
			{
				label: 'Souscrire',
				url: '/souscrire',
				backgroundColor: '#0284c7'
			},
			{
				label: "Contacter l\'équipe",
				url: '/contact',
				backgroundColor: '#1c1917'
			}
		]
	}
};

export const Souscription: Story = {
	args: {
		...Primary.args
	}
};
