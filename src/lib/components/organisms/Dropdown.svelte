<script lang="ts">
	import type { Snippet } from 'svelte';
	import Icon, { type IconName } from '$lib/atoms/Icon.svelte';

	interface DropdownItem {
		id: string;
		label: string;
		icon?: IconName;
		href?: string;
		disabled?: boolean;
		danger?: boolean;
		divider?: boolean;
	}

	interface Props {
		/** Dropdown items */
		items?: DropdownItem[];
		/** Trigger button text */
		label?: string;
		/** Trigger button icon */
		icon?: IconName;
		/** Dropdown position */
		position?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
		/** Whether dropdown is open */
		open?: boolean;
		/** Custom CSS classes */
		class?: string;
		/** Item click handler */
		onselect?: (item: DropdownItem) => void;
		/** Trigger slot */
		trigger?: Snippet;
		/** Custom dropdown content */
		children?: Snippet;
	}

	let {
		items = [],
		label = 'Options',
		icon = 'chevron-down',
		position = 'bottom-start',
		open = $bindable(false),
		class: className = '',
		onselect,
		trigger,
		children
	}: Props = $props();

	// Track focused item index for keyboard navigation
	let focusedIndex = $state(-1);
	let menuRef: HTMLDivElement | undefined = $state();
	let triggerRef: HTMLButtonElement | undefined = $state();

	// Get focusable items (non-divider, non-disabled)
	const focusableItems = $derived(
		items
			.map((item, index) => ({ item, index }))
			.filter(({ item }) => !item.divider && !item.disabled)
	);

	function toggle() {
		open = !open;
		if (open) {
			// Reset focus index when opening
			focusedIndex = -1;
		}
	}

	function close() {
		open = false;
		focusedIndex = -1;
		// Return focus to trigger
		triggerRef?.focus();
	}

	function handleSelect(item: DropdownItem) {
		if (!item.disabled && !item.divider) {
			onselect?.(item);
			close();
		}
	}

	function handleTriggerKeydown(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowDown':
			case 'Down':
				event.preventDefault();
				if (!open) {
					open = true;
				}
				// Focus first item
				if (focusableItems.length > 0) {
					focusedIndex = 0;
					focusMenuItem(0);
				}
				break;
			case 'ArrowUp':
			case 'Up':
				event.preventDefault();
				if (!open) {
					open = true;
				}
				// Focus last item
				if (focusableItems.length > 0) {
					focusedIndex = focusableItems.length - 1;
					focusMenuItem(focusableItems.length - 1);
				}
				break;
			case 'Escape':
				if (open) {
					event.preventDefault();
					close();
				}
				break;
			case 'Enter':
			case ' ':
				event.preventDefault();
				toggle();
				break;
		}
	}

	function handleMenuKeydown(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowDown':
			case 'Down':
				event.preventDefault();
				if (focusableItems.length > 0) {
					focusedIndex = (focusedIndex + 1) % focusableItems.length;
					focusMenuItem(focusedIndex);
				}
				break;
			case 'ArrowUp':
			case 'Up':
				event.preventDefault();
				if (focusableItems.length > 0) {
					focusedIndex = focusedIndex <= 0 ? focusableItems.length - 1 : focusedIndex - 1;
					focusMenuItem(focusedIndex);
				}
				break;
			case 'Home':
				event.preventDefault();
				if (focusableItems.length > 0) {
					focusedIndex = 0;
					focusMenuItem(0);
				}
				break;
			case 'End':
				event.preventDefault();
				if (focusableItems.length > 0) {
					focusedIndex = focusableItems.length - 1;
					focusMenuItem(focusableItems.length - 1);
				}
				break;
			case 'Escape':
				event.preventDefault();
				close();
				break;
			case 'Tab':
				// Close menu on tab
				close();
				break;
		}
	}

	function focusMenuItem(index: number) {
		if (menuRef && focusableItems[index]) {
			const itemIndex = focusableItems[index].index;
			const menuItems = menuRef.querySelectorAll('[role="menuitem"]');
			const targetItem = menuItems[itemIndex] as HTMLElement | undefined;
			targetItem?.focus();
		}
	}

	function handleItemKeydown(event: KeyboardEvent, item: DropdownItem) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			handleSelect(item);
		}
	}

	const positionClasses = {
		'bottom-start': 'top-full left-0 mt-1',
		'bottom-end': 'top-full right-0 mt-1',
		'top-start': 'bottom-full left-0 mb-1',
		'top-end': 'bottom-full right-0 mb-1'
	};

	// Generate unique ID for ARIA
	const dropdownId = $derived(`dropdown-${Math.random().toString(36).slice(2, 9)}`);
</script>

<div class={['relative inline-block', className].join(' ')}>
	{#if trigger}
		<button
			type="button"
			bind:this={triggerRef}
			onclick={toggle}
			onkeydown={handleTriggerKeydown}
			aria-expanded={open}
			aria-haspopup="menu"
			aria-controls={open ? dropdownId : undefined}
		>
			{@render trigger()}
		</button>
	{:else}
		<button
			type="button"
			bind:this={triggerRef}
			class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-fg bg-transparent hover:bg-bg-muted rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
			onclick={toggle}
			onkeydown={handleTriggerKeydown}
			aria-expanded={open}
			aria-haspopup="menu"
			aria-controls={open ? dropdownId : undefined}
		>
			{label}
			<Icon
				name={icon}
				size={16}
				class={[
					'transition-transform motion-reduce:transition-none',
					open ? 'rotate-180' : ''
				].join(' ')}
			/>
		</button>
	{/if}

	{#if open}
		<!-- Backdrop for closing -->
		<button
			type="button"
			class="fixed inset-0 z-40 cursor-default"
			onclick={close}
			aria-label="Close dropdown"
			tabindex="-1"
		></button>

		<!-- Menu -->
		<div
			bind:this={menuRef}
			id={dropdownId}
			class={[
				'absolute z-50 min-w-48 py-1 bg-bg border border-border rounded-lg shadow-lg',
				positionClasses[position]
			].join(' ')}
			role="menu"
			tabindex="-1"
			aria-orientation="vertical"
			onkeydown={handleMenuKeydown}
		>
			{#if children}
				{@render children()}
			{:else}
				{#each items as item (item.id)}
					{#if item.divider}
						<div class="my-1 border-t border-border" role="separator"></div>
					{:else if item.href}
						<a
							href={item.href}
							class={[
								'flex items-center gap-2 px-4 py-2 text-sm transition-colors',
								'focus:outline-none focus:bg-bg-muted',
								item.disabled
									? 'text-fg-muted cursor-not-allowed pointer-events-none'
									: item.danger
										? 'text-error hover:bg-error/10 focus:bg-error/10'
										: 'text-fg hover:bg-bg-muted'
							].join(' ')}
							role="menuitem"
							tabindex={item.disabled ? -1 : 0}
							aria-disabled={item.disabled || undefined}
							onclick={close}
							onkeydown={(e) => handleItemKeydown(e, item)}
						>
							{#if item.icon}
								<Icon name={item.icon} size={16} />
							{/if}
							{item.label}
						</a>
					{:else}
						<button
							type="button"
							class={[
								'flex items-center gap-2 w-full px-4 py-2 text-sm text-left transition-colors',
								'focus:outline-none focus:bg-bg-muted',
								item.disabled
									? 'text-fg-muted cursor-not-allowed'
									: item.danger
										? 'text-error hover:bg-error/10 focus:bg-error/10'
										: 'text-fg hover:bg-bg-muted'
							].join(' ')}
							role="menuitem"
							tabindex={item.disabled ? -1 : 0}
							disabled={item.disabled}
							onclick={() => handleSelect(item)}
							onkeydown={(e) => handleItemKeydown(e, item)}
						>
							{#if item.icon}
								<Icon name={item.icon} size={16} />
							{/if}
							{item.label}
						</button>
					{/if}
				{/each}
			{/if}
		</div>
	{/if}
</div>
