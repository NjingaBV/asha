<script lang="ts">
    export let url

    $: src = `${url}?autoplay=0&controls=1&rel=0&showinfo=0&enablejsapi=1&modestbranding=0&iv_load_policy=3&playsinline=1`
</script>

<iframe class="relative w-full aspect-[16/9]" src={src}  frameborder="0" title="YouTube video player">
</iframe>