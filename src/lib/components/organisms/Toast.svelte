<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon from '$lib/atoms/Icon.svelte';
	import IconButton from '$lib/atoms/IconButton.svelte';

	interface Props {
		/** Toast message */
		message?: string;
		/** Toast type/severity */
		type?: 'info' | 'success' | 'warning' | 'error';
		/** Toast title */
		title?: string;
		/** Auto-dismiss duration in ms (0 = no auto-dismiss) */
		duration?: number;
		/** Whether toast is visible */
		visible?: boolean;
		/** Position on screen */
		position?:
			| 'top-right'
			| 'top-left'
			| 'bottom-right'
			| 'bottom-left'
			| 'top-center'
			| 'bottom-center';
		/** Show close button */
		dismissible?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Close callback */
		onclose?: () => void;
		/** Custom content */
		children?: Snippet;
		/** Action slot */
		action?: Snippet;
	}

	let {
		message,
		type = 'info',
		title,
		duration = 5000,
		visible = $bindable(true),
		position = 'top-right',
		dismissible = true,
		class: className = '',
		onclose,
		children,
		action
	}: Props = $props();

	const typeConfig = {
		info: {
			icon: 'info',
			bg: 'bg-info/10 border-info/30',
			iconColor: 'text-info'
		},
		success: {
			icon: 'check-circle',
			bg: 'bg-success/10 border-success/30',
			iconColor: 'text-success'
		},
		warning: {
			icon: 'alert-triangle',
			bg: 'bg-warning/10 border-warning/30',
			iconColor: 'text-warning'
		},
		error: {
			icon: 'alert-circle',
			bg: 'bg-error/10 border-error/30',
			iconColor: 'text-error'
		}
	};

	const positionClasses = {
		'top-right': 'top-4 right-4',
		'top-left': 'top-4 left-4',
		'bottom-right': 'bottom-4 right-4',
		'bottom-left': 'bottom-4 left-4',
		'top-center': 'top-4 left-1/2 -translate-x-1/2',
		'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2'
	};

	function dismiss() {
		visible = false;
		onclose?.();
	}

	$effect(() => {
		if (visible && duration > 0) {
			const timer = setTimeout(dismiss, duration);
			return () => clearTimeout(timer);
		}
	});

	let config = $derived(typeConfig[type]);
</script>

{#if visible}
	<div
		class={[
			'fixed z-50 w-full max-w-sm p-4 rounded-lg border shadow-lg',
			config.bg,
			positionClasses[position],
			'animate-in fade-in slide-in-from-top-2 duration-300 motion-reduce:animate-none motion-reduce:transition-none',
			className
		].join(' ')}
		role="alert"
		aria-live={type === 'error' ? 'assertive' : 'polite'}
	>
		<div class="flex items-start gap-3">
			<Icon
				name={config.icon}
				size={20}
				class={['flex-shrink-0 mt-0.5', config.iconColor].join(' ')}
			/>

			<div class="flex-1 min-w-0">
				{#if title}
					<p class="font-semibold text-fg">{title}</p>
				{/if}
				{#if message}
					<p class={['text-sm text-fg-muted', title ? 'mt-1' : ''].join(' ')}>
						{message}
					</p>
				{/if}
				{@render children?.()}

				{#if action}
					<div class="mt-3">
						{@render action()}
					</div>
				{/if}
			</div>

			{#if dismissible}
				<IconButton
					icon="x"
					size="sm"
					label="Dismiss"
					onclick={dismiss}
					class="flex-shrink-0 -mt-1 -mr-1"
				/>
			{/if}
		</div>
	</div>
{/if}
