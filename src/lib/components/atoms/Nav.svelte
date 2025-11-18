<script lang="ts">
	import type { LinkType } from '$lib/models';
	import { fly } from 'svelte/transition';

	let {
		headerMenu = false,
		links = [],
		color = '#ffffff'
	}: {
		headerMenu?: boolean;
		links?: LinkType[];
		color?: string;
	} = $props();

	let regex = $derived(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color));
	let rgb = $derived(
		regex?.slice(1).reduce((acc: string[], val, i) => {
			acc[i] = `${parseInt(val, 16)}`;
			return acc;
		}, []) || []
	);

	let brightness = $derived(
		Math.round(
			(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000
		)
	);

	let textColor = $derived(brightness > 125 ? '#000000' : '#ffffff');
</script>

<nav
	class={[
		`${
			headerMenu
				? 'no-underline whitespace-nowrap mr-4 hidden md:inline-block'
				: 'md:hidden pb-5 fixed h-screen flex-grow w-full md:w-64 md:sticky z-40 bg-link'
		}`
	].join(' ')}
	transition:fly={{ y: -200, duration: 400 }}
	style="--background-color: {color}; --text-color: {textColor};"
>
	<ul
		class={[
			`${headerMenu ? 'flex space-x-3' : 'px-10 text-left text-lg font-extralight divide-y'}`
		].join(' ')}
	>
		{#each links as link (link.href)}
			<li class={[`${!headerMenu && 'py-2'}`].join(' ')} style={`${`color: ${textColor};`}`}>
				<a
					href={link.href}
					role="menuitem"
					onclick={() => {
						if (!headerMenu) {
							headerMenu = false;
						}
					}}
				>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	.bg-link {
		color: var(--text-color);
		background-color: var(--background-color);
	}
	@media (min-width: 768px) {
		.bg-link {
			background-color: inherit;
		}
	}
</style>
