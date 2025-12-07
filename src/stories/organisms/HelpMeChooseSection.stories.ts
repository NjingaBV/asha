import type { Meta, StoryObj } from '@storybook/sveltekit';
import HelpMeChooseSection from '$lib/components/organisms/HelpMeChooseSection.svelte';

const meta = {
	title: 'Organisms/HelpMeChooseSection',
	component: HelpMeChooseSection,
	tags: ['autodocs']
} satisfies Meta<typeof HelpMeChooseSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
