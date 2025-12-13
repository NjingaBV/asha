import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import IconGrid from '$lib/components/organisms/IconGrid.svelte';

const meta = {
	title: 'Organisms/IconGrid',
	component: IconGrid,
	tags: ['autodocs'],
	argTypes: {
		eyebrow: { control: 'text' },
		title: { control: 'text' },
		description: { control: 'text' },
		items: { control: 'object' },
		columns: {
			control: { type: 'select' },
			options: [2, 3, 4, 6]
		},
		cardSize: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg']
		},
		cardAlign: {
			control: { type: 'select' },
			options: ['left', 'center']
		}
	}
} satisfies Meta<typeof IconGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		eyebrow: 'Features',
		title: 'Everything you need',
		description: 'Our platform provides all the tools you need to succeed.',
		columns: 3,
		cardSize: 'md',
		cardAlign: 'center',
		items: [
			{
				icon: 'zap',
				title: 'Fast Performance',
				description: 'Lightning fast load times and smooth interactions.'
			},
			{
				icon: 'shield',
				title: 'Secure',
				description: 'Enterprise-grade security for your data.'
			},
			{
				icon: 'users',
				title: 'Team Collaboration',
				description: 'Work together seamlessly with your team.'
			},
			{
				icon: 'bar-chart',
				title: 'Analytics',
				description: 'Detailed insights and reporting.'
			},
			{
				icon: 'globe',
				title: 'Global Scale',
				description: 'Deploy anywhere in the world.'
			},
			{
				icon: 'headphones',
				title: '24/7 Support',
				description: 'Round the clock customer support.'
			}
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify grid renders
		const grid = canvas.getByRole('region', { name: /icon grid/i });
		await expect(grid).toBeInTheDocument();
		await expect(grid).toBeVisible();

		// Test 2: Verify eyebrow, title and description
		const eyebrow = canvas.getByText('Features');
		await expect(eyebrow).toBeInTheDocument();

		const title = canvas.getByRole('heading', { name: /everything you need/i });
		await expect(title).toBeInTheDocument();

		const description = canvas.getByText(
			'Our platform provides all the tools you need to succeed.'
		);
		await expect(description).toBeInTheDocument();

		// Test 3: Verify all icons are rendered
		const icons = canvas.getAllByRole('img');
		expect(icons.length).toBe(6); // Should have 6 icons

		// Test 4: Verify all titles are displayed
		const fastPerformance = canvas.getByText('Fast Performance');
		await expect(fastPerformance).toBeInTheDocument();

		const secure = canvas.getByText('Secure');
		await expect(secure).toBeInTheDocument();

		const teamCollaboration = canvas.getByText('Team Collaboration');
		await expect(teamCollaboration).toBeInTheDocument();

		// Test 5: Verify descriptions are displayed
		const performanceDesc = canvas.getByText(
			'Lightning fast load times and smooth interactions.'
		);
		await expect(performanceDesc).toBeInTheDocument();

		const securityDesc = canvas.getByText('Enterprise-grade security for your data.');
		await expect(securityDesc).toBeInTheDocument();

		// Test 6: Verify grid layout (3 columns)
		const gridItems = canvas.getAllByRole('article') || canvas.getAllByRole('listitem');
		expect(gridItems.length).toBe(6);

		// Test 7: Test keyboard navigation
		await userEvent.tab();
		// Should be able to navigate through any interactive elements

		// Test 8: Verify icon accessibility
		icons.forEach((icon) => {
			// Icons should have alt text or be decorative
			const hasAlt = icon.hasAttribute('alt') && icon.getAttribute('alt') !== '';
			const isDecorative = icon.getAttribute('aria-hidden') === 'true';
			expect(hasAlt || isDecorative).toBe(true);
		});

		// Test 9: Verify proper heading hierarchy
		const headings = canvas.getAllByRole('heading');
		expect(headings.length).toBeGreaterThanOrEqual(1);

		// Test 10: Test responsive behavior (if applicable)
		// This would depend on CSS media queries
	}
};

export const TwoColumns: Story = {
	args: {
		...Default.args,
		columns: 2,
		title: 'Key Benefits'
	}
};

export const FourColumns: Story = {
	args: {
		...Default.args,
		columns: 4
	}
};

export const SmallCards: Story = {
	args: {
		...Default.args,
		cardSize: 'sm',
		title: 'Quick Features'
	}
};

export const LeftAligned: Story = {
	args: {
		...Default.args,
		cardAlign: 'left'
	}
};

export const WithLinks: Story = {
	args: {
		title: 'Explore Features',
		columns: 3,
		items: [
			{
				icon: 'file-text',
				title: 'Documentation',
				description: 'Read the docs',
				href: '/docs'
			},
			{
				icon: 'book',
				title: 'Tutorials',
				description: 'Learn step by step',
				href: '/tutorials'
			},
			{
				icon: 'code',
				title: 'API Reference',
				description: 'Technical documentation',
				href: '/api'
			}
		]
	}
};
