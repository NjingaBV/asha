<script lang="ts">
	import type { Snippet } from 'svelte';
	import IconButton from '$lib/components/atoms/IconButton.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';

	interface Props {
		/** Whether the drawer is open */
		open?: boolean;
		/** Drawer position */
		position?: 'left' | 'right' | 'top' | 'bottom';
		/** Drawer title */
		title?: string;
		/** Drawer size (width for left/right, height for top/bottom) */
		size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
		/** Show close button */
		showClose?: boolean;
		/** Close on overlay click */
		closeOnOverlay?: boolean;
		/** Close on escape key */
		closeOnEscape?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Close callback */
		onclose?: () => void;
		/** Drawer content */
		children?: Snippet;
		/** Header slot */
		header?: Snippet;
		/** Footer slot */
		footer?: Snippet;
	}

	let {
		open = $bindable(false),
		position = 'right',
		title,
		size = 'md',
		showClose = true,
		closeOnOverlay = true,
		closeOnEscape = true,
		class: className = '',
		onclose,
		children,
		header,
		footer
	}: Props = $props();

	function close() {
		open = false;
		onclose?.();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && closeOnEscape && open) {
			close();
		}
	}

	function handleOverlayClick() {
		if (closeOnOverlay) {
			close();
		}
	}

	const sizeClasses = {
		left: { sm: 'w-64', md: 'w-80', lg: 'w-96', xl: 'w-[28rem]', full: 'w-full' },
		right: { sm: 'w-64', md: 'w-80', lg: 'w-96', xl: 'w-[28rem]', full: 'w-full' },
		top: { sm: 'h-32', md: 'h-48', lg: 'h-64', xl: 'h-80', full: 'h-full' },
		bottom: { sm: 'h-32', md: 'h-48', lg: 'h-64', xl: 'h-80', full: 'h-full' }
	};

	const positionClasses = {
		left: 'left-0 top-0 h-full',
		right: 'right-0 top-0 h-full',
		top: 'top-0 left-0 w-full',
		bottom: 'bottom-0 left-0 w-full'
	};

	const transformClasses = {
		left: open ? 'translate-x-0' : '-translate-x-full',
		right: open ? 'translate-x-0' : 'translate-x-full',
		top: open ? 'translate-y-0' : '-translate-y-full',
		bottom: open ? 'translate-y-0' : 'translate-y-full'
	};
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div
		class="fixed inset-0 z-40 bg-black/50 transition-opacity motion-reduce:transition-none"
		onclick={handleOverlayClick}
		onkeydown={(e) => e.key === 'Enter' && handleOverlayClick()}
		role="button"
		tabindex="0"
		aria-label="Close drawer"
	></div>
{/if}

<div
	class={[
		'fixed z-50 bg-bg shadow-xl flex flex-col transition-transform duration-300 motion-reduce:transition-none',
		positionClasses[position],
		sizeClasses[position][size],
		transformClasses[position],
		className
	].join(' ')}
	role="dialog"
	aria-modal="true"
	aria-hidden={!open}
>
	{#if header}
		<div class="flex-shrink-0 border-b border-border p-4">
			{@render header()}
		</div>
	{:else if title || showClose}
		<div class="flex-shrink-0 flex items-center justify-between border-b border-border p-4">
			{#if title}
				<Heading level={2} class="text-lg font-semibold">
					{title}
				</Heading>
			{:else}
				<div></div>
			{/if}

			{#if showClose}
				<IconButton icon="x" label="Close drawer" onclick={close} />
			{/if}
		</div>
	{/if}

	<div class="flex-1 overflow-y-auto p-4">
		{@render children?.()}
	</div>

	{#if footer}
		<div class="flex-shrink-0 border-t border-border p-4">
			{@render footer()}
		</div>
	{/if}
</div>
