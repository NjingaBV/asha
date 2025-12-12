<script lang="ts" module>
	export type IconName =
		| 'search'
		| 'sun'
		| 'moon'
		| 'chevron-right'
		| 'chevron-down'
		| 'chevron-up'
		| 'chevron-left'
		| 'chip'
		| 'color'
		| 'external'
		| 'check'
		| 'x'
		| 'info'
		| 'warning'
		| 'error'
		| 'success'
		| 'user'
		| 'settings'
		| 'edit'
		| 'trash'
		| 'plus'
		| 'minus'
		| 'menu'
		| 'close';
</script>

<script lang="ts">
	interface Props {
		name?: IconName;
		size?: number;
		class?: string;
		/** When false, the icon will have an accessible label. Default is true (decorative icon). */
		decorative?: boolean;
		/** Accessible label for the icon (only used when decorative is false) */
		label?: string;
	}

	let {
		name = 'chevron-right',
		size = 20,
		class: className = '',
		decorative = true,
		label = ''
	}: Props = $props();

	const paths: Record<IconName, string> = {
		search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm7-1-4.35-4.35',
		sun: 'M12 4v2m0 12v2m8-8h-2M6 12H4m12.95 5.66-1.41-1.41M6.46 6.46 5.05 5.05m12.9 0-1.41 1.41M6.46 17.54 5.05 18.95M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8',
		moon: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
		'chevron-right': 'M9 6l6 6-6 6',
		'chevron-down': 'M6 9l6 6 6-6',
		'chevron-up': 'M18 15l-6-6-6 6',
		'chevron-left': 'M15 18l-6-6 6-6',
		chip: 'M7 7h10v10H7zM4 12h3M17 12h3M12 4v3M12 17v3',
		color: 'M12 3a9 9 0 1 0 9 9h-9z',
		external: 'M14 3h7v7M21 3l-9 9M3 21l9-9',
		check: 'M20 6L9 17l-5-5',
		x: 'M18 6L6 18M6 6l12 12',
		info: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 16v-4M12 8h.01',
		warning:
			'M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z',
		error: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM15 9l-6 6M9 9l6 6',
		success:
			'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4',
		user: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8',
		settings:
			'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1.08z',
		edit: 'M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z',
		trash: 'M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6',
		plus: 'M12 5v14M5 12h14',
		minus: 'M5 12h14',
		menu: 'M3 12h18M3 6h18M3 18h18',
		close: 'M18 6L6 18M6 6l12 12'
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
	aria-hidden={decorative}
	aria-label={!decorative ? label : undefined}
	role={!decorative ? 'img' : undefined}
>
	<path d={paths[name]} />
</svg>
