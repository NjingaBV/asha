import type { Meta, StoryObj } from '@storybook/sveltekit';
import FooterLinkGroup from '$lib/components/organisms/FooterLinkGroup.svelte';

const meta = {
	title: 'Organisms/FooterLinkGroup',
	component: FooterLinkGroup,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		links: { control: 'object' }
	}
} satisfies Meta<typeof FooterLinkGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Company',
		links: [
			{ label: 'About Us', href: '/about' },
			{ label: 'Careers', href: '/careers' },
			{ label: 'Press', href: '/press' },
			{ label: 'Blog', href: '/blog' }
		]
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @storybook/no-import-module-by-path
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render group title as heading', async () => {
			expect(canvas.getByText('Company')).toBeInTheDocument();
			const heading = canvasElement.querySelector('h3');
			expect(heading).toBeInTheDocument();
		});

		await step('Render all footer links', async () => {
			expect(canvas.getByText('About Us')).toBeInTheDocument();
			expect(canvas.getByText('Careers')).toBeInTheDocument();
			expect(canvas.getByText('Press')).toBeInTheDocument();
			expect(canvas.getByText('Blog')).toBeInTheDocument();
		});

		await step('Links are proper anchor elements', async () => {
			const links = canvas.getAllByRole('link');
			expect(links.length).toBe(4);
		});

		await step('Links have correct href attributes', async () => {
			const aboutLink = canvas.getByRole('link', { name: 'About Us' });
			expect(aboutLink).toHaveAttribute('href', '/about');

			const careersLink = canvas.getByRole('link', { name: 'Careers' });
			expect(careersLink).toHaveAttribute('href', '/careers');
		});
	}
};

export const WithExternalLinks: Story = {
	args: {
		title: 'Social',
		links: [
			{ label: 'Twitter', href: 'https://twitter.com', external: true },
			{ label: 'LinkedIn', href: 'https://linkedin.com', external: true },
			{ label: 'GitHub', href: 'https://github.com', external: true }
		]
	}
};

export const SupportLinks: Story = {
	args: {
		title: 'Support',
		links: [
			{ label: 'Help Center', href: '/help' },
			{ label: 'Contact Us', href: '/contact' },
			{ label: 'FAQs', href: '/faq' },
			{ label: 'Documentation', href: '/docs' }
		]
	}
};

export const LegalLinks: Story = {
	args: {
		title: 'Legal',
		links: [
			{ label: 'Privacy Policy', href: '/privacy' },
			{ label: 'Terms of Service', href: '/terms' },
			{ label: 'Cookie Policy', href: '/cookies' }
		]
	}
};
