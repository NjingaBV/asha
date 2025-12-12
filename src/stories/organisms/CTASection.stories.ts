import type { Meta, StoryObj } from '@storybook/sveltekit';
import CTASection from '$lib/components/organisms/CTASection.svelte';

const meta = {
	title: 'Organisms/CTASection',
	component: CTASection,
	tags: ['autodocs']
} satisfies Meta<typeof CTASection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
