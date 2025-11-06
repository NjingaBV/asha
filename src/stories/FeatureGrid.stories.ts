import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureGrid from '@/lib/components/organisms/FeatureGrid/FeatureGrid.svelte';

const meta = {
	title: 'Organisms/FeatureGrid',
	component: FeatureGrid,
	parameters: {
		layout: 'padded'
	},
	tags: ['autodocs'],
	argTypes: {
		features: { control: 'object' },
		layout: {
			control: { type: 'select' },
			options: ['grid', 'alternating']
		}
	}
} satisfies Meta<typeof FeatureGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		features: [
			{
				title: 'Autonomie',
				description: "Jusqu'à 18 h d'autonomie.",
				image: 'https://via.placeholder.com/800x600/10b981/ffffff?text=Autonomie',
				icon: 'battery',
				badge: 'Performance'
			},
			{
				title: 'Santé',
				description: 'Fréquence cardiaque, ECG, sommeil.',
				image: 'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Sant%C3%A9',
				icon: 'heart',
				badge: 'Bien-être'
			},
			{
				title: 'Résistance',
				description: "Résiste à l'eau et à la poussière.",
				image: 'https://via.placeholder.com/800x600/8b5cf6/ffffff?text=R%C3%A9sistance',
				icon: 'shield',
				badge: 'Durabilité'
			},
			{
				title: 'Connectivité',
				description: 'Restez joignable sans votre iPhone.',
				image: 'https://via.placeholder.com/800x600/f59e0b/ffffff?text=Connectivit%C3%A9',
				icon: 'wifi',
				badge: 'Communication'
			}
		],
		layout: 'stacked'
	},
	render: (args) => ({ Component: FeatureGrid, props: args })
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};

export const AlternatingLayout: Story = {
	args: {
		...Primary.args,
		layout: 'alternating'
	}
};

export const WithMoreFeatures: Story = {
	args: {
		features: [
			{
				title: 'Autonomie',
				description: "Jusqu'à 18 h d'autonomie.",
				image: 'https://via.placeholder.com/800x600/10b981/ffffff?text=Autonomie',
				icon: 'battery'
			},
			{
				title: 'Santé',
				description: 'Fréquence cardiaque, ECG, sommeil.',
				image: 'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Sant%C3%A9',
				icon: 'heart'
			},
			{
				title: 'Résistance',
				description: "Résiste à l'eau et à la poussière.",
				image: 'https://via.placeholder.com/800x600/8b5cf6/ffffff?text=R%C3%A9sistance',
				icon: 'shield'
			},
			{
				title: 'Connectivité',
				description: 'Restez joignable sans votre iPhone.',
				image: 'https://via.placeholder.com/800x600/f59e0b/ffffff?text=Connectivit%C3%A9',
				icon: 'wifi'
			},
			{
				title: 'Design',
				description: 'Un design élégant et personnalisable.',
				image: 'https://via.placeholder.com/800x600/ec4899/ffffff?text=Design',
				icon: 'watch'
			},
			{
				title: 'Apps',
				description: "Des milliers d'apps à portée de main.",
				image: 'https://via.placeholder.com/800x600/06b6d4/ffffff?text=Apps',
				icon: 'grid'
			}
		],
		layout: 'stacked'
	}
};
