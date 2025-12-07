import type { Meta, StoryObj } from '@storybook/sveltekit';
import Tabs from '@/lib/components/molecules/Tabs.svelte';

/**
 * # Tabs
 *
 * A tabbed interface component with keyboard navigation and ARIA support.
 * Uses XState for state management and follows WAI-ARIA tabs pattern.
 *
 * ## Features
 *
 * - **3 Variants**: `underline`, `pills`, `enclosed`
 * - **3 Sizes**: `sm`, `md`, `lg`
 * - **Keyboard Navigation**: Arrow keys, Home, End
 * - **Disabled Tabs**: Individual tabs can be disabled
 * - **Vertical Orientation**: Supports vertical tab layout
 *
 * ## Accessibility
 *
 * - `role="tablist"`, `role="tab"`, `role="tabpanel"`
 * - `aria-selected` for active tab
 * - `aria-controls` linking tabs to panels
 * - Arrow key navigation between tabs
 * - Home/End for first/last tab
 *
 * ## Usage
 *
 * ```svelte
 * <Tabs
 *   tabs={[
 *     { id: 'tab1', label: 'Overview' },
 *     { id: 'tab2', label: 'Features' }
 *   ]}
 * >
 *   {#snippet panel(tab)}
 *     {#if tab.id === 'tab1'}
 *       <p>Overview content</p>
 *     {:else}
 *       <p>Features content</p>
 *     {/if}
 *   {/snippet}
 * </Tabs>
 * ```
 */
const meta = {
	title: 'Molecules/Tabs',
	component: Tabs,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component:
					'A tabbed interface component with keyboard navigation and full ARIA support.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		tabs: {
			description: 'List of tabs with id, label, and optional disabled flag'
		},
		defaultActiveId: {
			control: 'text',
			description: 'Initially selected tab ID'
		},
		variant: {
			control: { type: 'select' },
			options: ['underline', 'pills', 'enclosed'],
			description: 'Visual variant',
			table: { defaultValue: { summary: 'underline' } }
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Tab size',
			table: { defaultValue: { summary: 'md' } }
		},
		orientation: {
			control: { type: 'select' },
			options: ['horizontal', 'vertical'],
			description: 'Tab orientation',
			table: { defaultValue: { summary: 'horizontal' } }
		},
		fullWidth: {
			control: 'boolean',
			description: 'Full width tabs',
			table: { defaultValue: { summary: 'false' } }
		}
	}
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample tabs for stories
const sampleTabs = [
	{ id: 'overview', label: 'Overview' },
	{ id: 'features', label: 'Features' },
	{ id: 'pricing', label: 'Pricing' }
];

const tabsWithDisabled = [
	{ id: 'active', label: 'Active' },
	{ id: 'disabled', label: 'Coming Soon', disabled: true },
	{ id: 'another', label: 'Another Tab' }
];

// ============================================
// Basic Stories
// ============================================

export const Default: Story = {
	args: {
		tabs: sampleTabs
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) => `Content for ${tab.label} tab.`
		}
	})
};

// ============================================
// Variant Stories
// ============================================

export const Underline: Story = {
	args: {
		tabs: sampleTabs,
		variant: 'underline'
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) =>
				`${tab.label} content with underline variant.`
		}
	})
};

export const Pills: Story = {
	args: {
		tabs: sampleTabs,
		variant: 'pills'
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) =>
				`${tab.label} content with pills variant.`
		}
	})
};

export const Enclosed: Story = {
	args: {
		tabs: sampleTabs,
		variant: 'enclosed'
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) =>
				`${tab.label} content with enclosed variant.`
		}
	})
};

// ============================================
// Size Stories
// ============================================

export const Small: Story = {
	args: {
		tabs: sampleTabs,
		size: 'sm'
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) => `${tab.label} with small tabs.`
		}
	})
};

export const Medium: Story = {
	args: {
		tabs: sampleTabs,
		size: 'md'
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) => `${tab.label} with medium tabs.`
		}
	})
};

export const Large: Story = {
	args: {
		tabs: sampleTabs,
		size: 'lg'
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) => `${tab.label} with large tabs.`
		}
	})
};

// ============================================
// Orientation Stories
// ============================================

export const Vertical: Story = {
	args: {
		tabs: sampleTabs,
		orientation: 'vertical',
		variant: 'pills'
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) => `Vertical layout: ${tab.label} content.`
		}
	})
};

// ============================================
// Behavior Stories
// ============================================

export const WithDisabledTab: Story = {
	args: {
		tabs: tabsWithDisabled
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) =>
				`Content for ${tab.label}. The "Coming Soon" tab is disabled.`
		}
	})
};

export const FullWidth: Story = {
	args: {
		tabs: sampleTabs,
		fullWidth: true
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) => `${tab.label} with full-width tabs.`
		}
	})
};

export const DefaultActive: Story = {
	args: {
		tabs: sampleTabs,
		defaultActiveId: 'pricing'
	},
	parameters: {
		docs: {
			description: {
				story: 'Tabs with a specific default active tab set via `defaultActiveId`.'
			}
		}
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) => `${tab.label} is initially selected.`
		}
	})
};

// ============================================
// Many Tabs
// ============================================

export const ManyTabs: Story = {
	args: {
		tabs: [
			{ id: 'tab1', label: 'Tab 1' },
			{ id: 'tab2', label: 'Tab 2' },
			{ id: 'tab3', label: 'Tab 3' },
			{ id: 'tab4', label: 'Tab 4' },
			{ id: 'tab5', label: 'Tab 5' },
			{ id: 'tab6', label: 'Tab 6' }
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Tabs component handling many tabs. Consider scrollable tabs for very long lists.'
			}
		}
	},
	render: (args: any) => ({
		Component: Tabs,
		props: {
			...args,
			panel: (tab: { id: string; label: string }) => `Content for ${tab.label}.`
		}
	})
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Underline** tabs for standard page navigation or content switching.
 * - Use **Pills** tabs for switching between views or filters.
 * - Use **Enclosed** tabs for contained content areas or settings.
 *
 * ## Do's
 * - Keep tab labels short and consistent (1-2 words).
 * - Order tabs logically (e.g., General, Advanced, Settings).
 * - Ensure the active tab is clearly distinguishable.
 *
 * ## Don'ts
 * - Don't use tabs for sequential steps (use a Stepper instead).
 * - Don't overload tabs with too many items (consider a dropdown or vertical tabs).
 * - Avoid nesting tabs within tabs if possible.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	render: () => ({
		Component: Tabs,
		props: {
			tabs: [
				{ id: 'usage', label: 'Usage' },
				{ id: 'dos', label: "Do's" },
				{ id: 'donts', label: "Don'ts" }
			],
			panel: (tab: { id: string; label: string }) => `See ${tab.label} guidelines in Docs.`
		}
	})
};
