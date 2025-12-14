import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductCard from '$lib/components/organisms/ProductCard.svelte';
import { ACME_LAPTOP_PRO_14, ACME_PHONE_PRO, ACME_TABLET_PRO } from '$lib/fixtures/products';

const meta: Meta<ProductCard> = {
	title: 'Organisms/ProductCard',
	component: ProductCard,
	tags: ['autodocs'],
	argTypes: {
		layout: {
			control: { type: 'select' },
			options: ['center', 'left']
		},
		variant: {
			control: { type: 'select' },
			options: ['default', 'minimal']
		},
		badgeColor: {
			control: { type: 'select' },
			options: ['blue', 'orange', 'neutral']
		}
	}
};

export default meta;
type Story = StoryObj<ProductCard>;

export const LaptopPro14: Story = {
	args: {
		product: ACME_LAPTOP_PRO_14,
		layout: 'center'
	}
};

export const PhonePro: Story = {
	args: {
		product: ACME_PHONE_PRO,
		layout: 'center'
	}
};

export const TabletPro: Story = {
	args: {
		product: ACME_TABLET_PRO,
		layout: 'center'
	}
};

export const LeftLayout: Story = {
	args: {
		product: ACME_LAPTOP_PRO_14,
		layout: 'left'
	}
};

export const MinimalVariant: Story = {
	args: {
		product: ACME_PHONE_PRO,
		variant: 'minimal'
	}
};

export const OrangeBadge: Story = {
	args: {
		product: ACME_TABLET_PRO,
		badgeColor: 'orange'
	}
};
