<script lang="ts">
	import type { Snippet } from 'svelte';

	/**
	 * Input component - Accessible text input following Apple design principles
	 *
	 * @example
	 * <Input label="Email" type="email" placeholder="you@example.com" />
	 * <Input size="sm" invalid error="Required field" />
	 * <Input readonly value="Read only value" />
	 */

	export type InputType = 'text' | 'email' | 'password' | 'url' | 'tel' | 'number' | 'search';
	export type InputSize = 'sm' | 'md' | 'lg';

	interface Props {
		/** Input type */
		type?: InputType;
		/** Input name attribute */
		name?: string;
		/** Current value */
		value?: string;
		/** Placeholder text */
		placeholder?: string;
		/** Disabled state */
		disabled?: boolean;
		/** Read-only state */
		readonly?: boolean;
		/** Required field */
		required?: boolean;
		/** Invalid/error state */
		invalid?: boolean;
		/** Error message */
		error?: string;
		/** Hint/helper text */
		hint?: string;
		/** Label text */
		label?: string;
		/** Input size */
		size?: InputSize;
		/** Full width */
		fullWidth?: boolean;
		/** Autocomplete attribute */
		autocomplete?: string;
		/** Min value (for number type) */
		min?: number;
		/** Max value (for number type) */
		max?: number;
		/** Step value (for number type) */
		step?: number;
		/** Max length */
		maxlength?: number;
		/** Pattern for validation */
		pattern?: string;
		/** ARIA label */
		ariaLabel?: string;
		/** Additional CSS classes */
		class?: string;
		/** Change handler */
		onChange?: (value: string) => void;
		/** Input handler (real-time) */
		onInput?: (value: string) => void;
		/** Blur handler */
		onBlur?: () => void;
		/** Focus handler */
		onFocus?: () => void;
		/** Icon before input */
		iconLeft?: Snippet;
		/** Icon after input */
		iconRight?: Snippet;
	}

	let {
		type = 'text',
		name = undefined,
		value = $bindable(''),
		placeholder = undefined,
		disabled = false,
		readonly = false,
		required = false,
		invalid = false,
		error = undefined,
		hint = undefined,
		label = undefined,
		size = 'md',
		fullWidth = false,
		autocomplete = undefined,
		min = undefined,
		max = undefined,
		step = undefined,
		maxlength = undefined,
		pattern = undefined,
		ariaLabel = undefined,
		class: className = '',
		onChange = undefined,
		onInput = undefined,
		onBlur = undefined,
		onFocus = undefined,
		iconLeft,
		iconRight
	}: Props = $props();

	// Generate unique ID for accessibility (SSR-safe)
	let idCounter = 0;
	const id = `input-${typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : `fallback-${++idCounter}`}`;
	const errorId = `${id}-error`;
	const hintId = `${id}-hint`;

	/**
	 * Size-based classes
	 */
	const getSizeClasses = (): string => {
		const sizes = {
			sm: 'px-3 py-1.5 text-sm',
			md: 'px-4 py-2 text-base',
			lg: 'px-6 py-3 text-lg'
		};
		return sizes[size];
	};

	/**
	 * Base input classes
	 */
	const baseClasses = [
		'w-full',
		'rounded-md',
		'border',
		'bg-surface',
		'text-text',
		'transition-all',
		'duration-2',
		'ease-standard',
		'placeholder:text-text-muted',
		'focus:outline-none',
		'focus:ring-2',
		'focus:ring-accent',
		'focus:border-accent'
	];

	/**
	 * State-based classes
	 */
	const getStateClasses = (): string => {
		if (disabled) {
			return 'opacity-disabled cursor-not-allowed bg-surface/50';
		}
		if (readonly) {
			return 'cursor-default bg-surface/50';
		}
		if (invalid || error) {
			return 'border-danger focus:ring-danger focus:border-danger';
		}
		return 'border-border hover:border-text-muted';
	};

	/**
	 * Build final class string
	 */
	const inputClasses = $derived(
		[...baseClasses, getSizeClasses(), getStateClasses(), className].filter(Boolean).join(' ')
	);

	/**
	 * Container classes
	 */
	const containerClasses = $derived(fullWidth ? 'w-full' : '');

	/**
	 * Wrapper classes for icon support
	 */
	const hasIcons = $derived(iconLeft || iconRight);
	const wrapperClasses = $derived(hasIcons ? 'relative flex items-center' : '');

	const handleInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		value = target.value;
		if (onInput) {
			onInput(target.value);
		}
	};

	const handleChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		if (onChange) {
			onChange(target.value);
		}
	};

	const handleBlur = () => {
		if (onBlur) {
			onBlur();
		}
	};

	const handleFocus = () => {
		if (onFocus) {
			onFocus();
		}
	};
</script>

<div class={containerClasses}>
	{#if label}
		<label for={id} class="mb-2 block text-sm font-medium text-text">
			{label}
			{#if required}
				<span class="text-danger" aria-label="required">*</span>
			{/if}
		</label>
	{/if}

	<div class={wrapperClasses}>
		{#if iconLeft}
			<span class="pointer-events-none absolute left-3 flex items-center text-text-muted">
				{@render iconLeft()}
			</span>
		{/if}

		<input
			{id}
			{type}
			{name}
			{value}
			{placeholder}
			{disabled}
			{readonly}
			{required}
			{autocomplete}
			{min}
			{max}
			{step}
			{maxlength}
			{pattern}
			class={`${inputClasses} ${iconLeft ? 'pl-10' : ''} ${iconRight ? 'pr-10' : ''}`}
			aria-label={ariaLabel || label}
			aria-required={required}
			aria-invalid={invalid || !!error}
			aria-describedby={error ? errorId : hint ? hintId : undefined}
			oninput={handleInput}
			onchange={handleChange}
			onblur={handleBlur}
			onfocus={handleFocus}
		/>

		{#if iconRight}
			<span class="pointer-events-none absolute right-3 flex items-center text-text-muted">
				{@render iconRight()}
			</span>
		{/if}
	</div>

	{#if error}
		<p id={errorId} class="mt-1.5 text-sm text-danger" role="alert">
			{error}
		</p>
	{:else if hint}
		<p id={hintId} class="mt-1.5 text-sm text-text-muted">
			{hint}
		</p>
	{/if}
</div>
