<script lang="ts">
	interface Props {
		/** Color value (CSS color name or hex code) */
		color: string;
		/** Whether the color dot is selected */
		selected?: boolean;
		/** Size of the color dot in pixels */
		size?: number;
		/** CSS class for custom styling */
		class?: string;
	}

	let { color, selected = false, size = 20, class: className = '' }: Props = $props();
</script>

<button
	class="rounded-full border transition-transform focus:outline-none focus:ring-2 focus:ring-brand-primary {className}"
	style={`width:${size}px;height:${size}px;background:${color};border-color:${selected ? 'var(--tw-ring-color)' : 'transparent'};transform:${selected ? 'scale(1.05)' : 'scale(1)'}`}
	aria-pressed={selected}
>
	<span class="sr-only">{color}</span>
</button>
