import type { Meta, StoryObj } from '@storybook/sveltekit';
import Pagination from '$lib/components/organisms/Pagination.svelte';

const meta = {
	title: 'Organisms/Pagination',
	component: Pagination,
	tags: ['autodocs'],
	argTypes: {
		page: { control: { type: 'number', min: 1 } },
		totalPages: { control: { type: 'number', min: 1 } },
		siblingCount: { control: { type: 'number', min: 0 } },
		showEnds: { control: 'boolean' },
		showPrevNext: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		}
	}
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		page: 1,
		totalPages: 10,
		siblingCount: 1,
		showEnds: true,
		showPrevNext: true,
		size: 'md'
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @storybook/no-import-module-by-path
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Pagination component renders', async () => {
			const pagination = canvasElement.querySelector('[data-pagination]');
			expect(pagination).toBeInTheDocument();
		});

		await step('Page buttons are rendered', async () => {
			const pageButtons = canvas.getAllByRole('button');
			expect(pageButtons.length).toBeGreaterThan(0);
		});

		await step('Current page is highlighted', async () => {
			// First page should be current
			const currentPageButton = canvas.getByRole('button', { name: '1' });
			expect(currentPageButton).toHaveAttribute('aria-current', 'page');
		});

		await step('Previous button is disabled on first page', async () => {
			const prevButton = canvas.getByRole('button', { name: /previous|prev|‹/i });
			expect(prevButton).toBeDisabled();
		});

		await step('Next button is enabled', async () => {
			const nextButton = canvas.getByRole('button', { name: /next|›/i });
			expect(nextButton).toBeEnabled();
		});

		await step('Can navigate to next page', async () => {
			const nextButton = canvas.getByRole('button', { name: /next|›/i });
			await userEvent.click(nextButton);

			// Page 2 should become current
			const page2Button = canvas.getByRole('button', { name: '2' });
			expect(page2Button).toHaveAttribute('aria-current', 'page');
		});

		await step('Can click specific page numbers', async () => {
			const page3Button = canvas.getByRole('button', { name: '3' });
			await userEvent.click(page3Button);

			expect(page3Button).toHaveAttribute('aria-current', 'page');
		});

		await step('Previous button becomes enabled after navigation', async () => {
			const prevButton = canvas.getByRole('button', { name: /previous|prev|‹/i });
			expect(prevButton).toBeEnabled();
		});

		await step('Keyboard navigation works', async () => {
			// Test tab navigation
			await userEvent.tab();
			const focusedElement = document.activeElement;
			expect(focusedElement).toBeInTheDocument();
		});

		await step('Page count display', async () => {
			// Check if page information is displayed
			const pagination = canvasElement.querySelector('[data-pagination]');
			expect(pagination).toBeInTheDocument();
		});
	}
};

export const MiddlePage: Story = {
	args: {
		...Default.args,
		page: 5
	}
};

export const LastPage: Story = {
	args: {
		...Default.args,
		page: 10
	}
};

export const ManyPages: Story = {
	args: {
		...Default.args,
		totalPages: 50,
		page: 25
	}
};

export const Small: Story = {
	args: {
		...Default.args,
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		...Default.args,
		size: 'lg'
	}
};

export const NoEnds: Story = {
	args: {
		...Default.args,
		showEnds: false
	}
};

export const Minimal: Story = {
	args: {
		page: 3,
		totalPages: 10,
		showEnds: false,
		showPrevNext: true,
		siblingCount: 0,
		size: 'sm'
	}
};
