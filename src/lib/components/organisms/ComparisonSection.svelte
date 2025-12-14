<script lang="ts">
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import type { ProductDetail } from '$lib/models';

	/**
	 * ComparisonSection component - Feature-by-feature product comparison table
	 * Displays products in a responsive comparison table with configurable attributes
	 *
	 * @example
	 * <ComparisonSection
	 *   title="Compare Models"
	 *   products={[product1, product2, product3]}
	 *   compareAttributes={['processor', 'display', 'battery', 'price']}
	 * />
	 */

	interface Props {
		/** Section title */
		title?: string;
		/** Section description */
		description?: string;
		/** Products to compare */
		products: ProductDetail[];
		/** Which attributes to compare (defaults to common specs) */
		compareAttributes?: string[];
		/** Additional CSS classes */
		className?: string;
	}

	let {
		title = 'Compare Products',
		description = 'Find the perfect product that fits your needs',
		products = [],
		compareAttributes = ['processor', 'display', 'battery', 'startingPrice'],
		className = ''
	}: Props = $props();

	// Default comparison attributes if not specified
	const defaultAttributes = [
		{ key: 'processor', label: 'Processor', format: (val: any) => val || 'N/A' },
		{
			key: 'display',
			label: 'Display',
			format: (val: any) => (typeof val === 'string' ? val : val?.size || 'N/A')
		},
		{ key: 'battery', label: 'Battery', format: (val: any) => val || 'N/A' },
		{ key: 'startingPrice', label: 'Starting Price', format: (val: any) => val || 'N/A' }
	];

	const attributes = $derived(
		compareAttributes.map((attr) => {
			const defaultAttr = defaultAttributes.find((d) => d.key === attr);
			return (
				defaultAttr || {
					key: attr,
					label: attr.charAt(0).toUpperCase() + attr.slice(1),
					format: (val: any) => val || 'N/A'
				}
			);
		})
	);

	const sectionClasses = $derived(
		['py-16 px-4 sm:px-6 lg:px-8 bg-bg-subtle', className].filter(Boolean).join(' ')
	);
</script>

<section class={sectionClasses}>
	<div class="max-w-7xl mx-auto">
		{#if title || description}
			<div class="text-center mb-12 space-y-4">
				{#if title}
					<Heading level={2} size="4xl" weight="bold" class="text-fg">
						{title}
					</Heading>
				{/if}
				{#if description}
					<Text size="xl" color="text-fg-muted" class="max-w-3xl mx-auto">
						{description}
					</Text>
				{/if}
			</div>
		{/if}

		{#if products.length > 0}
			<div class="overflow-x-auto">
				<table
					class="w-full border-collapse bg-surface rounded-lg shadow-sm overflow-hidden"
				>
					<thead>
						<tr class="bg-bg-subtle">
							<th class="text-left p-4 font-semibold text-fg border-b border-border"
								>Features</th
							>
							{#each products as product}
								<th
									class="text-center p-4 font-semibold text-fg border-b border-border min-w-[200px]"
								>
									<div class="space-y-2">
										{#if product.heroImage}
											<img
												src={product.heroImage}
												alt={product.heroAlt || product.title}
												class="w-20 h-20 mx-auto object-contain rounded"
											/>
										{/if}
										<Heading level={4} size="lg" class="text-fg">
											{product.title}
										</Heading>
										{#if product.startingPrice}
											<Text
												size="sm"
												color="text-fg-muted"
												class="font-medium"
											>
												{product.startingPrice}
											</Text>
										{/if}
									</div>
								</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each attributes as attribute}
							<tr class="hover:bg-bg-subtle/50 transition-colors">
								<td
									class="p-4 font-medium text-fg border-b border-border bg-bg-subtle/30"
								>
									{attribute.label}
								</td>
								{#each products as product}
									<td class="p-4 text-center border-b border-border">
										<Text size="sm" color="text-fg-muted">
											{attribute.format((product as any)[attribute.key])}
										</Text>
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
					<tfoot>
						<tr>
							<td class="p-4 border-t border-border bg-bg-subtle/30"></td>
							{#each products as product}
								<td class="p-4 text-center border-t border-border">
									{#if product.ctas?.primary}
										<Button
											tone="primary"
											size="sm"
											href={product.ctas.primary.href}
											className="w-full"
										>
											{product.ctas.primary.label}
										</Button>
									{/if}
								</td>
							{/each}
						</tr>
					</tfoot>
				</table>
			</div>
		{/if}
	</div>
</section>
