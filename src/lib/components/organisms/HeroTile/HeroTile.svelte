<script lang="ts">
	import Tile from '$lib/components/molecules/Tile/Tile.svelte';
	import type { LogoType } from '$lib/models';

	export let images: string[] = [];
	export let logo: LogoType;
</script>

<section class="relative overflow-hidden h-[30vh] md:h-[50vh]">
	<div
		class={[
			'absolute flex justify-center items-center max-w-full left-[50%] top-[50%]',
			'transform-gpu translate-x-[-70%] translate-y-[-45%] rotate-[-22.5deg]',
			'scroll-smooth'
		].join(' ')}
	>
		<Tile images={images.sort(() => 0.5 - Math.random()).slice(3)} speed={-0.5} />
		<Tile images={images.sort(() => 0.5 - Math.random()).slice(3)} speed={0.5} />
		<Tile images={images.sort(() => 0.5 - Math.random()).slice(3)} speed={-0.5} />
		<Tile images={images.sort(() => 0.5 - Math.random()).slice(3)} speed={0.5} />
		<Tile images={images.sort(() => 0.5 - Math.random()).slice(3)} speed={-0.5} />
	</div>
	{#if logo}
		<div class="absolute bg-stone-900/50 w-full h-full"></div>
		<div class="h-[30vh] md:h-[50vh] flex items-center">
			<img
				src={logo.imgUrl}
				alt={logo.imgAlt || logo.title}
				class="z-20 object-cover object-center mix-blend-screen"
			/>
		</div>
	{/if}
</section>
