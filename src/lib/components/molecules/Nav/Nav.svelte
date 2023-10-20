<script lang="ts">
	import type { LinkType } from '$lib/models';
	import { fly } from 'svelte/transition';

	export let headerMenu = false;
	export let links: LinkType[] = [];
	export let color = '#ffffff';

	$: regex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color) as RegExpExecArray;
	$: rgb =
		regex.slice(1).reduce((acc: string[], val, i) => {
			acc[i] = `${parseInt(val, 16)}`;
			return acc;
		}, []) || [];

	$: backgroundColor = rgb.join();

	$: brightness = Math.round(
		(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
	);

	$: textColor = brightness > 125 ? '#000000' : '#ffffff';
</script>

<nav
	class={[
		`${
			headerMenu
				? 'no-underline whitespace-nowrap mr-4 hidden md:inline-block bg-link'
				: 'md:hidden pb-5 fixed h-screen flex-grow w-full md:w-64 md:sticky z-40'
		}`
	].join(' ')}
	transition:fly={{ y: -200, duration: 400 }}
	style="--background-color: {backgroundColor}"
>
	<ul
		class={[
			`${headerMenu ? 'flex space-x-3' : 'px-10 text-left text-lg font-extralight divide-y'}`
		].join(' ')}
	>
		{#each links as link}
			<li class={[`${!headerMenu && 'py-2'}`].join(' ')} style={`${`color: ${textColor};`}`}>
				<a href={link.href}>{link.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.bg-link {
		background-color: --background-color;
	}
	@media (min-width: 768px) {
		.bg-link {
			background-color: inherit;
		}
	}
</style>
