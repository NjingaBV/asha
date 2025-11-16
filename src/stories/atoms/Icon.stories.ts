import type { Meta, StoryObj } from '@storybook/sveltekit';
import Icon from '@/lib/components/atoms//Icon.svelte';

const meta = {
	title: 'Atoms/Icon',
	component: Icon,
	argTypes: {
		name: {
			control: 'select',
			options: ['search', 'sun', 'moon', 'chevron-right', 'chip', 'color', 'external']
		},
		size: { control: { type: 'number', min: 12, max: 64, step: 2 } },
		className: { control: 'text' }
	}
} satisfies Meta<Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Catalog: Story = {
	args: { size: 24 },
	render: (args) => ({
		Component: Icon,
		props: { ...args, name: 'search' }
	})
};
