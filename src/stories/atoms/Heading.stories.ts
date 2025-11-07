import type { Meta, StoryObj } from '@storybook/sveltekit';
import Heading from '@/lib/components/atoms/Heading.svelte';

const meta = {
	title: 'Atoms/Heading',
	component: Heading,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# Heading

A flexible heading component that renders semantic HTML heading elements (h1-h6) with comprehensive typographic controls.

## Key Features

- **Semantic HTML**: Renders appropriate h1-h6 elements for accessibility
- **Flexible Sizing**: 14 size options from xs to 9xl independent of heading level
- **Typography Controls**: Fine-tune weight, leading, tracking, and alignment
- **Color Customization**: Accepts any Tailwind color class
- **Snippet Support**: Can render Svelte snippets as children

## Use Cases

- **Hero Titles**: Use h1 with 6xl-9xl sizes for prominent page headings
- **Section Headers**: Use h2-h3 with 4xl-5xl for organizing content hierarchy
- **Subsections**: Use h4-h6 with 2xl-3xl for smaller content divisions
- **Custom Typography**: Mix and match level and size for perfect visual hierarchy while maintaining semantic structure

## Best Practices

- **Semantic Structure**: Always maintain proper heading hierarchy (h1 → h2 → h3, etc.) regardless of visual size
- **Visual vs. Semantic**: Use \`level\` for semantic meaning and \`size\` for visual appearance
- **Contrast**: Ensure sufficient color contrast (WCAG 4.5:1 for normal text, 3:1 for large text)
- **Responsive Design**: Consider using different sizes for different breakpoints
- **Line Length**: Use appropriate \`leading\` for multi-line headings (relaxed/loose for longer text)

## Accessibility

- Uses semantic HTML heading elements for proper document outline
- Screen readers announce the heading level automatically
- Proper heading hierarchy helps users navigate with assistive technology
- Color is not used as the sole means of conveying information`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		level: {
			control: { type: 'select' },
			options: [1, 2, 3, 4, 5, 6],
			description:
				'The semantic heading level (h1-h6). Choose based on document structure, not visual appearance. H1 should be used once per page for the main title.'
		},
		size: {
			control: { type: 'select' },
			options: [
				'xs',
				'sm',
				'base',
				'lg',
				'xl',
				'2xl',
				'3xl',
				'4xl',
				'5xl',
				'6xl',
				'7xl',
				'8xl',
				'9xl'
			],
			description:
				'Visual font size independent of heading level. Allows semantic h1 to appear smaller or h6 to appear larger. Default is "base" (16px).'
		},
		weight: {
			control: { type: 'select' },
			options: ['light', 'normal', 'medium', 'semibold', 'bold', 'black'],
			description:
				'Font weight from light (300) to black (900). Use bold/black for emphasis, medium/semibold for subtitles, and light/normal for longer headings. Default is "normal".'
		},
		color: {
			control: 'text',
			description:
				'Tailwind text color class (e.g., "text-blue-600", "text-slate-900"). Default is "text-slate-900". Ensure sufficient contrast with background.'
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center', 'right', 'justify'],
			description:
				'Text alignment. Use "center" for hero sections, "left" for body content (default), "right" sparingly, and "justify" rarely for headings.'
		},
		leading: {
			control: { type: 'select' },
			options: ['tight', 'snug', 'normal', 'relaxed', 'loose'],
			description:
				'Line height (leading). Use "tight" for large display text, "normal" for most headings, "relaxed/loose" for multi-line headings. Optional - defaults to browser default.'
		},
		tracking: {
			control: { type: 'select' },
			options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
			description:
				'Letter spacing. Use "wide/wider" for all-caps headings, "tight/tighter" for large display text, "normal" for most cases. Optional - defaults to normal.'
		},
		class: {
			control: 'text',
			description:
				'Additional CSS classes to apply. Use for custom styling or responsive modifiers.'
		},
		children: {
			control: 'text',
			description:
				'Heading content. Can be a string, number, or Svelte snippet for complex content.'
		}
	}
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// Level Stories (h1 to h6)
export const H1: Story = {
	args: {
		level: 1,
		size: '6xl',
		weight: 'bold',
		color: 'text-slate-900',
		align: 'left',
		children: 'Heading Level 1'
	},
	parameters: {
		docs: {
			description: {
				story: 'The primary page heading. Should appear once per page and represent the main topic. Commonly used for hero sections and page titles.'
			}
		}
	}
};

export const H2: Story = {
	args: {
		level: 2,
		size: '5xl',
		weight: 'bold',
		color: 'text-slate-900',
		children: 'Heading Level 2'
	},
	parameters: {
		docs: {
			description: {
				story: 'Major section headings. Use for dividing page content into distinct sections. Maintains visual hierarchy while allowing multiple h2s per page.'
			}
		}
	}
};

export const H3: Story = {
	args: {
		level: 3,
		size: '4xl',
		weight: 'semibold',
		color: 'text-slate-900',
		children: 'Heading Level 3'
	},
	parameters: {
		docs: {
			description: {
				story: 'Subsection headings within an h2 section. Ideal for organizing content into digestible chunks.'
			}
		}
	}
};

export const H4: Story = {
	args: {
		level: 4,
		size: '3xl',
		weight: 'semibold',
		color: 'text-slate-900',
		children: 'Heading Level 4'
	},
	parameters: {
		docs: {
			description: {
				story: 'Minor subsection headings. Use sparingly to avoid over-complicating document structure.'
			}
		}
	}
};

export const H5: Story = {
	args: {
		level: 5,
		size: '2xl',
		weight: 'medium',
		color: 'text-slate-900',
		children: 'Heading Level 5'
	},
	parameters: {
		docs: {
			description: {
				story: 'Lower-level headings for detailed content organization. Typically used in documentation or articles.'
			}
		}
	}
};

export const H6: Story = {
	args: {
		level: 6,
		size: 'xl',
		weight: 'medium',
		color: 'text-slate-900',
		children: 'Heading Level 6'
	},
	parameters: {
		docs: {
			description: {
				story: 'The lowest heading level. Use for fine-grained content divisions or as styled labels.'
			}
		}
	}
};

// Size Variations
export const ExtraSmall: Story = {
	args: {
		level: 1,
		size: 'xs',
		weight: 'normal',
		children: 'Extra Small Heading'
	}
};

export const Small: Story = {
	args: {
		level: 1,
		size: 'sm',
		weight: 'normal',
		children: 'Small Heading'
	}
};

export const Large: Story = {
	args: {
		level: 1,
		size: '8xl',
		weight: 'bold',
		children: 'Large Heading'
	}
};

export const XLarge: Story = {
	args: {
		level: 1,
		size: '9xl',
		weight: 'black',
		children: 'Extra Large Heading'
	}
};

// Weight Variations
export const Light: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'light',
		children: 'Light Weight'
	}
};

export const Normal: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'normal',
		children: 'Normal Weight'
	}
};

export const Medium: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'medium',
		children: 'Medium Weight'
	}
};

export const Semibold: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'semibold',
		children: 'Semibold Weight'
	}
};

export const Bold: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		children: 'Bold Weight'
	}
};

export const Black: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'black',
		children: 'Black Weight'
	}
};

// Alignment Variations
export const LeftAligned: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		align: 'left',
		children: 'Left Aligned Heading'
	}
};

export const Centered: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		align: 'center',
		children: 'Centered Heading'
	}
};

export const RightAligned: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		align: 'right',
		children: 'Right Aligned Heading'
	}
};

export const Justified: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		align: 'justify',
		children:
			'Justified heading text that spans multiple lines and aligns to both left and right edges'
	}
};

// Color Variations
export const PrimaryColor: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		color: 'text-blue-600',
		children: 'Primary Color'
	}
};

export const SecondaryColor: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		color: 'text-slate-500',
		children: 'Secondary Color'
	}
};

export const SuccessColor: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		color: 'text-green-600',
		children: 'Success Color'
	}
};

// Typography Properties
export const WithLeading: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		leading: 'relaxed',
		children: 'Heading with relaxed line height that provides more breathing room between text'
	}
};

export const WithTracking: Story = {
	args: {
		level: 1,
		size: '4xl',
		weight: 'bold',
		tracking: 'wide',
		children: 'Heading with Wide Letter Spacing'
	}
};

export const Combined: Story = {
	args: {
		level: 1,
		size: '5xl',
		weight: 'black',
		color: 'text-blue-600',
		align: 'center',
		leading: 'snug',
		tracking: 'wide',
		children: 'Apple Watch Series 11'
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates combining multiple typographic properties for a complete heading design. Shows how to achieve a polished, brand-specific appearance.'
			}
		}
	}
};
