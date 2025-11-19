<script lang="ts">
	interface Tab {
		id: string;
		label: string;
	}

	interface Props {
		tabs: Tab[];
		activeTab: string;
		onSelect: (id: string) => void;
	}

	let { tabs, activeTab, onSelect }: Props = $props();
</script>

<div class="inline-flex bg-gray-100 p-1 rounded-full">
	{#each tabs as tab}
		<button
			type="button"
			class={[
				'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200',
				activeTab === tab.id
					? 'bg-black text-white shadow-sm'
					: 'text-gray-600 hover:text-black hover:bg-gray-200/50'
			].join(' ')}
			onclick={() => onSelect(tab.id)}
		>
			{tab.label}
		</button>
	{/each}
</div>
