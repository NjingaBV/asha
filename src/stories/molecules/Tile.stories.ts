import type { Meta, StoryObj } from '@storybook/sveltekit';
import Tile from '@/lib/components/molecules/Tile.svelte';

const meta = {
	title: 'Molecules/Tile',
	component: Tile,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# Tile

A minimalist image tile molecule for displaying single or multiple images in an elegant, hover-responsive grid layout. Perfect for galleries, portfolios, and visual showcases.

## Key Features

- **Multi-image Support**: Display array of images in tile format
- **Hover Effects**: Smooth transitions on interaction
- **Responsive Layouts**: Adapts to grid systems
- **Clean Aesthetic**: Minimal styling for image focus
- **Lazy Loading**: Performance-optimized image loading
- **Aspect Ratio**: Maintains consistent proportions

## Use Cases

- **Image Galleries**: Photo collections and portfolios
- **Portfolio Showcases**: Creative work displays
- **Brand Assets**: Logo or asset galleries
- **Before/After**: Comparison image sets
- **Product Galleries**: Multiple product views
- **Content Previews**: Visual content teasers

## Best Practices

- Use high-quality images (1000px+ wide)
- Ensure consistent aspect ratios across images in array
- Limit to 2-4 images per tile for optimal display
- Consider image file sizes for performance
- Use descriptive alt text for images

## Accessibility Notes

- Images include proper alt text
- Semantic HTML structure
- Keyboard navigation supported
- Focus states on interactive elements

## Composition

- **Image elements**: Core display functionality
- **Grid/flex layouts**: Responsive positioning
- **Hover effects**: CSS transitions

## Responsive Behavior

- Images scale proportionally
- Grid adapts to viewport size
- Spacing adjusts for different screens
- Maintains aspect ratios across breakpoints

## Differences from Atoms

Unlike simple Image atoms, Tile provides specialized layout handling for image arrays, grid positioning, and cohesive multi-image presentation with unified styling.`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		images: {
			control: 'object',
			description:
				'Array of image URLs to display in the tile. Images are arranged in a responsive grid. Recommend 2-4 images for optimal layout. All images should have similar aspect ratios.'
		}
	}
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		images: [
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format'
		]
	}
};

export const HomeTile: Story = {
	args: {
		...Primary.args
	}
};

export const ShowTile: Story = {
	args: {
		...Primary.args
	}
};
