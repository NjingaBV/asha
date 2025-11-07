import type { Meta, StoryObj } from '@storybook/sveltekit';
import Player from '@/lib/components/molecules/Player.svelte';

const meta = {
	title: 'Molecules/Player',
	component: Player,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		videoId: { control: 'text' },
		title: { control: 'text' },
		subtitle: { control: 'text' },
		overview: { control: 'text' },
		thumbnail: { control: 'text' },
		overviewLines: { control: { type: 'number', min: 1, max: 10 } },
		showPlayButton: { control: 'boolean' },
		autoplay: { control: 'boolean' }
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
	}
};

export const WithYoutubeUrl: Story = {
	args: {
		...Default.args,
		videoId: 'https://www.youtube.com/watch?v=G-ECTntZYtk'
	}
};

export const WithShortUrl: Story = {
	args: {
		...Default.args,
		videoId: 'https://youtu.be/G-ECTntZYtk'
	}
};

// Variations
export const WithoutThumbnail: Story = {
	args: {
		...Default.args,
		thumbnail: undefined
	}
};

export const WithoutPlayButton: Story = {
	args: {
		...Default.args,
		showPlayButton: false
	}
};

export const WithAutoplay: Story = {
	args: {
		...Default.args,
		autoplay: true
	}
};

export const ExpandedOverview: Story = {
	args: {
		...Default.args,
		overviewLines: 10
	}
};

export const MinimalOverview: Story = {
	args: {
		...Default.args,
		overviewLines: 2
	}
};

// Metadata Variations
export const TitleOnly: Story = {
	args: {
		...Default.args,
		subtitle: undefined,
		overview: undefined
	}
};

export const WithSubtitleAndTitle: Story = {
	args: {
		...Default.args,
		overview: undefined
	}
};

export const FullMetadata: Story = {
	args: {
		...Default.args
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
	}
};

// With Callbacks
export const WithCallbacks: Story = {
	args: {
		...Default.args,
		onPlay: () => console.log('Video playing'),
		onToggleExpand: (expanded: boolean) => console.log('Overview expanded:', expanded),
		onPlayerReady: () => console.log('Player ready')
	}
};
