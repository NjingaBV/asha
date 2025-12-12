import type { Meta, StoryObj } from '@storybook/sveltekit';
import MediaCaption from '$lib/components/molecules/MediaCaption.svelte';

const meta = {
	title: 'Molecules/MediaCaption',
	component: MediaCaption,
	tags: ['autodocs'],
	argTypes: {
		src: {
			control: 'text',
			description: 'Media source URL'
		},
		alt: {
			control: 'text',
			description: 'Alt text for image'
		},
		caption: {
			control: 'text',
			description: 'Caption text'
		},
		credit: {
			control: 'text',
			description: 'Credit/attribution text'
		},
		position: {
			control: { type: 'select' },
			options: ['below', 'overlay'],
			description: 'Caption position'
		},
		aspectRatio: {
			control: 'text',
			description: 'Aspect ratio (e.g., "16/9")'
		},
		fit: {
			control: { type: 'select' },
			options: ['cover', 'contain', 'fill'],
			description: 'Object fit'
		}
	}
} satisfies Meta<typeof MediaCaption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
		alt: 'Mountain landscape',
		caption: 'Beautiful mountain landscape at sunset',
		position: 'below',
		fit: 'cover'
	}
};

export const WithCredit: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
		alt: 'Nature scenery',
		caption: 'Award-winning nature photograph',
		credit: 'Photo by John Doe',
		position: 'below',
		fit: 'cover'
	}
};

export const OverlayCaption: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800',
		alt: 'Foggy mountains',
		caption: 'Misty morning in the mountains',
		credit: 'Landscape Photography Series',
		position: 'overlay',
		fit: 'cover'
	}
};

export const WithAspectRatio: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800',
		alt: 'Forest path',
		caption: 'A path through the forest',
		position: 'below',
		aspectRatio: '16/9',
		fit: 'cover'
	}
};

export const ContainFit: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800',
		alt: 'Landscape',
		caption: 'Image with contain fit',
		position: 'below',
		fit: 'contain',
		aspectRatio: '4/3'
	}
};

export const CaptionOnly: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
		alt: 'Waterfall',
		caption: 'Majestic waterfall in the wilderness',
		position: 'below',
		fit: 'cover'
	}
};
