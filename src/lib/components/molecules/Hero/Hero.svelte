<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';
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
				class={['absolute inset-0 object-cover object-top', 'h-full w-full'].join(' ')}
			/>
		</picture>
	{/if}
	<div
		class={[
			`absolute bottom-0  w-full bg-gradient-to-t z-10 flex flex-col`,
			`${hasDetails ? 'h-3/4 md:h-3/5' : 'h-2/5'}`
		].join(' ')}
		style="--tw-gradient-stops: {backgroundColor}, {backgroundColor}, rgb(15 23 42 / 0)"
	></div>
	<div
		class="flex flex-col items-center absolute bottom-0 md:w-1/3 p-4 h-fit z-20 gap-4"
		style="color: var(--text-color);"
	>
		{#if title}
			<h1 class="text-color text-center font-black text-3xl md:text-5xl">
				{title}
			</h1>
		{/if}
		{#if details}<h3 class="text-color text-xs opacity-80">{details}</h3>{/if}
		{#if callToActions}
			<div
				class="w-full mt-6 sm:mt-10 flex flex-auto flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 text-xl"
			>
				{#each callToActions as cta, i (i)}
					<Button
						color={cta.color}
						size="large"
						onClick={() => (location.href = cta.url)}
					>
						<h3 class="flex items-center text-xl">
							{#if cta.icon}
								<svg
									class="flex-none stroke-[5] h-6 w-6"
									stroke-width="2"
									viewBox="0 0 50 50"
								>
									<path d={cta.icon} />
								</svg>
							{/if}
							<span>{cta.label}</span>
						</h3>
					</Button>
				{/each}
			</div>
		{/if}
		{#if overview}
			<button
				class={`relative flex flex-col ${!truncated && 'cursor-default'}`}
				onclick={toggleLineClamp}
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
