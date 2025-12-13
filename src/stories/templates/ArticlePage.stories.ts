import type { Meta, StoryObj } from '@storybook/sveltekit';
import ArticlePage from '$lib/components/templates/ArticlePage.svelte';

const meta = {
	title: 'Templates/ArticlePage',
	component: ArticlePage,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		breadcrumbs: {
			control: 'object',
			description: 'Breadcrumb navigation items'
		},
		category: {
			control: 'text',
			description: 'Article category/tag'
		},
		title: {
			control: 'text',
			description: 'Article title'
		},
		subtitle: {
			control: 'text',
			description: 'Article subtitle/excerpt'
		},
		featuredImage: {
			control: 'text',
			description: 'Featured image URL'
		},
		featuredImageAlt: {
			control: 'text',
			description: 'Featured image alt text'
		},
		author: {
			control: 'object',
			description: 'Author information (name, avatar, title)'
		},
		publishedAt: {
			control: 'date',
			description: 'Publication date'
		},
		readingTime: {
			control: 'number',
			description: 'Reading time in minutes'
		},
		class: {
			control: 'text',
			description: 'Custom CSS classes'
		}
	}
} satisfies Meta<typeof ArticlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		breadcrumbs: [
			{ label: 'Home', href: '/' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Technology' }
		],
		category: 'Technology',
		title: 'The Future of Web Development',
		subtitle:
			'Exploring the latest trends and technologies shaping the future of web development.',
		featuredImage: 'https://picsum.photos/seed/article/1200/600',
		featuredImageAlt: 'Abstract technology illustration',
		author: {
			name: 'Jane Smith',
			avatar: 'https://picsum.photos/seed/avatar/100/100',
			title: 'Senior Developer'
		},
		publishedAt: new Date('2024-01-15'),
		readingTime: 8
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render article title', async () => {
			expect(
				canvas.getByRole('heading', { level: 1, name: 'The Future of Web Development' })
			).toBeInTheDocument();
		});

		await step('Render article subtitle', async () => {
			expect(canvas.getByText(/Exploring the latest trends/)).toBeInTheDocument();
		});

		await step('Render category tag', async () => {
			expect(canvas.getByText('Technology')).toBeInTheDocument();
		});

		await step('Render author information', async () => {
			expect(canvas.getByText('Jane Smith')).toBeInTheDocument();
			expect(canvas.getByText('Senior Developer')).toBeInTheDocument();
		});

		await step('Render publication date', async () => {
			expect(canvas.getByText(/January 15, 2024/)).toBeInTheDocument();
		});

		await step('Render reading time', async () => {
			expect(canvas.getByText('8')).toBeInTheDocument();
		});

		await step('Render breadcrumb navigation', async () => {
			expect(canvas.getByText('Home')).toBeInTheDocument();
			expect(canvas.getByText('Blog')).toBeInTheDocument();
			expect(canvas.getByText('Technology')).toBeInTheDocument();
		});

		await step('Featured image is present', async () => {
			const images = canvasElement.querySelectorAll('img');
			expect(images.length).toBeGreaterThan(0);
		});

		await step('Main content has proper structure', async () => {
			const main = canvasElement.querySelector('main');
			expect(main).toBeInTheDocument();
		});
	}
};

export const MinimalArticle: Story = {
	args: {
		title: 'A Simple Article',
		subtitle: 'Sometimes less is more.',
		publishedAt: new Date('2024-01-10')
	}
};

export const WithAuthorOnly: Story = {
	args: {
		title: 'Understanding Modern JavaScript',
		author: {
			name: 'John Doe',
			title: 'Tech Lead'
		},
		publishedAt: new Date('2024-02-01'),
		readingTime: 12
	}
};

export const FullFeatured: Story = {
	args: {
		breadcrumbs: [
			{ label: 'Home', href: '/' },
			{ label: 'News', href: '/news' },
			{ label: 'Product Launches', href: '/news/product-launches' },
			{ label: 'Apple M3 Chip' }
		],
		category: 'Product Launch',
		title: 'Apple Unveils Revolutionary M3 Chip',
		subtitle:
			'The next generation of Apple silicon brings unprecedented performance and efficiency to the Mac lineup.',
		featuredImage: 'https://picsum.photos/seed/m3chip/1200/600',
		featuredImageAlt: 'M3 chip illustration',
		author: {
			name: 'Sarah Johnson',
			avatar: 'https://picsum.photos/seed/sarah/100/100',
			title: 'Technology Editor'
		},
		publishedAt: new Date('2024-01-20'),
		readingTime: 15
	}
};
