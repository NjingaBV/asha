<script lang="ts">
	import type { Snippet } from 'svelte';
	import SkipLink from '$lib/components/atoms/SkipLink.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';
	import Breadcrumb from '$lib/components/molecules/Breadcrumb.svelte';
	import Pagination from '$lib/components/organisms/Pagination.svelte';

	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	interface Props {
		/** Breadcrumb items */
		breadcrumbs?: BreadcrumbItem[];
		/** Category title */
		title?: string;
		/** Category description */
		description?: string;
		/** Total number of items */
		totalItems?: number;
		/** Current page */
		page?: number;
		/** Total pages */
		totalPages?: number;
		/** Items per page */
		perPage?: number;
		/** Show filter bar */
		showFilters?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Header slot */
		header?: Snippet;
		/** Footer slot */
		footer?: Snippet;
		/** Filters slot */
		filters?: Snippet;
		/** Products/items grid */
		children?: Snippet;
		/** Page change callback */
		onpagechange?: (page: number) => void;
	}

	let {
		breadcrumbs = [],
		title,
		description,
		totalItems = 0,
		page = $bindable(1),
		totalPages = 1,
		perPage = 12,
		showFilters = true,
		class: className = '',
		header,
		footer,
		filters,
		children,
		onpagechange
	}: Props = $props();

	function handlePageChange(newPage: number) {
		page = newPage;
		onpagechange?.(newPage);
	}

	let startItem = $derived((page - 1) * perPage + 1);
	let endItem = $derived(Math.min(page * perPage, totalItems));
</script>

<SkipLink href="#main-content" />

<div class="min-h-screen flex flex-col bg-page">
	{#if header}
		{@render header()}
	{/if}

	<main id="main-content" class={['flex-1', className].join(' ')}>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			{#if breadcrumbs.length > 0}
				<Breadcrumb items={breadcrumbs} class="mb-6" />
			{/if}

			<!-- Category Header -->
			{#if title || description}
				<header class="mb-8">
					{#if title}
						<Heading level={1} class="text-3xl md:text-4xl font-bold text-fg mb-2">
							{title}
						</Heading>
					{/if}
					{#if description}
						<Text class="text-fg-muted max-w-2xl">
							{description}
						</Text>
					{/if}
				</header>
			{/if}

			<!-- Filters -->
			{#if showFilters && filters}
				<div class="mb-6">
					{@render filters()}
				</div>
			{/if}

			<!-- Results count -->
			{#if totalItems > 0}
				<div class="flex items-center justify-between mb-6">
					<Text class="text-sm text-fg-muted">
						Showing {startItem}-{endItem} of {totalItems} items
					</Text>
				</div>
			{/if}

			<!-- Products Grid -->
			<div class="mb-8">
				{@render children?.()}
			</div>

			<!-- Pagination -->
			{#if totalPages > 1}
				<div class="flex justify-center">
					<Pagination {page} {totalPages} onchange={handlePageChange} />
				</div>
			{/if}
		</div>
	</main>

	{#if footer}
		{@render footer()}
	{/if}
</div>
