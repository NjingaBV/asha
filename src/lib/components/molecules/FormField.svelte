<!--
  @component FormField
  
  A form field wrapper that provides consistent layout for labels, inputs, and error messages.
  Wraps any form input component with proper accessibility attributes.
  
  ## IMPORTANT: Connecting the Input
  
  The child input MUST use the exposed `fieldId` and `describedBy` for proper accessibility:
  
  @example Correct usage with Input component
  ```svelte
  <FormField label="Email" required let:fieldId let:describedBy>
    <Input id={fieldId} aria-describedby={describedBy} type="email" />
  </FormField>
  ```
  
  @example With error
  ```svelte
  <FormField label="Password" error="Password is required" let:fieldId let:describedBy>
    <Input id={fieldId} aria-describedby={describedBy} type="password" invalid />
  </FormField>
  ```
  
  @example With helper text
  ```svelte
  <FormField label="Username" helperText="Choose a unique username" let:fieldId let:describedBy>
    <Input id={fieldId} aria-describedby={describedBy} />
  </FormField>
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** FormField size */
	export type FormFieldSize = 'sm' | 'md' | 'lg';

	/** Props passed to the children snippet for connecting inputs */
	export interface FormFieldSlotProps {
		/** ID to use on the input element */
		fieldId: string;
		/** ID for aria-describedby (combines error/helper IDs) */
		describedBy: string | undefined;
		/** Whether the field has an error */
		hasError: boolean;
		/** Whether the field is required */
		isRequired: boolean;
	}

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Field size'
		}
	} as const;
</script>

<script lang="ts">
	import type { Snippet } from 'svelte';

	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Field label */
		label?: string;
		/** Size */
		size?: FormFieldSize;
		/** Helper text */
		helperText?: string;
		/** Error message */
		error?: string;
		/** Success message */
		success?: string;
		/** Required field */
		required?: boolean;
		/** Optional indicator */
		optional?: boolean;
		/** ID for the field (connects label to input) */
		id?: string;
		/** Custom CSS classes */
		class?: string;
		/** Input slot - receives fieldId, describedBy, hasError, isRequired props */
		children?: Snippet<[FormFieldSlotProps]>;
		/** Label suffix slot */
		labelSuffix?: Snippet;
	}

	let {
		label,
		size = 'md',
		helperText,
		error,
		success,
		required = false,
		optional = false,
		id,
		class: className = '',
		children,
		labelSuffix
	}: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	const fieldId = $derived(id || `field-${Math.random().toString(36).slice(2, 9)}`);
	const errorId = $derived(`${fieldId}-error`);
	const helperId = $derived(`${fieldId}-helper`);
	const hasError = $derived(!!error);
	const hasSuccess = $derived(!!success && !hasError);

	// Compute aria-describedby value for the input
	const describedBy = $derived(hasError ? errorId : helperText || success ? helperId : undefined);

	// Slot props to pass to children
	const slotProps = $derived({
		fieldId,
		describedBy,
		hasError,
		isRequired: required
	});

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const labelSizeClasses: Record<FormFieldSize, string> = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-base'
	};

	const helperSizeClasses: Record<FormFieldSize, string> = {
		sm: 'text-xs',
		md: 'text-xs',
		lg: 'text-sm'
	};

	const gapClasses: Record<FormFieldSize, string> = {
		sm: 'gap-1',
		md: 'gap-1.5',
		lg: 'gap-2'
	};

	/** Container classes */
	const containerClasses = $derived(
		['flex flex-col', gapClasses[size], className].filter(Boolean).join(' ')
	);

	/** Label classes */
	const labelClasses = $derived([labelSizeClasses[size], 'font-medium text-fg'].join(' '));

	/** Helper/error text classes */
	const messageClasses = $derived(
		[
			helperSizeClasses[size],
			hasError ? 'text-error' : hasSuccess ? 'text-success' : 'text-fg-muted'
		].join(' ')
	);
</script>

<div class={containerClasses} data-size={size}>
	{#if label}
		<div class="flex items-center justify-between gap-2">
			<label for={fieldId} class={labelClasses}>
				{label}
				{#if required}
					<span class="text-error ml-0.5" aria-hidden="true">*</span>
				{/if}
				{#if optional}
					<span class="text-fg-muted font-normal ml-1">(optional)</span>
				{/if}
			</label>
			{#if labelSuffix}
				{@render labelSuffix()}
			{/if}
		</div>
	{/if}

	{#if children}
		<div
			data-field-id={fieldId}
			data-error={hasError ? '' : undefined}
			data-success={hasSuccess ? '' : undefined}
		>
			{@render children(slotProps)}
		</div>
	{/if}

	{#if error}
		<p id={errorId} class={messageClasses} role="alert">
			{error}
		</p>
	{:else if success}
		<p id={helperId} class={messageClasses}>
			{success}
		</p>
	{:else if helperText}
		<p id={helperId} class={messageClasses}>
			{helperText}
		</p>
	{/if}
</div>
