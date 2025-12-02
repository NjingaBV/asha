<script lang="ts">
	import { useMachine } from '@xstate/svelte';
	import { colorPickerMachine } from '../../machines/colorPicker.machine';
	import ColorDot from '../atoms/ColorDot.svelte';

	interface Props {
		options?: string[];
		onChange?: (value: string | undefined) => void;
	}

	let { options = [], onChange = () => {} }: Props = $props();

	const { snapshot, send } = useMachine(colorPickerMachine, {
		input: { options }
	});

	let selected = $derived($snapshot.context.selected);

	$effect(() => {
		onChange(selected);
	});
</script>

<div class="flex items-center gap-2">
	{#each options as c}
		<button
			type="button"
			class="appearance-none focus:outline-none"
			onclick={() => send({ type: 'SELECT', value: c })}
		>
			<ColorDot color={c} selected={selected === c} size={22} />
		</button>
	{/each}
	<button
		class="ml-2 text-xs text-brand-gray hover:text-brand-black"
		onclick={() => send({ type: 'RESET' })}
	>
		Reset
	</button>
</div>
