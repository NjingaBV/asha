<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ListItem {
		id: string;
		content: string | Snippet;
	}

	interface Props {
		/** List items */
		items?: ListItem[];
		/** List style */
		variant?: 'unordered' | 'ordered' | 'none';
		/** Marker style */
		marker?: 'disc' | 'circle' | 'square' | 'decimal' | 'none';
		/** Spacing between items */
		spacing?: 'tight' | 'normal' | 'loose';
		/** Dividers between items */
		dividers?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Custom list content */
		children?: Snippet;
	}

	let {
		items = [],
		variant = 'unordered',
		marker = 'disc',
		spacing = 'normal',
		dividers = false,
		class: className = '',
		children
	}: Props = $props();

	const spacingClasses = {
		tight: 'space-y-1',
		normal: 'space-y-2',
		loose: 'space-y-4'
	};

	const markerClasses = {
		disc: 'list-disc',
		circle: 'list-circle',
		square: 'list-square',
		decimal: 'list-decimal',
		none: 'list-none'
	};
</script>

{#if children}
	{@render children()}
{:else if variant === 'ordered'}
	<ol
		class={[
			'pl-5 text-fg',
			markerClasses[
				marker === 'disc' || marker === 'circle' || marker === 'square' ? 'decimal' : marker
			],
			spacingClasses[spacing],
			className
		].join(' ')}
	>
		{#each items as item (item.id)}
			<li class={dividers ? 'pb-2 border-b border-border last:border-b-0' : ''}>
				{#if typeof item.content === 'string'}
					{item.content}
				{:else}
					{@render item.content()}
				{/if}
			</li>
		{/each}
	</ol>
{:else}
	<ul
		class={[
			variant === 'none' ? '' : 'pl-5',
			markerClasses[marker],
			spacingClasses[spacing],
			'text-fg',
			className
		].join(' ')}
	>
		{#each items as item (item.id)}
			<li class={dividers ? 'pb-2 border-b border-border last:border-b-0' : ''}>
				{#if typeof item.content === 'string'}
					{item.content}
				{:else}
					{@render item.content()}
				{/if}
			</li>
		{/each}
	</ul>
{/if}
