import type { Meta, StoryObj } from '@storybook/sveltekit';
import Blob from '@/lib/components/atoms/Blob.svelte';

const meta = {
	title: 'Atoms/Blob',
	component: Blob,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# Blob

An animated, blurred background element that creates organic, flowing visual effects perfect for modern, dynamic interfaces.

## Key Features

- **Organic Shape**: Circular blob with animation for natural movement
- **Blur Effect**: Heavy blur creates soft, ambient background visuals
- **Blend Mode**: Mix-blend-multiply creates interesting color interactions
- **Responsive Sizing**: Scales from 48 to 72 (192px to 288px) based on screen size
- **Animated**: Built-in animation class for continuous motion
- **Customizable Color**: Any CSS color value for brand matching

## Use Cases

- **Hero Backgrounds**: Create dynamic, eye-catching hero section backgrounds
- **Decorative Elements**: Add visual interest to feature sections or cards
- **Brand Ambiance**: Reinforce brand colors through subtle background elements
- **Loading States**: Animated blobs can indicate activity or loading
- **Abstract Designs**: Modern, minimalist design aesthetic

## Best Practices

- **Layer Multiple Blobs**: Use several blobs with different colors for richer effects
- **Contrasting Colors**: Choose colors that blend well together when overlapped
- **Behind Content**: Blobs work best as background elements behind text/content
- **Performance**: Limit number of animated blobs on a single page (3-5 recommended)
- **Subtle Colors**: Pastels and muted colors work better than highly saturated ones
- **Position Carefully**: The position prop can help place blobs strategically

## Accessibility

- Purely decorative element with no semantic meaning
- Does not interfere with content readability when used appropriately
- Should not be the sole means of conveying information
- No interactive elements, so no accessibility concerns
- Ensure sufficient contrast between blob backgrounds and text content`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'color',
			description:
				'The blob color. Accepts any valid CSS color value. The blur and blend modes will affect final appearance. Consider using semi-transparent or muted colors for best results.'
		},
		position: {
			control: 'text',
			description:
				'CSS position value (though note there is a typo in the component - "postion"). Used for positioning the blob within its container.'
		}
	}
} satisfies Meta<typeof Blob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: '#6c00e2',
		position: ''
	}
};

export const PurpleBlob: Story = {
	args: {
		...Primary.args
	}
};
