import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureSection from '$lib/components/organisms/FeatureSection.svelte';

const meta = {
	title: 'Organisms/FeatureSection',
	component: FeatureSection,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		description: { control: 'text' },
		items: { control: 'object' },
		layout: {
			control: { type: 'select' },
			options: ['grid', 'stacked', 'carousel']
		},
		columns: {
			control: { type: 'select' },
			options: [1, 2, 3, 4, 5, 6]
		},
		backgroundColor: { control: 'color' },
		gap: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		},
		titleAlign: {
			control: { type: 'select' },
			options: ['left', 'center', 'right']
		}
	}
} satisfies Meta<typeof FeatureSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Grid: Story = {
	args: {
		title: 'Why Choose Us',
		description: 'We offer the best services in the market.',
		layout: 'grid',
		columns: 3,
		items: [
			{
				title: 'Fast Performance',
				description: 'Optimized for speed and efficiency.',
				iconSvg:
					'<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>'
			},
			{
				title: 'Secure',
				description: 'Enterprise-grade security for your data.',
				iconSvg:
					'<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>'
			},
			{
				title: '24/7 Support',
				description: 'We are here to help you anytime.',
				iconSvg:
					'<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"/></svg>'
			}
		]
	}
};

export const Stacked: Story = {
	args: {
		...Grid.args,
		layout: 'stacked',
		title: 'Detailed Features'
	}
};
