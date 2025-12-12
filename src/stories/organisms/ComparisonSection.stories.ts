import type { Meta, StoryObj } from '@storybook/sveltekit';
import ComparisonSection from '$lib/components/organisms/ComparisonSection.svelte';

const meta = {
	title: 'Organisms/ComparisonSection',
	component: ComparisonSection,
	tags: ['autodocs']
} satisfies Meta<typeof ComparisonSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
