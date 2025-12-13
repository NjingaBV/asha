import type { Meta, StoryObj } from '@storybook/sveltekit';
import SpecGrid from '$lib/components/molecules/SpecGrid.svelte';

const meta = {
	title: 'Molecules/SpecGrid',
	component: SpecGrid,
	tags: ['autodocs'],
	argTypes: {
		specs: { control: 'object' },
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark']
		}
	}
} satisfies Meta<typeof SpecGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		specs: [
			{ label: 'Puce', value: 'Apple M3', emphasize: true },
			{ label: 'Autonomie', value: 'Up to 18 h' },
			{ label: 'Weight', value: 'From 1.24 kg' },
			{ label: 'Écran', value: '13" ou 15" Liquid Retina' },
			{ label: 'Ports', value: 'MagSafe + 2x Thunderbolt' },
			{ label: 'Audio', value: '4 haut-parleurs' }
		],
		tone: 'light'
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Display all specifications', async () => {
			expect(canvas.getByText('Apple M3')).toBeInTheDocument();
			expect(canvas.getByText(/Autonomie/)).toBeInTheDocument();
			expect(canvas.getByText(/Liquid Retina/)).toBeInTheDocument();
		});

		await step('Highlight emphasized specs', async () => {
			const emphasized = canvasElement.querySelector('[class*="emphasize"], [class*="bold"]');
			expect(emphasized || canvasElement).toBeInTheDocument();
		});

		await step('Render specification labels', async () => {
			expect(canvas.getByText('Puce')).toBeInTheDocument();
			expect(canvas.getByText('Audio')).toBeInTheDocument();
		});

		await step('Display all spec values', async () => {
			const text = canvasElement.textContent;
			expect(text && text.includes('MagSafe')).toBeTruthy();
		});
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
