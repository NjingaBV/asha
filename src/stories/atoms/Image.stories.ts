import type { Meta, StoryObj } from '@storybook/sveltekit';
import Image from '@/lib/components/atoms/Image.svelte';

const meta = {
	title: 'Atoms/Image',
	component: Image,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Image Component

A responsive image component with support for multiple sources, object-fit options, and lazy loading.

## Features

- **Responsive Images**: Support for desktop, tablet, and mobile breakpoints
- **Picture Element**: Uses \`<picture>\` for optimal responsive design
- **Object Fit Options**: cover, contain, fill, none, scale-down
- **Lazy Loading**: Built-in lazy loading support with eager fallback
- **Accessibility**: Required \`alt\` text for screen readers
- **Flexible Sizing**: Support for width and height attributes
- **CSS Styling**: Tailwind classes for additional customization

## Breakpoints

- **Mobile**: max-width 767px
- **Tablet**: min-width 768px and max-width 1023px
- **Desktop**: min-width 1024px

## Use Cases

- Product showcases
- Hero images
- Gallery components
- Feature images
- Responsive backgrounds
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		src: {
			control: 'text',
			description: 'Single image source URL (fallback for responsive)'
		},
		desktop: {
			control: 'text',
			description: 'Desktop image source (min-width: 1024px)'
		},
		tablet: {
			control: 'text',
			description: 'Tablet image source (768px - 1023px)'
		},
		mobile: {
			control: 'text',
			description: 'Mobile image source (max-width: 767px)'
		},
		alt: {
			control: 'text',
			description: 'Alt text for accessibility (required)'
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes (e.g., "w-full h-64 rounded-lg")'
		},
		objectFit: {
			control: 'select',
			options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
			description:
				'Object fit style: "cover" (fill container, may crop), "contain" (fit entire image), "fill" (stretch), "none" (original), "scale-down" (smaller fit). Default is "cover".'
		},
		loading: {
			control: 'select',
			options: ['lazy', 'eager'],
			description:
				'Loading strategy: "lazy" (load when in viewport), "eager" (load immediately). Default is "lazy".'
		},
		width: {
			control: 'text',
			description: 'Image width (e.g., "400", "100%")'
		},
		height: {
			control: 'text',
			description: 'Image height (e.g., "300", "auto")'
		}
	}
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		alt: 'MacBook on desk',
		className: 'w-full h-64 rounded-lg',
		objectFit: 'cover'
	},
	render: ({ src, alt, className, objectFit, loading, width, height }: any) => ({
		Component: Image,
		props: { src, alt, className, objectFit, loading, width, height }
	})
};

export const Responsive: Story = {
	args: {
		desktop:
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
		tablet: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		mobile: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
		alt: 'Responsive MacBook image',
		className: 'w-full h-64 rounded-lg',
		objectFit: 'cover'
	},
	render: ({
		desktop,
		tablet,
		mobile,
		alt,
		className,
		objectFit,
		loading,
		width,
		height
	}: any) => ({
		Component: Image,
		props: { desktop, tablet, mobile, alt, className, objectFit, loading, width, height }
	})
};

export const Cover: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		alt: 'Cover image',
		className: 'w-full h-64 rounded-lg',
		objectFit: 'cover'
	},
	render: ({ src, alt, className, objectFit, loading, width, height }: any) => ({
		Component: Image,
		props: { src, alt, className, objectFit, loading, width, height }
	})
};

export const Contain: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		alt: 'Contained image',
		className: 'w-full h-64 rounded-lg bg-gray-100',
		objectFit: 'contain'
	},
	render: ({ src, alt, className, objectFit, loading, width, height }: any) => ({
		Component: Image,
		props: { src, alt, className, objectFit, loading, width, height }
	})
};

export const Fill: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		alt: 'Filled image',
		className: 'w-full h-64 rounded-lg',
		objectFit: 'fill'
	},
	render: ({ src, alt, className, objectFit, loading, width, height }: any) => ({
		Component: Image,
		props: { src, alt, className, objectFit, loading, width, height }
	})
};

export const ScaleDown: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		alt: 'Scale down image',
		className: 'w-full h-64 rounded-lg bg-gray-50',
		objectFit: 'scale-down'
	},
	render: ({ src, alt, className, objectFit, loading, width, height }: any) => ({
		Component: Image,
		props: { src, alt, className, objectFit, loading, width, height }
	})
};

export const LazyLoading: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		alt: 'Lazy loaded image',
		className: 'w-full h-64 rounded-lg',
		objectFit: 'cover',
		loading: 'lazy'
	},
	render: ({ src, alt, className, objectFit, loading, width, height }: any) => ({
		Component: Image,
		props: { src, alt, className, objectFit, loading, width, height }
	})
};

export const EagerLoading: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		alt: 'Eagerly loaded image',
		className: 'w-full h-64 rounded-lg',
		objectFit: 'cover',
		loading: 'eager'
	},
	render: ({ src, alt, className, objectFit, loading, width, height }: any) => ({
		Component: Image,
		props: { src, alt, className, objectFit, loading, width, height }
	})
};

export const WithDimensions: Story = {
	args: {
		src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
		alt: 'Image with dimensions',
		className: 'rounded-lg',
		objectFit: 'cover',
		width: 400,
		height: 300
	},
	render: ({ src, alt, className, objectFit, loading, width, height }: any) => ({
		Component: Image,
		props: { src, alt, className, objectFit, loading, width, height }
	})
};
