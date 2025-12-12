<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		/** Whether the sidebar is open (for mobile) */
		open?: boolean;
		/** Position of the sidebar */
		position?: 'left' | 'right';
		/** Width of the sidebar */
		width?: string;
		/** Whether to show overlay on mobile */
		overlay?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Sidebar content */
		children?: Snippet;
		/** Header slot */
		header?: Snippet;
		/** Footer slot */
		footer?: Snippet;
	}

	let {
		open = $bindable(true),
		position = 'left',
		width = '16rem',
		overlay = true,
		class: className = '',
		children,
		header,
		footer
	}: Props = $props();

	function handleOverlayClick() {
		open = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && open) {
			open = false;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if overlay && open}
	<div
		class="fixed inset-0 z-40 bg-black/50 lg:hidden"
		onclick={handleOverlayClick}
		onkeydown={(e) => e.key === 'Enter' && handleOverlayClick()}
		role="button"
		tabindex="0"
		aria-label="Close sidebar"
	></div>
{/if}

<aside
	class={[
		'fixed top-0 z-50 h-full bg-bg border-border flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto',
		position === 'left' ? 'left-0 border-r' : 'right-0 border-l',
		position === 'left'
			? open
				? 'translate-x-0'
				: '-translate-x-full'
			: open
				? 'translate-x-0'
				: 'translate-x-full',
		className
	].join(' ')}
	style="width: {width}"
>
	{#if header}
		<div class="flex-shrink-0 border-b border-border p-4">
			{@render header()}
		</div>
	{/if}

	<nav class="flex-1 overflow-y-auto p-4">
		{@render children?.()}
	</nav>

	{#if footer}
		<div class="flex-shrink-0 border-t border-border p-4">
			{@render footer()}
		</div>
	{/if}
</aside>
