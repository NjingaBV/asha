import type { Meta, StoryObj } from '@storybook/sveltekit';
import WatchLanding from '@/lib/components/templates/WatchLanding.svelte';

const meta = {
	title: 'Templates/WatchLanding',
	component: WatchLanding,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		heroData: { control: 'object' },
		productsData: { control: 'object' },
		featuresData: { control: 'object' },
		ctaData: { control: 'object' }
	}
} satisfies Meta<typeof WatchLanding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {}
};

export const Primary: Story = {
	args: {}
};

export const CustomHero: Story = {
	args: {
		heroData: {
			title: 'Apple Watch Series 11',
			subtitle: 'Nouveau',
			description:
				"Profitez de 3 mois d'abonnement à Apple Fitness+ pour l'achat d'une Apple Watch. La montre ultime pour votre santé.",
			primaryAction: {
				label: 'Acheter maintenant',
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
				}
			]
		}
	}
};

export const WithCustomProducts: Story = {
	args: {
		productsData: [
			{
				title: 'Apple Watch Series 11',
				subtitle: 'Édition limitée',
				description: 'La montre ultime pour votre santé avec de nouvelles fonctionnalités.',
				image: 'https://via.placeholder.com/400x400/2563eb/ffffff?text=Series+11',
				colors: ['gris sidéral', 'argent', 'or rose', 'noir de jais'],
				primaryAction: { label: 'En savoir plus' },
				secondaryAction: { label: 'Acheter' },
				badge: 'Nouveau'
			}
		]
	}
};

export const WithCustomFeatures: Story = {
	args: {
		featuresData: [
			{
				title: 'Santé avancée',
				description:
					'Surveillez votre tension artérielle, votre fréquence cardiaque et bien plus encore.',
				image: 'https://via.placeholder.com/800x600/10b981/ffffff?text=Sant%C3%A9',
				icon: 'heart',
				badge: 'Fonctionnalité principale'
			},
			{
				title: 'Forme optimale',
				description: 'Suivez vos entraînements et atteignez vos objectifs fitness.',
				image: 'https://via.placeholder.com/800x600/f59e0b/ffffff?text=Forme',
				icon: 'activity',
				badge: 'Sport'
			}
		]
	}
};

export const WithCustomCTA: Story = {
	args: {
		ctaData: {
			title: "Prêt à découvrir l'Apple Watch?",
			description:
				'Livraison gratuite et retours gratuits. Profitez de notre service client exceptionnel.',
			primaryAction: {
				label: 'Acheter une Apple Watch',
				onClick: () => console.log('Buy now clicked')
			}
		}
	}
};
