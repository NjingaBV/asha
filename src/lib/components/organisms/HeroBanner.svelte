<script lang="ts">
	import Eyebrow from '$lib/components/atoms/Eyebrow.svelte';
	import CTAGroup from '$lib/components/molecules/CTAGroup.svelte';

	let {
		eyebrow = null,
		title = '',
		subtitle = null,
		image = null,
		primaryCTA = null,
		secondaryCTA = null,
		background = '#000000'
	}: {
		eyebrow?: string | null;
		title: string;
		subtitle?: string | null;
		image?: { src: string; alt: string } | null;
		primaryCTA?: { label: string; href?: string } | null;
		secondaryCTA?: { label: string; href?: string } | null;
		background?: string;
	} = $props();
</script>

<section class="relative w-full overflow-hidden" style={`background:${background}`}>
	<div class="container mx-auto px-6 py-16 md:py-24 text-center text-white">
		{#if eyebrow}
			<Eyebrow text={eyebrow} />
		{/if}
		<h1 class="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">{title}</h1>
		{#if subtitle}
			<p class="mt-4 text-lg md:text-xl text-slate-200">{subtitle}</p>
		{/if}
		<div class="mt-8">
			<CTAGroup
				align="center"
				primary={primaryCTA && {
					label: primaryCTA.label,
					href: primaryCTA.href,
					tone: 'primary'
				}}
				secondary={secondaryCTA && {
					label: secondaryCTA.label,
					href: secondaryCTA.href,
					tone: 'secondary'
				}}
			/>
		</div>
	</div>
	{#if image}
		<img src={image.src} alt={image.alt} class="mx-auto max-w-5xl w-full object-contain" />
	{/if}
</section>