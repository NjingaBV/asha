<script lang="ts">
	export type ButtonVariant = 'primary' | 'ghost' | 'outline';
	export type ButtonSize = 'sm' | 'md' | 'lg';

	export let variant: ButtonVariant = 'primary';
	export let size: ButtonSize = 'md';
	export let disabled = false;
	export let fullWidth = false;
</script>

<button
	class={`inline-flex items-center justify-center rounded-2xl font-medium transition
      ${fullWidth ? 'w-full' : ''}
      ${size === 'sm' ? 'px-3 py-1 text-xs' : ''}
      ${size === 'md' ? 'px-4 py-2 text-sm' : ''}
      ${size === 'lg' ? 'px-5 py-3 text-base' : ''}
      ${
			variant === 'primary'
				? 'bg-primary text-white shadow-[0_0_32px_rgba(0,199,190,0.35)] hover:scale-[1.01]'
				: ''
		}
      ${variant === 'ghost' ? 'bg-transparent text-primary hover:bg-surface/40' : ''}
      ${variant === 'outline' ? 'border border-border text-primary hover:bg-surface/40' : ''}
      disabled:opacity-40 disabled:cursor-not-allowed
    `}
	{disabled}
>
	<slot />
</button>
