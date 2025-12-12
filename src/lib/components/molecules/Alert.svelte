<!--
  @component Alert
  
  An alert/notification component for displaying messages.
  Supports different tones for success, error, warning, and info.
  
  @example Basic usage
  ```svelte
  <Alert tone="success">
    Your changes have been saved!
  </Alert>
  ```
  
  @example With title and dismissible
  ```svelte
  <Alert tone="error" title="Error" dismissible ondismiss={handleDismiss}>
    Something went wrong. Please try again.
  </Alert>
  ```
  
  @example With action
  ```svelte
  <Alert tone="warning">
    Your session is about to expire.
    {#snippet action()}
      <Button size="sm" variant="outline">Extend</Button>
    {/snippet}
  </Alert>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Alert tone */
	export type AlertTone = 'info' | 'success' | 'warning' | 'error';

	/** Alert variant */
	export type AlertVariant = 'filled' | 'outline' | 'subtle';

	/** Prop definitions for documentation */
	export const propDefs = {
		tone: {
			type: 'string',
			options: ['info', 'success', 'warning', 'error'],
			default: 'info',
			description: 'Alert tone/color'
		},
		variant: {
			type: 'string',
			options: ['filled', 'outline', 'subtle'],
			default: 'subtle',
			description: 'Visual style'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Alert tone */
		tone?: AlertTone;
		/** Visual variant */
		variant?: AlertVariant;
		/** Alert title */
		title?: string;
		/** Show dismiss button */
		dismissible?: boolean;
		/** Show icon */
		showIcon?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Alert content */
		children?: Snippet;
		/** Action slot */
		action?: Snippet;
		/** Custom icon slot */
		icon?: Snippet;
		/** Dismiss handler */
		ondismiss?: () => void;
	}

	let {
		tone = 'info',
		variant = 'subtle',
		title,
		dismissible = false,
		showIcon = true,
		class: className = '',
		children,
		action,
		icon,
		ondismiss
	}: Props = $props();

	// ============================================
	// State
	// ============================================

	let visible = $state(true);

	// ============================================
	// Style Classes
	// ============================================

	/** Tone-specific colors */
	const toneColors: Record<
		AlertTone,
		{ icon: string; filled: string; outline: string; subtle: string }
	> = {
		info: {
			icon: 'text-accent',
			filled: 'bg-accent text-fg-on-accent',
			outline: 'border-accent text-accent bg-transparent',
			subtle: 'bg-accent-subtle text-fg border-accent/20'
		},
		success: {
			icon: 'text-success',
			filled: 'bg-success text-fg-on-accent',
			outline: 'border-success text-success bg-transparent',
			subtle: 'bg-success-subtle text-fg border-success/20'
		},
		warning: {
			icon: 'text-warning',
			filled: 'bg-warning text-fg',
			outline: 'border-warning text-warning bg-transparent',
			subtle: 'bg-warning-subtle text-fg border-warning/20'
		},
		error: {
			icon: 'text-error',
			filled: 'bg-error text-fg-on-accent',
			outline: 'border-error text-error bg-transparent',
			subtle: 'bg-error-subtle text-fg border-error/20'
		}
	};

	/** Container classes */
	const containerClasses = $derived(
		[
			'flex items-start gap-3 p-4 rounded-lg',
			variant === 'outline' ? 'border' : 'border',
			toneColors[tone][variant],
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	/** Icon classes */
	const iconClasses = $derived(
		['shrink-0 w-5 h-5', variant === 'filled' ? '' : toneColors[tone].icon].join(' ')
	);

	// ============================================
	// Event Handlers
	// ============================================

	function handleDismiss() {
		visible = false;
		ondismiss?.();
	}
</script>

{#if visible}
	<div class={containerClasses} role="alert" data-tone={tone} data-variant={variant}>
		{#if showIcon}
			<span class={iconClasses} aria-hidden="true">
				{#if icon}
					{@render icon()}
				{:else if tone === 'info'}
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				{:else if tone === 'success'}
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				{:else if tone === 'warning'}
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
				{:else if tone === 'error'}
					<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				{/if}
			</span>
		{/if}

		<div class="flex-1 min-w-0">
			{#if title}
				<h4 class="font-semibold mb-1">{title}</h4>
			{/if}

			<div class="text-sm">
				{#if children}
					{@render children()}
				{/if}
			</div>

			{#if action}
				<div class="mt-3">
					{@render action()}
				</div>
			{/if}
		</div>

		{#if dismissible}
			<button
				type="button"
				class="shrink-0 p-1 rounded hover:bg-black/10 transition-colors"
				onclick={handleDismiss}
				aria-label="Dismiss"
			>
				<svg
					class="w-4 h-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		{/if}
	</div>
{/if}
