<!--
  @component Tabs
  
  A tabbed interface component with keyboard navigation and ARIA support.
  Uses XState for state management and follows WAI-ARIA tabs pattern.
  
  @example Basic usage
  ```svelte
  <Tabs 
    tabs={[
      { id: 'tab1', label: 'Overview' },
      { id: 'tab2', label: 'Features' },
      { id: 'tab3', label: 'Pricing' }
    ]}
  >
    {#snippet panel(tab)}
      {#if tab.id === 'tab1'}
        <p>Overview content</p>
      {:else if tab.id === 'tab2'}
        <p>Features content</p>
      {:else}
        <p>Pricing content</p>
      {/if}
    {/snippet}
  </Tabs>
  ```
  
  @example With disabled tab
  ```svelte
  <Tabs tabs={[
    { id: 'active', label: 'Active' },
    { id: 'disabled', label: 'Coming Soon', disabled: true }
  ]} />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	export type { Tab } from '$lib/machines/tabs.machine';

	/** Tabs visual variant */
	export type TabsVariant = 'underline' | 'pills' | 'enclosed';

	/** Tabs size */
	export type TabsSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		variant: {
			type: 'string',
			options: ['underline', 'pills', 'enclosed'],
			default: 'underline',
			description: 'Visual style variant'
		},
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Tab size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { createActor } from 'xstate';
	import { tabsMachine, createTabsKeyboardHandler, type Tab } from '$lib/machines/tabs.machine';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** List of tabs */
		tabs: Tab[];
		/** Initially selected tab ID */
		defaultActiveId?: string;
		/** Visual variant */
		variant?: TabsVariant;
		/** Size */
		size?: TabsSize;
		/** Orientation */
		orientation?: 'horizontal' | 'vertical';
		/** Activate tab on focus (vs only on click) */
		activateOnFocus?: boolean;
		/** Full width tabs */
		fullWidth?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Panel content render function */
		panel?: Snippet<[Tab]>;
		/** Tab change handler */
		onchange?: (activeId: string) => void;
	}

	let {
		tabs,
		defaultActiveId,
		variant = 'underline',
		size = 'md',
		orientation = 'horizontal',
		activateOnFocus = true,
		fullWidth = false,
		class: className = '',
		panel,
		onchange
	}: Props = $props();

	// ============================================
	// State Machine
	// ============================================

	const actor = createActor(tabsMachine, {
		input: {
			tabs,
			defaultActiveId,
			activateOnFocus,
			orientation
		}
	});

	actor.start();

	// Subscribe to state changes
	let activeId = $state(actor.getSnapshot().context.activeId);

	actor.subscribe((snapshot) => {
		const newActiveId = snapshot.context.activeId;
		if (newActiveId !== activeId) {
			activeId = newActiveId;
			onchange?.(newActiveId);
		}
	});

	// Update tabs when prop changes
	$effect(() => {
		actor.send({ type: 'SET_TABS', tabs });
	});

	// Cleanup
	$effect(() => {
		return () => actor.stop();
	});

	// ============================================
	// Event Handlers
	// ============================================

	const handleKeydown = createTabsKeyboardHandler((event) => actor.send(event), orientation);

	function selectTab(id: string) {
		actor.send({ type: 'SELECT', id });
	}

	// ============================================
	// Style Classes
	// ============================================

	const isVertical = $derived(orientation === 'vertical');

	/** Tab list container classes */
	const tabListClasses = $derived(
		[
			'flex',
			isVertical ? 'flex-col' : 'flex-row',
			fullWidth && !isVertical ? 'w-full' : '',
			variant === 'underline' ? 'border-b border-border' : '',
			variant === 'enclosed' ? 'border border-border rounded-lg p-1 bg-bg-muted' : '',
			variant === 'pills' ? 'gap-1' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	/** Size-specific classes for tabs */
	const tabSizeClasses: Record<TabsSize, string> = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-4 py-2 text-base',
		lg: 'px-6 py-3 text-lg'
	};

	/** Variant-specific classes for tabs */
	function getTabClasses(tab: Tab): string {
		const isActive = tab.id === activeId;
		const isDisabled = tab.disabled;

		const baseClasses = [
			'relative inline-flex items-center justify-center',
			'font-medium whitespace-nowrap',
			'transition-all duration-fast ease-standard',
			'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent',
			tabSizeClasses[size],
			fullWidth && !isVertical ? 'flex-1' : ''
		];

		if (isDisabled) {
			baseClasses.push('opacity-disabled cursor-not-allowed');
		} else {
			baseClasses.push('cursor-pointer');
		}

		// Variant-specific styles
		switch (variant) {
			case 'underline':
				baseClasses.push(
					'-mb-px', // Overlap with border
					isActive
						? 'text-accent border-b-2 border-accent'
						: 'text-fg-muted hover:text-fg border-b-2 border-transparent'
				);
				break;

			case 'pills':
				baseClasses.push(
					'rounded-lg',
					isActive
						? 'bg-accent text-fg-on-accent'
						: 'text-fg-muted hover:text-fg hover:bg-bg-muted'
				);
				break;

			case 'enclosed':
				baseClasses.push(
					'rounded-md',
					isActive ? 'bg-surface text-fg shadow-sm' : 'text-fg-muted hover:text-fg'
				);
				break;
		}

		return baseClasses.filter(Boolean).join(' ');
	}

	/** Panel classes */
	const panelClasses = 'py-4 focus-visible:outline-none';
</script>

<div
	class={isVertical ? 'flex gap-4' : ''}
	data-variant={variant}
	data-size={size}
	data-orientation={orientation}
>
	<!-- Tab List -->
	<!-- svelte-ignore a11y_interactive_supports_focus -->
	<div
		class={tabListClasses}
		role="tablist"
		aria-orientation={orientation}
		onkeydown={handleKeydown}
	>
		{#each tabs as tab (tab.id)}
			{@const isActive = tab.id === activeId}
			{@const panelId = `panel-${tab.id}`}

			<button
				type="button"
				id={`tab-${tab.id}`}
				class={getTabClasses(tab)}
				role="tab"
				aria-selected={isActive}
				aria-controls={panelId}
				aria-disabled={tab.disabled || undefined}
				tabindex={isActive ? 0 : -1}
				disabled={tab.disabled}
				onclick={() => selectTab(tab.id)}
				data-state={isActive ? 'active' : 'inactive'}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<!-- Tab Panels -->
	<div class={isVertical ? 'flex-1' : ''}>
		{#each tabs as tab (tab.id)}
			{@const isActive = tab.id === activeId}

			<div
				id={`panel-${tab.id}`}
				class={panelClasses}
				role="tabpanel"
				aria-labelledby={`tab-${tab.id}`}
				tabindex={0}
				hidden={!isActive}
				data-state={isActive ? 'active' : 'inactive'}
			>
				{#if isActive && panel}
					{@render panel(tab)}
				{/if}
			</div>
		{/each}
	</div>
</div>
