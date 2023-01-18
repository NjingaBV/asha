<script context="module">
	import { setContext, onMount } from 'svelte';

	let iframeApiReady = false;

	var tag = document.createElement('script');
	tag.src = 'https://www.youtube.com/iframe_api';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	window.onYouTubeIframeAPIReady = () => window.dispatchEvent(new Event('iframeApiReady'));
</script>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { getContext } from 'svelte';

	export let videoId;

	let player;
	let divId = 'player_' + parseInt(Math.random() * 109999);

	export const play = () => {
		player.playVideo();
	};

	const dispatch = createEventDispatcher();

	window.addEventListener('iframeApiReady', function (e) {
		player = new YT.Player(divId, {
			videoId,
			events: {
				onReady: playerIsReady,
				onStateChange: playerStateChange
			},
			playerVars: {
				autoplay: 0,
				controls: 1,
				rel: 0,
				showinfo: 0,
				enablejsapi: 1,
				modestbranding: 0,
				iv_load_policy: 3,
				playsinline: 1
			}
		});
	});

	const playerStateChange = ({ data }) => {
		dispatch('PlayerStateChange', data);
		console.log(data);
		let strReturn = '';
		if (data == -1) {
			strReturn = '(unstarted)';
		}
		if (data == 0) {
			strReturn = '(ended)';
		}
		if (data == 1) {
			strReturn = '(playing)';
		}
		if (data == 2) {
			strReturn = '(paused)';
		}
		if (data == 3) {
			strReturn = '(buffering)';
		}
		if (data == 5) {
			strReturn = '(video cued).';
		}
		dispatch('PlayerStateChangeString', strReturn);
	};

	const playerIsReady = () => {
		dispatch('Ready');
		setInterval(() => {
			dispatch('currentPlayTime', player.getCurrentTime());
		}, 1000);
	};
</script>

<div class="relative w-full aspect-[16/9]">
	<div id={divId} class="w-full h-full" />
</div>
