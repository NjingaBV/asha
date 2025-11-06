<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Heading from '$lib/components/atoms/Heading/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph/Paragraph.svelte';

	let {
		title = undefined,
		subtitle = undefined,
		description = undefined,
		primaryAction = undefined,
		secondaryAction = undefined,
		backgroundImage = undefined,
		overlay = true,
		className = ''
	}: {
		title?: string;
		subtitle?: string;
		description?: string;
		primaryAction?: { label: string; href?: string; onClick?: () => void };
		secondaryAction?: { label: string; href?: string; onClick?: () => void };
		backgroundImage?: string;
		overlay?: boolean;
		className?: string;
	} = $props();
</script>

<section class={['relative py-16 lg:py-24', className].filter(Boolean).join(' ')}>
	<!-- Background -->
	{#if backgroundImage}
		<div class="absolute inset-0">
			<img src={backgroundImage} alt="" class="w-full h-full object-cover" />
			{#if overlay}
				<div class="absolute inset-0 bg-black/40"></div>
			{/if}
		</div>
	{/if}

	<!-- Content -->
	<div class="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
		<!-- Title -->
		{#if title}
			<Heading
				level={2}
				size="4xl"
				weight="bold"
				class={`mb-4 ${backgroundImage ? 'text-white' : 'text-slate-900'}`}
			>
				{title}
			</Heading>
		{/if}

		<!-- Subtitle -->
		{#if subtitle}
			<Heading
				level={3}
				size="xl"
				weight="medium"
				class={`mb-6 ${backgroundImage ? 'text-white/90' : 'text-slate-600'}`}
			>
				{subtitle}
			</Heading>
		{/if}

		<!-- Description -->
		{#if description}
			<Paragraph
				size="lg"
				color={backgroundImage ? 'text-white/80' : 'text-slate-600'}
				leading="relaxed"
				class="mb-8 max-w-2xl mx-auto"
			>
				{description}
			</Paragraph>
		{/if}

		<!-- Actions -->
		<div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
			{#if primaryAction}
				<Button
					variant="solid"
					tone="primary"
					size="large"
					class={backgroundImage ? 'bg-white text-slate-900 hover:bg-gray-50' : ''}
					onClick={primaryAction.onClick}
				>
					{primaryAction.label}
				</Button>
			{/if}

			{#if secondaryAction}
				<Button
					variant="ghost"
					tone={backgroundImage ? 'neutral' : 'secondary'}
					size="large"
					class={backgroundImage ? 'text-white border-white hover:bg-white/10' : ''}
					onClick={secondaryAction.onClick}
				>
					{secondaryAction.label}
				</Button>
			{/if}
		</div>
	</div>
</section>
