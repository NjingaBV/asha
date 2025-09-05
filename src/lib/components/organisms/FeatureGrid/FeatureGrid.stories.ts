import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureGrid from './FeatureGrid.svelte';

const meta = {
	title: 'Organisms/FeatureGrid',
	component: FeatureGrid,
	parameters: {
		layout: 'padded'
	},
	tags: ['autodocs'],
	argTypes: {
		items: { control: 'object' }
	}
} satisfies Meta<FeatureGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		items: [
			{ title: 'Autonomie', description: "Jusqu'à 18 h d'autonomie." },
			{ title: 'Santé', description: 'Fréquence cardiaque, ECG, sommeil.' },
			{ title: 'Résistance', description: "Résiste à l'eau et à la poussière." },
			{ title: 'Connectivité', description: 'Restez joignable sans votre iPhone.' }
		]
	},
	render: (args) => ({ Component: FeatureGrid, props: args })
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};

export const WithMoreItems: Story = {
	args: {
		...Primary.args,
		items: [
			{ title: 'Autonomie', description: "Jusqu'à 18 h d'autonomie." },
			{ title: 'Santé', description: 'Fréquence cardiaque, ECG, sommeil.' },
			{ title: 'Résistance', description: "Résiste à l'eau et à la poussière." },
			{ title: 'Connectivité', description: 'Restez joignable sans votre iPhone.' },
			{ title: 'Design', description: 'Un design élégant et personnalisable.' },
			{ title: 'Apps', description: 'Des milliers d’apps à portée de main.' }
		]
	}
};
