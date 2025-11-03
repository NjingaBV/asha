<script lang="ts">
	import Card from '$lib/components/molecules/Card/Card.svelte';
	import type { CardType } from '$lib/models';

	const name = 'carousel';

	let {
		title = '',
		category = '',
		overview = '',
		color = '#6b6b6b',
		cards = []
	}: {
		title: string;
		category: string;
		overview: string;
		color?: `#${string}`;
		cards?: Array<CardType>;
	} = $props();

	let onlyOneItem = $derived(cards.length === 1);
	let isEven = $derived(cards.length % 2 === 0);
</script>

<div class={['p-4', `${onlyOneItem && 'md:flex md:items-center md:justify-between'}`].join(' ')}>
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
	<ul class={['flex gap-4 w-full', 'overflow-x-auto snap-x', 'no-scrollbar'].join(' ')}>
		{#each cards as card, i (i)}
			<li
				class={[
					'flex-none',
					`${onlyOneItem ? 'w-full' : 'w-10/12'}`,
					`${isEven ? 'lg:w-[39%]' : 'lg:w-[35%]'}`,
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
