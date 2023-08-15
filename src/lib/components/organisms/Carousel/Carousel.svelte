<script lang="ts">
	import Card from '$lib/components/molecules/Card/Card.svelte';
	import type { CardType } from '$lib/models';
	export const name = 'carousel';
	export let title: string;
	export let category: string;
	export let overview: string;
	export let color: `#${string}` = '#6b6b6b';
	export let cards: Array<CardType> = [];
	$: onlyOneItem = cards.length === 1;
	$: isEven = cards.length % 2 === 0;
</script>

<section
	class={['p-4', `${onlyOneItem && 'md:flex md:items-center md:justify-between'}`].join(' ')}
>
	{#if title}
		<div>
			{#if category}
				<h5
					class="font-black text-base tracking-tighter category-color"
					style="--text-color: {color};"
				>
					{category}
				</h5>{/if}
			<h2 class="font-black text-3xl md:text-4xl mb-5 md:mb-7">{title}</h2>
			{#if overview}
				<p class="text-base md:text-lg mb-5">{overview}</p>
			{/if}
		</div>
	{/if}
	<ul
		class={['flex gap-4 w-full', 'overflow-x-auto snap-x', `${isEven && 'lg:flex-wrap'}`].join(
			' '
		)}
	>
		{#each cards as card}
			<li
				class={[
					'flex-none h-full',
					`${onlyOneItem ? 'w-full' : 'w-10/12'}`,
					`${isEven ? 'lg:w-[39%]' : 'lg:w-[35%]'}`,
					'snap-center md:snap-none'
				].join(' ')}
			>
				<Card {...card} />
			</li>
		{/each}
	</ul>
</section>

<style>
	.category-color {
		color: var(--text-color);
	}
</style>
