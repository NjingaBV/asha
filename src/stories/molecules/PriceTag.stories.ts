import type { Meta, StoryObj } from '@storybook/sveltekit';
import PriceTag from '$lib/components/molecules/PriceTag.svelte';

const meta = {
	title: 'Molecules/PriceTag',
	component: PriceTag,
	tags: ['autodocs'],
	argTypes: {
		price: {
			control: 'number',
			description: 'Current price'
		},
		originalPrice: {
			control: 'number',
			description: 'Original price (for showing discount)'
		},
		currency: {
			control: 'text',
			description: 'Currency code'
		},
		locale: {
			control: 'text',
			description: 'Locale for formatting'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg', 'xl'],
			description: 'Price display size'
		},
		showCurrency: {
			control: 'boolean',
			description: 'Show currency symbol'
		},
		prefix: {
			control: 'text',
			description: 'Price prefix text'
		},
		suffix: {
			control: 'text',
			description: 'Price suffix text'
		}
	}
} satisfies Meta<typeof PriceTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		price: 99.99,
		currency: 'USD',
		locale: 'en-US',
		size: 'md',
		showCurrency: true
	}
};

export const WithSalePrice: Story = {
	args: {
		price: 79.99,
		originalPrice: 99.99,
		currency: 'USD',
		locale: 'en-US',
		size: 'md'
	}
};

export const Euro: Story = {
	args: {
		price: 89.99,
		currency: 'EUR',
		locale: 'fr-FR',
		size: 'md'
	}
};

export const EuroWithSale: Story = {
	args: {
		price: 49.99,
		originalPrice: 79.99,
		currency: 'EUR',
		locale: 'fr-FR',
		size: 'md'
	}
};

export const Small: Story = {
	args: {
		price: 29.99,
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		price: 1299.99,
		size: 'lg'
	}
};

export const ExtraLarge: Story = {
	args: {
		price: 2499.99,
		size: 'xl'
	}
};

export const WithPrefix: Story = {
	args: {
		price: 9.99,
		prefix: 'Starting at',
		size: 'md'
	}
};

export const WithSuffix: Story = {
	args: {
		price: 14.99,
		suffix: '/month',
		size: 'md'
	}
};

export const NoCurrencySymbol: Story = {
	args: {
		price: 199.99,
		showCurrency: false,
		size: 'md'
	}
};

export const BigDiscount: Story = {
	args: {
		price: 49.99,
		originalPrice: 199.99,
		size: 'lg'
	}
};
