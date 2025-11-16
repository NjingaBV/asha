<script lang="ts">
	import { useMachine } from 'xstate';
	import { colorPickerMachine } from '../../machines/colorPicker.machine';
	import ColorDot from '../atoms/ColorDot.svelte';

	export let options: string[] = [];
	export let onChange: (value: string | undefined) => void = () => {};

	const { state, send } = useMachine(
		colorPickerMachine.provide({
			context: { options, selected: undefined }
		})
	);

	$: selected = state.context.selected;
	$: onChange(selected);
</script>

<div class="flex items-center gap-2">
	{#each options as c}
		<div on:click={() => send({ type: 'SELECT', value: c })}>
			<ColorDot color={c} selected={selected === c} size={22} />
		</div>
	{/each}
	<button
		class="ml-2 text-xs text-brand-gray hover:text-brand-black"
		on:click={() => send({ type: 'RESET' })}
	>
		Reset
	</button>
</div>
