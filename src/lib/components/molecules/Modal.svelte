<!--
  @component Modal
  
  A dialog component with focus trap, keyboard navigation, and transitions.
  Uses XState for state management and follows WAI-ARIA dialog patterns.
  
  @example Basic usage
  ```svelte
  <Modal bind:open title="Confirmation">
    <p>Are you sure you want to continue?</p>
    {#snippet footer()}
      <Button variant="outline" onclick={() => open = false}>Cancel</Button>
      <Button onclick={handleConfirm}>Confirm</Button>
    {/snippet}
  </Modal>
  ```
  
  @example Without close button
  ```svelte
  <Modal open={showModal} title="Alert" hideCloseButton closeOnBackdrop={false}>
    <p>This requires your attention.</p>
  </Modal>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Modal size */
	export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg', 'xl', 'full'],
			default: 'md',
			description: 'Modal width size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { createFocusTrap } from '$lib/machines/modal.machine';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Whether modal is open (bindable) */
		open?: boolean;
		/** Modal title */
		title?: string;
		/** Modal description for screen readers */
		description?: string;
		/** Size preset */
		size?: ModalSize;
		/** Close on Escape key */
		closeOnEscape?: boolean;
		/** Close on backdrop click */
		closeOnBackdrop?: boolean;
		/** Hide the close button */
		hideCloseButton?: boolean;
		/** Custom CSS classes for dialog */
		class?: string;
		/** ID for the modal */
		id?: string;
		/** Header slot */
		header?: Snippet;
		/** Main content slot */
		children?: Snippet;
		/** Footer slot */
		footer?: Snippet;
		/** Close event handler */
		onclose?: () => void;
		/** Open event handler */
		onopen?: () => void;
	}

	let {
		open = $bindable(false),
		title,
		description,
		size = 'md',
		closeOnEscape = true,
		closeOnBackdrop = true,
		hideCloseButton = false,
		class: className = '',
		id,
		header,
		children,
		footer,
		onclose,
		onopen
	}: Props = $props();

	// ============================================
	// State
	// ============================================

	let dialogRef: HTMLDialogElement | undefined = $state();
	let focusTrap: ReturnType<typeof createFocusTrap> | null = $state(null);
	let previousActiveElement: HTMLElement | null = $state(null);

	// ============================================
	// Derived
	// ============================================

	const modalId = $derived(id || `modal-${Math.random().toString(36).slice(2, 9)}`);
	const titleId = $derived(`${modalId}-title`);
	const descId = $derived(`${modalId}-desc`);

	// ============================================
	// Size Classes
	// ============================================

	const sizeClasses: Record<ModalSize, string> = {
		sm: 'max-w-sm',
		md: 'max-w-lg',
		lg: 'max-w-2xl',
		xl: 'max-w-4xl',
		full: 'max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]'
	};

	// ============================================
	// Effects
	// ============================================

	$effect(() => {
		if (!dialogRef) return;

		if (open) {
			// Save current focus
			previousActiveElement = document.activeElement as HTMLElement;

			// Show modal
			dialogRef.showModal();

			// Setup focus trap
			focusTrap = createFocusTrap(dialogRef);

			// Prevent body scroll
			document.body.style.overflow = 'hidden';

			onopen?.();
		} else {
			// Close modal
			dialogRef.close();

			// Cleanup focus trap
			focusTrap?.destroy();
			focusTrap = null;

			// Restore body scroll
			document.body.style.overflow = '';

			// Restore focus
			previousActiveElement?.focus();
			previousActiveElement = null;

			onclose?.();
		}
	});

	// ============================================
	// Event Handlers
	// ============================================

	function handleClose() {
		open = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && closeOnEscape) {
			event.preventDefault();
			handleClose();
		}
	}

	function handleBackdropClick(event: MouseEvent) {
		if (closeOnBackdrop && event.target === dialogRef) {
			handleClose();
		}
	}

	function handleDialogClose(event: Event) {
		// Handle native dialog close (e.g., from form submission)
		event.preventDefault();
		handleClose();
	}
</script>

<dialog
	bind:this={dialogRef}
	{id}
	class="
		fixed inset-0 z-modal
		m-auto p-0
		bg-transparent
		backdrop:bg-bg-overlay backdrop:opacity-overlay
		open:animate-fade-in
	"
	aria-labelledby={title ? titleId : undefined}
	aria-describedby={description ? descId : undefined}
	aria-modal="true"
	onclick={handleBackdropClick}
	onkeydown={handleKeydown}
	onclose={handleDialogClose}
	data-size={size}
>
	<div
		class="
			flex flex-col
			w-full {sizeClasses[size]}
			bg-surface rounded-xl shadow-overlay
			animate-scale-in
			{className}
		"
		role="document"
	>
		<!-- Header -->
		<header class="flex items-start justify-between gap-4 px-6 pt-6 pb-4">
			{#if header}
				{@render header()}
			{:else if title}
				<div class="flex-1 min-w-0">
					<h2 id={titleId} class="text-xl font-semibold text-fg leading-tight">
						{title}
					</h2>
					{#if description}
						<p id={descId} class="mt-1 text-sm text-fg-muted">
							{description}
						</p>
					{/if}
				</div>
			{/if}

			{#if !hideCloseButton}
				<button
					type="button"
					class="
						flex items-center justify-center
						w-8 h-8 -mr-2 -mt-1
						rounded-lg
						text-fg-muted
						hover:text-fg hover:bg-bg-muted
						focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
						transition-colors duration-fast
					"
					aria-label="Close dialog"
					onclick={handleClose}
				>
					<svg
						class="w-5 h-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			{/if}
		</header>

		<!-- Content -->
		<div class="flex-1 px-6 py-2 overflow-y-auto">
			{#if children}
				{@render children()}
			{/if}
		</div>

		<!-- Footer -->
		{#if footer}
			<footer class="flex items-center justify-end gap-3 px-6 pt-4 pb-6">
				{@render footer()}
			</footer>
		{/if}
	</div>
</dialog>
