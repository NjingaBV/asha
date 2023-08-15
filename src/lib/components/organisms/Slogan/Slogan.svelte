<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';

	export let cta: { url: string; label: string; color: string };
	export let backgroundColor: `#${string}`;
	export let slogans: Array<{ title: string; subtitle: string }> = [];
</script>

<section class="bg text-slate-100" style="--bg-color: {backgroundColor}">
	<div
		class="container mx-auto flex flex-col md:flex-row py-12 items-center space-y-6 md:space-y-0"
	>
		<div
			class="md:w-4/5 font-sans flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6"
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
		<div class="md:w-1/5">
			<Button color={cta.color} size="large" onClick={() => (location.href = cta.url)}>
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
