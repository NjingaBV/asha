<script lang="ts">
	// Props
	let {
		order = 0,
		title = '',
		color = '#3b82f6',
		gradient = false
	}: {
		order: number;
		title: string;
		color: string;
		gradient?: boolean;
	} = $props();

	// Fonctions utilitaires
	const adjustColor = (hex: string, amount: number): string => {
		const hasPound = hex[0] === '#';
		hex = hex.replace('#', '');
		const num = parseInt(hex, 16);

		const clamp = (v: number) => Math.min(255, Math.max(0, v));

		const r = clamp((num >> 16) + amount);
		const g = clamp(((num >> 8) & 0x00ff) + amount);
		const b = clamp((num & 0x0000ff) + amount);

		return `${hasPound ? '#' : ''}${(g | (b << 8) | (r << 16)).toString(16).padStart(6, '0')}`;
	};

	// Couleurs dérivées
	let base = $derived(color);
	let light = $derived(gradient ? adjustColor(color, 50) : color);
	let dark = $derived(gradient ? adjustColor(color, -50) : color);

	// Classes dynamiques
	const lineClasses = $derived(
		gradient
			? 'bg-gradient-to-b from-[var(--dark)] via-[var(--base)] to-[var(--light)]'
			: 'bg-[var(--base)]'
	);

	const badgeClasses = $derived(
		gradient
			? 'bg-gradient-to-r from-[var(--dark)] via-[var(--base)] to-[var(--light)]'
			: 'bg-[var(--base)]'
	);

	const titleClasses = $derived(
		gradient
			? 'bg-gradient-to-r from-[var(--dark)] via-[var(--base)] to-[var(--light)] bg-clip-text text-transparent'
			: 'text-[var(--base)]'
	);
</script>

<div
	class="relative flex flex-col items-center justify-start font-bold"
	style="
      --base: {base};
      --light: {light};
      --dark: {dark};
    "
>
	<!-- Ligne verticale -->
	<span class="h-24 w-px {lineClasses}"></span>

	<!-- Numéro -->
	<div class="mb-4 text-center">
		<span
			class="flex h-10 w-10 items-center justify-center rounded-full text-white font-bold {badgeClasses}"
		>
			{order}
		</span>
	</div>

	<!-- Titre -->
	<h3 class="text-center text-3xl tracking-tighter md:text-4xl {titleClasses}">
		{title}
	</h3>
</div>
