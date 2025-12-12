<script lang="ts">
	import Button from '$lib/atoms/Button.svelte';
	let {
		logo = { title: 'Apple Watch' },
		links = [
			{ label: 'Aperçu', href: '#' },
			{ label: 'Caractéristiques', href: '#' },
			{ label: 'Comparer', href: '#' }
		],
		cta = { label: 'Acheter', href: '#' },
		dark = true
	}: {
		logo?: { title: string };
		links?: Array<{ label: string; href: string }>;
		cta?: { label: string; href: string } | null;
		dark?: boolean;
	} = $props();
</script>

<nav
	class={[
		'sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/70',
		dark ? 'bg-black/70 text-white border-white/10' : 'bg-white/70 text-black border-black/10'
	].join(' ')}
	aria-label="Product navigation"
>
	<div class="container mx-auto flex items-center justify-between px-4 md:px-6 py-3 gap-3">
		<div class="font-semibold tracking-tight whitespace-nowrap">{logo.title}</div>
		<ul class="hidden md:flex items-center gap-6 text-sm">
			{#each links as l}
				<li>
					<a
						class="hover:underline rounded px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
						href={l.href}
					>
						{l.label}
					</a>
				</li>
			{/each}
		</ul>
		{#if cta}
			<div class="hidden md:block">
				<Button href={cta.href} tone={dark ? 'secondary' : 'neutral'} size="sm">
					{cta.label}
				</Button>
			</div>
		{/if}
	</div>
	<!-- mobile scroller -->
	<div class="md:hidden overflow-x-auto no-scrollbar border-t border-white/10">
		<ul class="flex items-center gap-4 px-4 py-2 text-sm">
			{#each links as l}
				<li class="flex-none">
					<a
						class="hover:underline rounded px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
						href={l.href}
					>
						{l.label}
					</a>
				</li>
			{/each}
			{#if cta}
				<li class="flex-none">
					<Button href={cta.href} tone={dark ? 'secondary' : 'neutral'} size="sm">
						{cta.label}
					</Button>
				</li>
			{/if}
		</ul>
	</div>
</nav>
