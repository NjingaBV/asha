import type { Meta, StoryObj } from '@storybook/sveltekit';
import Slogan from './Slogan.svelte';

const meta = {
	title: 'Organisms/Slogan',
	component: Slogan,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		slogans: { control: 'object' },
		cta: { control: 'object' },
		backgroundColor: { control: 'color' }
	}
} satisfies Meta<Slogan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		cta: {
			url: '/',
			label: 'Souscrire',
			color: '#0284c7'
		},
		backgroundColor: '#000000',
		slogans: [
			{
				title: 'Simple.',
				subtitle: '0% prise de tête'
			},
			{
				title: 'Transparente.',
				subtitle: 'Au juste prix'
			},
			{
				title: 'Révolutionnaire.',
				subtitle: '100% mobile et flexible'
			}
		]
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args
	}
};
