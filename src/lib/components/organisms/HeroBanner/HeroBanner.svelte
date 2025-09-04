<script lang="ts">
	import { Eyebrow } from '$lib/components/atoms';
	import { CTAGroup } from '$lib/components/molecules';

	export let eyebrow: string | null = null;
	export let title: string;
	export let subtitle: string | null = null;
	export let image: { src: string; alt: string } | null = null;
	export let primaryCTA: { label: string; href?: string } | null = null;
	export let secondaryCTA: { label: string; href?: string } | null = null;
	export let background: string = '#000000';
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
