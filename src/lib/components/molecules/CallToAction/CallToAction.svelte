<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';

	export let buttonBefore: true;
	export let overview: string;
	export let buttons: Array<{
		label: string;
		url: string;
		backgroundColor: `#${string}`;
	}>;
</script>

<div class="relative max-w-5xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
	{#if overview && !buttonBefore}
		<div
			class="max-w-lg mx-auto text-xl font-medium leading-tight text-center text-slate-600 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl"
		>
			{overview}
		</div>
	{/if}
	<div
		class="flex flex-auto flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6 text-xl"
	>
		{#each buttons as button (button.url)}
			<Button
				color={button.backgroundColor}
				onClick={() => (location.href = button.url)}
				size="large"
			>
				{button.label}
			</Button>
		{/each}
	</div>
	{#if overview && buttonBefore}
		<div
			class="max-w-lg mx-auto mt-6 text-xl font-medium leading-tight text-center text-slate-600 sm:max-w-4xl sm:text-2xl md:text-3xl lg:text-4xl"
		>
			{overview}
		</div>
	{/if}
</div>
