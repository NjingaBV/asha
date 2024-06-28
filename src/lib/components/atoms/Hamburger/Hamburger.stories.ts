import type { Meta, StoryObj } from '@storybook/svelte';
import Hamburger from './Hamburger.svelte';

const meta: Meta<typeof Hamburger> = {
    title: 'Atoms/Hamburger',
    component: Hamburger
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
    args: {
        open: true
    },
};

export const Close: Story = {
    args: {
        open: false
    },
};

