<script lang="ts">
    import Logo from '$lib/components/molecules/Logo/Logo.svelte';
    import type { LogoType } from '$lib/models';

    export let logo: LogoType;
    export let link = '/';
	export let brandName: string;
</script>

<footer class="bg-gray-100 border-t">
	<div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
		<div class="pt-8 mt-8 md:flex md:items-center md:justify-between">
			<div>
				<Logo {...logo} {link} />
				<p class="mt-4 text-xs text-gray-500 ">
					© Copyright &copy; {new Date().getFullYear()}
					{brandName}.
				</p>
			</div>
		</div>
	</div>
</footer>
