import type { Meta, StoryObj } from '@storybook/sveltekit';
import WatchLanding from './WatchLanding.svelte';

const meta = {
	title: 'Templates/WatchLanding',
	component: WatchLanding,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		hero: { control: 'object' },
		promo: { control: 'object' },
		features: { control: 'object' }
	}
} satisfies Meta<WatchLanding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		hero: {
			eyebrow: 'Apple Watch',
			title: 'Plus puissante. Plus connectée.',
			subtitle: 'Des fonctionnalités santé et forme avancées.',
			image: null,
			background: '#000000',
			primaryCTA: { label: 'Acheter', href: '#' },
			secondaryCTA: { label: 'En savoir plus', href: '#' }
		},
		promo: { text: 'Livraison et retours gratuits.' },
		features: [
			{ title: 'Autonomie', description: "Jusqu'à 18 h d'autonomie." },
			{ title: 'Santé', description: 'Fréquence cardiaque, ECG, sommeil.' },
			{ title: 'Résistance', description: "Résiste à l'eau et à la poussière." },
			{ title: 'Connectivité', description: 'Restez joignable sans votre iPhone.' }
		]
	}
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};

export const WithLongText: Story = {
	args: {
		...Primary.args,
		hero: {
			eyebrow: 'Apple Watch',
			title: 'Plus puissante. Plus connectée. Plus aventurière. Plus personnelle. Plus tout.',
			subtitle:
				'Des fonctionnalités santé et forme avancées. Et de nouvelles façons de rester connecté. Le tout dans un design élégant et épuré.',
			image: null,
			background: '#000000',
			primaryCTA: { label: 'Acheter', href: '#' },
			secondaryCTA: { label: 'En savoir plus', href: '#' }
		},
		promo: { text: 'Disponibilité limitée.' }
	}
};

export const WithDifferentBackground: Story = {
	args: {
		...Primary.args,
		hero: {
			eyebrow: 'Apple Watch',
			title: 'Plus puissante. Plus connectée.',
			subtitle: 'Des fonctionnalités santé et forme avancées.',
			image: null,
			background: '#ff0000',
			primaryCTA: { label: 'Acheter', href: '#' },
			secondaryCTA: { label: 'En savoir plus', href: '#' }
		}
	}
};
