import type { Meta, StoryObj } from '@storybook/sveltekit';
import PageHeader from '$lib/components/organisms/PageHeader.svelte';

const meta = {
	title: 'Organisms/PageHeader',
	component: PageHeader,
	tags: ['autodocs'],
	argTypes: {
		name: { control: 'text' },
		tagline: { control: 'text' },
		description: { control: 'text' },
		price: { control: 'text' },
		badge: { control: 'text' },
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark']
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center']
		},
		ctas: { control: 'object' }
	}
} satisfies Meta<typeof PageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'MacBook Air',
		tagline: 'Thin, light, and incredibly powerful.',
		description: 'M3 chip, up to 18 hours battery life, Liquid Retina display.',
		price: 'From $1,299',
		badge: 'New',
		tone: 'light',
		align: 'left',
		ctas: {
			primary: { label: 'Buy', href: '#' },
			secondary: { label: 'Learn more', href: '#' }
		}
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render page title', async () => {
			expect(canvas.getByText('MacBook Air')).toBeInTheDocument();
		});

		await step('Display page tagline', async () => {
			expect(canvas.getByText('Thin, light, and incredibly powerful.')).toBeInTheDocument();
		});

		await step('Show page description', async () => {
			expect(canvas.getByText(/M3 chip/)).toBeInTheDocument();
		});

		await step('Display price information', async () => {
			expect(canvas.getByText('From $1,299')).toBeInTheDocument();
		});

		await step('Show badge', async () => {
			expect(canvas.getByText('New')).toBeInTheDocument();
		});

		await step('Render primary CTA button', async () => {
			const primaryButton = canvas.getByRole('link', { name: 'Buy' });
			expect(primaryButton).toBeInTheDocument();
			expect(primaryButton).toHaveAttribute('href', '#');
		});

		await step('Render secondary CTA button', async () => {
			const secondaryButton = canvas.getByRole('link', { name: 'Learn more' });
			expect(secondaryButton).toBeInTheDocument();
			expect(secondaryButton).toHaveAttribute('href', '#');
		});

		await step('Page header has proper heading hierarchy', async () => {
			const heading = canvas.getByRole('heading', { level: 1 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('MacBook Air');
		});
	}
};

export const DarkMode: Story = {
	args: {
		...Default.args,
		tone: 'dark',
		name: 'MacBook Pro',
		tagline: 'Built for pros.'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};

export const Centered: Story = {
	args: {
		...Default.args,
		align: 'center'
	}
};
