<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from '$lib/components/atoms/Button.svelte';

	interface FilterOption {
		label: string;
		value: string;
		count?: number;
	}

	interface FilterGroup {
		id: string;
		label: string;
		options: FilterOption[];
		multiple?: boolean;
	}

	interface Props {
		/** Filter groups to display */
		filters?: FilterGroup[];
		/** Currently selected filters */
		selected?: Record<string, string | string[]>;
		/** Layout direction */
		direction?: 'horizontal' | 'vertical';
		/** Show clear all button */
		showClear?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Filter change callback */
		onchange?: (filters: Record<string, string | string[]>) => void;
		/** Custom filter content */
		children?: Snippet;
	}

	let {
		filters = [],
		selected = $bindable({}),
		direction = 'horizontal',
		showClear = true,
		class: className = '',
		onchange,
		children
	}: Props = $props();

	function handleFilterChange(groupId: string, value: string, multiple: boolean) {
		if (multiple) {
			const current = (selected[groupId] as string[]) || [];
			const index = current.indexOf(value);
			if (index === -1) {
				selected[groupId] = [...current, value];
			} else {
				selected[groupId] = current.filter((v) => v !== value);
			}
		} else {
			selected[groupId] = selected[groupId] === value ? '' : value;
		}
		onchange?.(selected);
	}

	function clearAll() {
		selected = {};
		onchange?.(selected);
	}

	function isSelected(groupId: string, value: string): boolean {
		const groupValue = selected[groupId];
		if (Array.isArray(groupValue)) {
			return groupValue.includes(value);
		}
		return groupValue === value;
	}

	let hasActiveFilters = $derived(
		Object.values(selected).some((v) => (Array.isArray(v) ? v.length > 0 : v !== ''))
	);
</script>

<div
	class={[
		'flex gap-4 p-4 bg-bg-subtle rounded-xl',
		direction === 'vertical' ? 'flex-col' : 'flex-row flex-wrap items-center',
		className
	].join(' ')}
	role="search"
	aria-label="Filter options"
>
	{#if children}
		{@render children()}
	{:else}
		{#each filters as group}
			<div class={direction === 'vertical' ? 'space-y-2' : 'flex items-center gap-2'}>
				<span class="text-sm font-medium text-fg-muted">{group.label}:</span>
				<div class="flex flex-wrap gap-1">
					{#each group.options as option}
						<button
							type="button"
							class={[
								'px-3 py-1 text-sm rounded-full border transition-colors',
								isSelected(group.id, option.value)
									? 'bg-accent text-on-accent border-accent'
									: 'bg-bg border-border text-fg hover:border-accent'
							].join(' ')}
							onclick={() =>
								handleFilterChange(group.id, option.value, group.multiple ?? false)}
							aria-pressed={isSelected(group.id, option.value)}
						>
							{option.label}
							{#if option.count !== undefined}
								<span class="ml-1 text-xs opacity-70">({option.count})</span>
							{/if}
						</button>
					{/each}
				</div>
			</div>
		{/each}

		{#if showClear && hasActiveFilters}
			<Button tone="ghost" size="sm" onclick={clearAll}>Clear all</Button>
		{/if}
	{/if}
</div>
