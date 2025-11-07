<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import type { ImageType } from '$lib/models';

	let {
		title = '',
		overview = '',
		details = '',
		imgSrc = undefined,
		callToActions = [],
		backgroundColor = '#ffffff',
		onLineClampToggle = () => {}
	}: {
		title: string;
		overview: string;
		details: string;
		imgSrc: ImageType | undefined;
		callToActions: Array<{ label: string; url: string; icon: string; color: string }>;
		backgroundColor: `#${string}`;
		onLineClampToggle?: (enabled: boolean) => void;
	} = $props();

	let lineClampEnabled = $state(true);
	let lines = $state(5);

	let truncated = $derived(overview && overview.length > lines * 50);

	const toggleLineClamp = () => {
		if (truncated) {
			lineClampEnabled = !lineClampEnabled;
			onLineClampToggle(lineClampEnabled);
		}
	};

	let regex = $derived(
		/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(backgroundColor) as RegExpExecArray
	);
	let rgb = $derived(
		regex.slice(1).reduce((acc: string[], val, i) => {
			acc[i] = `${parseInt(val, 16)}`;
			return acc;
		}, []) || []
	);

	let brightness = $derived(
		Math.round(
			(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
		)
	);

	let textColor = $derived(brightness > 125 ? '#000000' : '#ffffff');
	let hasDetails = $derived(Boolean(title || details));
</script>

<div
	class={[
		'relative w-screen',
		`${imgSrc ? 'aspect-[9/13] md:aspect-[16/9]' : 'aspect-square md:aspect-[16/9]'}`
	].join(' ')}
	style="--text-color: {textColor}"
>
	{#if imgSrc}
		<picture>
			<source media="(min-width: 950px)" srcset={imgSrc.desktop} />
			<source media="(min-width: 650px)" srcset={imgSrc.tablet} />
			<img
				src={imgSrc.mobile}
				alt={title}
				loading="lazy"
				class={['absolute inset-0 object-cover object-top', 'h-full w-full']}
			/>
		</picture>
	{/if}
	<div
		class={[
			`absolute bottom-0  w-full bg-gradient-to-t z-10 flex flex-col`,
			`${hasDetails ? 'h-2/5 md:h-3/5' : 'h-2/5'}`,
			`[background:linear-gradient(to_top,var(--bg-color),var(--bg-color),rgb(15_23_42_/_0))]`
		].join(' ')}
		style="--bg-color: {backgroundColor}"
	></div>
	<div
		class="flex flex-col items-center absolute bottom-0 left-0 right-0 w-full md:w-auto md:left-1/2 md:transform md:-translate-x-1/2 md:max-w-2xl lg:max-w-4xl px-6 md:px-8 lg:px-12 py-8 md:py-10 lg:py-16 pb-12 md:pb-16 h-fit z-20 gap-6 md:gap-8"
		style="color: var(--text-color);"
	>
		{#if details}
			<div
				class="inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase bg-white/10 backdrop-blur-sm"
			>
				<span class="text-color opacity-90">{details}</span>
			</div>
		{/if}
		{#if title}
			<h1
				class="text-color text-center font-black text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl"
			>
				{title}
			</h1>
		{/if}
		{#if overview}
			<p
				class={`text-color text-center font-light text-base md:text-lg leading-relaxed max-w-2xl opacity-95 ${
					lineClampEnabled && 'line-clamp-4'
				}`}
			>
				{overview}
			</p>
			{#if truncated}
				<button
					onclick={toggleLineClamp}
					class="mt-2 text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity duration-300"
				>
					{lineClampEnabled ? 'Lire plus' : 'Réduire'}
				</button>
			{/if}
		{/if}
		{#if callToActions}
			<div
				class="w-full flex flex-col md:flex-row justify-center gap-4 md:gap-6 pt-4 md:pt-2"
			>
				{#each callToActions as cta, i (i)}
					<div class="transform transition-transform duration-300 hover:scale-105">
						<Button
							color={cta.color}
							size="large"
							onClick={() => (location.href = cta.url)}
						>
							<div class="flex items-center gap-3 text-base md:text-lg">
								{#if cta.icon}
									<svg
										class="flex-none stroke-[2] h-5 w-5 md:h-6 md:w-6"
										stroke-width="2"
										viewBox="0 0 50 50"
									>
										<path d={cta.icon} />
									</svg>
								{/if}
								<span>{cta.label}</span>
							</div>
						</Button>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	:global(.text-color) {
		color: var(--text-color);
		transition: color 300ms ease;
	}

	/* Smooth scroll momentum on iOS */
	@supports (backdrop-filter: blur(1px)) {
		:global(div[class*='backdrop-blur']) {
			-webkit-backdrop-filter: blur(8px);
		}
	}
</style>
