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
		dark: { control: 'boolean' },
		active: { control: 'text' }
	}
} satisfies Meta<typeof StickyNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		logo: { title: 'Laptop Series' },
		links: [
			{ label: 'Overview', href: '#' },
			{ label: 'Tech Specs', href: '#' },
			{ label: 'Compare', href: '#' }
		],
		cta: { label: 'Buy', href: '#' },
		dark: true,
		active: 'Overview'
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
			expect(canvas.getByText('Laptop Series')).toBeInTheDocument();
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
		logo: { title: 'Smartphone Collection' },
		links: [
			{ label: 'Overview', href: '#' },
			{ label: 'Features', href: '#' },
			{ label: 'Compare', href: '#' }
		],
		cta: null,
		dark: true,
		active: 'Features'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};

export const ExtendedNavigation: Story = {
	args: {
		logo: { title: 'Gaming Console' },
		links: [
			{ label: 'Home', href: '#' },
			{ label: 'Games', href: '#' },
			{ label: 'Accessories', href: '#' },
			{ label: 'Support', href: '#' },
			{ label: 'Community', href: '#' }
		],
		cta: { label: 'Shop Now', href: '#' },
		dark: false,
		active: 'Games'
	},
	parameters: {
		backgrounds: { default: 'light' }
	}
};
