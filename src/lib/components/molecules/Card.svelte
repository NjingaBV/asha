<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Linkable from '$lib/components/atoms/Linkable.svelte';
	import type { ImageType } from '$lib/models';

	let {
		title = '',
		subtitle = '',
		overview = '',
		imgSrc,
		buttonName = '',
		buttonLink = '',
		backgroundColor = '#000000',
		mixColor = false,
		textOnImage = true,
		rounded = true,
		isVideo = false
	}: {
		title?: string;
		subtitle?: string;
		overview?: string;
		imgSrc?: ImageType;
		buttonName?: string;
		buttonLink?: string;
		backgroundColor?: `#${string}`;
		mixColor?: boolean;
		textOnImage?: boolean;
		rounded?: boolean;
		isVideo?: boolean;
	} = $props();

	let isLinkable = $derived(Boolean(!buttonName && buttonLink));
</script>

<Linkable {isLinkable} link={buttonLink}>
	<div
		class="relative max-h-screen transition-transform duration-300 hover:scale-[1.02]"
		class:rounded-2xl={rounded}
		class:aspect-[4/5]={buttonName && imgSrc}
		class:aspect-video={!buttonName && imgSrc && isVideo}
		class:aspect-square={!buttonName && imgSrc && !isVideo}
	>
		<div class="flex flex-col h-full">
			<div
				class="bg relative h-full w-full"
				class:rounded-2xl={rounded}
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
							class="absolute inset-0 object-cover object-center md:object-top h-full w-full"
							class:mix-blend-screen={mixColor}
							class:rounded-2xl={rounded}
						/>
					</picture>
				{/if}
			</div>
			{#if (buttonName || title) && textOnImage}
				<div
					class="absolute w-full h-fit bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent p-6 md:p-8 flex flex-col gap-3"
					class:rounded-b-2xl={rounded}
				>
					{#if subtitle}
						<p
							class="text-slate-200 text-sm md:text-base font-semibold tracking-wide uppercase opacity-90"
						>
							{subtitle}
						</p>
					{/if}
					{#if title}
						<h2
							class="text-white text-2xl md:text-4xl lg:text-5xl font-black leading-tight"
							class:text-left={subtitle}
							class:text-center={!subtitle}
						>
							{title}
						</h2>
					{/if}
					{#if overview}
						<p
							class="text-slate-300 font-light text-left text-sm md:text-base leading-relaxed line-clamp-4 opacity-90"
						>
							{overview}
						</p>
					{/if}
					{#if buttonName && buttonLink}
						<div class="mt-2 w-11/12 self-center">
							<Button
								color={backgroundColor}
								rounded={true}
								fullWidth={true}
								href={buttonLink}
							>
								{buttonName}
							</Button>
						</div>
					{/if}
				</div>
			{/if}
		</div>
	</div>
</Linkable>
{#if (buttonName || title) && !textOnImage}
	<div class="p-6 md:p-8 rounded-b-2xl flex flex-col gap-3 bg-surface">
		{#if subtitle}
			<p class="text-slate-600 text-sm md:text-base font-semibold tracking-wide uppercase">
				{subtitle}
			</p>
		{/if}
		{#if title}
			<h2
				class="text-text text-xl md:text-2xl lg:text-3xl font-black leading-tight"
				class:text-left={subtitle}
				class:text-center={!subtitle}
			>
				{title}
			</h2>
		{/if}
		{#if overview}
			<p
				class="text-slate-600 font-light text-left text-sm md:text-base leading-relaxed line-clamp-4"
			>
				{overview}
			</p>
		{/if}
		{#if buttonName && buttonLink}
			<div class="mt-2 w-11/12 self-center">
				<Button
					color={backgroundColor}
					rounded={true}
					fullWidth={true}
					href={buttonLink}
				>
					{buttonName}
				</Button>
			</div>
		{/if}
	</div>
{/if}

<style>
	.bg {
		background-color: var(--bg-color);
	}
</style>
