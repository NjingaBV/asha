import type { Meta, StoryObj } from '@storybook/sveltekit';
import Image from '$lib/components/atoms/Image.svelte';

const meta = {
	title: 'Atoms/Image',
	component: Image,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `# Image Component

Responsive image component with srcset support for different screen sizes.

## Features
- Responsive image sources (desktop, tablet, mobile)
- Object fit options
- Lazy loading support
- Accessibility with alt text`
			}
		}
	},
	argTypes: {
		src: {
			control: 'text',
			description: 'Image source URL (single)'
		},
		alt: {
			control: 'text',
			description: 'Alt text for accessibility'
		},
		objectFit: {
			control: 'select',
			options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
			description: 'Object fit style'
		}
	}
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		alt: 'MacBook on desk',
		className: 'w-full h-64 rounded-lg'
	}
};

export const Responsive: Story = {
	args: {
		desktop:
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
		tablet: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		mobile: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
		alt: 'Responsive MacBook image',
		className: 'w-full h-64 rounded-lg'
	}
};
