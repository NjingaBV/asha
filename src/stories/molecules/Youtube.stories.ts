import type { Meta, StoryObj } from '@storybook/sveltekit';
import Youtube from '$lib/components/molecules/Youtube.svelte';

const meta = {
	title: 'Molecules/Youtube',
	component: Youtube,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Lecteur YouTube (Youtube Player)

Un composant de lecteur vidéo YouTube complet et réactif, avec une intégration API complète et une gestion du cycle de vie.

## Caractéristiques Clés

- **Intégration de l'API YouTube**: Charge et initialise automatiquement l'API IFrame de YouTube.
- **Design Réactif**: Maintient le rapport d'aspect (16:9 ou 4:3) sur toutes les tailles d'écran.
- **Callbacks d'Événements**: Gestionnaires d'événements pour \`ready\`, \`play\`, \`pause\`, \`end\`, et \`error\`.
- **Contrôles du Lecteur**: Options configurables pour l'autoplay, les contrôles, le plein écran, etc.
- **Gestion du Cycle de Vie**: Nettoyage approprié lors du démontage du composant.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		videoId: {
			control: 'text',
			description:
				'YouTube video ID (found in URL after v= parameter). Required. Example: "G-ECTntZYtk" from youtube.com/watch?v=G-ECTntZYtk'
		},
		autoplay: {
			control: 'boolean',
			description:
				'Automatically start playing video on load. Note: Most browsers block autoplay with sound; consider muting for autoplay. Default is false.'
		},
		controls: {
			control: 'boolean',
			description:
				'Show YouTube player controls (play, pause, volume, etc.). Hiding controls is useful for background videos. Default is true.'
		},
		allowFullscreen: {
			control: 'boolean',
			description:
				'Allow users to view video in fullscreen mode. Recommended to keep enabled for better user experience. Default is true.'
		},
		modestbranding: {
			control: 'boolean',
			description:
				'Minimize YouTube branding in player. When true, reduces (but does not fully remove) YouTube logo. Default is false.'
		},
		playsinline: {
			control: 'boolean',
			description:
				'Play video inline on iOS devices instead of fullscreen. Essential for embedded videos on mobile. Default is true.'
		},
		showRelated: {
			control: 'boolean',
			description:
				'Show related videos when video ends. Set to false to prevent users from leaving your content. Default is false.'
		},
		aspectRatio: {
			control: { type: 'select' },
			options: ['16/9', '4/3'],
			description:
				'Video aspect ratio. "16/9" for widescreen (modern standard), "4/3" for traditional format. Default is "16/9".'
		},
		width: {
			control: { type: 'number' },
			description:
				'Player width in pixels. Optional - defaults to 100% of container. Use with height for fixed dimensions.'
		},
		height: {
			control: { type: 'number' },
			description:
				'Player height in pixels. Optional - defaults to 100% of container. Use with width for fixed dimensions.'
		},
		playerVars: {
			description:
				'Custom YouTube player parameters object. Advanced: allows overriding any YouTube IFrame API parameter. See YouTube API docs for all options.'
		},
		onReady: {
			description:
				'Callback invoked when player is loaded and ready. Use to implement play on ready or other initialization logic.'
		},
		onPlay: {
			description:
				'Callback invoked when video starts playing. Useful for analytics or UI state management.'
		},
		onPause: {
			description:
				'Callback invoked when video is paused. Can be used for tracking engagement or showing overlays.'
		},
		onEnd: {
			description:
				'Callback invoked when video finishes playing. Perfect for showing next video or call-to-action.'
		},
		onError: {
			description:
				'Callback invoked on player errors, receives error code number. Use for error handling and user notifications.'
		},
		class: {
			control: 'text',
			description:
				'Additional CSS classes for the player container. Use for custom positioning or styling.'
		}
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
