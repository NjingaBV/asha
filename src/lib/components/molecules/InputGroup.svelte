<!--
  @component InputGroup
  
  Groups multiple inputs or input with addons together.
  Useful for compound inputs like phone numbers or search with button.
  
  @example With addon
  ```svelte
  <InputGroup>
    {#snippet prefix()}<span>https://</span>{/snippet}
    <Input placeholder="yoursite.com" />
  </InputGroup>
  ```
  
  @example With button
  ```svelte
  <InputGroup>
    <Input placeholder="Search..." />
    {#snippet suffix()}<Button>Go</Button>{/snippet}
  </InputGroup>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** InputGroup size */
	export type InputGroupSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Group size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Size */
		size?: InputGroupSize;
		/** Disabled state for all children */
		disabled?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Prefix addon slot */
		prefix?: Snippet;
		/** Suffix addon slot */
		suffix?: Snippet;
		/** Main input slot */
		children?: Snippet;
	}

	let {
		size = 'md',
		disabled = false,
		class: className = '',
		prefix,
		suffix,
		children
	}: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	const hasPrefix = $derived(!!prefix);
	const hasSuffix = $derived(!!suffix);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const sizeClasses: Record<InputGroupSize, string> = {
		sm: 'text-sm',
		md: 'text-base',
		lg: 'text-lg'
	};

	const addonPaddingClasses: Record<InputGroupSize, string> = {
		sm: 'px-2',
		md: 'px-3',
		lg: 'px-4'
	};

	/** Container classes */
	const containerClasses = $derived(
		[
			'flex items-stretch',
			'rounded-lg',
			'border border-border',
			'bg-bg',
			'focus-within:border-accent focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-0',
			'transition-all duration-fast ease-standard',
			sizeClasses[size],
			disabled ? 'opacity-disabled bg-bg-subtle' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	/** Addon classes */
	const addonClasses = $derived(
		[
			'flex items-center',
			'bg-bg-muted text-fg-muted',
			'border-border',
			addonPaddingClasses[size]
		].join(' ')
	);

	/** Input wrapper classes - removes border/ring from child inputs */
	const inputWrapperClasses = [
		'flex-1 min-w-0',
		'[&>*]:border-none [&>*]:ring-0 [&>*]:focus:ring-0 [&>*]:rounded-none [&>*]:shadow-none',
		'[&>*]:focus-within:ring-0 [&>*]:focus-within:border-none'
	].join(' ');
</script>

<div class={containerClasses} data-size={size} data-disabled={disabled ? '' : undefined}>
	{#if hasPrefix}
		<div class="{addonClasses} rounded-l-lg border-r">
			{@render prefix()}
		</div>
	{/if}

	<div
		class={inputWrapperClasses}
		class:rounded-l-lg={!hasPrefix}
		class:rounded-r-lg={!hasSuffix}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>

	{#if hasSuffix}
		<div class="{addonClasses} rounded-r-lg border-l">
			{@render suffix()}
		</div>
	{/if}
</div>
