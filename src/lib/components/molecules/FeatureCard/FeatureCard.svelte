<script lang="ts">
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';

	let {
		title = '',
		description = '',
		image = '',
		imageAlt = '',
		imagePosition = 'right',
		icon = undefined,
		badge = undefined,
		class: className = undefined
	}: {
		title: string;
		description: string;
		image: string;
		imageAlt?: string;
		imagePosition?: 'left' | 'right';
		icon?: string;
		badge?: string;
		class?: string;
	} = $props();

	// Apple Watch inspired layout
	let cardClasses = $derived(
		['bg-white rounded-2xl overflow-hidden shadow-sm', className].filter(Boolean).join(' ')
	);
	const gridClasses = 'grid lg:grid-cols-2 min-h-[480px] lg:min-h-[520px]';
	let contentClasses = $derived(
		'p-8 md:p-12 lg:p-14 flex flex-col justify-center ' +
			(imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1')
	);
	let imageClasses = $derived(
		'relative h-64 md:h-80 lg:h-full ' +
			(imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2')
	);
</script>

<div class={cardClasses}>
	<div class={gridClasses}>
		<!-- Content -->
		<div class={contentClasses}>
			<!-- Badge -->
			{#if badge}
				<div class="mb-5">
					<span
						class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-50 text-blue-700"
					>
						{badge}
					</span>
				</div>
			{/if}

			<!-- Icon -->
			{#if icon}
				<div class="mb-8">
					<div class="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
						<Icon name={icon} size="lg" color="#0099cc" />
					</div>
				</div>
			{/if}

			<!-- Title -->
			<Heading
				level={2}
				size="4xl"
				weight="black"
				class="text-slate-900 mb-5 md:mb-6 leading-tight"
			>
				{title}
			</Heading>

			<!-- Description -->
			<Paragraph
				size="lg"
				color="text-slate-600"
				leading="relaxed"
				class="mb-0 text-base md:text-lg"
			>
				{description}
			</Paragraph>
		</div>

		<!-- Image -->
		<div class={imageClasses}>
			<img src={image} alt={imageAlt || title} class="w-full h-full object-cover" />
			<!-- Overlay gradient for better text readability if needed -->
			<div
				class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent lg:hidden"
			></div>
		</div>
	</div>
</div>
