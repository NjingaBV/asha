import type { Meta, StoryObj } from '@storybook/sveltekit';
import Player from '@/lib/components/molecules/Player.svelte';

const meta = {
	title: 'Molecules/Player',
	component: Player,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# Player

A comprehensive video player molecule that combines a YouTube embed with rich metadata display, including title, subtitle, overview, and thumbnail preview.

## Key Features

- **Flexible Video ID Input**: Accepts YouTube video IDs or full YouTube URLs (youtube.com, youtu.be)
- **Thumbnail Preview**: Shows custom thumbnail with play button overlay before video loads
- **Rich Metadata**: Displays title, subtitle, and expandable overview text
- **Smart Text Truncation**: Automatically truncates long descriptions with "Show more/less" toggle
- **Autoplay Support**: Optional autoplay functionality when play button is clicked
- **Event Callbacks**: Provides hooks for play, expand/collapse, and player ready events

## Use Cases

- **Video Libraries**: Display featured or catalog videos with context
- **Tutorial Sections**: Present educational content with detailed descriptions
- **Marketing Pages**: Showcase product demos or promotional videos
- **Content Galleries**: Build video collections with metadata
- **Episode Players**: Display serialized content (e.g., "Episode 1", "Episode 2")

## Best Practices

- Always provide a thumbnail for better user experience and faster perceived loading
- Keep titles concise (under 60 characters) for better readability
- Use subtitles for episode numbers, categories, or artist names
- Set appropriate \`overviewLines\` based on your layout (3-5 for most cases)
- Consider disabling autoplay for better accessibility and user control
- Provide meaningful callbacks to track user engagement

## Accessibility Notes

- Play button includes proper \`aria-label\` for screen readers
- Expand/collapse button uses \`aria-expanded\` to indicate state
- Thumbnail images include descriptive alt text
- Keyboard navigation fully supported for all interactive elements
- Respects user's reduced motion preferences

## Composition

This molecule is composed of:
- **Youtube atom**: Handles the embedded video player functionality
- **Native HTML elements**: Button, image, and text elements for metadata display

## Responsive Behavior

- Video maintains 16:9 aspect ratio across all screen sizes
- Title text scales from 3xl to 4xl on medium+ screens
- Metadata section uses responsive padding
- Play button scales proportionally to container width (25% of video width)

## Differences from Atoms

Unlike the simple Youtube atom which only embeds a player, this molecule provides:
- Complete video presentation with metadata
- Thumbnail preview state management
- Text truncation and expansion logic
- Integrated play/pause state handling
- Rich semantic structure for better SEO`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		videoId: {
			control: 'text',
			description:
				'YouTube video ID (11 characters) or full YouTube URL. Supports standard (youtube.com/watch?v=) and short (youtu.be/) formats. Required for video playback.'
		},
		title: {
			control: 'text',
			description:
				'Main title displayed below the video. Typically the video name or content title. Supports large, bold typography for emphasis.'
		},
		subtitle: {
			control: 'text',
			description:
				'Secondary heading displayed above the title. Useful for episode numbers, categories, artist names, or series information. Rendered in smaller, muted text.'
		},
		overview: {
			control: 'text',
			description:
				'Detailed description or synopsis of the video content. Automatically truncates based on overviewLines prop with expandable "Show more/less" toggle for long text.'
		},
		thumbnail: {
			control: 'text',
			description:
				'URL to thumbnail image displayed before video plays. Shows play button overlay when provided. Image should be 16:9 aspect ratio for best results. Falls back to direct video embed if not provided.'
		},
		overviewLines: {
			control: { type: 'number', min: 1, max: 10 },
			description:
				'Maximum number of lines to display for overview text before truncating. Uses CSS line-clamp. Automatically shows expand/collapse button when text exceeds this limit. Default is 5 lines.'
		},
		showPlayButton: {
			control: 'boolean',
			description:
				'Controls visibility of the play button overlay on the thumbnail. Set to false for auto-loading videos or custom play triggers. Default is true.'
		},
		autoplay: {
			control: 'boolean',
			description:
				'If true, video begins playing automatically when play button is clicked. Note: Browser autoplay policies may prevent autoplay without user interaction. Default is false.'
		},
		onPlay: {
			description:
				'Callback function triggered when the play button is clicked. Useful for analytics tracking or coordinating other UI updates. Receives no arguments.'
		},
		onToggleExpand: {
			description:
				'Callback function triggered when overview text is expanded or collapsed. Receives a boolean indicating the new expanded state (true = expanded, false = collapsed).'
		},
		onPlayerReady: {
			description:
				'Callback function triggered when the YouTube player API is ready and the video can be controlled. Useful for initializing custom controls or analytics.'
		},
		class: {
			control: 'text',
			description:
				'Additional CSS classes to apply to the root container. Use for custom spacing, sizing, or styling adjustments.'
		}
	}
} satisfies Meta<typeof Player>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
	args: {
		videoId: 'G-ECTntZYtk',
		title: 'Olivia Mabounga',
		subtitle: 'Episode 1',
		overview:
			"Olivia Mabounga, française d'origine Algérienne et Congolaise, a écrit et mise en scène Tchoko, un spectacle qui parle du phénomène de l'éclaircissement de la peau chez les femmes noires interprété par Benedicte Mbemba au Théâtre du Lavoir Moderne Parisien sur fond de texte rap, danse chant et pop culture.",
		thumbnail:
			'https://images.prismic.io/djfacemakerv2/0b122bd5-0cf8-427c-a2dd-64d59a2930bb_Olivia+Mabounga.png?auto=compress,format'
	},
	parameters: {
		docs: {
			description: {
				story: 'Standard player configuration with all metadata fields populated. Shows thumbnail preview with play button, title, subtitle, and truncated overview text.'
			}
		}
	}
};

export const WithYoutubeUrl: Story = {
	args: {
		...Default.args,
		videoId: 'https://www.youtube.com/watch?v=G-ECTntZYtk'
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates support for full YouTube watch URLs. The component automatically extracts the video ID from the URL.'
			}
		}
	}
};

export const WithShortUrl: Story = {
	args: {
		...Default.args,
		videoId: 'https://youtu.be/G-ECTntZYtk'
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates support for shortened YouTube URLs (youtu.be format). Useful for social media sharing links.'
			}
		}
	}
};

// Variations
export const WithoutThumbnail: Story = {
	args: {
		...Default.args,
		thumbnail: undefined
	},
	parameters: {
		docs: {
			description: {
				story: 'Player without thumbnail image loads the YouTube embed directly. Useful when you want immediate video access without preview state.'
			}
		}
	}
};

export const WithoutPlayButton: Story = {
	args: {
		...Default.args,
		showPlayButton: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Hides the play button overlay while still showing the thumbnail. Useful for custom play triggers or purely informational displays.'
			}
		}
	}
};

export const WithAutoplay: Story = {
	args: {
		...Default.args,
		autoplay: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Enables autoplay when the play button is clicked. Note: Browser autoplay policies may require user interaction first.'
			}
		}
	}
};

export const ExpandedOverview: Story = {
	args: {
		...Default.args,
		overviewLines: 10
	},
	parameters: {
		docs: {
			description: {
				story: 'Shows more lines of overview text before truncating (10 lines). Good for detailed content descriptions on pages with ample space.'
			}
		}
	}
};

export const MinimalOverview: Story = {
	args: {
		...Default.args,
		overviewLines: 2
	},
	parameters: {
		docs: {
			description: {
				story: 'Displays minimal overview text (2 lines) before truncating. Ideal for compact layouts or video grids where space is limited.'
			}
		}
	}
};

// Metadata Variations
export const TitleOnly: Story = {
	args: {
		...Default.args,
		subtitle: undefined,
		overview: undefined
	},
	parameters: {
		docs: {
			description: {
				story: 'Minimal metadata with only the title. Title is centered when no subtitle is present. Best for simple video presentations.'
			}
		}
	}
};

export const WithSubtitleAndTitle: Story = {
	args: {
		...Default.args,
		overview: undefined
	},
	parameters: {
		docs: {
			description: {
				story: 'Shows title and subtitle without overview text. Title is left-aligned when subtitle is present. Good for video grids or minimal layouts.'
			}
		}
	}
};

export const FullMetadata: Story = {
	args: {
		...Default.args
	},
	parameters: {
		docs: {
			description: {
				story: 'Complete metadata display with all fields populated: title, subtitle, and overview. Provides maximum context for viewers.'
			}
		}
	}
};

// Real Content Examples
export const MusicVideo: Story = {
	args: {
		videoId: 'dQw4w9WgXcQ',
		title: 'Never Gonna Give You Up',
		subtitle: 'Rick Astley',
		overview:
			'The official music video for Never Gonna Give You Up by Rick Astley. This is one of the most iconic music videos of all time.',
		thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
		overviewLines: 3
	},
	parameters: {
		docs: {
			description: {
				story: 'Example of a music video presentation. Uses artist name as subtitle and brief description. Shows compact overview with 3 lines.'
			}
		}
	}
};

export const TutorialVideo: Story = {
	args: {
		videoId: 'dQw4w9WgXcQ',
		title: 'Getting Started with Web Development',
		subtitle: 'Tutorial Series - Episode 1',
		overview:
			'In this comprehensive tutorial, we cover the fundamentals of web development including HTML, CSS, and JavaScript. You will learn about DOM manipulation, event handling, and building interactive user interfaces. This series is perfect for beginners who want to start their journey in web development.',
		thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
		overviewLines: 5,
		showPlayButton: true,
		autoplay: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Tutorial/educational content example with detailed description. Shows series information in subtitle and longer overview text suitable for learning content.'
			}
		}
	}
};

export const MovieTrailer: Story = {
	args: {
		videoId: '9bZkp7q19f0',
		title: 'Inception - Official Trailer',
		subtitle: 'Christopher Nolan',
		overview:
			'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered impossible: "Inception", the implantation of another person\'s idea into a target\'s subconscious.',
		thumbnail: 'https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg',
		overviewLines: 4
	},
	parameters: {
		docs: {
			description: {
				story: 'Movie trailer example with director name as subtitle and plot synopsis. Demonstrates professional media presentation format.'
			}
		}
	}
};

// With Callbacks
export const WithCallbacks: Story = {
	args: {
		...Default.args,
		onPlay: () => console.log('Video playing'),
		onToggleExpand: (expanded: boolean) => console.log('Overview expanded:', expanded),
		onPlayerReady: () => console.log('Player ready')
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates event callbacks for tracking user interactions. Check the browser console to see logged events when interacting with the player.'
			}
		}
	}
};
