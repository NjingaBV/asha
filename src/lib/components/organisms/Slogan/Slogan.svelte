<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';

	export let cta: { url: string; label: string; color: string };
	export let backgroundColor: `#${string}`;
	export let slogans: Array<{ title: string; subtitle: string }> = [];
</script>

<section class="bg text-slate-100" style="--bg-color: {backgroundColor}">
	<div
		class="container mx-auto flex flex-col md:flex-row p-12 items-center justify-between space-y-4 md:space-y-0"
	>
		<div
			class="flex flex-col md:flex-row font-sans justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-4"
		>
			{#each slogans as slogan}
				<div>
					<div class="font-extrabold text-4xl md:text-2xl lg:text-4xl">
						{slogan.title}
					</div>
					<div class="font-light text-base text-slate-400">
						{slogan.subtitle}
					</div>
				</div>
			{/each}
		</div>
		<div>
			<Button color={cta.color} size="large" onclick={() => (location.href = cta.url)}>
				{cta.label}
			</Button>
		</div>
	</div>
</section>

<style>
	.bg {
		background-color: var(--bg-color);
	}
</style>
