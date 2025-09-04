<script lang="ts">
	export let order: number;
	export let title: string;
	export let color: string;

	const hexToRgb = (hex: string) => {
		let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
		hex = hex.replace(shorthandRegex, function (m: string, r: string, g: string, b: string) {
			return r + r + g + g + b + b;
		});

		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
					result[3],
					16
			  )} / 0)`
			: null;
	};

	const adjustColor = (initialColor: string, amount = 20) => {
		let usePound = false;

		if (initialColor[0] == '#') {
			initialColor = initialColor.slice(1);
			usePound = true;
		}

		let num = parseInt(initialColor, 16);

		let r = (num >> 16) + amount;

		if (r > 255) r = 255;
		else if (r < 0) r = 0;

		let b = ((num >> 8) & 0x00ff) + amount;

		if (b > 255) b = 255;
		else if (b < 0) b = 0;

		let g = (num & 0x0000ff) + amount;

		if (g > 255) g = 255;
		else if (g < 0) g = 0;

		return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
	};

	$: lightenColor = adjustColor(color, 40); // lighten the color by 20
	$: darkenColor = adjustColor(color, -40);
	$: rgbColor = hexToRgb(color);
	$: darkRgb = hexToRgb(darkenColor);
</script>

<div
	class="relative flex flex-col justify-start items-stretch font-bold"
	style="--init-color: {color}; --light-color: {lightenColor}; --dark-color: {darkenColor}; --rgb-init-color: {rgbColor}; --rgb-dark-color: {darkRgb}"
>
	<span class="h-24 w-[1px] self-center bg-gradient-to-b from via to"></span>
	<div class="text-center text-white mb-4">
		<span
			class="rounded-full h-10 w-10 items-center justify-center inline-flex bg-gradient-to-r from via to"
		>
			{order}
		</span>
	</div>
	<h3
		class="text-center text-3xl md:text-4xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from via to"
	>
		{title}
	</h3>
</div>

<style>
	.from {
		--tw-gradient-from: var(--dark-color) var(--tw-gradient-from-position);
		--tw-gradient-to: var(--rgb-dark-color) var(--tw-gradient-to-position);
		--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
	}
	.via {
		--tw-gradient-to: var(--rgb-init-color) var(--tw-gradient-to-position);
		--tw-gradient-stops: var(--tw-gradient-from),
			var(--init-color) var(--tw-gradient-via-position), var(--tw-gradient-to);
	}
	.to {
		--tw-gradient-to: var(--light-color) var(--tw-gradient-to-position);
	}
</style>
