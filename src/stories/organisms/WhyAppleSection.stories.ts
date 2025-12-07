import type { Meta, StoryObj } from '@storybook/sveltekit';
import WhyAppleSection from '$lib/components/organisms/WhyAppleSection.svelte';

const meta = {
	title: 'Organisms/WhyAppleSection',
	component: WhyAppleSection,
	tags: ['autodocs']
} satisfies Meta<typeof WhyAppleSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
