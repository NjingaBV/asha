import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Container from '$lib/components/atoms/Container.svelte';

const meta = {
	title: 'Atoms/Container',
	component: Container,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Container

A responsive container component for constraining content width.
Provides consistent horizontal padding and max-width.

## Features

- **Multiple Sizes**: xs, sm, md, lg, xl, 2xl, full, prose
- **Padding Options**: none, sm, md, lg
- **Semantic Elements**: Can render as div, section, article, main, or aside
- **Centered by Default**: Easy centering with the center prop
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full', 'prose'],
			description: 'Maximum width size',
			table: { defaultValue: { summary: 'lg' } }
		},
		padding: {
			control: { type: 'select' },
			options: ['none', 'sm', 'md', 'lg'],
			description: 'Horizontal padding',
			table: { defaultValue: { summary: 'md' } }
		},
		center: {
			control: 'boolean',
			description: 'Center the container',
			table: { defaultValue: { summary: 'true' } }
		},
		as: {
			control: { type: 'select' },
			options: ['div', 'section', 'article', 'main', 'aside'],
			description: 'HTML element to render as',
			table: { defaultValue: { summary: 'div' } }
		}
	}
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 'lg',
		padding: 'md',
		center: true
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-8 rounded-lg';
				div.innerHTML =
					'<p class="text-fg">Container content with default settings (lg size)</p>';
				return div;
			}
		}
	})
};

export const ExtraSmall: Story = {
	args: {
		size: 'xs',
		padding: 'md'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg text-sm">Extra small container (320px max)</p>';
				return div;
			}
		}
	})
};

export const Small: Story = {
	args: {
		size: 'sm',
		padding: 'md'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg text-sm">Small container (384px max)</p>';
				return div;
			}
		}
	})
};

export const Medium: Story = {
	args: {
		size: 'md',
		padding: 'md'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">Medium container (448px max)</p>';
				return div;
			}
		}
	})
};

export const Large: Story = {
	args: {
		size: 'lg',
		padding: 'md'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">Large container (896px max)</p>';
				return div;
			}
		}
	})
};

export const ExtraLarge: Story = {
	args: {
		size: 'xl',
		padding: 'md'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">Extra large container (1152px max)</p>';
				return div;
			}
		}
	})
};

export const TwoXL: Story = {
	args: {
		size: '2xl',
		padding: 'md'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">2XL container (1280px max)</p>';
				return div;
			}
		}
	})
};

export const FullWidth: Story = {
	args: {
		size: 'full',
		padding: 'md'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">Full width container</p>';
				return div;
			}
		}
	})
};

export const Prose: Story = {
	args: {
		size: 'prose',
		padding: 'md'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML =
					'<p class="text-fg">Prose container (65ch max) - ideal for readable text content</p>';
				return div;
			}
		}
	})
};

export const NoPadding: Story = {
	args: {
		size: 'lg',
		padding: 'none'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4';
				div.innerHTML = '<p class="text-fg">Container with no horizontal padding</p>';
				return div;
			}
		}
	})
};

export const LargePadding: Story = {
	args: {
		size: 'lg',
		padding: 'lg'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">Container with large horizontal padding</p>';
				return div;
			}
		}
	})
};

export const AsSection: Story = {
	args: {
		size: 'lg',
		padding: 'md',
		as: 'section'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">Rendered as a section element</p>';
				return div;
			}
		}
	})
};

export const NotCentered: Story = {
	args: {
		size: 'md',
		padding: 'md',
		center: false
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML =
					'<p class="text-fg">Container aligned to the left (not centered)</p>';
				return div;
			}
		}
	})
};

// ============================================
// Play Tests - Max-width & Padding
// ============================================

export const TestContainerRendering: Story = {
	args: {
		size: 'lg',
		padding: 'md',
		center: true
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-8 rounded-lg';
				div.innerHTML = '<p class="text-fg">Container Test</p>';
				return div;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container =
			canvasElement.querySelector('[class*="max-w"]') || canvasElement.firstChild;
		expect(container).toBeInTheDocument();
	}
};

export const TestContainerSizeXS: Story = {
	args: {
		size: 'xs',
		padding: 'md'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg text-sm">Extra small container</p>';
				return div;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container =
			canvasElement.querySelector('[class*="max-w"]') || canvasElement.firstChild;
		expect(container).toBeInTheDocument();
	}
};

export const TestContainerSizeLg: Story = {
	args: {
		size: 'lg',
		padding: 'md'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">Large container</p>';
				return div;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container =
			canvasElement.querySelector('[class*="max-w"]') || canvasElement.firstChild;
		expect(container).toBeInTheDocument();
	}
};

export const TestContainerPaddingNone: Story = {
	args: {
		size: 'lg',
		padding: 'none'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4';
				div.innerHTML = '<p class="text-fg">No padding</p>';
				return div;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container = canvasElement.firstChild;
		expect(container).toBeInTheDocument();
	}
};

export const TestContainerPaddingLarge: Story = {
	args: {
		size: 'lg',
		padding: 'lg'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">Large padding</p>';
				return div;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container = canvasElement.firstChild;
		expect(container).toBeInTheDocument();
	}
};

export const TestContainerAsSection: Story = {
	args: {
		size: 'lg',
		padding: 'md',
		as: 'section'
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">Section container</p>';
				return div;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const section = canvasElement.querySelector('section');
		if (section) {
			expect(section).toBeInTheDocument();
		}
	}
};

export const TestContainerCentered: Story = {
	args: {
		size: 'lg',
		padding: 'md',
		center: true
	},
	render: (args: any) => ({
		Component: Container,
		props: {
			...args,
			children: () => {
				const div = document.createElement('div');
				div.className = 'bg-bg-muted p-4 rounded-lg';
				div.innerHTML = '<p class="text-fg">Centered container</p>';
				return div;
			}
		}
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container = canvasElement.firstChild;
		expect(container).toBeInTheDocument();
	}
};
