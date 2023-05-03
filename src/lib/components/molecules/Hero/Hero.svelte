<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import type { ImageType } from '$lib/models';

	export let title: string;
	export let overview: string;
	export let details: string;
	export let imgSrc: ImageType;
	export let ctaLabel: string;
	export let ctaEventName: string;
	export let ctaUrl: string;
	export let ctaIcon: string;
	export let backgroundColor: `#${string}` = '#000000';

	const dispatch = createEventDispatcher();

	let lineClampEnabled = true;
	let lines = 5;

	$: truncated = overview && overview.length > lines * 50;

	const toggleLineClamp = () => {
		if (truncated) {
			lineClampEnabled = !lineClampEnabled;
			dispatch('lineClampToggled', { lineClampEnabled });
		}
	};

	$: regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(backgroundColor) as RegExpExecArray;
	$: rgb =
		regex.slice(1).reduce((acc: string[], val, i) => {
			acc[i] = `${parseInt(val, 16)}`;
			return acc;
		}, []) || [];

	$: brightness = Math.round(
		(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
	);

	$: textColor = brightness > 125 ? '#000000' : '#ffffff';
	$: hasDetails = Boolean(title || details);

	const onClick = (event: Event) => {
		dispatch(ctaEventName, { url: ctaUrl, event });
	};
</script>

<div
	class={['relative aspect-[9/13] md:aspect-[16/9] w-full'].join(' ')}
	style="--text-color: {textColor}"
>
	<picture>
		<source media="(min-width: 950px)" srcset={imgSrc.desktop} />
		<source media="(min-width: 650px)" srcset={imgSrc.tablet} />
		<img
			src={imgSrc.mobile}
			alt={title}
			loading="lazy"
			class={['absolute inset-0 object-cover object-top', 'h-full w-full'].join(' ')}
		/>
	</picture>
	<div
		class={[
			`absolute bottom-0  w-full bg-gradient-to-t z-10 flex flex-col`,
			`${hasDetails ? 'h-3/4' : 'h-2/5'}`
		].join(' ')}
		style="--tw-gradient-stops: {backgroundColor}, {backgroundColor}, rgb(15 23 42 / 0)"
	/>
	<div
		class="flex flex-col items-center absolute bottom-0 md:w-1/3 p-4 h-fit z-20 gap-4"
		style="color: var(--text-color);"
	>
		{#if title}
			<h1 class="text-color text-center font-black text-3xl md:text-6xl">
				{title}
			</h1>
		{/if}
		{#if details}<h3 class="text-color text-xs opacity-80">{details}</h3>{/if}
		{#if ctaLabel}
			<div class="w-1/2 md:w-full">
				<Button color="#ffffff" size="large" {onClick}>
					<h3 class="flex items-center gap-2 text-xl">
						{#if ctaIcon}
							<svg
								class="flex-none stroke-[5] h-6 w-6"
								stroke-width="2"
								viewBox="0 0 50 50"
							>
								<path d={ctaIcon} />
							</svg>
						{/if}
						<span>{ctaLabel}</span>
					</h3>
				</Button>
			</div>
		{/if}
		{#if overview}
			<button
				class={`relative flex flex-col ${!truncated && 'cursor-default'}`}
				on:click={toggleLineClamp}
			>
				<p
					class={`flex-1 text-color text-justify font-light ${
						lineClampEnabled && 'line-clamp-5'
					}`}
				>
					{overview}
				</p>
			</button>
		{/if}
	</div>
</div>
