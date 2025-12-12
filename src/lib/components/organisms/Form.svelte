<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button from '$lib/atoms/Button.svelte';

	interface Props {
		/** Form action URL */
		action?: string;
		/** HTTP method */
		method?: 'get' | 'post';
		/** Form ID */
		id?: string;
		/** Whether form is submitting */
		submitting?: boolean;
		/** Submit button text */
		submitText?: string;
		/** Cancel button text */
		cancelText?: string;
		/** Show cancel button */
		showCancel?: boolean;
		/** Layout direction */
		layout?: 'vertical' | 'horizontal' | 'inline';
		/** Custom CSS classes */
		class?: string;
		/** Submit handler */
		onsubmit?: (event: SubmitEvent) => void;
		/** Cancel handler */
		oncancel?: () => void;
		/** Form content */
		children?: Snippet;
		/** Actions slot */
		actions?: Snippet;
	}

	let {
		action,
		method = 'post',
		id,
		submitting = false,
		submitText = 'Submit',
		cancelText = 'Cancel',
		showCancel = false,
		layout = 'vertical',
		class: className = '',
		onsubmit,
		oncancel,
		children,
		actions
	}: Props = $props();

	function handleSubmit(event: SubmitEvent) {
		if (onsubmit) {
			event.preventDefault();
			onsubmit(event);
		}
	}

	const layoutClasses = {
		vertical: 'space-y-4',
		horizontal: 'grid grid-cols-1 md:grid-cols-2 gap-4',
		inline: 'flex flex-wrap items-end gap-4'
	};
</script>

<form
	{id}
	{action}
	{method}
	class={[layoutClasses[layout], className].join(' ')}
	onsubmit={handleSubmit}
>
	{@render children?.()}

	{#if actions}
		<div class={layout === 'inline' ? '' : 'pt-4'}>
			{@render actions()}
		</div>
	{:else}
		<div
			class={[
				'flex gap-3',
				layout === 'inline' ? '' : 'pt-4',
				layout === 'horizontal' ? 'md:col-span-2' : ''
			].join(' ')}
		>
			<Button type="submit" tone="primary" disabled={submitting}>
				{#if submitting}
					Submitting...
				{:else}
					{submitText}
				{/if}
			</Button>

			{#if showCancel}
				<Button type="button" tone="ghost" onclick={oncancel} disabled={submitting}>
					{cancelText}
				</Button>
			{/if}
		</div>
	{/if}
</form>
