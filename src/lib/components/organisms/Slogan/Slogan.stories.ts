import type { Meta, StoryObj } from '@storybook/svelte';

import Slogan from './Slogan.svelte';

const meta: Meta<typeof Slogan> = {
    title: 'Organism/Slogan',
    component: Slogan
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Subscribe: Story = {
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
    },
};