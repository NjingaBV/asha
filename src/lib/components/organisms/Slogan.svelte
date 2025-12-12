<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';

	let {
		cta = { url: '', label: '', color: '', onClick: undefined },
		backgroundColor = '#000000',
		slogans = []
	}: {
		cta: { url: string; label: string; color: string; onClick?: () => void };
		backgroundColor: `#${string}`;
		slogans?: Array<{ title: string; subtitle: string }>;
	} = $props();
</script>

<section class="bg text-fg-inverse" style="--bg-color: {backgroundColor}">
	<div
		class="container mx-auto flex flex-col md:flex-row p-12 items-center justify-between space-y-4 md:space-y-0"
	>
		<div
			class="flex flex-col md:flex-row font-sans justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-4"
		>
			{#each slogans as slogan (slogan.title)}
				<div>
					<div class="font-extrabold text-4xl md:text-2xl lg:text-4xl">
						{slogan.title}
					</div>
					<div class="font-light text-base text-fg-inverse/60">
						{slogan.subtitle}
					</div>
				</div>
			{/each}
		</div>
		<div>
			<a href={cta.url || '#'} class="contents">
				<Button size="lg" tone="primary" onclick={cta.onClick}>
					{cta.label}
				</Button>
			</a>
		</div>
	</div>
</section>

<style>
	.bg {
		background-color: var(--bg-color);
	}
</style>
