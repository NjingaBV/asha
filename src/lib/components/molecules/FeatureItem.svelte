<script lang="ts">
	let {
		title = '',
		description = '',
		icon = null,
		children
	}: {
		title?: string;
		description?: string;
		icon?: string | null;
		children?: any;
	} = $props();
</script>

<div class="flex items-start gap-3">
	{#if icon}
		<svg class="h-6 w-6 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor">
			<path d={icon} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	{/if}
	<div>
		<h4 class="text-lg font-semibold">{title}</h4>
		<p class="text-fg-muted text-sm">{description}</p>
	</div>
	{@render children?.()}
</div>
