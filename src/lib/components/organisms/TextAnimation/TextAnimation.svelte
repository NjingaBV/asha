<script lang="ts">
	export let labels: Array<{ title: string; color: string }>;
</script>

<section class="relative pt-20 sm:pt-24 lg:pt-32 px-4 sm:px-6 md:px-8">
	<h1 class="font-extrabold text-center text-5xl md:text-8xl leading-none tracking-tighter mb-16">
		{#each labels as label, index (index)}
			<span
				class="relative block bg-clip-text text-transparent animate-blink txt-color"
				style="--txt-color: {label.color};  animation-delay: {index}s;"
			>
				{label.title}
			</span>
		{/each}
	</h1>
</section>

<style>
	.txt-color {
		color: var(--txt-color);
	}
</style>
