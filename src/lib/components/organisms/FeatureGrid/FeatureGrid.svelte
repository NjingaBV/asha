<script lang="ts">
	import { FeatureItem } from '$lib/components/molecules';
	export let items: Array<{ title: string; description: string; icon?: string }> = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
	{#each items as f}
		<div class="p-4 rounded-[30px] bg-slate-50">
			<FeatureItem title={f.title} description={f.description} icon={f.icon ?? null} />
		</div>
	{/each}
</div>
