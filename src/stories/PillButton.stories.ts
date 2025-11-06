import type { Meta, StoryObj } from '@storybook/sveltekit';
import PillButton from '@/lib/components/atoms/PillButton/PillButton.svelte';

const meta = {
	title: 'Atoms/PillButton',
	component: PillButton,
	parameters: {
		layout: 'centered',
		actions: { handles: ['click'] }
	},
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'dark']
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		}
	}
} satisfies Meta<typeof PillButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'Acheter',
		tone: 'primary',
		size: 'md'
	},
	render: (args) => ({ Component: PillButton, props: args })
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		label: 'En savoir plus',
		tone: 'secondary'
	}
};

export const DarkLarge: Story = {
	args: {
		...Primary.args,
		label: 'Explorer',
		tone: 'dark',
		size: 'lg'
	}
};
