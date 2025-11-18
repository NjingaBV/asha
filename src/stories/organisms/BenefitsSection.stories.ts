import type { Meta, StoryObj } from '@storybook/sveltekit';
import BenefitsSection from '$lib/components/organisms/BenefitsSection.svelte';

const meta = {
	title: 'Organisms/BenefitsSection',
	component: BenefitsSection,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		benefits: { control: 'object' }
	}
} satisfies Meta<typeof BenefitsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Why Apple is the best place to buy Mac.',
		benefits: [
			{
				icon: 'graduationcap',
				title: 'Education Pricing',
				description: 'Save on a new Mac with education pricing.',
				link: { label: 'Shop now', href: '#' }
			},
			{
				icon: 'truck.box',
				title: 'Fast Delivery',
				description: 'Get free next-day delivery on in-stock items.',
				link: { label: 'Learn more', href: '#' }
			},
			{
				icon: 'person.macwindow',
				title: 'Personal Setup',
				description: 'We’ll help you get started with your new Mac.',
				link: { label: 'Book a session', href: '#' }
			}
		]
	}
};
