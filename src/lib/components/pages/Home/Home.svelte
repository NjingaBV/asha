<script lang="ts">
	import { useMachine } from '@xstate/svelte';
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Header from '$lib/components/organisms/Header/Header.svelte';
	import Shelf from '$lib/components/templates/Shelf/Shelf.svelte';
	import { uiMachine } from '$lib/machines';
	import type { UIEvents } from '$lib/machines';

	import type { LinkType, LogoType, SliceType } from '$lib/models';
	import AnimatedBlob from '$lib/components/organisms/AnimatedBlob/AnimatedBlob.svelte';

	const { state, send } = useMachine(uiMachine);

	export let slices: SliceType[] = [];
	export let navLinks: LinkType[] = [];
	export let logo: LogoType;
	export let alternateColor = false;
	export let cta: { label: string; url: string; icon: string; href: string };
	const eventName = 'TOGGLE_MENU';

	export const handleMessage = (event: CustomEvent<{ eventName: UIEvents }>) => {
		console.log('event: ', event.detail);
		const { detail } = event;
		const { eventName } = detail;
		send(eventName, { ...detail });
	};

	$: isCta = Boolean(cta) && Boolean(cta.url) && Boolean(cta.label || cta.icon);
	$: open = $state.matches('menu.open');
</script>

<Header {navLinks} {open} {logo} {eventName} on:message={handleMessage}>
	{#if isCta}
		<Button onClick={() => (location.href = cta.url)}>{cta.label}</Button>
	{/if}
</Header>
<Shelf {slices} {open} {navLinks} {alternateColor} on:message={handleMessage} />
