<script lang="ts">
	import type { Snippet } from 'svelte';
	import SkipLink from '$lib/components/atoms/SkipLink.svelte';

	interface Props {
		/** Custom CSS classes for main content */
		class?: string;
		/** Header slot */
		header?: Snippet;
		/** Footer slot */
		footer?: Snippet;
		/** Main content */
		children?: Snippet;
	}

	let { class: className = '', header, footer, children }: Props = $props();
</script>

<SkipLink href="#main-content" />

<div class="min-h-screen flex flex-col bg-page">
	{#if header}
		{@render header()}
	{/if}

	<main id="main-content" class={['flex-1', className].join(' ')}>
		{@render children?.()}
	</main>

	{#if footer}
		{@render footer()}
	{/if}
</div>
