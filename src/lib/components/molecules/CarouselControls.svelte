<script lang="ts">
	interface Props {
		canScrollLeft: boolean;
		canScrollRight: boolean;
		onScroll: (direction: 'left' | 'right') => void;
		class?: string;
	}

	let { canScrollLeft, canScrollRight, onScroll, class: className = '' }: Props = $props();
</script>

<div class={['flex gap-4', className].join(' ')}>
	<button
		type="button"
		disabled={!canScrollLeft}
		onclick={() => onScroll('left')}
		class={[
			'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200',
			'disabled:opacity-30 disabled:cursor-not-allowed',
			'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
			!canScrollLeft ? 'bg-bg-muted text-fg-muted' : 'bg-bg-subtle hover:bg-bg-muted text-fg'
		].join(' ')}
		aria-label="Previous items"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2.5"
			stroke="currentColor"
			class="w-5 h-5"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
	</button>

	<button
		type="button"
		disabled={!canScrollRight}
		onclick={() => onScroll('right')}
		class={[
			'w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200',
			'disabled:opacity-30 disabled:cursor-not-allowed',
			'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
			!canScrollRight ? 'bg-bg-muted text-fg-muted' : 'bg-bg-subtle hover:bg-bg-muted text-fg'
		].join(' ')}
		aria-label="Next items"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="2.5"
			stroke="currentColor"
			class="w-5 h-5"
			aria-hidden="true"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		</svg>
	</button>
</div>
