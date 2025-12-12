<!--
  @component Textarea
  
  A multi-line text input component with validation states and auto-resize option.
  Follows the same patterns as Input for consistency.
  
  @example Basic usage
  ```svelte
  <Textarea label="Description" placeholder="Enter description..." />
  ```
  
  @example With validation
  ```svelte
  <Textarea 
    label="Bio" 
    maxlength={500}
    error="Bio is required"
  />
  ```
  
  @example Auto-resize
  ```svelte
  <Textarea autoResize minRows={2} maxRows={10} />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Textarea visual variant */
	export type TextareaVariant = 'outline' | 'filled' | 'ghost';

	/** Textarea size */
	export type TextareaSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		variant: {
			type: 'string',
			options: ['outline', 'filled', 'ghost'],
			default: 'outline',
			description: 'Visual style variant'
		},
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Textarea size'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Visual variant */
		variant?: TextareaVariant;
		/** Size */
		size?: TextareaSize;
		/** Current value (bindable) */
		value?: string;
		/** Placeholder text */
		placeholder?: string;
		/** Label text */
		label?: string;
		/** Helper text below textarea */
		helperText?: string;
		/** Error message */
		error?: string;
		/** Success message */
		success?: string;
		/** Disabled state */
		disabled?: boolean;
		/** Read-only state */
		readonly?: boolean;
		/** Required field */
		required?: boolean;
		/** Number of visible rows */
		rows?: number;
		/** Min rows for auto-resize */
		minRows?: number;
		/** Max rows for auto-resize */
		maxRows?: number;
		/** Auto-resize based on content */
		autoResize?: boolean;
		/** Resize behavior */
		resize?: 'none' | 'vertical' | 'horizontal' | 'both';
		/** ID for the textarea */
		id?: string;
		/** Name attribute */
		name?: string;
		/** Min length */
		minlength?: number;
		/** Max length */
		maxlength?: number;
		/** Full width */
		fullWidth?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Input event handler */
		oninput?: (event: Event & { currentTarget: HTMLTextAreaElement }) => void;
		/** Change event handler */
		onchange?: (event: Event & { currentTarget: HTMLTextAreaElement }) => void;
		/** Focus event handler */
		onfocus?: (event: FocusEvent) => void;
		/** Blur event handler */
		onblur?: (event: FocusEvent) => void;
	}

	let {
		variant = 'outline',
		size = 'md',
		value = $bindable(''),
		placeholder,
		label,
		helperText,
		error,
		success,
		disabled = false,
		readonly = false,
		required = false,
		rows = 3,
		minRows = 3,
		maxRows = 10,
		autoResize = false,
		resize = 'vertical',
		id,
		name,
		minlength,
		maxlength,
		fullWidth = false,
		class: className = '',
		oninput,
		onchange,
		onfocus,
		onblur
	}: Props = $props();

	// ============================================
	// Refs
	// ============================================

	let textareaRef: HTMLTextAreaElement | undefined = $state();

	// ============================================
	// Derived State
	// ============================================

	const textareaId = $derived(id || `textarea-${Math.random().toString(36).slice(2, 9)}`);
	const errorId = $derived(`${textareaId}-error`);
	const helperId = $derived(`${textareaId}-helper`);

	const hasError = $derived(!!error);
	const hasSuccess = $derived(!!success && !hasError);

	// ============================================
	// Auto-resize Logic
	// ============================================

	function adjustHeight() {
		if (!autoResize || !textareaRef) return;

		// Reset height to calculate scrollHeight
		textareaRef.style.height = 'auto';

		// Calculate line height
		const computedStyle = window.getComputedStyle(textareaRef);
		const lineHeight = parseFloat(computedStyle.lineHeight) || 20;
		const paddingTop = parseFloat(computedStyle.paddingTop);
		const paddingBottom = parseFloat(computedStyle.paddingBottom);

		// Calculate min/max heights
		const minHeight = lineHeight * minRows + paddingTop + paddingBottom;
		const maxHeight = lineHeight * maxRows + paddingTop + paddingBottom;

		// Set new height
		const newHeight = Math.min(Math.max(textareaRef.scrollHeight, minHeight), maxHeight);
		textareaRef.style.height = `${newHeight}px`;
	}

	$effect(() => {
		if (autoResize && value !== undefined) {
			adjustHeight();
		}
	});

	// ============================================
	// Style Classes
	// ============================================

	/** Wrapper classes */
	const wrapperClasses = $derived(
		['flex flex-col gap-1.5', fullWidth ? 'w-full' : '', className].filter(Boolean).join(' ')
	);

	/** Label classes */
	const labelClasses = ['text-sm font-medium text-fg', 'leading-none'].join(' ');

	/** Size-specific classes */
	const sizeClasses: Record<TextareaSize, string> = {
		sm: 'px-2.5 py-1.5 text-sm',
		md: 'px-3 py-2 text-base',
		lg: 'px-4 py-3 text-lg'
	};

	/** Variant-specific classes */
	const variantClasses: Record<
		TextareaVariant,
		{ base: string; focus: string; error: string; success: string }
	> = {
		outline: {
			base: 'border border-border bg-bg shadow-sm',
			focus: 'focus:border-accent focus:ring-2 focus:ring-accent focus:ring-offset-0',
			error: 'border-error focus:border-error focus:ring-2 focus:ring-error focus:ring-offset-0',
			success:
				'border-success focus:border-success focus:ring-2 focus:ring-success focus:ring-offset-0'
		},
		filled: {
			base: 'border border-transparent bg-bg-muted',
			focus: 'focus:border-accent focus:ring-2 focus:ring-accent focus:bg-bg focus:ring-offset-0',
			error: 'border-error bg-error-subtle focus:border-error focus:ring-2 focus:ring-error focus:ring-offset-0',
			success:
				'border-success bg-success-subtle focus:border-success focus:ring-2 focus:ring-success focus:ring-offset-0'
		},
		ghost: {
			base: 'border border-transparent bg-transparent',
			focus: 'focus:border-border focus:ring-2 focus:ring-border-focus focus:bg-bg-subtle focus:ring-offset-0',
			error: 'border-error focus:border-error focus:ring-2 focus:ring-error focus:ring-offset-0',
			success:
				'border-success focus:border-success focus:ring-2 focus:ring-success focus:ring-offset-0'
		}
	};

	/** Resize classes */
	const resizeClasses: Record<string, string> = {
		none: 'resize-none',
		vertical: 'resize-y',
		horizontal: 'resize-x',
		both: 'resize'
	};

	/** Combined textarea classes */
	const textareaClasses = $derived(() => {
		const v = variantClasses[variant];
		const stateClass = hasError ? v.error : hasSuccess ? v.success : v.focus;
		return [
			'w-full rounded-lg',
			'text-fg placeholder:text-fg-subtle',
			'outline-none',
			'transition-all duration-fast ease-standard',
			'disabled:opacity-disabled disabled:cursor-not-allowed disabled:bg-bg-subtle',
			sizeClasses[size],
			v.base,
			stateClass,
			autoResize ? 'resize-none overflow-hidden' : resizeClasses[resize]
		]
			.filter(Boolean)
			.join(' ');
	});

	/** Helper/Error text classes */
	const helperClasses = $derived(
		[
			'text-xs leading-normal',
			hasError ? 'text-error' : hasSuccess ? 'text-success' : 'text-fg-muted'
		].join(' ')
	);

	// ============================================
	// Event Handlers
	// ============================================

	function handleInput(event: Event & { currentTarget: HTMLTextAreaElement }) {
		value = event.currentTarget.value;
		if (autoResize) adjustHeight();
		oninput?.(event);
	}
</script>

<div class={wrapperClasses} data-variant={variant} data-size={size}>
	{#if label}
		<label for={textareaId} class={labelClasses}>
			{label}
			{#if required}
				<span class="text-error ml-0.5" aria-hidden="true">*</span>
			{/if}
		</label>
	{/if}

	<textarea
		bind:this={textareaRef}
		id={textareaId}
		{name}
		{placeholder}
		{disabled}
		{readonly}
		{required}
		{minlength}
		{maxlength}
		rows={autoResize ? minRows : rows}
		bind:value
		class={textareaClasses()}
		aria-describedby={error ? errorId : helperText ? helperId : undefined}
		aria-invalid={hasError ? 'true' : undefined}
		oninput={handleInput}
		{onchange}
		{onfocus}
		{onblur}
	></textarea>

	{#if maxlength && value}
		<div class="flex justify-between items-center">
			{#if error}
				<p id={errorId} class={helperClasses} role="alert">{error}</p>
			{:else if success}
				<p id={helperId} class={helperClasses}>{success}</p>
			{:else if helperText}
				<p id={helperId} class={helperClasses}>{helperText}</p>
			{:else}
				<span></span>
			{/if}
			<span class="text-xs text-fg-muted">
				{value.length}/{maxlength}
			</span>
		</div>
	{:else if error}
		<p id={errorId} class={helperClasses} role="alert">{error}</p>
	{:else if success}
		<p id={helperId} class={helperClasses}>{success}</p>
	{:else if helperText}
		<p id={helperId} class={helperClasses}>{helperText}</p>
	{/if}
</div>
