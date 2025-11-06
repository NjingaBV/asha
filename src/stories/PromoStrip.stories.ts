import type { Meta, StoryObj } from '@storybook/sveltekit';
import PromoStrip from '@/lib/components/organisms/PromoStrip/PromoStrip.svelte';

const meta = {
	title: 'Organisms/PromoStrip',
	component: PromoStrip,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		text: { control: 'text' },
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark']
		}
	}
} satisfies Meta<typeof PromoStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: 'Livraison et retours gratuits.',
		tone: 'light',
		children: null
	}
};

export const Light: Story = {
	args: {
		...Primary.args
	}
};

export const Dark: Story = {
	args: {
		...Primary.args,
		text: 'Disponibilité limitée.',
		tone: 'dark'
	}
};
