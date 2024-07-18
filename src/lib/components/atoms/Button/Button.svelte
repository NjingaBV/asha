<script lang="ts">
	import type { DOMAttributes, MouseEventHandler } from 'svelte/elements';

	interface Props extends DOMAttributes<HTMLButtonElement> {
		children: import('svelte').Snippet;
		onclick?: MouseEventHandler<HTMLButtonElement>;
		color?: `#${string}`;
		size?: 'small' | 'medium' | 'large';
		rounded?: boolean;
		border?: boolean;
	}

	let {
		children,
		onclick,
		color = '#ffffff',
		size = 'medium',
		rounded = false,
		border = false
	}: Props = $props();

	const regex = $derived.by(
		() => /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color) as RegExpExecArray
	);
	const rgb = $derived.by(
		() =>
			regex.slice(1).reduce((acc: string[], val, i) => {
				acc[i] = `${parseInt(val, 16)}`;
				return acc;
			}, []) || []
	);
	const backgroundColor = $derived(rgb.join());
	const brightness = $derived.by(() =>
		Math.round((parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000)
	);
	const textColor = $derived.by(() => (brightness > 125 ? '#000000' : '#ffffff'));
</script>

<button
	type="button"
	class={[
		`w-full flex justify-center ${rounded ? 'rounded-full' : 'rounded-md'}
            hover:opacity-75 ${border && 'border-2 border-solid'},
            font-medium ${size === 'small' && 'px-2 py-1 text-base md:text-lg'}
            ${size === 'medium' && 'px-4 py-2  text-lg md:text-xl'}
            ${size === 'large' && 'px-8 py-4 text-xl md:text-2xl'}`
	].join(' ')}
	style={`${`background-color:rgb(${backgroundColor}); color: ${textColor}; border-color: ${textColor};`}`}
	{onclick}
>
	{@render children()}
</button>
