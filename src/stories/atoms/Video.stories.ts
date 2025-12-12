import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Video from '$lib/components/atoms/Video.svelte';

const meta = {
	title: 'Atoms/Video',
	component: Video,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Video

A video element component with controls, loading states, and accessibility features.

## Features

- **Native Controls**: Built-in video player controls
- **Autoplay & Mute**: Support for autoplay with muted playback (for background videos)
- **Looping**: Repeat playback option
- **Poster Image**: Thumbnail image displayed before video plays
- **Object Fit**: Support for contain, cover, fill, none, scale-down
- **Loading States**: Visual feedback during video loading
- **Accessibility**: ARIA labels and semantic HTML
- **Event Handlers**: play, pause, ended, timeupdate, loadeddata, error callbacks
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		src: {
			control: 'text',
			description: 'Video source URL (required)'
		},
		poster: {
			control: 'text',
			description: 'Poster image URL shown before video plays'
		},
		fit: {
			control: { type: 'select' },
			options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
			description: 'Object fit behavior',
			table: { defaultValue: { summary: 'cover' } }
		},
		controls: {
			control: 'boolean',
			description: 'Show native video controls',
			table: { defaultValue: { summary: 'false' } }
		},
		autoplay: {
			control: 'boolean',
			description: 'Autoplay video (should be muted)',
			table: { defaultValue: { summary: 'false' } }
		},
		muted: {
			control: 'boolean',
			description: 'Mute audio',
			table: { defaultValue: { summary: 'false' } }
		},
		loop: {
			control: 'boolean',
			description: 'Loop playback',
			table: { defaultValue: { summary: 'false' } }
		},
		playsinline: {
			control: 'boolean',
			description: 'Play inline on mobile',
			table: { defaultValue: { summary: 'true' } }
		},
		preload: {
			control: { type: 'select' },
			options: ['none', 'metadata', 'auto'],
			description: 'Preload behavior',
			table: { defaultValue: { summary: 'metadata' } }
		},
		width: {
			control: 'text',
			description: 'Video width (CSS value or number)'
		},
		height: {
			control: 'text',
			description: 'Video height (CSS value or number)'
		},
		aspectRatio: {
			control: 'text',
			description: 'Aspect ratio (e.g., "16/9")'
		}
	}
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		controls: true
	}
};

export const WithPoster: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		poster: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
		controls: true
	}
};

export const Autoplay: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		autoplay: true,
		muted: true,
		loop: true
	}
};

export const Loop: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		controls: true,
		loop: true
	}
};

export const AspectRatio16x9: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		controls: true,
		aspectRatio: '16/9'
	}
};

export const AspectRatio4x3: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		controls: true,
		aspectRatio: '4/3'
	}
};

export const CustomDimensions: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		controls: true,
		width: 600,
		height: 400
	}
};

export const ContainFit: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		controls: true,
		fit: 'contain'
	}
};

export const CoverFit: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		controls: true,
		fit: 'cover'
	}
};

export const BackgroundVideo: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		autoplay: true,
		muted: true,
		loop: true,
		controls: false
	}
};

// ============================================
// Play Tests - Rendering & Accessibility
// ============================================

export const TestVideoRendering: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		controls: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const video = canvasElement.querySelector('video');
		expect(video).toBeInTheDocument();
		expect(video).toHaveAttribute('src');
	}
};

export const TestVideoSrc: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		controls: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const video = canvasElement.querySelector('video');
		expect(video).toHaveAttribute(
			'src',
			'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4'
		);
	}
};

export const TestVideoPoster: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		poster: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
		controls: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const video = canvasElement.querySelector('video');
		expect(video).toHaveAttribute('poster');
	}
};

export const TestVideoControls: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		controls: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const video = canvasElement.querySelector('video');
		expect(video).toHaveAttribute('controls');
	}
};

export const TestVideoAutoplay: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		autoplay: true,
		muted: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const video = canvasElement.querySelector('video');
		expect(video).toHaveAttribute('autoplay');
		expect(video).toHaveAttribute('muted');
	}
};

export const TestVideoMuted: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		muted: true,
		controls: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const video = canvasElement.querySelector('video');
		expect(video).toHaveAttribute('muted');
	}
};

export const TestVideoLoop: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		loop: true,
		controls: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const video = canvasElement.querySelector('video');
		expect(video).toHaveAttribute('loop');
	}
};

export const TestVideoObjectFit: Story = {
	args: {
		src: 'https://assets.mixkit.co/active_storage/videos/2794/2794-720.mp4',
		fit: 'contain',
		controls: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const video = canvasElement.querySelector('video');
		expect(video).toBeInTheDocument();
		expect(video).toHaveClass('object-contain');
	}
};
