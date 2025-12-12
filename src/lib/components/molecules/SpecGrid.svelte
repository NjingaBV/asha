<script lang="ts">
	import Chip from '$lib/atoms/Chip.svelte';
	import type { MacSpec } from 'src/lib/models';

	interface Props {
		specs?: MacSpec[];
		tone?: 'light' | 'dark';
	}

	let { specs = [], tone = 'light' }: Props = $props();
</script>

{#if specs.length > 0}
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
		{#each specs as spec}
			<Chip label={spec.label} value={spec.value} emphasize={spec.emphasize} {tone} />
		{/each}
	</div>
{/if}
