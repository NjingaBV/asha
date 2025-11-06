import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductCard from '@/lib/components/molecules/ProductCard/ProductCard.svelte';

const meta = {
	title: 'Molecules/ProductCard',
	component: ProductCard,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs']
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Apple Watch Series 11',
		subtitle: 'Nouveau',
		description:
			'La montre ultime pour votre santé avec des fonctionnalités avancées de suivi.',
		image: 'https://via.placeholder.com/400x400/2563eb/ffffff?text=Series+11',
		imageAlt: 'Apple Watch Series 11',
		colors: ['gris sidéral', 'argent', 'or rose', 'noir de jais'],
		primaryAction: { label: 'En savoir plus' },
		secondaryAction: { label: 'Acheter' },
		badge: 'Nouveau'
	}
};

export const WithoutBadge: Story = {
	args: {
		...Default.args,
		badge: undefined,
		title: 'Apple Watch SE 3',
		subtitle: 'Essentiel',
		image: 'https://via.placeholder.com/400x400/64748b/ffffff?text=SE+3',
		colors: ['minuit', 'lumière stellaire']
	}
};

export const SingleColor: Story = {
	args: {
		...Default.args,
		title: 'Apple Watch Ultra 3',
		subtitle: 'Aventure',
		image: 'https://via.placeholder.com/400x400/1e293b/ffffff?text=Ultra+3',
		colors: ['naturel'],
		badge: 'Ultra'
	}
};

export const NoColors: Story = {
	args: {
		...Default.args,
		colors: [],
		title: 'Apple Watch Nike',
		image: 'https://via.placeholder.com/400x400/dc2626/ffffff?text=Nike'
	}
};
