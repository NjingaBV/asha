<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from '$lib/components/atoms/Icon.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';

	interface Props {
		/** Icon name */
		icon?: string;
		/** Card title */
		title?: string;
		/** Card description */
		description?: string;
		/** Icon background color */
		iconBg?: string;
		/** Icon color */
		iconColor?: string;
		/** Size variant */
		size?: 'sm' | 'md' | 'lg';
		/** Alignment */
		align?: 'left' | 'center';
		/** Link URL */
		href?: string;
		/** Custom CSS classes */
		class?: string;
		/** Custom content */
		children?: Snippet;
	}

	let {
		icon,
		title,
		description,
		iconBg = 'bg-accent/10',
		iconColor = 'text-accent',
		size = 'md',
		align = 'center',
		href,
		class: className = '',
		children
	}: Props = $props();

	const sizeClasses = {
		sm: {
			container: 'p-4',
			icon: 'w-10 h-10',
			iconSize: 20,
			title: 'text-base',
			description: 'text-sm'
		},
		md: {
			container: 'p-6',
			icon: 'w-14 h-14',
			iconSize: 28,
			title: 'text-lg',
			description: 'text-base'
		},
		lg: {
			container: 'p-8',
			icon: 'w-16 h-16',
			iconSize: 32,
			title: 'text-xl',
			description: 'text-lg'
		}
	};

	const alignClasses = {
		left: '',
		center: 'text-center items-center'
	};
</script>

{#if href}
	<a
		{href}
		class={[
			'block bg-bg-subtle rounded-2xl transition-all hover:bg-bg-muted hover:shadow-lg',
			sizeClasses[size].container,
			className
		].join(' ')}
	>
		<div class={['flex flex-col gap-4', alignClasses[align]].join(' ')}>
			{#if icon}
				<div
					class={[
						'rounded-xl flex items-center justify-center',
						sizeClasses[size].icon,
						iconBg
					].join(' ')}
				>
					<Icon name={icon} size={sizeClasses[size].iconSize} class={iconColor} />
				</div>
			{/if}

			{#if title}
				<Heading level={3} class="{sizeClasses[size].title} font-semibold text-fg">
					{title}
				</Heading>
			{/if}

			{#if description}
				<Text class="{sizeClasses[size].description} text-fg-muted">
					{description}
				</Text>
			{/if}

			{@render children?.()}
		</div>
	</a>
{:else}
	<div class={['bg-bg-subtle rounded-2xl', sizeClasses[size].container, className].join(' ')}>
		<div class={['flex flex-col gap-4', alignClasses[align]].join(' ')}>
			{#if icon}
				<div
					class={[
						'rounded-xl flex items-center justify-center',
						sizeClasses[size].icon,
						iconBg
					].join(' ')}
				>
					<Icon name={icon} size={sizeClasses[size].iconSize} class={iconColor} />
				</div>
			{/if}

			{#if title}
				<Heading level={3} class="{sizeClasses[size].title} font-semibold text-fg">
					{title}
				</Heading>
			{/if}

			{#if description}
				<Text class="{sizeClasses[size].description} text-fg-muted">
					{description}
				</Text>
			{/if}

			{@render children?.()}
		</div>
	</div>
{/if}
