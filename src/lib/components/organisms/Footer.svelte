<script lang="ts">
	import Logo from '$lib/components/atoms/Logo.svelte';
	import type { LogoType } from 'src/lib/models';

	let {
		logo = { title: '', imgUrl: '', imgAlt: '' },
		link = '/',
		brandName = 'Company'
	}: {
		logo?: LogoType;
		link?: string;
		brandName?: string;
	} = $props();
</script>

<footer class="bg-bg-muted border-t border-border">
	<div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
		<div class="pt-8 mt-8 md:flex md:items-center md:justify-between">
			<div>
				<Logo {...logo} {link} />
				<p class="mt-4 text-xs text-fg-subtle">
					© Copyright &copy; {new Date().getFullYear()}
					{brandName}.
				</p>
			</div>
		</div>
	</div>
</footer>
