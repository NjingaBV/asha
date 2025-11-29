<script lang="ts">
	import { onMount } from 'svelte';

	let {
		labels = []
	}: {
		labels: Array<{ title: string; color: string }>;
	} = $props();

	let container: HTMLElement;
	let visible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visible = true;
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.2 }
		);

		if (container) {
			observer.observe(container);
		}

		return () => observer.disconnect();
	});

	function splitText(text: string) {
		return text.split(' ').map((word) => word.split(''));
	}
</script>

<section bind:this={container} class="relative px-4 pt-20 sm:px-6 sm:pt-24 md:px-8 lg:pt-32">
	<h1
		class="mb-16 text-center text-5xl font-extrabold leading-none tracking-tighter md:text-8xl"
		aria-label={labels.map((l) => l.title).join(' ')}
	>
		{#each labels as label, labelIndex (labelIndex)}
			<span class="block" style="--txt-color: {label.color}">
				{#each splitText(label.title) as word, wordIndex}
					<span class="inline-block whitespace-nowrap">
						{#each word as letter, letterIndex}
							<span
								class="inline-block {visible
									? 'animate-slide-down'
									: 'opacity-0'} txt-color transition-all duration-300 ease-out hover:font-bold hover:drop-shadow-[0_0_8px_var(--txt-color)]"
								style="animation-delay: {visible
									? labelIndex * 1000 + wordIndex * 200 + letterIndex * 60
									: 0}ms"
								aria-hidden="true"
							>
								{letter}
							</span>
						{/each}
					</span>
					{#if wordIndex < splitText(label.title).length - 1}
						<span class="inline-block">&nbsp;</span>
					{/if}
				{/each}
			</span>
		{/each}
	</h1>
</section>

<style>
	.txt-color {
		color: var(--txt-color);
	}

	@keyframes slide-down {
		0% {
			opacity: 0;
			transform: translateY(-100%);
			filter: blur(10px);
			clip-path: inset(0 0 100% 0);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
			filter: blur(0);
			clip-path: inset(0 0 0 0);
		}
	}

	.animate-slide-down {
		animation: slide-down 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	}

	/* Prefers-reduced-motion */
	@media (prefers-reduced-motion: reduce) {
		.animate-slide-down {
			animation: none;
			opacity: 1;
			transform: none;
			filter: none;
			clip-path: none;
		}
	}
</style>
