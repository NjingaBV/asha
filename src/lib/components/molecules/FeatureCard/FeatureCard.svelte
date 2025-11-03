<script lang="ts">
	import Heading from '../../atoms/Heading/Heading.svelte';
	import Paragraph from '../../atoms/Paragraph/Paragraph.svelte';
	import Icon from '../../atoms/Icon/Icon.svelte';

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
	const gridClasses = 'grid lg:grid-cols-2 min-h-[400px]';
	let contentClasses = $derived(
		'p-8 lg:p-12 flex flex-col justify-center ' +
			(imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1')
	);
	let imageClasses = $derived(
		'relative ' + (imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2')
	);
</script>

<div class={cardClasses}>
	<div class={gridClasses}>
		<!-- Content -->
		<div class={contentClasses}>
			<!-- Badge -->
			{#if badge}
				<div class="mb-4">
					<span
						class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
					>
						{badge}
					</span>
				</div>
			{/if}

			<!-- Icon -->
			{#if icon}
				<div class="mb-6">
					<div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
						<Icon name={icon} size="lg" color="#2563eb" />
					</div>
				</div>
			{/if}

			<!-- Title -->
			<Heading level={2} size="3xl" weight="bold" class="text-slate-900 mb-4 leading-tight">
				{title}
			</Heading>

			<!-- Description -->
			<Paragraph size="lg" color="text-slate-600" leading="relaxed" class="mb-6">
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
