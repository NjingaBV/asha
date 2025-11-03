import type { Meta, StoryObj } from '@storybook/sveltekit';
import CallToAction from './CallToAction.svelte';

const meta = {
	title: 'Molecules/CallToAction',
	component: CallToAction,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
		description: { control: 'text' },
		primaryAction: { control: 'object' },
		secondaryAction: { control: 'object' },
		backgroundImage: { control: 'text' },
		overlay: { control: 'boolean' }
	}
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Ready to get started?',
		description: `Ouranos combine les meilleures offres d'assurance du marché avec la meilleure expérience utilisateur. Notre plateforme vous libère de la paperasse.`,
		primaryAction: {
			label: 'Souscrire',
			onClick: () => console.log('Primary action clicked')
		},
		secondaryAction: {
			label: "Contacter l'équipe",
			onClick: () => console.log('Secondary action clicked')
		}
	}
};

export const WithSubtitle: Story = {
	args: {
		...Primary.args,
		subtitle: 'Commencez votre essai gratuit'
	}
};

export const WithBackgroundImage: Story = {
	args: {
		...Primary.args,
		title: 'Experience the difference',
		backgroundImage: 'https://via.placeholder.com/1920x1080/2563eb/ffffff?text=Background',
		overlay: true
	}
};
