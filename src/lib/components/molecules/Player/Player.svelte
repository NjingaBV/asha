<script lang="ts">
    import Youtube from '$lib/components/atoms/Youtube/Youtube.svelte'

    export let url: string;

    const getComponent = (selectedUrl: string): ComponentType | undefined => {
        const urlCheck = new URL(selectedUrl)
        console.log("dd: ", urlCheck.host)
		switch (urlCheck.host) {
			case 'www.youtube.com':
				return Youtube;
		}
	};
</script>

<div class="relative w-full aspect-[16/9]">
	<svelte:component this={getComponent(url)} url={url} />
</div>
