<!--
  @component NavItem
  
  A navigation item that can be a link or a button.
  Useful for navigation bars with dropdowns or action items.
  
  @example As link
  ```svelte
  <NavItem href="/products">Products</NavItem>
  ```
  
  @example As button
  ```svelte
  <NavItem onclick={handleOpen}>Open Menu</NavItem>
  ```
  
  @example With badge
  ```svelte
  <NavItem href="/notifications" badge="3">Notifications</NavItem>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** NavItem size */
	export type NavItemSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Item size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Link destination (renders as <a> if provided) */
		href?: string;
		/** Size */
		size?: NavItemSize;
		/** Active state */
		active?: boolean;
		/** Disabled state */
		disabled?: boolean;
		/** Badge text/number */
		badge?: string | number;
		/** Link target */
		target?: '_blank' | '_self' | '_parent' | '_top';
		/** Custom CSS classes */
		class?: string;
		/** Icon slot */
		icon?: Snippet;
		/** Item content */
		children?: Snippet;
		/** Click handler */
		onclick?: (event: MouseEvent) => void;
	}

	let {
		href,
		size = 'md',
		active = false,
		disabled = false,
		badge,
		target,
		class: className = '',
		icon,
		children,
		onclick
	}: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	const isLink = $derived(!!href && !disabled);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const sizeClasses: Record<NavItemSize, string> = {
		sm: 'px-2 py-1.5 text-sm gap-1.5',
		md: 'px-3 py-2 text-base gap-2',
		lg: 'px-4 py-2.5 text-lg gap-2'
	};

	/** Icon size classes */
	const iconSizeClasses: Record<NavItemSize, string> = {
		sm: '[&>*]:w-4 [&>*]:h-4',
		md: '[&>*]:w-5 [&>*]:h-5',
		lg: '[&>*]:w-5 [&>*]:h-5'
	};

	/** Badge size classes */
	const badgeSizeClasses: Record<NavItemSize, string> = {
		sm: 'text-xs px-1.5 min-w-[1.25rem]',
		md: 'text-xs px-2 min-w-[1.5rem]',
		lg: 'text-sm px-2 min-w-[1.5rem]'
	};

	/** Combined classes */
	const itemClasses = $derived(
		[
			'inline-flex items-center',
			'rounded-md',
			'transition-all duration-fast ease-standard',
			'outline-none',
			'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
			sizeClasses[size],
			active
				? 'text-fg bg-bg-muted font-medium'
				: 'text-fg-muted hover:text-fg hover:bg-bg-subtle',
			disabled ? 'opacity-disabled pointer-events-none cursor-not-allowed' : 'cursor-pointer',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	/** Badge classes */
	const badgeClasses = $derived(
		[
			'inline-flex items-center justify-center',
			'rounded-full bg-accent text-fg-on-accent font-medium',
			badgeSizeClasses[size]
		].join(' ')
	);

	// ============================================
	// Event Handlers
	// ============================================

	function handleClick(event: MouseEvent) {
		if (disabled) {
			event.preventDefault();
			return;
		}
		onclick?.(event);
	}
</script>

{#if isLink}
	<a
		{href}
		{target}
		class={itemClasses}
		aria-current={active ? 'page' : undefined}
		rel={target === '_blank' ? 'noopener noreferrer' : undefined}
		onclick={handleClick}
		data-size={size}
		data-active={active ? '' : undefined}
	>
		{#if icon}
			<span class="{iconSizeClasses[size]} shrink-0" aria-hidden="true">
				{@render icon()}
			</span>
		{/if}

		{#if children}
			<span class="flex-1">{@render children()}</span>
		{/if}

		{#if badge !== undefined}
			<span class={badgeClasses}>{badge}</span>
		{/if}
	</a>
{:else}
	<button
		type="button"
		class={itemClasses}
		{disabled}
		aria-pressed={active ? 'true' : undefined}
		onclick={handleClick}
		data-size={size}
		data-active={active ? '' : undefined}
	>
		{#if icon}
			<span class="{iconSizeClasses[size]} shrink-0" aria-hidden="true">
				{@render icon()}
			</span>
		{/if}

		{#if children}
			<span class="flex-1">{@render children()}</span>
		{/if}

		{#if badge !== undefined}
			<span class={badgeClasses}>{badge}</span>
		{/if}
	</button>
{/if}
