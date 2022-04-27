<script lang="ts">
	import Button from '$lib/atoms/Button/Button.svelte';
	import type { IImage } from '@djfacemaker/core';

	export let title: string;
	export let overview: string;
	export let details: string;
	export let imgSrc: IImage;
	export let backgroundColor: `#${string}` = '#000000';

	const play = 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z';

	$: rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
		.exec(backgroundColor)
		.slice(1)
		.reduce((acc, val, i) => {
			acc[i] = parseInt(val, 16);
			return acc;
		}, []);

	$: brightness = Math.round(
		(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
	);

	$: textColor = brightness > 125 ? '#000000' : '#ffffff';
</script>

<div class={['relative aspect-[9/13] md:aspect-[16/9] w-full'].join(' ')} style="--text-color: {textColor}">
	<picture>
		<source media="(min-width: 950px)" srcset={imgSrc.desktop} />
		<source media="(min-width: 650px)" srcset={imgSrc.tablet} />
		<img
			src={imgSrc.mobile}
			alt={title}
			loading="lazy"
			class={[
				'absolute inset-0 object-cover object-top', 
				'aspect-[9/13] md:aspect-[16/9]'
			].join(' ')}
		/>
	</picture>
	<div
		class="absolute bottom-0 h-3/4 w-full bg-gradient-to-t z-10 flex flex-col"
		style="--tw-gradient-stops: {backgroundColor}, {backgroundColor}, rgb(15 23 42 / 0)"
	/>
	<div
		class="flex flex-col items-center md:items-start absolute bottom-0 w-full p-4 h-fit z-20 gap-4"
		style="color: var(--text-color);"
	>
		{#if title}<h1 class="text-color text-center font-black text-3xl md:text-6xl">{title}</h1>{/if}
		{#if details}<h3 class="text-color text-xs opacity-80">{details}</h3>{/if}
		<div class="w-1/2">
			<Button color="#ffffff" size="large">
				<h3 class="flex items-center gap-2 text-xl">
					<svg class="flex-none stroke-[5] h-6 w-6" stroke-width="2" viewBox="0 0 50 50">
						<path d={play} />
					</svg>
					<span>Regarder</span>
				</h3>
			</Button>
		</div>
		{#if overview}<p class="text-color font-light line-clamp-3">{overview}</p>{/if}
	</div>
</div>
