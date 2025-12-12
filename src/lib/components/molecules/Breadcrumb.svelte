<!--
  @component Breadcrumb
  
  A breadcrumb navigation component for showing page hierarchy.
  Supports custom separators and home icon.
  
  @example Basic usage
  ```svelte
  <Breadcrumb items={[
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Laptop' }
  ]} />
  ```
  
  @example With custom separator
  ```svelte
  <Breadcrumb items={items} separator=">" />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Breadcrumb item */
	export interface BreadcrumbItem {
		label: string;
		href?: string;
		icon?: 'home' | 'none';
	}

	/** Breadcrumb size */
	export type BreadcrumbSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Breadcrumb size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Breadcrumb items */
		items: BreadcrumbItem[];
		/** Size */
		size?: BreadcrumbSize;
		/** Custom separator string */
		separator?: string;
		/** Show home icon for first item */
		showHomeIcon?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Custom separator snippet */
		separatorSlot?: Snippet;
	}

	let {
		items,
		size = 'md',
		separator = '/',
		showHomeIcon = false,
		class: className = '',
		separatorSlot
	}: Props = $props();

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const sizeClasses: Record<BreadcrumbSize, string> = {
		sm: 'text-xs gap-1',
		md: 'text-sm gap-2',
		lg: 'text-base gap-2'
	};

	/** Icon size classes */
	const iconSizeClasses: Record<BreadcrumbSize, string> = {
		sm: 'w-3 h-3',
		md: 'w-4 h-4',
		lg: 'w-5 h-5'
	};

	/** Link classes */
	const linkClasses = [
		'text-fg-muted hover:text-fg',
		'transition-colors duration-fast',
		'outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded'
	].join(' ');

	/** Current item classes */
	const currentClasses = 'text-fg font-medium';

	/** Separator classes */
	const separatorClasses = 'text-fg-muted select-none';

	/** Nav classes */
	const navClasses = $derived(
		['flex items-center', sizeClasses[size], className].filter(Boolean).join(' ')
	);
</script>

<nav aria-label="Breadcrumb" class={navClasses} data-size={size}>
	<ol class="flex items-center {sizeClasses[size]}">
		{#each items as item, index}
			<li class="flex items-center {sizeClasses[size]}">
				{#if index > 0}
					{#if separatorSlot}
						<span class={separatorClasses} aria-hidden="true">
							{@render separatorSlot()}
						</span>
					{:else}
						<span class={separatorClasses} aria-hidden="true">{separator}</span>
					{/if}
				{/if}

				{#if item.href && index < items.length - 1}
					<a href={item.href} class={linkClasses}>
						{#if index === 0 && showHomeIcon}
							<svg
								class="{iconSizeClasses[size]} inline-block mr-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
						{/if}
						{item.label}
					</a>
				{:else}
					<span
						class={index === items.length - 1 ? currentClasses : linkClasses}
						aria-current={index === items.length - 1 ? 'page' : undefined}
					>
						{#if index === 0 && showHomeIcon}
							<svg
								class="{iconSizeClasses[size]} inline-block mr-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
						{/if}
						{item.label}
					</span>
				{/if}
			</li>
		{/each}
	</ol>
</nav>
