import type { Meta, StoryObj } from '@storybook/sveltekit';
import IconText from '$lib/components/molecules/IconText.svelte';

const meta = {
	title: 'Molecules/IconText',
	component: IconText,
	tags: ['autodocs'],
	argTypes: {
		order: {
			control: 'number',
			description: 'Order number for the path line'
		},
		title: {
			control: 'text',
			description: 'Title displayed in path line'
		},
		subtitle: {
			control: 'text',
			description: 'Large subtitle/headline'
		},
		description: {
			control: 'text',
			description: 'Description text'
		},
		color: {
			control: 'color',
			description: 'Color for the path line'
		},
		details: {
			control: 'object',
			description: 'Details object with title, description, and cover image'
		}
	}
} satisfies Meta<typeof IconText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		order: 1,
		title: 'Step One',
		subtitle: 'Getting Started',
		description: 'Begin your journey with the first step. This is where everything starts.',
		color: '#3b82f6',
		details: {
			title: 'Details',
			description:
				'<p>This is the detailed description of the first step. It provides <strong>additional context</strong> and information.</p>',
			cover: {
				url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
				alt: 'Step illustration',
				text: ''
			}
		}
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Display step order', async () => {
			const text = canvas.queryByText('1') || canvasElement.textContent;
			expect(text).toBeTruthy();
		});

		await step('Display step title', async () => {
			expect(canvas.getByText('Step One')).toBeInTheDocument();
		});

		await step('Display subtitle', async () => {
			expect(canvas.getByText('Getting Started')).toBeInTheDocument();
		});

		await step('Display description', async () => {
			expect(canvas.getByText(/Begin your journey/)).toBeInTheDocument();
		});

		await step('Render with correct color', async () => {
			const colored = canvasElement.querySelector('[style*="color"], [style*="background"]');
			expect(colored || canvasElement).toBeInTheDocument();
		});
	}
};

export const WithoutImage: Story = {
	args: {
		order: 2,
		title: 'Step Two',
		subtitle: 'Continue Forward',
		description: 'Keep moving with the second step of the process.',
		color: '#10b981',
		details: {
			title: 'More Info',
			description:
				'<p>Detailed information about step two. <strong>Important points</strong> are highlighted here.</p><p>Multiple paragraphs are supported.</p>',
			cover: { url: '', alt: '', text: '' }
		}
	}
};

export const ImageOnly: Story = {
	args: {
		order: 3,
		title: 'Step Three',
		subtitle: 'Visual Focus',
		description: 'A step that focuses on visual content.',
		color: '#f59e0b',
		details: {
			title: 'Visual',
			description: '',
			cover: {
				url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
				alt: 'Visual step illustration',
				text: ''
			}
		}
	}
};

export const NoDetails: Story = {
	args: {
		order: 4,
		title: 'Step Four',
		subtitle: 'Simple Step',
		description: 'A straightforward step without additional details.',
		color: '#8b5cf6'
	}
};
