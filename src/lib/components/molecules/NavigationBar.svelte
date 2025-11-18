<script lang="ts">
	import Link from '$lib/components/atoms/Link.svelte';
	import { fly } from 'svelte/transition';
	import type { LinkType } from '../../models';

	/**
	 * NavigationBar component - Unified navigation for horizontal and vertical layouts
	 * Replaces both horizontal navigation and sidebar navigation with a single component
	 * Supports automatic contrast calculation for text color based on background
	 */

	interface NavItem {
		label: string;
		href: string;
	}

	interface Props {
		/** Navigation items */
		items?: NavItem[];
		/** Backward compatibility: links (same as items) */
		links?: LinkType[];
		/** Currently active item */
		activeHref?: string;
		/** Display mode: 'horizontal' (header) or 'vertical' (sidebar) */
		orientation?: 'horizontal' | 'vertical';
		/** Backward compatibility: headerMenu (true = horizontal, false = vertical) */
		headerMenu?: boolean;
		/** Background color (hex format) */
		backgroundColor?: string;
		/** Sticky positioning (horizontal only) */
		sticky?: boolean;
		/** Additional CSS classes */
		className?: string;
	}

	let {
		items = [],
		links = undefined,
		activeHref = undefined,
		orientation = 'horizontal',
		headerMenu = undefined,
		backgroundColor = '#ffffff',
		sticky = true,
		className = ''
	}: Props = $props();

	// Backward compatibility: if headerMenu is provided, use it to determine orientation
	const effectiveOrientation = $derived(
		headerMenu !== undefined ? (headerMenu ? 'horizontal' : 'vertical') : orientation
	);

	// Backward compatibility: if links are provided (old API), use them as items
	const effectiveItems = $derived(links && links.length > 0 ? links : items);

	// Calculate text color contrast based on background brightness
	const getTextColor = (bgColor: string): string => {
		const regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bgColor);
		if (!regex || regex.length < 4) return '#ffffff';

		const r = parseInt(regex[1], 16);
		const g = parseInt(regex[2], 16);
		const b = parseInt(regex[3], 16);
		const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);

		return brightness > 125 ? '#000000' : '#ffffff';
	};

	const textColor = $derived(getTextColor(backgroundColor));

	// Horizontal layout classes
	const horizontalClasses = $derived(
		[
			'bg-white/95 backdrop-blur-md border-b border-gray-200 z-40',
			sticky ? 'sticky top-0' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	// Vertical layout classes (sidebar)
	const verticalClasses = $derived(
		[
			'no-underline whitespace-nowrap fixed h-screen flex-grow w-full md:w-64 md:sticky z-40',
			'pb-5 md:pb-0',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	const navClasses = $derived(
		effectiveOrientation === 'horizontal' ? horizontalClasses : verticalClasses
	);
</script>

{#if effectiveOrientation === 'horizontal'}
	<!-- Horizontal Navigation Bar -->
	<nav class={navClasses}>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex items-center justify-center gap-8 py-4 overflow-x-auto">
				{#each effectiveItems as item}
					<Link
						href={item.href}
						variant={activeHref === item.href ? 'cta' : 'subtle'}
						className={activeHref === item.href ? 'font-semibold' : ''}
					>
						{item.label}
					</Link>
				{/each}
			</div>
		</div>
	</nav>
{:else}
	<!-- Vertical Navigation (Sidebar) -->
	<nav
		class={navClasses}
		transition:fly={{ y: -200, duration: 400 }}
		style="--background-color: {backgroundColor}; --text-color: {textColor};"
	>
		<ul class="px-10 text-left text-lg font-extralight divide-y">
			{#each effectiveItems as item (item.href)}
				<li class="py-2" style="color: {textColor};">
					<a href={item.href} role="menuitem" style="color: {textColor};">
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}

<style>
	nav {
		--background-color: #ffffff;
		--text-color: #000000;
	}

	@media (max-width: 767px) {
		nav[style*='--background-color'] {
			background-color: var(--background-color);
			color: var(--text-color);
		}
	}

	@media (min-width: 768px) {
		nav[style*='--background-color'] {
			background-color: inherit;
		}
	}
</style>
