<script lang="ts">
	import ColorSwatch from '$lib/components/atoms/ColorSwatch.svelte';
	import type { MacColorOption } from '$lib/models';

	interface Props {
		colors?: MacColorOption[];
		selected?: string;
		title?: string;
		tone?: 'light' | 'dark';
		onChange?: (color: string) => void;
		/** Accessible label for the variant group */
		label?: string;
	}

	let {
		colors = [],
		selected = undefined,
		title = 'Finitions',
		tone = 'light',
		onChange = undefined,
		label = 'Select finish'
	}: Props = $props();

	const labelClass = $derived(tone === 'dark' ? 'text-white/80' : 'text-fg-muted');

	let focusedIndex = $state(0);

	// Update focusedIndex when selected changes externally
	$effect(() => {
		const idx = colors.findIndex((c) => c.name === selected);
		if (idx !== -1) focusedIndex = idx;
	});

	const handleSelect = (color: string, index: number) => {
		focusedIndex = index;
		onChange?.(color);
	};

	// Keyboard navigation for radiogroup pattern
	function handleKeydown(event: KeyboardEvent) {
		const len = colors.length;
		if (len === 0) return;

		let handled = false;

		switch (event.key) {
			case 'ArrowRight':
			case 'ArrowDown':
				focusedIndex = (focusedIndex + 1) % len;
				handled = true;
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				focusedIndex = (focusedIndex - 1 + len) % len;
				handled = true;
				break;
			case 'Home':
				focusedIndex = 0;
				handled = true;
				break;
			case 'End':
				focusedIndex = len - 1;
				handled = true;
				break;
			case 'Enter':
			case ' ':
				onChange?.(colors[focusedIndex].name);
				handled = true;
				break;
		}

		if (handled) {
			event.preventDefault();
			// Focus the button at focusedIndex
			const container = event.currentTarget as HTMLElement;
			const buttons = container.querySelectorAll('[role="radio"]');
			(buttons[focusedIndex] as HTMLElement)?.focus();
		}
	}

	// Announcement for screen readers
	let announcement = $derived(selected ? `${selected} selected` : '');
</script>

{#if colors.length > 0}
	<div class="space-y-3">
		<p class={`text-sm font-semibold ${labelClass}`} id="variant-selector-label">{title}</p>
		<div
			class="flex flex-wrap items-center gap-3"
			role="radiogroup"
			aria-labelledby="variant-selector-label"
			aria-label={label}
			onkeydown={handleKeydown}
		>
			{#each colors as color, i}
				<button
					type="button"
					role="radio"
					aria-checked={selected === color.name}
					tabindex={i === focusedIndex ? 0 : -1}
					onclick={() => handleSelect(color.name, i)}
					class={[
						'flex items-center gap-2 rounded-full border border-transparent bg-white/40 px-2 py-1 pr-3 transition hover:-translate-y-0.5 hover:shadow min-h-touch',
						'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2'
					].join(' ')}
					class:text-white={tone === 'dark'}
				>
					<ColorSwatch
						color={color.swatch}
						selected={selected === color.name}
						label={color.name}
						size={20}
					/>
					<span class="text-xs font-medium">{color.name}</span>
				</button>
			{/each}
		</div>
		<!-- Live region for screen reader announcements -->
		<span class="sr-only" aria-live="polite" aria-atomic="true">{announcement}</span>
	</div>
{/if}
