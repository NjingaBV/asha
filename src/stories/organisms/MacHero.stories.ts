import type { Meta, StoryObj } from '@storybook/sveltekit';
import MacHero from '$lib/components/organisms/MacHero.svelte';

const meta = {
	title: 'Organisms/MacHero',
	component: MacHero,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# MacHero Component

Large hero banner for Mac page featuring product image, title, and call-to-action links.

## Features
- Full-width hero section
- New badge support
- Title, subtitle, and description
- Responsive images
- Learn more and Buy CTAs
- Customizable background and text colors`
			}
		}
	},
	argTypes: {
		title: {
			control: 'text',
			description: 'Hero title'
		},
		backgroundColor: {
			control: 'color',
			description: 'Background color'
		},
		textColor: {
			control: 'select',
			options: ['light', 'dark'],
			description: 'Text color scheme'
		}
	}
} satisfies Meta<typeof MacHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MacBookAir: Story = {
	args: {
		title: 'MacBook Air',
		subtitle: 'Supercharged by M3',
		description: "The world's best-selling laptop is now even more powerful.",
		imageDesktop:
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
		imageAlt: 'MacBook Air',
		isNew: true,
		learnMoreHref: '#learn-more',
		buyHref: '#buy',
		backgroundColor: '#000000',
		textColor: 'light'
	}
};

export const IMac: Story = {
	args: {
		title: 'iMac',
		subtitle: 'A statement. Instantly.',
		description: "The all-in-one that's all yours. In seven stunning colors.",
		imageDesktop:
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
		imageAlt: 'iMac',
		isNew: false,
		learnMoreHref: '#learn-more',
		buyHref: '#buy',
		backgroundColor: '#FFFFFF',
		textColor: 'dark'
	}
};
