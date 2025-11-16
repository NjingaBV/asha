<script lang="ts">
	import MacSpecChip from '$lib/components/atoms/MacSpecChip.svelte';
	import type { MacSpec } from '$lib/models';

	interface Props {
		specs?: MacSpec[];
		tone?: 'light' | 'dark';
	}

	let { specs = [], tone = 'light' }: Props = $props();
</script>

{#if specs.length > 0}
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
		{#each specs as spec}
			<MacSpecChip label={spec.label} value={spec.value} emphasize={spec.emphasize} {tone} />
		{/each}
	</div>
{/if}
