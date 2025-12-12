<script lang="ts">
	import type { Snippet } from 'svelte';
	import SkipLink from '$lib/atoms/SkipLink.svelte';
	import Sidebar from '$lib/organisms/Sidebar.svelte';

	interface Props {
		/** Sidebar width */
		sidebarWidth?: string;
		/** Whether sidebar is open on mobile */
		sidebarOpen?: boolean;
		/** Custom CSS classes for main content */
		class?: string;
		/** Navbar slot */
		navbar?: Snippet;
		/** Sidebar content slot */
		sidebar?: Snippet;
		/** Sidebar header slot */
		sidebarHeader?: Snippet;
		/** Page header slot (above main content) */
		pageHeader?: Snippet;
		/** Main content */
		children?: Snippet;
	}

	let {
		sidebarWidth = '16rem',
		sidebarOpen = $bindable(true),
		class: className = '',
		navbar,
		sidebar,
		sidebarHeader,
		pageHeader,
		children
	}: Props = $props();
</script>

<SkipLink href="#main-content" />

<div class="min-h-screen bg-bg-subtle">
	{#if navbar}
		<div class="fixed top-0 left-0 right-0 z-30 h-16 bg-bg border-b border-border">
			{@render navbar()}
		</div>
	{/if}

	<div class={['flex', navbar ? 'pt-16' : ''].join(' ')}>
		{#if sidebar}
			<Sidebar
				bind:open={sidebarOpen}
				position="left"
				width={sidebarWidth}
				header={sidebarHeader}
				class={navbar ? 'top-16 h-[calc(100vh-4rem)]' : ''}
			>
				{@render sidebar()}
			</Sidebar>
		{/if}

		<div
			class="flex-1 flex flex-col min-h-screen lg:ml-0"
			style="margin-left: {sidebar ? sidebarWidth : '0'}"
		>
			{#if pageHeader}
				<header class="bg-bg border-b border-border px-6 py-4">
					{@render pageHeader()}
				</header>
			{/if}

			<main id="main-content" class={['flex-1 p-6', className].join(' ')}>
				{@render children?.()}
			</main>
		</div>
	</div>
</div>
