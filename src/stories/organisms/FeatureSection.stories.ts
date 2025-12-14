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
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render section title', async () => {
			expect(canvas.getByText('Why Choose Us')).toBeInTheDocument();
		});

		await step('Display section description', async () => {
			expect(
				canvas.getByText('We offer the best services in the market.')
			).toBeInTheDocument();
		});

		await step('Render feature items', async () => {
			expect(canvas.getByText('Fast Performance')).toBeInTheDocument();
			expect(canvas.getByText('Secure')).toBeInTheDocument();
			expect(canvas.getByText('24/7 Support')).toBeInTheDocument();
		});

		await step('Display feature descriptions', async () => {
			expect(canvas.getByText('Optimized for speed and efficiency.')).toBeInTheDocument();
			expect(
				canvas.getByText('Enterprise-grade security for your data.')
			).toBeInTheDocument();
			expect(canvas.getByText('We are here to help you anytime.')).toBeInTheDocument();
		});

		await step('Feature section has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Why Choose Us');
		});
	}
};

export const SoftwareFeatures: Story = {
	args: {
		title: 'Powerful Development Tools',
		description: 'Build faster with our comprehensive suite of developer tools.',
		layout: 'grid',
		columns: 3,
		items: [
			{
				title: 'Code Intelligence',
				description: 'Advanced AI-powered code completion and error detection.',
				iconSvg:
					'<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>'
			},
			{
				title: 'Cloud Integration',
				description: 'Seamlessly deploy and scale your applications worldwide.',
				iconSvg:
					'<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/></svg>'
			},
			{
				title: 'Team Collaboration',
				description: 'Real-time collaboration tools for distributed teams.',
				iconSvg:
					'<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>'
			}
		]
	}
};

export const HardwareFeatures: Story = {
	args: {
		title: 'Premium Build Quality',
		description: 'Engineered for durability and performance in demanding environments.',
		layout: 'grid',
		columns: 2,
		items: [
			{
				title: 'Military-Grade Durability',
				description: 'IP68 rated waterproof and dustproof construction.',
				iconSvg:
					'<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'
			},
			{
				title: 'Advanced Sensors',
				description: 'Precision sensors with industry-leading accuracy.',
				iconSvg:
					'<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>'
			},
			{
				title: 'Long Battery Life',
				description: 'Up to 30 days of continuous operation.',
				iconSvg:
					'<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>'
			},
			{
				title: 'Wireless Connectivity',
				description: 'Bluetooth 5.0 with extended range capabilities.',
				iconSvg:
					'<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 21.5c-.77.833.192 2.5 1.732 2.5z"/></svg>'
			}
		]
	}
};

export const ServiceFeatures: Story = {
	args: {
		title: 'Comprehensive Support Services',
		description: 'Expert assistance whenever and wherever you need it.',
		layout: 'stacked',
		items: [
			{
				title: '24/7 Technical Support',
				description: 'Round-the-clock access to certified technicians and specialists.',
				cta: {
					text: 'Contact Support',
					href: '/support'
				}
			},
			{
				title: 'On-Site Maintenance',
				description: 'Scheduled and emergency maintenance services at your location.',
				cta: {
					text: 'Schedule Service',
					href: '/maintenance'
				}
			},
			{
				title: 'Training Programs',
				description: 'Comprehensive training for your team to maximize productivity.',
				cta: {
					text: 'View Training',
					href: '/training'
				}
			}
		]
	}
};
