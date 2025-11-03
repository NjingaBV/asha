<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Heading from '$lib/components/atoms/Heading/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph/Paragraph.svelte';

	// Backward compatibility props
	export let buttonBefore: boolean = true;
	export let overview: string | undefined = undefined;
	export let buttons:
		| Array<{
				label: string;
				url: string;
				backgroundColor: `#${string}`;
		  }>
		| undefined = undefined;

	// New Apple Watch inspired props
	export let title: string | undefined = undefined;
	export let subtitle: string | undefined = undefined;
	export let description: string | undefined = undefined;
	export let primaryAction: { label: string; href?: string; onClick?: () => void } | undefined =
		undefined;
	export let secondaryAction: { label: string; href?: string; onClick?: () => void } | undefined =
		undefined;
	export let backgroundImage: string | undefined = undefined;
	export let overlay: boolean = true;
	export let className: string = '';

	// Use new props if provided, fallback to old props
	$: actualTitle = title || overview || '';
	$: actualPrimaryAction =
		primaryAction ||
		(buttons && buttons.length > 0
			? {
					label: buttons[0].label,
					onClick: () => (buttons[0].url ? (location.href = buttons[0].url) : undefined)
				}
			: undefined);
	$: actualSecondaryAction =
		secondaryAction ||
		(buttons && buttons.length > 1
			? {
					label: buttons[1].label,
					onClick: () => (buttons[1].url ? (location.href = buttons[1].url) : undefined)
				}
			: undefined);
	$: sectionClasses = ['relative py-16 lg:py-24', className].filter(Boolean).join(' ');
</script>

{#if title || subtitle || description || primaryAction || secondaryAction}
	<!-- New Apple Watch style CTA -->
	<section class={sectionClasses}>
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
			{#if actualTitle}
				<Heading
					level={2}
					size="4xl"
					weight="bold"
					class={`mb-4 ${backgroundImage ? 'text-white' : 'text-slate-900'}`}
				>
					{actualTitle}
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
				{#if actualPrimaryAction}
					<Button
						variant="solid"
						tone="primary"
						size="large"
						class={backgroundImage ? 'bg-white text-slate-900 hover:bg-gray-50' : ''}
						onClick={actualPrimaryAction.onClick}
					>
						{actualPrimaryAction.label}
					</Button>
				{/if}

				{#if actualSecondaryAction}
					<Button
						variant="ghost"
						tone={backgroundImage ? 'neutral' : 'secondary'}
						size="large"
						class={backgroundImage ? 'text-white border-white hover:bg-white/10' : ''}
						onClick={actualSecondaryAction.onClick}
					>
						{actualSecondaryAction.label}
					</Button>
				{/if}
			</div>
		</div>
	</section>
{:else}
	<!-- Backward compatibility -->
	<div class="relative max-w-5xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
		{#if overview && !buttonBefore}
			<div
				class="max-w-lg mx-auto text-xl font-medium leading-tight text-center text-slate-600 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl"
			>
				{overview}
			</div>
		{/if}
		<div
			class="flex flex-auto flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 text-xl"
		>
			{#each buttons || [] as button (button.url)}
				<Button
					color={button.backgroundColor}
					onClick={() => (location.href = button.url)}
					size="large"
				>
					{button.label}
				</Button>
			{/each}
		</div>
		{#if overview && buttonBefore}
			<div
				class="max-w-lg mx-auto mt-6 text-xl font-medium leading-tight text-center text-slate-600 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl"
			>
				{overview}
			</div>
		{/if}
	</div>
{/if}
