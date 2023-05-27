<script lang="ts">
	import { useMachine } from '@xstate/svelte';

	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Header from '$lib/components/organisms/Header/Header.svelte';
	import Shelf from '$lib/components/templates/Shelf/Shelf.svelte';
	import { uiMachine, type UIEvents } from '$lib/machines';

	import type { LinkType, LogoType, SliceType } from '$lib/models';
	import Player from '$lib/components/molecules/Player/Player.svelte';
	import Logo from '$lib/components/molecules/Logo/Logo.svelte';
	import Hamburger from '$lib/components/atoms/Hamburger/Hamburger.svelte';

	const { state, send } = useMachine(uiMachine);

	export let slices: SliceType[] = [];
	export let navLinks: LinkType[] = [];
	export let logo: LogoType;
	export let alternateColor = false;
	export let cta: { label: string; url: string; icon: string; href: string };

	export const handleMessage = (event: CustomEvent<{ eventName: any }>) => {
		const { detail } = event;
		const { eventName } = detail;
		send({ type: eventName, ...detail });
	};

	$: isCta = Boolean(cta) && Boolean(cta.url) && Boolean(cta.label || cta.icon);
	$: open = $state.matches('menu.open');
	$: isPlaying = $state.matches('player.open');
</script>

{#if isPlaying}
	<div class="fixed w-full z-30 top-0">
		<div class="bg-white flex justify-between items-center  px-2 md:px-0">
			<Logo {...logo} link="/" />
			<Hamburger eventName="CLOSE_PLAYER" open={true} on:message={handleMessage} />
		</div>
		<Player
			url={$state.context.mediaUrl}
			title=""
			subtitle=""
			overview=""
			thumbnail=""
			isPlaying={true}
		/>
	</div>
{:else}
	<Header {navLinks} {open} {logo} eventName="TOGGLE_MENU" on:message={handleMessage}>
		{#if isCta}
			<Button onClick={() => (location.href = cta.url)}>{cta.label}</Button>
		{/if}
	</Header>
{/if}
<Shelf {slices} {open} {navLinks} {alternateColor} on:message={handleMessage} />
