<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		/** Tooltip content text */
		content?: string;
		/** Tooltip position */
		position?: 'top' | 'bottom' | 'left' | 'right';
		/** Delay before showing (ms) */
		delay?: number;
		/** Custom CSS classes */
		class?: string;
		/** Trigger element */
		children?: Snippet;
		/** Custom tooltip content */
		tooltip?: Snippet;
	}

	let {
		content,
		position = 'top',
		delay = 200,
		class: className = '',
		children,
		tooltip
	}: Props = $props();

	let visible = $state(false);
	let timeout = $state<ReturnType<typeof setTimeout> | null>(null);

	function show() {
		timeout = setTimeout(() => {
			visible = true;
		}, delay);
	}

	function hide() {
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
		visible = false;
	}

	const positionClasses = {
		top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
		bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
		left: 'right-full top-1/2 -translate-y-1/2 mr-2',
		right: 'left-full top-1/2 -translate-y-1/2 ml-2'
	};

	const arrowClasses = {
		top: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full border-t-fg-subtle border-x-transparent border-b-transparent',
		bottom: 'top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-fg-subtle border-x-transparent border-t-transparent',
		left: 'right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-fg-subtle border-y-transparent border-r-transparent',
		right: 'left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-fg-subtle border-y-transparent border-l-transparent'
	};
</script>

<div
	class={['relative inline-block', className].join(' ')}
	onmouseenter={show}
	onmouseleave={hide}
	onfocus={show}
	onblur={hide}
	role="group"
>
	{@render children?.()}

	{#if visible && (content || tooltip)}
		<div
			class={[
				'absolute z-50 px-3 py-2 text-sm bg-fg-subtle text-bg rounded-lg shadow-lg whitespace-nowrap',
				positionClasses[position]
			].join(' ')}
			role="tooltip"
		>
			{#if tooltip}
				{@render tooltip()}
			{:else}
				{content}
			{/if}
			<span
				class={['absolute w-0 h-0 border-4', arrowClasses[position]].join(' ')}
				aria-hidden="true"
			></span>
		</div>
	{/if}
</div>
