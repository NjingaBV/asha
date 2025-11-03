<script lang="ts">
	let {
		name = '',
		size = 'base',
		color = 'currentColor'
	}: {
		name: string;
		size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';
		color: string;
	} = $props();

	let sizeClass = $derived(() => {
		switch (size) {
			case 'xs':
				return 'w-3 h-3';
			case 'sm':
				return 'w-4 h-4';
			case 'lg':
				return 'w-6 h-6';
			case 'xl':
				return 'w-8 h-8';
			case '2xl':
				return 'w-12 h-12';
			default:
				return 'w-5 h-5'; // base
		}
	});

	let iconSvg = $derived(() => {
		// For now, assume name is SVG content or a simple mapping
		// In a real implementation, this would map icon names to SVG paths
		if (name.startsWith('<svg') || name.startsWith('<path')) {
			return name;
		}
		// Simple icon mapping - this should be expanded
		const icons: Record<string, string> = {
			heart: '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
			activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
			shield: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>'
		};
		return icons[name] || '';
	});

	let allClasses = $derived(
		['inline-flex items-center justify-center', sizeClass, $$props.class]
			.filter(Boolean)
			.join(' ')
	);
</script>

{#if iconSvg}
	<span class={allClasses}>
		{@html iconSvg}
	</span>
{/if}
