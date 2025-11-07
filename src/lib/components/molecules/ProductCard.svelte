<script lang="ts">
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import Button from '$lib/components/atoms/Button.svelte';

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
			'group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]',
			className
		]
			.filter(Boolean)
			.join(' ')
	);
</script>

<div class={cardClasses}>
	<!-- Badge -->
	{#if badge}
		<div class="absolute top-5 left-5 z-10">
			<span
				class="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-600 text-white"
			>
				{badge}
			</span>
		</div>
	{/if}

	<!-- Image -->
	<div class="aspect-square relative overflow-hidden bg-gray-100">
		<img
			src={image}
			alt={imageAlt || title}
			class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
		/>
	</div>

	<!-- Content -->
	<div class="p-6 md:p-8 space-y-5 md:space-y-6 flex flex-col h-full">
		<!-- Title and Subtitle -->
		<div class="space-y-2">
			<Heading level={3} size="xl" weight="black" class="text-slate-900 leading-tight">
				{title}
			</Heading>
			{#if subtitle}
				<Paragraph
					size="sm"
					color="text-slate-600"
					weight="semibold"
					class="tracking-wide uppercase text-xs"
				>
					{subtitle}
				</Paragraph>
			{/if}
		</div>

		<!-- Description -->
		{#if description}
			<Paragraph size="sm" color="text-slate-600" leading="relaxed" class="flex-grow">
				{description}
			</Paragraph>
		{/if}

		<!-- Colors -->
		{#if colors.length > 0}
			<div class="flex items-center gap-3 pt-2">
				<Paragraph
					size="xs"
					color="text-slate-500"
					class="font-semibold tracking-wide uppercase"
				>
					Couleurs :
				</Paragraph>
				<div class="flex gap-2">
					{#each colors as color}
						<div
							class="w-5 h-5 rounded-full border-2 border-gray-200 hover:border-slate-400 transition-colors duration-200 cursor-pointer {colorMap[
								color.toLowerCase()
							] || 'bg-gray-400'}"
							title={color}
						></div>
					{/each}
				</div>
			</div>
		{/if}

		<!-- Actions -->
		<div class="flex flex-col sm:flex-row gap-3 pt-4 mt-auto">
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
