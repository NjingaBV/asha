<script lang="ts">
	interface Tab {
		id: string;
		label: string;
	}

	interface Props {
		tabs: Tab[];
		activeTab: string;
		onSelect: (id: string) => void;
		/** Accessible label for the tablist */
		label?: string;
	}

	let { tabs, activeTab, onSelect, label = 'Filter options' }: Props = $props();

	let focusedIndex = $state(0);

	// Update focusedIndex when activeTab changes externally
	$effect(() => {
		const idx = tabs.findIndex((t) => t.id === activeTab);
		if (idx !== -1) focusedIndex = idx;
	});

	// Keyboard navigation for tablist pattern
	function handleKeydown(event: KeyboardEvent) {
		const len = tabs.length;
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
		}

		if (handled) {
			event.preventDefault();
			// Focus the tab at focusedIndex
			const container = event.currentTarget as HTMLElement;
			const buttons = container.querySelectorAll('[role="tab"]');
			(buttons[focusedIndex] as HTMLElement)?.focus();
		}
	}
</script>

<div
	class="inline-flex bg-bg-muted p-1 rounded-full"
	role="tablist"
	aria-label={label}
	onkeydown={handleKeydown}
>
	{#each tabs as tab, i}
		<button
			type="button"
			role="tab"
			aria-selected={activeTab === tab.id}
			tabindex={i === focusedIndex ? 0 : -1}
			class={[
				'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 min-h-touch',
				'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
				activeTab === tab.id
					? 'bg-fg text-bg shadow-sm'
					: 'text-fg-muted hover:text-fg hover:bg-bg-subtle'
			].join(' ')}
			onclick={() => {
				onSelect(tab.id);
				focusedIndex = i;
			}}
		>
			{tab.label}
		</button>
	{/each}
</div>
