<script lang="ts">
	import Heading from '$lib/components/atoms/Heading/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph/Paragraph.svelte';
	import Button from '$lib/components/atoms/Button/Button.svelte';

	let {
		title = '',
		subtitle = '',
		description = '',
		image = '',
		imageAlt = '',
		colors = [],
		primaryAction = undefined,
		secondaryAction = undefined,
		badge = undefined,
		class: className = ''
	}: {
		title: string;
		subtitle: string;
		description: string;
		image: string;
		imageAlt: string;
		colors: string[];
		primaryAction: { label: string; href?: string; onClick?: () => void } | undefined;
		secondaryAction: { label: string; href?: string; onClick?: () => void } | undefined;
		badge: string | undefined;
		class?: string;
	} = $props();

	const colorMap: Record<string, string> = {
		noir: 'bg-black',
		blanc: 'bg-white',
		rouge: 'bg-red-500',
		bleu: 'bg-blue-500',
		vert: 'bg-green-500',
		jaune: 'bg-yellow-500',
		gris: 'bg-gray-500',
		rose: 'bg-pink-500',
		violet: 'bg-purple-500',
		orange: 'bg-orange-500',
		marron: 'bg-amber-800',
		argent: 'bg-gray-300',
		or: 'bg-yellow-400'
	};

	let cardClasses = $derived(
		[
			'group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={cardClasses}>
	<!-- Badge -->
	{#if badge}
		<div class="absolute top-4 left-4 z-10">
			<span
				class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-600 text-white"
			>
				{badge}
			</span>
		</div>
	{/if}

	<!-- Image -->
	<div class="aspect-square relative overflow-hidden bg-gray-50">
		<img
			src={image}
			alt={imageAlt || title}
			class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
		/>
	</div>

	<!-- Content -->
	<div class="p-6 space-y-4">
		<!-- Title and Subtitle -->
		<div>
			<Heading level={3} size="lg" weight="semibold" class="text-slate-900 mb-1">
				{title}
			</Heading>
			<Paragraph size="sm" color="text-slate-600" weight="medium">
				{subtitle}
			</Paragraph>
		</div>

		<!-- Description -->
		<Paragraph size="sm" color="text-slate-600" leading="relaxed">
			{description}
		</Paragraph>

		<!-- Colors -->
		{#if colors.length > 0}
			<div class="flex items-center gap-2">
				<Paragraph size="xs" color="text-slate-500" class="font-medium">
					Couleurs disponibles :
				</Paragraph>
				<div class="flex gap-1">
					{#each colors as color}
						<div
							class="w-4 h-4 rounded-full border border-gray-200 {colorMap[
								color.toLowerCase()
							] || 'bg-gray-400'}"
							title={color}
						></div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Actions -->
		<div class="flex flex-col sm:flex-row gap-3 pt-2">
			{#if primaryAction}
				<Button
					variant="solid"
					tone="primary"
					size="medium"
					fullWidth
					className="sm:flex-1"
					onClick={primaryAction.onClick}
				>
					{primaryAction.label}
				</Button>
			{/if}
			{#if secondaryAction}
				<Button
					variant="ghost"
					tone="secondary"
					size="medium"
					fullWidth
					className="sm:flex-1"
					onClick={secondaryAction.onClick}
				>
					{secondaryAction.label}
				</Button>
			{/if}
		</div>
	</div>
</div>
