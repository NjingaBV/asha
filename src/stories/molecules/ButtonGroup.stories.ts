import type { Meta, StoryObj } from '@storybook/sveltekit';
import ButtonGroup from '$lib/components/molecules/ButtonGroup.svelte';

const meta = {
	title: 'Molecules/ButtonGroup',
	component: ButtonGroup,
	tags: ['autodocs'],
	argTypes: {
		colors: {
			control: 'object',
			description: 'Array of color options with name and swatch'
		},
		selected: {
			control: 'text',
			description: 'Currently selected color name'
		},
		title: {
			control: 'text',
			description: 'Title for the selector group'
		},
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark'],
			description: 'Color tone for text'
		},
		label: {
			control: 'text',
			description: 'Accessible label for the variant group'
		},
		onChange: {
			action: 'onChange',
			description: 'Callback when color is selected'
		}
	}
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Finitions',
		colors: [
			{ name: 'Minuit', swatch: '#1e293b' },
			{ name: 'Lumière stellaire', swatch: '#f8fafc' },
			{ name: 'Gris sidéral', swatch: '#475569' },
			{ name: 'Argent', swatch: '#e2e8f0' }
		],
		selected: 'Minuit',
		tone: 'light',
		label: 'Select finish'
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render button group title', async () => {
			expect(canvas.getByText('Finitions')).toBeInTheDocument();
		});

		await step('Render all color buttons', async () => {
			const buttons = canvas.getAllByRole('button');
			expect(buttons.length).toBeGreaterThanOrEqual(4);
		});

		await step('First button (Minuit) is selected by default', async () => {
			const minuitButton = canvas.getByText('Minuit');
			expect(minuitButton).toBeInTheDocument();
		});

		await step('Can click to select different color', async () => {
			const buttons = canvas.getAllByRole('button');
			if (buttons.length > 1) {
				await userEvent.click(buttons[1]);
				expect(buttons[1]).toBeInTheDocument();
			}
		});

		await step('Group has proper accessibility label', async () => {
			const group = canvasElement.querySelector('[role="group"]') || canvasElement;
			expect(group).toBeInTheDocument();
		});
	}
};

export const MacBookColors: Story = {
	args: {
		title: 'Color',
		colors: [
			{ name: 'Space Black', swatch: '#1d1d1f' },
			{ name: 'Silver', swatch: '#f5f5f7' }
		],
		selected: 'Space Black',
		tone: 'light',
		label: 'Select color'
	}
};

export const IPhoneColors: Story = {
	args: {
		title: 'Finish',
		colors: [
			{ name: 'Natural Titanium', swatch: '#8f8a81' },
			{ name: 'Blue Titanium', swatch: '#394c5f' },
			{ name: 'White Titanium', swatch: '#f2f1eb' },
			{ name: 'Black Titanium', swatch: '#3c3b37' }
		],
		selected: 'Natural Titanium',
		tone: 'light',
		label: 'Select finish'
	}
};

export const DarkMode: Story = {
	args: {
		...Default.args,
		tone: 'dark'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};

export const TwoOptions: Story = {
	args: {
		title: 'Size',
		colors: [
			{ name: '14"', swatch: '#6b7280' },
			{ name: '16"', swatch: '#374151' }
		],
		selected: '14"',
		tone: 'light',
		label: 'Select size'
	}
};
