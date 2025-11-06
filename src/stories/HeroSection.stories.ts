import type { Meta, StoryObj } from '@storybook/sveltekit';
import HeroSection from '@/lib/components/organisms/HeroSection/HeroSection.svelte';

const meta = {
	title: 'Organisms/HeroSection',
	component: HeroSection,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs']
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Apple Watch',
		subtitle: 'Nouveau',
		description:
			"Profitez de 3 mois d'abonnement à Apple Fitness+ pour l'achat d'une Apple Watch. La montre ultime pour votre santé.",
		primaryAction: {
			label: 'Acheter une Apple Watch',
			onClick: () => console.log('Primary action clicked')
		},
		secondaryAction: {
			label: 'En savoir plus',
			onClick: () => console.log('Secondary action clicked')
		},
		products: [
			{
				name: 'Apple Watch Series 11',
				image: 'https://via.placeholder.com/300x300/2563eb/ffffff?text=Series+11',
				badge: 'Nouveau'
			},
			{
				name: 'Apple Watch SE 3',
				image: 'https://via.placeholder.com/300x300/64748b/ffffff?text=SE+3',
				badge: 'Nouveau'
			},
			{
				name: 'Apple Watch Ultra 3',
				image: 'https://via.placeholder.com/300x300/1e293b/ffffff?text=Ultra+3',
				badge: 'Nouveau'
			}
		]
	}
};

export const WithoutProducts: Story = {
	args: {
		...Default.args,
		products: [],
		title: 'Découvrez Apple Watch',
		subtitle: undefined
	}
};

export const WithBackground: Story = {
	args: {
		...Default.args,
		backgroundImage:
			'https://via.placeholder.com/1920x1080/1e293b/ffffff?text=Apple+Watch+Background'
	}
};
