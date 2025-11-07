<script lang="ts">
	import Card from '$lib/components/molecules/Card/Card.svelte';
	import type { CardType } from '$lib/models';

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

<div
	class={[
		'px-4 md:px-6 lg:px-8',
		`${onlyOneItem && 'md:flex md:items-center md:justify-between'}`
	].join(' ')}
>
	{#if title}
		<div class="mb-8 md:mb-12 lg:mb-14 max-w-3xl">
			{#if category}
				<h5
					class="text-sm md:text-xs font-semibold tracking-widest uppercase letter-spacing category-color opacity-80 mb-3 md:mb-4"
					style="--text-color: {color};"
				>
					{category}
				</h5>{/if}
			<h2
				class="font-black text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-4 md:mb-6"
			>
				{title}
			</h2>
			{#if overview}
				<p
					class="text-base md:text-lg lg:text-xl leading-relaxed text-opacity-75 max-w-2xl"
				>
					{overview}
				</p>
			{/if}
		</div>
	{/if}
	<ul
		class={[
			'flex gap-5 md:gap-6 lg:gap-8 w-full',
			'overflow-x-auto snap-x',
			'no-scrollbar',
			`${title ? 'pb-4 md:pb-6' : ''}`
		].join(' ')}
	>
		{#each cards as card, i (i)}
			<li
				class={[
					'flex-none',
					`${onlyOneItem ? 'w-full' : 'w-[90%] md:w-[calc(50%-12px)]'}`,
					`${isEven ? 'lg:w-[calc(50%-16px)]' : 'lg:w-[calc(33.33%-16px)]'}`,
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
		letter-spacing: 0.08em;
		text-transform: uppercase;
		font-size: 0.75rem;
	}

	:global(.carousel-list) {
		scroll-behavior: smooth;
		scroll-padding-inline: 1rem;
	}

	:global(ul[class*='no-scrollbar']) {
		scroll-snap-type: x mandatory;
		scroll-snap-stop: auto;
	}

	/* Smooth scroll momentum on iOS */
	@supports (scroll-snap-type: x mandatory) {
		:global(ul[class*='no-scrollbar']) {
			-webkit-overflow-scrolling: touch;
		}
	}
</style>
