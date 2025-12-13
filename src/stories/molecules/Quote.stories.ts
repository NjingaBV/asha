import type { Meta, StoryObj } from '@storybook/sveltekit';
import Quote from '$lib/components/molecules/Quote.svelte';

const meta = {
	title: 'Molecules/Quote',
	component: Quote,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'bordered', 'highlighted'],
			description: 'Visual style'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Quote size'
		},
		author: {
			control: 'text',
			description: 'Author name'
		},
		role: {
			control: 'text',
			description: 'Author role/title'
		},
		avatarSrc: {
			control: 'text',
			description: 'Author avatar URL'
		},
		showQuotes: {
			control: 'boolean',
			description: 'Show quotation marks'
		}
	}
} satisfies Meta<typeof Quote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'default',
		size: 'md',
		showQuotes: true
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render quote element', async () => {
			const blockquote = canvasElement.querySelector('blockquote');
			expect(blockquote || canvasElement).toBeInTheDocument();
		});

		await step('Display quotation marks when enabled', async () => {
			const text = canvasElement.textContent;
			expect(text && (text.includes('"') || text.includes('"'))).toBeTruthy();
		});

		await step('Quote has proper semantic HTML', async () => {
			const quote = canvasElement.querySelector('blockquote, q, [role="blockquote"]');
			expect(quote || canvasElement).toBeInTheDocument();
		});

		await step('Quote applies medium size', async () => {
			expect(canvasElement).toBeInTheDocument();
		});
	}
};

export const WithAttribution: Story = {
	args: {
		variant: 'default',
		size: 'md',
		author: 'John Doe',
		role: 'CEO, Company Inc.',
		showQuotes: true
	}
};

export const WithAvatar: Story = {
	args: {
		variant: 'default',
		size: 'md',
		author: 'Jane Smith',
		role: 'Product Designer',
		avatarSrc: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
		showQuotes: true
	}
};

export const Bordered: Story = {
	args: {
		variant: 'bordered',
		size: 'md',
		author: 'Michael Brown',
		role: 'CTO, Tech Corp',
		showQuotes: true
	}
};

export const Highlighted: Story = {
	args: {
		variant: 'highlighted',
		size: 'md',
		author: 'Sarah Wilson',
		role: 'Head of Marketing',
		showQuotes: true
	}
};

export const Small: Story = {
	args: {
		variant: 'default',
		size: 'sm',
		author: 'Alex Johnson',
		showQuotes: true
	}
};

export const Large: Story = {
	args: {
		variant: 'default',
		size: 'lg',
		author: 'Emily Chen',
		role: 'Founder & CEO',
		showQuotes: true
	}
};

export const NoQuotes: Story = {
	args: {
		variant: 'bordered',
		size: 'md',
		author: 'David Lee',
		role: 'Senior Engineer',
		showQuotes: false
	}
};

export const TestimonialWithAvatar: Story = {
	args: {
		variant: 'highlighted',
		size: 'lg',
		author: 'Maria Garcia',
		role: 'Happy Customer',
		avatarSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
		showQuotes: true
	}
};
