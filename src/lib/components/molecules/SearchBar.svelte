<!--
  @component SearchBar
  
  A search input component with optional suggestions and submit button.
  Includes loading state and clear button.
  
  @example Basic usage
  ```svelte
  <SearchBar placeholder="Search..." bind:value={query} />
  ```
  
  @example With submit button
  ```svelte
  <SearchBar 
    placeholder="Search products..."
    showSubmit
    onsubmit={handleSearch}
  />
  ```
  
  @example With loading state
  ```svelte
  <SearchBar loading={isSearching} bind:value={query} />
  ```
-->
<script lang="ts" module>
	// ============================================
	// Type Exports
	// ============================================

	/** SearchBar size */
	export type SearchBarSize = 'sm' | 'md' | 'lg';

	/** SearchBar variant */
	export type SearchBarVariant = 'outline' | 'filled';

	/** Prop definitions for documentation */
	export const propDefs = {
		size: {
			type: 'string',
			options: ['sm', 'md', 'lg'],
			default: 'md',
			description: 'Search bar size'
		},
		variant: {
			type: 'string',
			options: ['outline', 'filled'],
			default: 'outline',
			description: 'Visual style'
		}
	} as const;
</script>

<script lang="ts">
	// ============================================
	// Props
	// ============================================

	interface Props {
		/** Current value (bindable) */
		value?: string;
		/** Placeholder text */
		placeholder?: string;
		/** Size */
		size?: SearchBarSize;
		/** Visual variant */
		variant?: SearchBarVariant;
		/** Show submit button */
		showSubmit?: boolean;
		/** Submit button text */
		submitText?: string;
		/** Loading state */
		loading?: boolean;
		/** Disabled state */
		disabled?: boolean;
		/** Show clear button when has value */
		showClear?: boolean;
		/** Autofocus on mount */
		autofocus?: boolean;
		/** ID for the input */
		id?: string;
		/** Name attribute */
		name?: string;
		/** Custom CSS classes */
		class?: string;
		/** Input event handler */
		oninput?: (value: string) => void;
		/** Submit handler */
		onsubmit?: (value: string) => void;
		/** Clear handler */
		onclear?: () => void;
	}

	let {
		value = $bindable(''),
		placeholder = 'Search...',
		size = 'md',
		variant = 'outline',
		showSubmit = false,
		submitText = 'Search',
		loading = false,
		disabled = false,
		showClear = true,
		autofocus = false,
		id,
		name,
		class: className = '',
		oninput,
		onsubmit,
		onclear
	}: Props = $props();

	// ============================================
	// State
	// ============================================

	let inputRef: HTMLInputElement | undefined = $state();

	// ============================================
	// Derived State
	// ============================================

	const searchId = $derived(id || `search-${Math.random().toString(36).slice(2, 9)}`);
	const hasValue = $derived(value.length > 0);

	// ============================================
	// Style Classes
	// ============================================

	/** Size classes */
	const containerSizeClasses: Record<SearchBarSize, string> = {
		sm: 'h-8',
		md: 'h-10',
		lg: 'h-12'
	};

	const inputSizeClasses: Record<SearchBarSize, string> = {
		sm: 'pl-8 pr-8 text-sm',
		md: 'pl-10 pr-10 text-base',
		lg: 'pl-12 pr-12 text-lg'
	};

	const iconSizeClasses: Record<SearchBarSize, string> = {
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6'
	};

	const iconLeftClasses: Record<SearchBarSize, string> = {
		sm: 'left-2',
		md: 'left-3',
		lg: 'left-3'
	};

	const iconRightClasses: Record<SearchBarSize, string> = {
		sm: 'right-2',
		md: 'right-3',
		lg: 'right-3'
	};

	/** Variant classes */
	const variantClasses: Record<SearchBarVariant, string> = {
		outline:
			'border border-border bg-bg focus-within:border-accent focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-0',
		filled: 'border border-transparent bg-bg-muted focus-within:border-accent focus-within:ring-2 focus-within:ring-accent focus-within:bg-bg focus-within:ring-offset-0'
	};

	/** Container classes */
	const containerClasses = $derived(
		[
			'relative flex items-center',
			'rounded-lg',
			'transition-all duration-fast ease-standard',
			containerSizeClasses[size],
			variantClasses[variant],
			disabled ? 'opacity-disabled' : '',
			className
		]
			.filter(Boolean)
			.join(' ')
	);

	/** Input classes */
	const inputClasses = $derived(
		[
			'w-full h-full',
			'bg-transparent',
			'text-fg placeholder:text-fg-subtle',
			'outline-none border-none rounded-lg',
			'disabled:cursor-not-allowed',
			inputSizeClasses[size],
			showSubmit ? 'pr-20' : ''
		].join(' ')
	);

	// ============================================
	// Event Handlers
	// ============================================

	function handleInput(event: Event & { currentTarget: HTMLInputElement }) {
		value = event.currentTarget.value;
		oninput?.(value);
	}

	function handleSubmit(event: Event) {
		event.preventDefault();
		if (!disabled && value) {
			onsubmit?.(value);
		}
	}

	function handleClear() {
		value = '';
		onclear?.();
		inputRef?.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !disabled && value) {
			event.preventDefault();
			onsubmit?.(value);
		}
		if (event.key === 'Escape' && hasValue) {
			handleClear();
		}
	}
</script>

<form class={containerClasses} onsubmit={handleSubmit} role="search">
	<!-- Search icon -->
	<span class="absolute {iconLeftClasses[size]} text-fg-muted pointer-events-none">
		{#if loading}
			<svg
				class="{iconSizeClasses[size]} animate-spin"
				fill="none"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<circle
					class="opacity-25"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		{:else}
			<svg
				class={iconSizeClasses[size]}
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		{/if}
	</span>

	<input
		bind:this={inputRef}
		type="search"
		id={searchId}
		{name}
		{placeholder}
		{disabled}
		{autofocus}
		bind:value
		class={inputClasses}
		aria-label={placeholder}
		oninput={handleInput}
		onkeydown={handleKeydown}
	/>

	<!-- Clear button -->
	{#if showClear && hasValue && !loading}
		<button
			type="button"
			class="absolute {iconRightClasses[size]} text-fg-muted hover:text-fg transition-colors"
			onclick={handleClear}
			aria-label="Clear search"
		>
			<svg
				class={iconSizeClasses[size]}
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

	<!-- Submit button -->
	{#if showSubmit}
		<button
			type="submit"
			disabled={disabled || !hasValue}
			class="absolute right-1 px-3 py-1 bg-accent text-fg-on-accent rounded-md text-sm font-medium
				hover:bg-accent-hover disabled:opacity-disabled disabled:cursor-not-allowed
				transition-colors duration-fast"
		>
			{submitText}
		</button>
	{/if}
</form>
