<script lang="ts">
	export let title = '';
	export let subtitle = '';
	export let imgUrl = '';
	export let imgAlt = '';
	export let showTitle = false;
</script>

<div class="flex flex-col w-full py-2">
	<div class="flex items-center justify-start">
		{#if imgUrl}
			<div class="h-full flex items-center">
				<img src={imgUrl} alt={imgAlt || title} class="h-10" loading="lazy" />
			</div>
		{/if}
		{#if showTitle && title}
			<div>
				<h1 class="font-semibold uppercase text-4xl tracking-tighter">{title}</h1>
			</div>
		{/if}
	</div>
	{#if subtitle}
		<div class="flex items-center">
			<p class="text-xs font-thin font-[Lato]">{subtitle}</p>
		</div>
	{/if}
</div>
