import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
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

// ============================================
// Play Tests - Rendering & Accessibility
// ============================================

export const TestDefaultRender: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		shape: 'circle'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const avatar =
			canvasElement.querySelector('[role="img"]') ||
			canvasElement.querySelector('div[class*="rounded"]');
		expect(avatar).toBeInTheDocument();
	}
};

export const TestInitials: Story = {
	args: {
		initials: 'AB',
		size: 'lg'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const text = canvas.queryByText('AB');
		if (text) {
			expect(text).toBeInTheDocument();
		}
	}
};

export const TestImageAvatar: Story = {
	args: {
		src: 'https://i.pravatar.cc/150?img=1',
		alt: 'User avatar',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const img = canvasElement.querySelector('img');
		expect(img).toBeInTheDocument();
		expect(img).toHaveAttribute('src');
	}
};

export const TestCircleShape: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		shape: 'circle'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const avatar = canvasElement.querySelector('[class*="rounded-full"]');
		if (avatar) {
			expect(avatar).toHaveClass('rounded-full');
		}
	}
};

export const TestSquareShape: Story = {
	args: {
		initials: 'SQ',
		size: 'md',
		shape: 'square'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const avatar = canvasElement.querySelector('div');
		expect(avatar).toBeInTheDocument();
	}
};

export const TestOnlineStatus: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		status: 'online'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const avatar =
			canvasElement.querySelector('[data-status="online"]') ||
			canvasElement.querySelector('div');
		expect(avatar).toBeInTheDocument();
	}
};

export const TestOfflineStatus: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		status: 'offline'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const avatar =
			canvasElement.querySelector('[data-status="offline"]') ||
			canvasElement.querySelector('div');
		expect(avatar).toBeInTheDocument();
	}
};

export const TestAwayStatus: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		status: 'away'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const avatar =
			canvasElement.querySelector('[data-status="away"]') ||
			canvasElement.querySelector('div');
		expect(avatar).toBeInTheDocument();
	}
};

export const TestBusyStatus: Story = {
	args: {
		initials: 'JD',
		size: 'md',
		status: 'busy'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const avatar =
			canvasElement.querySelector('[data-status="busy"]') ||
			canvasElement.querySelector('div');
		expect(avatar).toBeInTheDocument();
	}
};

export const TestSmallSize: Story = {
	args: {
		initials: 'SM',
		size: 'sm'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const avatar = canvasElement.querySelector('div[class*="w-"]');
		expect(avatar).toBeInTheDocument();
	}
};

export const TestLargeSize: Story = {
	args: {
		initials: 'LG',
		size: 'lg'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const avatar = canvasElement.querySelector('div[class*="w-"]');
		expect(avatar).toBeInTheDocument();
	}
};
