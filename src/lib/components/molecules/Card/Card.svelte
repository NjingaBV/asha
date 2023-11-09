<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Linkable from '$lib/components/atoms/Linkable/Linkable.svelte';
	import type { ImageType } from '$lib/models';

	export let title: string;
	export let subtitle: string;
	export let overview: string;
	export let imgSrc: ImageType;
	export let buttonName: string;
	export let buttonLink: string;
	export let backgroundColor: `#${string}`;
	export let mixColor: boolean;
	export let textOnImage = true;
	export let rounded = true;
	export let isVideo = false;

	$: isLinkable = Boolean(!buttonName && buttonLink);
</script>

<Linkable {isLinkable} link={buttonLink}>
	<div
		class={[
			`relative max-h-screen ${rounded && 'rounded-[30px]'}`,
			`${
				buttonName && imgSrc
					? 'aspect-[9/16]'
					: `${isVideo ? 'aspect-video' : 'aspect-square'}`
			}`
		].join(' ')}
	>
		<div class="flex flex-col h-full">
			<div
				class={`bg relative h-full w-full ${rounded && 'rounded-[30px]'}`}
				style="--bg-color: {backgroundColor}"
			>
				{#if imgSrc}
					<picture>
						{#if imgSrc.desktop}<source
								media="(min-width: 950px)"
								srcset={imgSrc.desktop}
							/>{/if}
						{#if imgSrc.tablet}<source
								media="(min-width: 650px)"
								srcset={imgSrc.tablet}
							/>{/if}
						<img
							src={imgSrc.mobile}
							alt={title}
							loading="lazy"
							class={[
								`absolute inset-0 object-cover object-center md:object-top h-full w-full`,
								`${mixColor && 'mix-blend-screen'} ${rounded && 'rounded-[30px]'}`
							].join(' ')}
						/>
					</picture>
				{/if}
			</div>
			{#if (buttonName || title) && textOnImage}
				<div
					class={[
						'absolute w-full h-fit bottom-0',
						`bg-gradient-to-t from-stone-900 ${
							buttonName && imgSrc && 'via-stone-900'
						}`,
						`p-4 ${rounded && 'rounded-b-[30px]'} flex flex-col`
					].join(' ')}
				>
					{#if subtitle}
						<h4 class="text-slate-100 text-lg text-left font-black">
							{subtitle}
						</h4>
					{/if}
					{#if title}
						<h2
							class={`text-slate-100 text-xl md:text-4xl mb-4 ${
								subtitle ? 'text-left' : 'text-center'
							} font-black`}
						>
							{title}
						</h2>
					{/if}
					{#if overview}
						<h3
							class="text-stone-100 font-thin text-left md:text-center mb-4 line-clamp-5"
						>
							{overview}
						</h3>
					{/if}
					{#if buttonName && buttonLink}
						<div class=" w-3/4 self-center">
							<Button
								color={backgroundColor}
								rounded={true}
								onClick={() => (location.href = buttonLink)}>{buttonName}</Button
							>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</Linkable>
{#if (buttonName || title) && !textOnImage}
	<div class={['p-4 rounded-b-[30px] flex flex-col'].join(' ')}>
		{#if subtitle}
			<h4 class="text-slate-700 text-lg text-left font-black">
				{subtitle}
			</h4>
		{/if}
		{#if title}
			<h2
				class={`text-black text-lg md:text-2xl mb-4 ${
					subtitle ? 'text-left' : 'text-center'
				} font-black`}
			>
				{title}
			</h2>
		{/if}
		{#if overview}
			<h3 class="text-black font-thin text-left mb-4 line-clamp-5">
				{overview}
			</h3>
		{/if}
		{#if buttonName && buttonLink}
			<div class=" w-3/4 self-center">
				<Button
					color={backgroundColor}
					rounded={true}
					onClick={() => (location.href = buttonLink)}>{buttonName}</Button
				>
			</div>
		{/if}
	</div>
{/if}

<style>
	.bg {
		background-color: var(--bg-color);
	}
</style>
