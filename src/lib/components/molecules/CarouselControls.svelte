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
			'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200',
			'disabled:opacity-30 disabled:cursor-not-allowed',
			!canScrollLeft
				? 'bg-gray-100 text-gray-400'
				: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
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
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
	</button>

	<button
		type="button"
		disabled={!canScrollRight}
		onclick={() => onScroll('right')}
		class={[
			'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200',
			'disabled:opacity-30 disabled:cursor-not-allowed',
			!canScrollRight
				? 'bg-gray-100 text-gray-400'
				: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
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
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		</svg>
	</button>
</div>
