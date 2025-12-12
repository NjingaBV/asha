<!--
  @component NavLink
  
  A navigation link component with active state handling.
  Perfect for main navigation menus and sidebars.
  
  @example Basic usage
  ```svelte
  <NavLink href="/about">About</NavLink>
  ```
  
  @example Active state
  ```svelte
  <NavLink href="/dashboard" active>Dashboard</NavLink>
  ```
  
  @example With icon
  ```svelte
  <NavLink href="/settings">
    {#snippet iconLeft()}<SettingsIcon />{/snippet}
    Settings
  </NavLink>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** NavLink variant */
	export type NavLinkVariant = 'default' | 'subtle' | 'pill';

	/** NavLink size */
	export type NavLinkSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		variant: {
			type: 'string',
			options: ['default', 'subtle', 'pill'],
			default: 'default',
			description: 'Visual style variant'
		},
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Link size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Link destination */
		href: string;
		/** Visual variant */
		variant?: NavLinkVariant;
		/** Size */
		size?: NavLinkSize;
		/** Active/selected state */
		active?: boolean;
		/** Disabled state */
		disabled?: boolean;
		/** Link target */
		target?: '_blank' | '_self' | '_parent' | '_top';
		/** Custom CSS classes */
		class?: string;
		/** Icon slot - appears before content */
		iconLeft?: Snippet;
		/** Icon slot - appears after content */
		iconRight?: Snippet;
		/** Link content */
		children?: Snippet;
		/** Click handler */
		onclick?: (event: MouseEvent) => void;
	}

	let {
		href,
		variant = 'default',
		size = 'md',
		active = false,
		disabled = false,
		target,
		class: className = '',
		iconLeft,
		iconRight,
		children,
		onclick
	}: Props = $props();

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const sizeClasses: Record<NavLinkSize, string> = {
		sm: 'px-2 py-1 text-sm gap-1.5',
		md: 'px-3 py-2 text-base gap-2',
		lg: 'px-4 py-3 text-lg gap-2.5'
	};

	/** Icon size classes */
	const iconSizeClasses: Record<NavLinkSize, string> = {
		sm: '[&>*]:w-4 [&>*]:h-4',
		md: '[&>*]:w-5 [&>*]:h-5',
		lg: '[&>*]:w-6 [&>*]:h-6'
	};

	/** Variant classes */
	const variantClasses: Record<NavLinkVariant, { base: string; active: string; hover: string }> =
		{
			default: {
				base: 'text-fg-muted',
				active: 'text-fg font-medium',
				hover: 'hover:text-fg'
			},
			subtle: {
				base: 'text-fg-muted',
				active: 'text-accent font-medium',
				hover: 'hover:text-fg hover:bg-bg-muted'
			},
			pill: {
				base: 'text-fg-muted rounded-full',
				active: 'text-fg-on-accent bg-accent font-medium',
				hover: 'hover:text-fg hover:bg-bg-muted'
			}
		};

	/** Combined classes */
	const linkClasses = $derived(
		[
			'inline-flex items-center',
			'transition-all duration-fast ease-standard',
			'outline-none',
			'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
			sizeClasses[size],
			variantClasses[variant].base,
			active ? variantClasses[variant].active : variantClasses[variant].hover,
			disabled ? 'opacity-disabled pointer-events-none' : 'cursor-pointer',
			className
		]
			.filter(Boolean)
			.join(' ')
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

<a
	{href}
	{target}
	class={linkClasses}
	aria-current={active ? 'page' : undefined}
	aria-disabled={disabled ? 'true' : undefined}
	rel={target === '_blank' ? 'noopener noreferrer' : undefined}
	onclick={handleClick}
	data-variant={variant}
	data-size={size}
	data-active={active ? '' : undefined}
>
	{#if iconLeft}
		<span class="{iconSizeClasses[size]} shrink-0" aria-hidden="true">
			{@render iconLeft()}
		</span>
	{/if}

	{#if children}
		{@render children()}
	{/if}

	{#if iconRight}
		<span class="{iconSizeClasses[size]} shrink-0" aria-hidden="true">
			{@render iconRight()}
		</span>
	{/if}
</a>
