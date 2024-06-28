<script lang="ts">
	import { onMount } from 'svelte';
    import { createActor } from 'xstate'
    import {youtubeMachine} from '$lib/components/atoms/Youtube/Youtube.machine';

    export let videoId: string;

    const youtubeActor = createActor(youtubeMachine, {
        input: {
            videoId,
        },
    })

	onMount(() => {
        youtubeActor.start();
        youtubeActor.subscribe((state) => {
            console.log('new state: ', state)
        })
        youtubeActor.send({type: 'READY'});
	});



    $:console.log('actor ', youtubeActor);

</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="relative w-full aspect-[16/9]">
	<div id="player" class="absolute inset-0 w-full h-full" />
</div>
