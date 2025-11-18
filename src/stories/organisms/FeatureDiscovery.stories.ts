import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureDiscovery from '$lib/components/organisms/FeatureDiscovery.svelte';

const meta = {
	title: 'Organisms/FeatureDiscovery',
	component: FeatureDiscovery,
	tags: ['autodocs']
} satisfies Meta<typeof FeatureDiscovery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
