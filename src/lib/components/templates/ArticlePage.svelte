<script lang="ts">
	import type { Snippet } from 'svelte';
	import SkipLink from '$lib/components/atoms/SkipLink.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';
	import Image from '$lib/components/atoms/Image.svelte';
	import Caption from '$lib/components/atoms/Caption.svelte';
	import Avatar from '$lib/components/atoms/Avatar.svelte';
	import Breadcrumb from '$lib/components/molecules/Breadcrumb.svelte';

	interface BreadcrumbItem {
		label: string;
		href?: string;
	}

	interface Author {
		name: string;
		avatar?: string;
		title?: string;
	}

	interface Props {
		/** Breadcrumb items */
		breadcrumbs?: BreadcrumbItem[];
		/** Article category/tag */
		category?: string;
		/** Article title */
		title?: string;
		/** Article subtitle/excerpt */
		subtitle?: string;
		/** Featured image URL */
		featuredImage?: string;
		/** Featured image alt text */
		featuredImageAlt?: string;
		/** Author info */
		author?: Author;
		/** Publication date */
		publishedAt?: Date | string;
		/** Reading time in minutes */
		readingTime?: number;
		/** Custom CSS classes */
		class?: string;
		/** Header slot */
		header?: Snippet;
		/** Footer slot */
		footer?: Snippet;
		/** Article content */
		children?: Snippet;
		/** Sidebar slot */
		sidebar?: Snippet;
		/** Related articles slot */
		related?: Snippet;
	}

	let {
		breadcrumbs = [],
		category,
		title,
		subtitle,
		featuredImage,
		featuredImageAlt = '',
		author,
		publishedAt,
		readingTime,
		class: className = '',
		header,
		footer,
		children,
		sidebar,
		related
	}: Props = $props();

	let formattedDate = $derived(
		publishedAt
			? new Date(publishedAt).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})
			: ''
	);
</script>

<SkipLink href="#main-content" />

<div class="min-h-screen flex flex-col bg-page">
	{#if header}
		{@render header()}
	{/if}

	<main id="main-content" class={['flex-1', className].join(' ')}>
		<article class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			{#if breadcrumbs.length > 0}
				<Breadcrumb items={breadcrumbs} class="mb-6" />
			{/if}

			<!-- Article Header -->
			<header class="mb-8">
				{#if category}
					<Caption class="text-accent mb-3">{category}</Caption>
				{/if}

				{#if title}
					<Heading
						level={1}
						class="text-3xl md:text-4xl lg:text-5xl font-bold text-fg mb-4"
					>
						{title}
					</Heading>
				{/if}

				{#if subtitle}
					<Text class="text-xl text-fg-muted mb-6">
						{subtitle}
					</Text>
				{/if}

				<!-- Meta info -->
				{#if author || publishedAt || readingTime}
					<div class="flex flex-wrap items-center gap-4 text-sm text-fg-muted">
						{#if author}
							<div class="flex items-center gap-2">
								{#if author.avatar}
									<Avatar src={author.avatar} alt={author.name} size="sm" />
								{/if}
								<div>
									<span class="font-medium text-fg">{author.name}</span>
									{#if author.title}
										<span class="hidden sm:inline"> - {author.title}</span>
									{/if}
								</div>
							</div>
						{/if}

						{#if publishedAt}
							<time datetime={new Date(publishedAt).toISOString()}>
								{formattedDate}
							</time>
						{/if}

						{#if readingTime}
							<span>{readingTime} min read</span>
						{/if}
					</div>
				{/if}
			</header>

			<!-- Featured Image -->
			{#if featuredImage}
				<figure class="mb-8 -mx-4 sm:mx-0">
					<Image
						src={featuredImage}
						alt={featuredImageAlt}
						class="w-full aspect-video object-cover rounded-none sm:rounded-2xl"
					/>
				</figure>
			{/if}

			<!-- Article Content -->
			<div class="prose prose-lg max-w-none">
				{@render children?.()}
			</div>
		</article>

		{#if sidebar}
			<aside class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-border">
				{@render sidebar()}
			</aside>
		{/if}

		{#if related}
			<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-border">
				{@render related()}
			</section>
		{/if}
	</main>

	{#if footer}
		{@render footer()}
	{/if}
</div>
