import type { Meta, StoryObj } from '@storybook/sveltekit';
import StickyNav from '$lib/components/organisms/StickyNav.svelte';

const meta = {
	title: 'Organisms/StickyNav',
	component: StickyNav,
	tags: ['autodocs'],
	argTypes: {
		logo: { control: 'object' },
		links: { control: 'object' },
		cta: { control: 'object' },
		dark: { control: 'boolean' }
	}
} satisfies Meta<typeof StickyNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		logo: { title: 'MacBook Pro' },
		links: [
			{ label: 'Overview', href: '#' },
			{ label: 'Tech Specs', href: '#' },
			{ label: 'Compare', href: '#' }
		],
		cta: { label: 'Buy', href: '#' },
		dark: true
	},
	parameters: {
		backgrounds: { default: 'dark' }
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @storybook/no-import-module-by-path
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render sticky navigation container', async () => {
			const nav = canvasElement.querySelector('nav');
			expect(nav).toBeInTheDocument();
		});

		await step('Display logo title', async () => {
			expect(canvas.getByText('MacBook Pro')).toBeInTheDocument();
		});

		await step('Render all navigation links', async () => {
			expect(canvas.getByText('Overview')).toBeInTheDocument();
			expect(canvas.getByText('Tech Specs')).toBeInTheDocument();
			expect(canvas.getByText('Compare')).toBeInTheDocument();
		});

		await step('Render CTA button', async () => {
			expect(canvas.getByText('Buy')).toBeInTheDocument();
		});

		await step('CTA is a proper link element', async () => {
			const ctaLink = canvas.getByRole('link', { name: 'Buy' });
			expect(ctaLink).toBeInTheDocument();
			expect(ctaLink).toHaveAttribute('href', '#');
		});

		await step('Navigation has sticky positioning', async () => {
			const nav = canvasElement.querySelector('nav');
			expect(nav).toHaveClass('sticky');
		});
	}
};

export const Light: Story = {
	args: {
		...Default.args,
		dark: false
	},
	parameters: {
		backgrounds: { default: 'light' }
	}
};

export const NoCTA: Story = {
	args: {
		logo: { title: 'Apple Watch' },
		links: [
			{ label: 'Overview', href: '#' },
			{ label: 'Features', href: '#' },
			{ label: 'Compare', href: '#' }
		],
		cta: null,
		dark: true
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};
