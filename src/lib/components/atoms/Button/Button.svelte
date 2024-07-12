<script lang="ts">
	let { children, size = 'medium', rounded = false, border = false } = $props();

	let color = $state('#ffffff');

	const regex = $derived(
		/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
	) as RegExpExecArray;

	const rgb = $derived(
		regex.slice(1).reduce((acc: string[], val, i) => {
			acc[i] = `${parseInt(val, 16)}`;
			return acc;
		}, []) || []
	);

	const backgroundColor = $derived(rgb.join());

	const brightness = $derived(
		Math.round(
			(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
		)
	);

	const textColor = $derived(brightness > 125 ? '#000000' : '#ffffff');
</script>

<button
	type="button"
	class={[
		`w-full flex justify-center ${rounded ? 'rounded-full' : 'rounded-md'},
            hover:opacity-75 ${border && 'border'},
            font-medium ${size === 'small' && 'px-2 py-1 text-base md:text-lg'}
            ${size === 'medium' && 'px-4 py-2  text-lg md:text-xl'}
            ${size === 'large' && 'px-8 py-4 text-xl md:text-2xl'}`
	].join(' ')}
	style={`${`background-color:rgb(${backgroundColor}); color: ${textColor}; border-color: ${textColor};`}`}
>
	{@render children()}
</button>
