<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	import Icon from '$lib/atoms/Icon.svelte';

	interface Props {
		/** Current page (1-indexed) */
		page?: number;
		/** Total number of pages */
		totalPages?: number;
		/** Number of page buttons to show */
		siblingCount?: number;
		/** Show first/last buttons */
		showEnds?: boolean;
		/** Show previous/next buttons */
		showPrevNext?: boolean;
		/** Size variant */
		size?: 'sm' | 'md' | 'lg';
		/** Custom CSS classes */
		class?: string;
		/** Page change callback */
		onchange?: (page: number) => void;
	}

	let {
		page = $bindable(1),
		totalPages = 1,
		siblingCount = 1,
		showEnds = true,
		showPrevNext = true,
		size = 'md',
		class: className = '',
		onchange
	}: Props = $props();

	function goToPage(newPage: number) {
		if (newPage >= 1 && newPage <= totalPages && newPage !== page) {
			page = newPage;
			onchange?.(page);
		}
	}

	let pageNumbers = $derived.by(() => {
		const pages: (number | 'ellipsis')[] = [];
		const leftSibling = Math.max(page - siblingCount, 1);
		const rightSibling = Math.min(page + siblingCount, totalPages);

		const showLeftEllipsis = leftSibling > 2;
		const showRightEllipsis = rightSibling < totalPages - 1;

		if (!showLeftEllipsis && showRightEllipsis) {
			const leftRange = 1 + 2 * siblingCount;
			for (let i = 1; i <= Math.min(leftRange, totalPages); i++) {
				pages.push(i);
			}
			if (totalPages > leftRange) {
				pages.push('ellipsis');
				pages.push(totalPages);
			}
		} else if (showLeftEllipsis && !showRightEllipsis) {
			pages.push(1);
			pages.push('ellipsis');
			const rightRange = totalPages - 2 * siblingCount;
			for (let i = Math.max(rightRange, 1); i <= totalPages; i++) {
				pages.push(i);
			}
		} else if (showLeftEllipsis && showRightEllipsis) {
			pages.push(1);
			pages.push('ellipsis');
			for (let i = leftSibling; i <= rightSibling; i++) {
				pages.push(i);
			}
			pages.push('ellipsis');
			pages.push(totalPages);
		} else {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		}

		return pages;
	});

	const sizeClasses = {
		sm: 'h-8 min-w-8 text-sm',
		md: 'h-10 min-w-10 text-base',
		lg: 'h-12 min-w-12 text-lg'
	};
</script>

<nav
	class={['flex items-center gap-1', className].join(' ')}
	role="navigation"
	aria-label="Pagination"
>
	{#if showEnds}
		<Button
			tone="ghost"
			{size}
			onclick={() => goToPage(1)}
			disabled={page === 1}
			aria-label="Go to first page"
		>
			<Icon name="chevrons-left" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
		</Button>
	{/if}

	{#if showPrevNext}
		<Button
			tone="ghost"
			{size}
			onclick={() => goToPage(page - 1)}
			disabled={page === 1}
			aria-label="Go to previous page"
		>
			<Icon name="chevron-left" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
		</Button>
	{/if}

	{#each pageNumbers as pageNum}
		{#if pageNum === 'ellipsis'}
			<span
				class={['flex items-center justify-center text-fg-muted', sizeClasses[size]].join(
					' '
				)}
			>
				...
			</span>
		{:else}
			<Button
				tone={pageNum === page ? 'primary' : 'ghost'}
				{size}
				onclick={() => goToPage(pageNum)}
				aria-label="Go to page {pageNum}"
				aria-current={pageNum === page ? 'page' : undefined}
			>
				{pageNum}
			</Button>
		{/if}
	{/each}

	{#if showPrevNext}
		<Button
			tone="ghost"
			{size}
			onclick={() => goToPage(page + 1)}
			disabled={page === totalPages}
			aria-label="Go to next page"
		>
			<Icon name="chevron-right" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
		</Button>
	{/if}

	{#if showEnds}
		<Button
			tone="ghost"
			{size}
			onclick={() => goToPage(totalPages)}
			disabled={page === totalPages}
			aria-label="Go to last page"
		>
			<Icon name="chevrons-right" size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
		</Button>
	{/if}
</nav>
