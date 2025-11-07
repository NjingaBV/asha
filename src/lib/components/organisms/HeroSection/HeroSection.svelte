<script lang="ts">
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import Button from '$lib/components/atoms/Button.svelte';

	let {
		title = '',
		subtitle = undefined,
		description = '',
		primaryAction = { label: '' },
		secondaryAction = undefined,
		backgroundImage = undefined,
		products = [],
		class: className = ''
	}: {
		title: string;
		subtitle?: string | undefined;
		description: string;
		primaryAction: { label: string; href?: string; onClick?: () => void };
		secondaryAction?: { label: string; href?: string; onClick?: () => void } | undefined;
		backgroundImage?: string | undefined;
		products?: Array<{ name: string; image: string; badge?: string }>;
		class?: string;
	} = $props();

	let sectionClasses = $derived(
		['relative min-h-screen flex items-center', className].filter(Boolean).join(' ')
	);
</script>

<section class={sectionClasses}>
	<!-- Background -->
	{#if backgroundImage}
		<div class="absolute inset-0">
			<img src={backgroundImage} alt="" class="w-full h-full object-cover" />
			<div
				class="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"
			></div>
		</div>
	{/if}

	<!-- Content -->
	<div class="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
		<div class="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
			<!-- Text Content -->
			<div class="space-y-6 md:space-y-8 lg:space-y-10">
				<!-- Badge -->
				{#if subtitle}
					<div>
						<span
							class="inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase bg-blue-50 text-blue-700"
						>
							{subtitle}
						</span>
					</div>
				{/if}

				<!-- Title -->
				<Heading
					level={1}
					size="6xl"
					weight="black"
					class="text-slate-900 leading-tight tracking-tight"
				>
					{title}
				</Heading>

				<!-- Description -->
				<Paragraph
					size="lg"
					color="text-slate-700"
					leading="relaxed"
					class="max-w-lg md:text-lg"
				>
					{description}
				</Paragraph>

				<!-- Actions -->
				<div class="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
					<Button
						variant="solid"
						tone="primary"
						size="large"
						onClick={primaryAction.onClick}
					>
						{primaryAction.label}
					</Button>

					{#if secondaryAction}
						<Button
							variant="outline"
							tone="secondary"
							size="large"
							onClick={secondaryAction.onClick}
						>
							{secondaryAction.label}
						</Button>
					{/if}
				</div>
			</div>

			<!-- Products Grid -->
			{#if products.length > 0}
				<div
					class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6 md:gap-8"
				>
					{#each products as product}
						<div
							class="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
						>
							{#if product.badge}
								<div class="absolute -top-2 -right-2 z-10">
									<span
										class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-600 text-white"
									>
										{product.badge}
									</span>
								</div>
							{/if}
							<div
								class="aspect-square relative mb-5 md:mb-6 overflow-hidden rounded-xl"
							>
								<img
									src={product.image}
									alt={product.name}
									class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
								/>
							</div>
							<Heading
								level={4}
								size="base"
								weight="semibold"
								class="text-center text-slate-900 leading-snug"
							>
								{product.name}
							</Heading>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</section>
