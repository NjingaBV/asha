<script lang="ts">
	import Button from '$lib/atoms/Button/Button.svelte';
	import type { IImage } from '@djfacemaker/core';

	export let title: string;
	export let subtitle: string;
	export let overview: string;
	export let imgSrc: IImage;
	export let buttonName: string;
	export let buttonLink: string;
	export let backgroundColor: `#${string}`;

	$: withDetails = Boolean(overview || buttonName || buttonLink);
</script>

<div
	class={`relative ${
		withDetails && imgSrc ? 'aspect-[9/16] md:aspect-[4/3]' : 'aspect-square'
	} max-h-screen border rounded-xl`}
>
	<div class="flex flex-col h-full">
		<div class="relative h-full w-full rounded-xl" style={`background-color:${backgroundColor};`}>
			{#if imgSrc}
				<picture>
					{#if imgSrc.desktop}<source media="(min-width: 950px)" srcset={imgSrc.desktop} />{/if}
					{#if imgSrc.tablet}<source media="(min-width: 650px)" srcset={imgSrc.tablet} />{/if}
					<img
						src={imgSrc.mobile}
						alt={title}
						loading="lazy"
						class={[
							'absolute inset-0 object-cover object-center md:object-top',
							'mix-blend-screen rounded-xl aspect-[9/16] md:aspect-[4/3]',
							`${withDetails ? 'aspect-[9/16] md:aspect-[4/3]' : 'aspect-square'}`
						].join(' ')}
					/>
				</picture>
			{/if}
		</div>
		{#if withDetails || title}
			<div
				class={[
					'absolute w-full h-fit bottom-0',
					`bg-gradient-to-t from-stone-900 ${withDetails && imgSrc && 'via-stone-900'}`,
					'p-4 rounded-b-xl flex flex-col'
				].join(' ')}
			>
				{#if subtitle}
					<h4 class="text-slate-100 text-lg text-left font-black">
						{subtitle}
					</h4>
				{/if}
				{#if title}
					<h2 class={`text-slate-100 text-3xl md:text-4xl mb-4 ${subtitle ? 'text-left' : 'text-center'} font-black`}>
						{title}
					</h2>
				{/if}
				{#if overview}
					<h3 class="text-stone-100 font-thin text-left mb-4 line-clamp-5">
						{overview}
					</h3>
				{/if}
				{#if buttonName && buttonLink}
					<div class=" w-3/4 self-center">
						<a href={buttonLink}>
							<Button color={backgroundColor} rounded={true}>{buttonName}</Button>
						</a>
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
