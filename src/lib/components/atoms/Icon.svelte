<script lang="ts">
	export let name: 'search' | 'sun' | 'moon' | 'chevron-right' | 'chip' | 'color' | 'external' =
		'chevron-right';
	export let size: number = 20;
	export let className: string = '';
	const paths: Record<string, string> = {
		search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm7-1-4.35-4.35',
		sun: 'M12 4v2m0 12v2m8-8h-2M6 12H4m12.95 5.66-1.41-1.41M6.46 6.46 5.05 5.05m12.9 0-1.41 1.41M6.46 17.54 5.05 18.95M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8',
		moon: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
		'chevron-right': 'M9 6l6 6-6 6',
		chip: 'M7 7h10v10H7zM4 12h3M17 12h3M12 4v3M12 17v3',
		color: 'M12 3a9 9 0 1 0 9 9h-9z',
		external: 'M14 3h7v7M21 3l-9 9M3 21l9-9'
	};
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
>
	<path d={paths[name]} />
</svg>
