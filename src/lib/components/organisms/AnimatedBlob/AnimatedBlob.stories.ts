import type { Meta, StoryObj } from '@storybook/svelte';

import AnimatedBlob from './AnimatedBlob.svelte';

const meta: Meta<typeof AnimatedBlob> = {
    title: 'Organism/AnimatedBlob',
    component: AnimatedBlob
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Animated: Story = {
    args: {
        colors: ['#6c00e2', '#ff00e2', '#00e2ff']
    },
};
