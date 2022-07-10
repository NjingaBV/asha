<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let size = 'medium';
	export let color = '#000000';
	export let rounded = false;
	export let border = false;

	const dispatch = createEventDispatcher();

	$: rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
		.exec(color)
		.slice(1)
		.reduce((acc, val, i) => {
			acc[i] = parseInt(val, 16);
			return acc;
		}, []);

	$: backgroundColor = rgb.join();

	$: brightness = Math.round(
		(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
	);

	$: textColor = (brightness > 125) ? '#000000' : '#ffffff';

	let onClick = (event) => {
		dispatch('click', event);
	};
</script>

<button
	type="button"
	class={[
		`w-full flex justify-center ${rounded ? 'rounded-full' : 'rounded-md'} px-4 py-2 ${border && 'border'} font-medium ${size === 'small' && 'text-base'} ${size === 'medium' && 'text-lg'} ${
			size === 'large' && 'text-xl'
		}`
	].join(' ')}
	on:click={onClick}
	style={`${`background-color:rgb(${backgroundColor}); color: ${textColor};`}`}
>
	<slot />
</button>
