import type { Meta, StoryObj } from '@storybook/sveltekit';
import MacProductCarousel from '$lib/components/organisms/MacProductCarousel.svelte';

const meta = {
    title: 'Organisms/MacProductCarousel',
    component: MacProductCarousel,
    parameters: {
        layout: 'fullscreen'
    },
    tags: ['autodocs']
} satisfies Meta<typeof MacProductCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const products = [
    {
        id: 'macbook-air',
        title: 'MacBook Air 13” and 15”',
        subtitle: 'M3 chip',
        description: 'Strikingly thin and fast so you can work, play, or create anywhere.',
        priceDetail: 'From $999 or $83.25/mo. for 12 mo.**',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-202402?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1707329548751',
        colors: ['midnight', 'starlight', 'silver', 'space-gray'],
        primaryAction: { label: 'Learn more', href: '#' },
        secondaryAction: { label: 'Buy', href: '#' },
        category: 'laptops'
    },
    {
        id: 'macbook-pro',
        title: 'MacBook Pro 14” and 16”',
        subtitle: 'M5, M4 Pro, or M4 Max chip',
        description: 'The most advanced Mac laptops for demanding workflows.',
        priceDetail: 'From $1599 or $133.25/mo. for 12 mo.**',
        badge: 'New 14" with M5',
        badgeColor: 'orange',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916255121',
        colors: ['space-black', 'silver'],
        primaryAction: { label: 'Learn more', href: '#' },
        secondaryAction: { label: 'Buy', href: '#' },
        category: 'laptops'
    },
    {
        id: 'imac',
        title: 'iMac',
        subtitle: 'M4 chip',
        description: 'A stunning all-in-one desktop for creativity and productivity.',
        priceDetail: 'From $1299 or $108.25/mo. for 12 mo.**',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697303845805',
        colors: ['blue', 'green', 'pink', 'silver', 'yellow', 'orange', 'purple'],
        primaryAction: { label: 'Learn more', href: '#' },
        secondaryAction: { label: 'Buy', href: '#' },
        category: 'desktops'
    },
    {
        id: 'mac-mini',
        title: 'Mac mini',
        subtitle: 'M4 or M4 Pro chip',
        description: 'The mini-est, mightiest Mac ever.',
        priceDetail: 'From $599 or $49.91/mo. for 12 mo.**',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728342375460',
        colors: ['silver'],
        primaryAction: { label: 'Learn more', href: '#' },
        secondaryAction: { label: 'Buy', href: '#' },
        category: 'desktops'
    },
    {
        id: 'studio-display',
        title: 'Studio Display',
        subtitle: 'Retina 5K display',
        description: 'A 27-inch 5K Retina display paired with a 12MP Ultra Wide camera.',
        priceDetail: 'From $1599 or $133.25/mo. for 12 mo.**',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-standard-glass-tilt-stand-select-202203?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1645128503722',
        colors: [],
        primaryAction: { label: 'Learn more', href: '#' },
        secondaryAction: { label: 'Buy', href: '#' },
        category: 'displays'
    }
];

export const Default: Story = {
    args: {
        title: 'Mac',
        products,
        tabs: [
            { id: 'all', label: 'All products' },
            { id: 'laptops', label: 'Laptops' },
            { id: 'desktops', label: 'Desktops' },
            { id: 'displays', label: 'Displays' }
        ]
    }
};

export const AppleStoreReplica: Story = {
    args: {
        title: 'Mac',
        products,
        tabs: [
            { id: 'all', label: 'All products' },
            { id: 'laptops', label: 'Laptops' },
            { id: 'desktops', label: 'Desktops' },
            { id: 'displays', label: 'Displays' }
        ],
        cardVariant: 'minimal',
        imageContainerClass: 'bg-gray-50 rounded-3xl p-8 mb-8'
    }
};
