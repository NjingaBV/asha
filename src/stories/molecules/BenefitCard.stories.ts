import type { Meta, StoryObj } from '@storybook/sveltekit';
import BenefitCard from '$lib/components/molecules/BenefitCard.svelte';

const meta = {
	title: 'Molecules/BenefitCard',
	component: BenefitCard,
	tags: ['autodocs'],
	argTypes: {
		icon: { control: 'text' },
		title: { control: 'text' },
		description: { control: 'text' },
		link: { control: 'object' }
	}
} satisfies Meta<typeof BenefitCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		icon: 'chip',
		title: 'Supercharged Performance',
		description:
			'Experience lightning-fast speeds with the new M-series chips, designed for efficiency and power.',
		link: {
			label: 'Learn more about M3',
			href: '#'
		}
	}
};

export const NoIcon: Story = {
	args: {
		title: 'Education Pricing',
		description: 'Save on a new Mac with special pricing for students and educators.',
		link: {
			label: 'Shop for college',
			href: '#'
		}
	}
};
