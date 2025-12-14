<script lang="ts">
	import type { Snippet } from 'svelte';
	import SkipLink from '$lib/components/atoms/SkipLink.svelte';
	import Sidebar from '$lib/components/organisms/Sidebar.svelte';

	interface Props {
		/** Sidebar position */
		sidebarPosition?: 'left' | 'right';
		/** Sidebar width */
		sidebarWidth?: string;
		/** Whether sidebar is open on mobile */
		sidebarOpen?: boolean;
		/** Custom CSS classes for main content */
		class?: string;
		/** Header slot */
		header?: Snippet;
		/** Sidebar content slot */
		sidebar?: Snippet;
		/** Sidebar header slot */
		sidebarHeader?: Snippet;
		/** Sidebar footer slot */
		sidebarFooter?: Snippet;
		/** Footer slot */
		footer?: Snippet;
		/** Main content */
		children?: Snippet;
	}

	let {
		sidebarPosition = 'left',
		sidebarWidth = '16rem',
		sidebarOpen = $bindable(true),
		class: className = '',
		header,
		sidebar,
		sidebarHeader,
		sidebarFooter,
		footer,
		children
	}: Props = $props();
</script>

<SkipLink href="#main-content" />

<div class="min-h-screen flex flex-col bg-page">
	{#if header}
		{@render header()}
	{/if}

	<div class="flex-1 flex">
		{#if sidebarPosition === 'left' && sidebar}
			<Sidebar
				bind:open={sidebarOpen}
				position="left"
				width={sidebarWidth}
				header={sidebarHeader}
				footer={sidebarFooter}
			>
				{@render sidebar()}
			</Sidebar>
		{/if}

		<main id="main-content" class={['flex-1 overflow-x-hidden', className].join(' ')}>
			{@render children?.()}
		</main>

		{#if sidebarPosition === 'right' && sidebar}
			<Sidebar
				bind:open={sidebarOpen}
				position="right"
				width={sidebarWidth}
				header={sidebarHeader}
				footer={sidebarFooter}
			>
				{@render sidebar()}
			</Sidebar>
		{/if}
	</div>

	{#if footer}
		{@render footer()}
	{/if}
</div>
