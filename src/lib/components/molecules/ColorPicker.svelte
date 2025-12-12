<script lang="ts">
	import { createActor } from 'xstate';
	import { colorPickerMachine } from '$lib/components/machines/colorPicker.machine';
	import ColorSwatch from '../atoms/ColorSwatch.svelte';

	interface Props {
		options?: string[];
		onChange?: (value: string | undefined) => void;
		/** Accessible label for the color picker group */
		label?: string;
	}

	let { options = [], onChange, label = 'Select a color' }: Props = $props();

	const actor = createActor(colorPickerMachine, {
		input: { options }
	});
	actor.start();

	// Subscribe to state changes
	let machineState = $state(actor.getSnapshot());

	actor.subscribe((snapshot) => {
		machineState = snapshot;
	});

	let selected = $derived(machineState.context.selected);
	let focusedIndex = $state(0);

	$effect(() => {
		onChange?.(selected);
	});

	// Cleanup
	$effect(() => {
		return () => actor.stop();
	});

	// Keyboard navigation for radiogroup pattern
	function handleKeydown(event: KeyboardEvent) {
		const len = options.length;
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
				actor.send({ type: 'SELECT', value: options[focusedIndex] });
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

<!-- svelte-ignore a11y_interactive_supports_focus -->
<div class="flex items-center gap-2" role="radiogroup" aria-label={label} onkeydown={handleKeydown}>
	{#each options as c, i}
		<button
			type="button"
			role="radio"
			aria-checked={selected === c}
			aria-label={c}
			tabindex={i === focusedIndex ? 0 : -1}
			class="appearance-none rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 min-w-touch min-h-touch flex items-center justify-center"
			onclick={() => {
				actor.send({ type: 'SELECT', value: c });
				focusedIndex = i;
			}}
		>
			<ColorSwatch color={c} selected={selected === c} size={22} />
		</button>
	{/each}
	<button
		type="button"
		class="ml-2 text-xs text-fg-muted hover:text-fg rounded px-2 py-1 min-h-touch flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
		onclick={() => actor.send({ type: 'RESET' })}
	>
		Reset
	</button>
	<!-- Live region for screen reader announcements -->
	<span class="sr-only" aria-live="polite" aria-atomic="true">{announcement}</span>
</div>
