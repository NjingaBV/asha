import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import List from '$lib/components/organisms/List.svelte';

const meta = {
	title: 'Organisms/List',
	component: List,
	tags: ['autodocs'],
	argTypes: {
		items: { control: 'object' },
		variant: {
			control: { type: 'select' },
			options: ['unordered', 'ordered', 'none']
		},
		marker: {
			control: { type: 'select' },
			options: ['disc', 'circle', 'square', 'decimal', 'none']
		},
		spacing: {
			control: { type: 'select' },
			options: ['tight', 'normal', 'loose']
		},
		dividers: { control: 'boolean' }
	}
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'unordered',
		marker: 'disc',
		spacing: 'normal',
		dividers: false,
		items: [
			{ id: '1', content: 'First item in the list' },
			{ id: '2', content: 'Second item in the list' },
			{ id: '3', content: 'Third item in the list' },
			{ id: '4', content: 'Fourth item in the list' }
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify list renders
		const list = canvas.getByRole('list');
		await expect(list).toBeInTheDocument();
		await expect(list).toBeVisible();

		// Test 2: Verify all list items are rendered
		const listItems = canvas.getAllByRole('listitem');
		expect(listItems.length).toBe(4);

		// Test 3: Verify item content
		const firstItem = canvas.getByText('First item in the list');
		await expect(firstItem).toBeInTheDocument();

		const secondItem = canvas.getByText('Second item in the list');
		await expect(secondItem).toBeInTheDocument();

		const thirdItem = canvas.getByText('Third item in the list');
		await expect(thirdItem).toBeInTheDocument();

		const fourthItem = canvas.getByText('Fourth item in the list');
		await expect(fourthItem).toBeInTheDocument();

		// Test 4: Verify unordered list (ul element)
		const unorderedList = canvas.getByRole('list');
		await expect(unorderedList.tagName.toLowerCase()).toBe('ul');

		// Test 5: Verify list items are properly contained
		listItems.forEach((item) => {
			expect(item.parentElement).toBe(list);
		});

		// Test 6: Test keyboard navigation
		await userEvent.tab();
		// Should be able to navigate through any interactive list items

		// Test 7: Verify no dividers (default)
		const dividers = canvas.queryAllByRole('separator');
		expect(dividers.length).toBe(0);

		// Test 8: Verify proper list semantics
		// Each listitem should contain the expected content
		listItems.forEach((item, index) => {
			const expectedText = [
				'First item in the list',
				'Second item in the list',
				'Third item in the list',
				'Fourth item in the list'
			][index];
			expect(item).toHaveTextContent(expectedText);
		});

		// Test 9: Verify accessibility - list should be properly structured
		await expect(list).toBeVisible();
		expect(listItems.every((item) => item.offsetWidth > 0 && item.offsetHeight > 0)).toBe(true);
	}
};

export const Ordered: Story = {
	args: {
		...Default.args,
		variant: 'ordered',
		marker: 'decimal'
	}
};

export const Circle: Story = {
	args: {
		...Default.args,
		marker: 'circle'
	}
};

export const Square: Story = {
	args: {
		...Default.args,
		marker: 'square'
	}
};

export const NoMarker: Story = {
	args: {
		...Default.args,
		variant: 'none',
		marker: 'none'
	}
};

export const WithDividers: Story = {
	args: {
		...Default.args,
		dividers: true,
		marker: 'none',
		variant: 'none'
	}
};

export const TightSpacing: Story = {
	args: {
		...Default.args,
		spacing: 'tight'
	}
};

export const LooseSpacing: Story = {
	args: {
		...Default.args,
		spacing: 'loose'
	}
};
