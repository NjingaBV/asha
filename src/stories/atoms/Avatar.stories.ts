import type { Meta, StoryObj } from '@storybook/sveltekit';
import Avatar from '$lib/components/atoms/Avatar.svelte';

const meta = {
	title: 'Atoms/Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Avatar

A versatile avatar component for displaying user images, initials, or fallback icons.
Supports multiple sizes, shapes, and status indicators.

## Features

- **Multiple Sizes**: xs, sm, md, lg, xl, 2xl
- **Two Shapes**: circle (default) and square
- **Status Indicators**: online, offline, away, busy
- **Fallback Support**: Initials or custom fallback icon
- **Accessible**: Proper ARIA labels
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		src: {
			control: 'text',
			description: 'Image source URL'
		},
		alt: {
			control: 'text',
			description: 'Alt text for the image'
		},
		initials: {
			control: 'text',
			description: 'Initials to display when no image'
		},
		size: {
			control: { type: 'select' },
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
			description: 'Avatar size',
			table: { defaultValue: { summary: 'md' } }
		},
		shape: {
			control: { type: 'select' },
			options: ['circle', 'square'],
			description: 'Avatar shape',
			table: { defaultValue: { summary: 'circle' } }
		},
		status: {
			control: { type: 'select' },
			options: ['online', 'offline', 'away', 'busy', 'none'],
			description: 'Status indicator',
			table: { defaultValue: { summary: 'none' } }
		}
	}
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		shape: 'circle'
	}
};

export const WithImage: Story = {
	args: {
		src: 'https://i.pravatar.cc/150?img=1',
		alt: 'User avatar',
		size: 'md'
	}
};

export const WithInitials: Story = {
	args: {
		initials: 'AB',
		size: 'lg'
	}
};

export const Online: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		status: 'online'
	}
};

export const Offline: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		status: 'offline'
	}
};

export const Away: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		status: 'away'
	}
};

export const Busy: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		status: 'busy'
	}
};

export const Square: Story = {
	args: {
		initials: 'SQ',
		size: 'md',
		shape: 'square'
	}
};

export const ExtraSmall: Story = {
	args: {
		initials: 'XS',
		size: 'xs'
	}
};

export const Small: Story = {
	args: {
		initials: 'SM',
		size: 'sm'
	}
};

export const Medium: Story = {
	args: {
		initials: 'MD',
		size: 'md'
	}
};

export const Large: Story = {
	args: {
		initials: 'LG',
		size: 'lg'
	}
};

export const ExtraLarge: Story = {
	args: {
		initials: 'XL',
		size: 'xl'
	}
};

export const ExtraExtraLarge: Story = {
	args: {
		initials: '2X',
		size: '2xl'
	}
};

export const FallbackIcon: Story = {
	args: {
		size: 'lg'
	}
};
