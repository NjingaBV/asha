<script lang="ts">
	/**
	 * ChapterNav Component
	 * Horizontal scrollable navigation with icons, typically used at the top of product pages.
	 */

	interface NavItem {
		label: string;
		icon: string;
		href: string;
		isNew?: boolean;
	}

	let { items = [] }: { items: NavItem[] } = $props();
</script>

<nav class="w-full overflow-x-auto bg-white py-8 no-scrollbar">
	<div class="mx-auto max-w-7xl px-4">
		<ul class="flex min-w-max items-start justify-center gap-8 md:gap-12">
			{#each items as item}
				<li>
					<a
						href={item.href}
						class="group flex flex-col items-center gap-3 text-center no-underline"
					>
						<div class="relative h-12 w-16 md:h-14 md:w-20">
							<img
								src={item.icon}
								alt=""
								class="h-full w-full object-contain transition-transform duration-300 group-hover:-translate-y-1"
								loading="lazy"
							/>
						</div>
						<span
							class="text-xs font-medium text-slate-900 group-hover:text-blue-600 md:text-sm"
						>
							{item.label}
						</span>
						{#if item.isNew}
							<span class="text-[10px] font-medium text-orange-600">New</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
