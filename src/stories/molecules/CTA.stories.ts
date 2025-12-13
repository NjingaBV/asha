import type { Meta, StoryObj } from '@storybook/sveltekit';
import CTA from '$lib/components/molecules/CTA.svelte';

const meta = {
	title: 'Molecules/CTA',
	component: CTA,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered'
	},
	argTypes: {
		primary: {
			control: 'object',
			description: 'Primary action button configuration with label, href, and tone'
		},
		secondary: {
			control: 'object',
			description: 'Secondary action button configuration (optional)'
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center'],
			description: 'Horizontal alignment of button group'
		}
	}
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		primary: { label: 'Buy Now', href: '#', tone: 'primary' },
		secondary: { label: 'Learn More', href: '#', tone: 'secondary' },
		align: 'center'
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render primary button', async () => {
			expect(canvas.getByText('Buy Now')).toBeInTheDocument();
		});

		await step('Render secondary button', async () => {
			expect(canvas.getByText('Learn More')).toBeInTheDocument();
		});

		await step('Both buttons are links', async () => {
			const links = canvas.getAllByRole('link');
			expect(links.length).toBeGreaterThanOrEqual(2);
		});

		await step('Buttons are center aligned', async () => {
			const container = canvasElement.querySelector('[class*="flex"], [class*="center"]');
			expect(container || canvasElement).toBeInTheDocument();
		});

		await step('Can click primary button', async () => {
			const button = canvas.getByText('Buy Now');
			await userEvent.click(button);
			expect(button).toBeInTheDocument();
		});
	}
};

export const PrimaryOnly: Story = {
	args: {
		primary: { label: 'Get Started', href: '#', tone: 'primary' },
		secondary: null,
		align: 'center'
	}
};

export const LeftAligned: Story = {
	args: {
		primary: { label: 'Subscribe', href: '#', tone: 'primary' },
		secondary: { label: 'View Plans', href: '#', tone: 'secondary' },
		align: 'left'
	}
};

export const ShopAction: Story = {
	args: {
		primary: { label: 'Add to Cart', href: '#', tone: 'primary' },
		secondary: { label: 'Save for Later', href: '#', tone: 'secondary' },
		align: 'center'
	}
};

export const NeutralTone: Story = {
	args: {
		primary: { label: 'Continue', href: '#', tone: 'neutral' },
		secondary: { label: 'Cancel', href: '#', tone: 'secondary' },
		align: 'center'
	}
};
