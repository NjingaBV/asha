<script lang="ts">
	import Card from '$lib/components/molecules/Card/Card.svelte';
	import type { CardType } from '$lib/models';
	export let title: string;
	export let category: string;
	export let overview: string;
	export let size: 'sm' | 'md' | 'lg' = 'lg';
	export let color: `#${string}` = '#6b6b6b';
	export let cards: Array<CardType> = [];
	$: onlyOneItem = cards.length === 1;
	$: isEven = cards.length % 2 === 0;
</script>

<div class="p-4">
	{#if title}
		{#if category}<h5
				class="font-black text-base tracking-tighter category-color"
				style="--text-color: {color};"
			>
				{category}
			</h5>{/if}
		<h2 class="font-black text-3xl md:text-4xl mb-5 md:mb-7">{title}</h2>
		{#if overview}<p class="text-base md:text-lg mb-5">{overview}</p>{/if}
	{/if}
	<ul
		class={['flex gap-4 w-full', `${isEven && 'lg:flex-wrap'}`, 'overflow-x-auto snap-x'].join(' ')}
	>
		{#each cards as card}
			<li
				class={[
					'flex-none h-full',
					`${onlyOneItem ? 'w-full' : 'w-10/12'}`,
					`${isEven ? 'lg:w-[49%]' : 'lg:w-[45%]'}`,
					`${size == 'sm' && 'lg:w-[25%]'}`,
					`${size == 'md' && 'lg:w-[35%]'}`,
					'snap-center md:snap-none'
				].join(' ')}
			>
				<Card {...card} />
			</li>
		{/each}
	</ul>
</div>

<style>
	.category-color {
		color: var(--text-color);
	}
</style>
