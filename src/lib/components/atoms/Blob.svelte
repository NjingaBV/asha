<script lang="ts">
	/**
	 * Blob component - animated background element for modern visual effects
	 *
	 * @example
	 * <Blob color="#6c00e2" />
	 * <Blob color="rgba(108, 0, 226, 0.8)" />
	 */

	interface Props {
		/** Blob color (any valid CSS color) */
		color?: string;
		/** Animation delay in seconds */
		delay?: number;
		/** Animation duration in seconds */
		duration?: number;
	}

	let { color = '#ff9800', delay = 0, duration = 4 }: Props = $props();
</script>

<div class="w-1/2 md:w-1/3 h-full">
	<div
		class={[
			'w-48 h-48 md:w-72 md:h-72 min-h-full',
			'mix-blend-multiply filter blur-xl opacity-70',
			'rounded-full animate-blob'
		].join(' ')}
		style={`background-color: ${color}; animation-delay: ${delay}s; animation-duration: ${duration}s;`}
	></div>
</div>
