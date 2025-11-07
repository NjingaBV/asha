import type { Meta, StoryObj } from '@storybook/sveltekit';
import Youtube from '@/lib/components/atoms/Youtube.svelte';

const meta = {
	title: 'Atoms/Youtube',
	component: Youtube,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		videoId: { control: 'text' },
		autoplay: { control: 'boolean' },
		controls: { control: 'boolean' },
		allowFullscreen: { control: 'boolean' },
		modestbranding: { control: 'boolean' },
		playsinline: { control: 'boolean' },
		showRelated: { control: 'boolean' },
		aspectRatio: {
			control: { type: 'select' },
			options: ['16/9', '4/3']
		},
		width: { control: { type: 'number' } },
		height: { control: { type: 'number' } }
	}
} satisfies Meta<typeof Youtube>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
	args: {
		videoId: 'G-ECTntZYtk',
		autoplay: false,
		controls: true,
		allowFullscreen: true
	}
};

export const AutoPlay: Story = {
	args: {
		...Default.args,
		autoplay: true
	}
};

export const WithoutControls: Story = {
	args: {
		...Default.args,
		controls: false
	}
};

// Aspect Ratio Variants
export const AspectRatio16_9: Story = {
	args: {
		...Default.args,
		aspectRatio: '16/9'
	}
};

export const AspectRatio4_3: Story = {
	args: {
		...Default.args,
		aspectRatio: '4/3'
	}
};

// Branding & UI Options
export const ModestBranding: Story = {
	args: {
		...Default.args,
		modestbranding: true
	}
};

export const NoRelatedVideos: Story = {
	args: {
		...Default.args,
		showRelated: false
	}
};

export const WithRelatedVideos: Story = {
	args: {
		...Default.args,
		showRelated: true
	}
};

// Different Video Examples
export const AlternativeVideo1: Story = {
	args: {
		...Default.args,
		videoId: 'dQw4w9WgXcQ'
	}
};

export const AlternativeVideo2: Story = {
	args: {
		...Default.args,
		videoId: '9bZkp7q19f0'
	}
};

// Combined Options
export const MinimalPlayer: Story = {
	args: {
		...Default.args,
		controls: true,
		modestbranding: true,
		showRelated: false,
		allowFullscreen: false
	}
};

export const FullFeaturedPlayer: Story = {
	args: {
		...Default.args,
		controls: true,
		modestbranding: false,
		showRelated: true,
		allowFullscreen: true,
		playsinline: true
	}
};

export const MobileOptimized: Story = {
	args: {
		...Default.args,
		playsinline: true,
		controls: true,
		modestbranding: true
	}
};

// Event Callbacks
export const WithCallbacks: Story = {
	args: {
		...Default.args,
		onReady: () => console.log('Video player ready'),
		onPlay: () => console.log('Video playing'),
		onPause: () => console.log('Video paused'),
		onEnd: () => console.log('Video ended'),
		onError: (error: number) => console.error('Player error:', error)
	}
};
