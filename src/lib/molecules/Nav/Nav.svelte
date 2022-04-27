<script lang="ts">
	import type { ILink } from '@djfacemaker/core';
	import { fly } from 'svelte/transition';

	export let headerMenu = false;
	export let links: ILink[] = [];
</script>

<nav
	class={[
		` text-slate-500 bg-white`,
		`${
			headerMenu
				? 'no-underline whitespace-nowrap mr-4 hidden md:inline-block'
				: 'md:hidden pb-5 fixed h-screen flex-shrink-0 w-full md:w-64 md:sticky z-40'
		}`
	].join(' ')}
	transition:fly={{ y: -200, duration: 400 }}
>
	<ul
		class={[
			`${headerMenu ? 'flex space-x-3' : 'px-10 text-left text-lg font-extralight divide-y'}`
		].join(' ')}
	>
		{#each links as link}
			<li class={[`text-slate-500 bg-white`, `${!headerMenu && 'py-2'}`].join(' ')}>
				<a href={link.href}>{link.label}</a>
			</li>
		{/each}
	</ul>
</nav>
