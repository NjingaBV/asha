<script lang="ts">
	import Link from '$lib/components/atoms/Link.svelte';

	/**
	 * NavigationBar component - Horizontal navigation for Mac models
	 * Sticky navigation bar with product links
	 */

	interface NavItem {
		label: string;
		href: string;
	}

	interface Props {
		/** Navigation items */
		items?: NavItem[];
		/** Currently active item */
		activeHref?: string;
		/** Sticky positioning */
		sticky?: boolean;
		/** Additional CSS classes */
		className?: string;
	}

	let { items = [], activeHref = undefined, sticky = true, className = '' }: Props = $props();

	const navClasses = $derived(
		[
			'bg-white/95 backdrop-blur-md border-b border-gray-200 z-40',
			sticky ? 'sticky top-0' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<nav class={navClasses}>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-center gap-8 py-4 overflow-x-auto">
			{#each items as item}
				<Link
					href={item.href}
					variant={activeHref === item.href ? 'cta' : 'subtle'}
					className={activeHref === item.href ? 'font-semibold' : ''}
				>
					{#snippet children()}
						{item.label}
					{/snippet}
				</Link>
			{/each}
		</div>
	</div>
</nav>
