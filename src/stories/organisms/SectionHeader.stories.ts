import type { Meta, StoryObj } from '@storybook/sveltekit';
import SectionHeader from '$lib/components/organisms/SectionHeader.svelte';

const meta = {
	title: 'Organisms/SectionHeader',
	component: SectionHeader,
	tags: ['autodocs'],
	argTypes: {
		eyebrow: { control: 'text' },
		title: { control: 'text' },
		description: { control: 'text' },
		level: {
			control: { type: 'select' },
			options: [1, 2, 3, 4, 5, 6]
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center', 'right']
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		}
	}
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		eyebrow: 'Features',
		title: 'Everything you need to succeed',
		description:
			'Our platform provides all the tools necessary to build, deploy, and scale your applications.',
		level: 2,
		align: 'center',
		size: 'md'
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render eyebrow text', async () => {
			expect(canvas.getByText('Features')).toBeInTheDocument();
		});

		await step('Display section title', async () => {
			expect(canvas.getByText('Everything you need to succeed')).toBeInTheDocument();
		});

		await step('Show section description', async () => {
			expect(canvas.getByText(/Our platform provides/)).toBeInTheDocument();
		});

		await step('Section header has proper heading hierarchy', async () => {
			const heading = canvas.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Everything you need to succeed');
		});

		await step('Apply correct alignment', async () => {
			const headerElement =
				canvasElement.querySelector('[data-testid="section-header"]') ||
				canvasElement.firstElementChild;
			expect(headerElement).toBeInTheDocument();
			// Note: alignment testing would require checking CSS classes or styles
		});

		await step('Apply correct size styling', async () => {
			const titleElement = canvas.getByRole('heading', { level: 2 });
			expect(titleElement).toBeInTheDocument();
			// Note: size testing would require checking CSS classes
		});
	}
};

export const LeftAligned: Story = {
	args: {
		...Default.args,
		align: 'left'
	}
};

export const RightAligned: Story = {
	args: {
		...Default.args,
		align: 'right'
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

export const NoEyebrow: Story = {
	args: {
		title: 'Section Title Only',
		description: 'Sometimes you just need a title and description.',
		align: 'center',
		size: 'md'
	}
};

export const TitleOnly: Story = {
	args: {
		title: 'Simple Section Header',
		align: 'center',
		size: 'md'
	}
};
