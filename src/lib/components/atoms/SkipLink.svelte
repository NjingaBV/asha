<script lang="ts">
	/**
	 * SkipLink component - Provides keyboard-accessible skip navigation
	 *
	 * This component allows keyboard users to skip repetitive content and navigate
	 * directly to the main content area. It's visually hidden until focused.
	 *
	 * @example
	 * <SkipLink href="#main-content">Skip to main content</SkipLink>
	 * <Header />
	 * <main id="main-content">...</main>
	 */

	interface Props {
		/** Target element ID to skip to (without #) */
		href?: string;
		/** Custom link text */
		children?: import('svelte').Snippet;
		/** CSS class for custom styling */
		class?: string;
	}

	let { href = '#main-content', children, class: className = '' }: Props = $props();

	function handleClick(event: MouseEvent) {
		event.preventDefault();
		const target = document.querySelector(href);
		if (target) {
			// Set tabindex temporarily to make the element focusable
			const currentTabindex = target.getAttribute('tabindex');
			if (!currentTabindex) {
				target.setAttribute('tabindex', '-1');
			}
			(target as HTMLElement).focus();
			// Scroll into view smoothly
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<a
	{href}
	onclick={handleClick}
	class={[
		'skip-link',
		'sr-only focus:not-sr-only',
		'fixed top-4 left-4 z-[9999]',
		'px-4 py-3 min-h-touch',
		'bg-fg text-bg',
		'font-semibold text-sm',
		'rounded-lg shadow-lg',
		'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
		'transition-transform',
		className
	].join(' ')}
>
	{#if children}
		{@render children()}
	{:else}
		Skip to main content
	{/if}
</a>
