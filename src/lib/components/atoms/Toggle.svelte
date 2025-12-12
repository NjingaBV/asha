<!--
  @component Toggle
  
  A toggle switch component for boolean on/off states.
  Accessible and keyboard navigable with proper ARIA attributes.
  
  @example Basic usage
  ```svelte
  <Toggle bind:checked={darkMode} />
  ```
  
  @example With label
  ```svelte
  <Toggle bind:checked={notifications} label="Enable notifications" />
  ```
  
  @example Disabled
  ```svelte
  <Toggle checked={true} disabled label="Premium feature" />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** Toggle size */
	export type ToggleSize = 'sm' | 'md' | 'lg';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Toggle size'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Checked state (bindable) */
		checked?: boolean;
		/** Size */
		size?: ToggleSize;
		/** Disabled state */
		disabled?: boolean;
		/** Label text */
		label?: string;
		/** Label position */
		labelPosition?: 'left' | 'right';
		/** ID for the toggle */
		id?: string;
		/** Name attribute */
		name?: string;
		/** Custom CSS classes */
		class?: string;
		/** Change event handler */
		onchange?: (checked: boolean) => void;
	}

	let {
		checked = $bindable(false),
		size = 'md',
		disabled = false,
		label,
		labelPosition = 'right',
		id,
		name,
		class: className = '',
		onchange
	}: Props = $props();

	// ============================================
	// Derived State
	// ============================================

	const toggleId = $derived(id || `toggle-${Math.random().toString(36).slice(2, 9)}`);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes for the track */
	const trackSizeClasses: Record<ToggleSize, string> = {
		sm: 'w-8 h-5',
		md: 'w-10 h-6',
		lg: 'w-12 h-7'
	};

	/** Size classes for the thumb */
	const thumbSizeClasses: Record<ToggleSize, string> = {
		sm: 'w-3.5 h-3.5',
		md: 'w-4 h-4',
		lg: 'w-5 h-5'
	};

	/** Translate classes for checked state */
	const thumbTranslateClasses: Record<ToggleSize, string> = {
		sm: 'translate-x-3.5',
		md: 'translate-x-5',
		lg: 'translate-x-6'
	};

	/** Minimum touch target size for WCAG compliance (44px) */
	const minTouchTarget = 'min-h-11 min-w-11';

	/** Track classes */
	const trackClasses = $derived(
		[
			'relative inline-flex items-center justify-center shrink-0',
			'rounded-full cursor-pointer',
			'transition-colors duration-fast ease-standard',
			'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
			trackSizeClasses[size],
			minTouchTarget,
			checked ? 'bg-accent' : 'bg-border',
			disabled ? 'opacity-disabled cursor-not-allowed' : ''
		]
			.filter(Boolean)
			.join(' ')
	);

	/** Thumb classes */
	const thumbClasses = $derived(
		[
			'absolute left-0.5 inline-block',
			'bg-bg rounded-full shadow-sm',
			'transition-transform duration-fast ease-standard',
			thumbSizeClasses[size],
			checked ? thumbTranslateClasses[size] : 'translate-x-0'
		]
			.filter(Boolean)
			.join(' ')
	);

	/** Wrapper classes */
	const wrapperClasses = $derived(
		[
			'inline-flex items-center gap-2',
			labelPosition === 'left' ? 'flex-row-reverse' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	/** Label classes */
	const labelClasses = ['text-fg text-sm font-medium', 'cursor-pointer select-none'].join(' ');

	// ============================================
	// Event Handlers
	// ============================================

	function handleClick() {
		if (disabled) return;
		checked = !checked;
		onchange?.(checked);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (disabled) return;
		if (event.key === ' ' || event.key === 'Enter') {
			event.preventDefault();
			checked = !checked;
			onchange?.(checked);
		}
	}
</script>

<div class={wrapperClasses}>
	<button
		type="button"
		role="switch"
		id={toggleId}
		{name}
		aria-checked={checked}
		aria-label={label || 'Toggle'}
		{disabled}
		class={trackClasses}
		onclick={handleClick}
		onkeydown={handleKeydown}
		data-size={size}
		data-checked={checked ? '' : undefined}
	>
		<span class={thumbClasses} aria-hidden="true"></span>
	</button>

	{#if label}
		<label
			for={toggleId}
			class={labelClasses}
			class:opacity-disabled={disabled}
			class:cursor-not-allowed={disabled}
		>
			{label}
		</label>
	{/if}
</div>
