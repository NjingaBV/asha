import type { Meta, StoryObj } from '@storybook/sveltekit';
import Form from '$lib/components/organisms/Form.svelte';

const meta = {
	title: 'Organisms/Form',
	component: Form,
	tags: ['autodocs'],
	argTypes: {
		action: { control: 'text' },
		method: {
			control: { type: 'select' },
			options: ['get', 'post']
		},
		id: { control: 'text' },
		submitting: { control: 'boolean' },
		submitText: { control: 'text' },
		cancelText: { control: 'text' },
		showCancel: { control: 'boolean' },
		layout: {
			control: { type: 'select' },
			options: ['vertical', 'horizontal', 'inline']
		}
	}
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		method: 'post',
		submitText: 'Submit',
		cancelText: 'Cancel',
		showCancel: false,
		layout: 'vertical',
		submitting: false
	}
};

export const WithCancel: Story = {
	args: {
		...Default.args,
		showCancel: true
	}
};

export const Horizontal: Story = {
	args: {
		...Default.args,
		layout: 'horizontal'
	}
};

export const Inline: Story = {
	args: {
		...Default.args,
		layout: 'inline',
		submitText: 'Search'
	}
};

export const Submitting: Story = {
	args: {
		...Default.args,
		submitting: true
	}
};

export const CustomLabels: Story = {
	args: {
		submitText: 'Save Changes',
		cancelText: 'Discard',
		showCancel: true,
		layout: 'vertical'
	}
};
