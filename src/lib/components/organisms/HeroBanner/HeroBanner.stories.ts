import type { Meta, StoryObj } from '@storybook/sveltekit';
import HeroBanner from './HeroBanner.svelte';

const meta = {
	title: 'Organisms/HeroBanner',
	component: HeroBanner,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		eyebrow: { control: 'text' },
		title: { control: 'text' },
		subtitle: { control: 'text' },
		primaryCTA: { control: 'object' },
		secondaryCTA: { control: 'object' },
		background: { control: 'color' }
	}
} satisfies Meta<HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		eyebrow: 'Apple Watch',
		title: 'Plus puissante. Plus connectée.',
		subtitle: 'Des fonctionnalités santé et forme avancées.',
		primaryCTA: { label: 'Acheter', href: '#' },
		secondaryCTA: { label: 'En savoir plus', href: '#' },
		background: '#000000'
	}
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};

export const WithLongText: Story = {
	args: {
		...Primary.args,
		eyebrow: 'Apple Watch',
		title: 'Plus puissante. Plus connectée. Plus aventurière. Plus personnelle. Plus tout.',
		subtitle:
			'Des fonctionnalités santé et forme avancées. Et de nouvelles façons de rester connecté. Le tout dans un design élégant et épuré.'
	}
};

export const WithDifferentBackground: Story = {
	args: {
		...Primary.args,
		background: '#ff0000'
	}
};
