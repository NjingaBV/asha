<script lang="ts">
	import { colorMap } from '../../design-system/tokens';

	interface Props {
		color: string;
		selected?: boolean;
		size?: number;
	}

	let { color, selected = false, size = 20 }: Props = $props();
</script>

// src/lib/atoms/ColorDot.svelte
<button
	class="rounded-full border transition-transform focus:outline-none focus:ring-2 focus:ring-brand-primary"
	style={`width:${size}px;height:${size}px;background:${colorMap[color] ?? '#ccc'};border-color:${selected ? 'var(--tw-ring-color)' : 'transparent'};transform:${selected ? 'scale(1.05)' : 'scale(1)'}`}
	aria-pressed={selected}
>
	<span class="sr-only">{color}</span>
</button>
