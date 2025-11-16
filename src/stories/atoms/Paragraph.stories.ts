import type { Meta, StoryObj } from '@storybook/sveltekit';
import Paragraph from '@/lib/components/atoms/Paragraph.svelte';

const metaParagraph: Meta<Paragraph> = { component: Paragraph };

export default metaParagraph;

export const BaseParagraph: StoryObj = { args: { children: 'Lorem ipsum dolor sit amet.' } };
