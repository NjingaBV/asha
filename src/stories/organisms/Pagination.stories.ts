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
