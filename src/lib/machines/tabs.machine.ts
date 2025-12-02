/**
 * Tabs Machine
 *
 * XState machine for managing tab panel states.
 * Handles tab selection, keyboard navigation, and focus management.
 *
 * Features:
 * - Arrow key navigation between tabs
 * - Home/End key navigation
 * - Proper ARIA tab pattern
 * - Disabled tab support
 */

import { setup, assign } from 'xstate';

// ============================================
// Types
// ============================================

export interface Tab {
	/** Unique identifier for the tab */
	id: string;
	/** Display label */
	label: string;
	/** Whether the tab is disabled */
	disabled?: boolean;
}

export interface TabsContext {
	/** List of tabs */
	tabs: Tab[];
	/** Currently active tab ID */
	activeId: string;
	/** Whether tabs can be activated on focus (vs on click/enter) */
	activateOnFocus: boolean;
	/** Orientation for keyboard navigation */
	orientation: 'horizontal' | 'vertical';
}

export type TabsEvent =
	| { type: 'SELECT'; id: string }
	| { type: 'FOCUS_NEXT' }
	| { type: 'FOCUS_PREV' }
	| { type: 'FOCUS_FIRST' }
	| { type: 'FOCUS_LAST' }
	| { type: 'SET_TABS'; tabs: Tab[] };

export interface TabsInput {
	tabs: Tab[];
	defaultActiveId?: string;
	activateOnFocus?: boolean;
	orientation?: 'horizontal' | 'vertical';
}

// ============================================
// Helper Functions
// ============================================

function getEnabledTabs(tabs: Tab[]): Tab[] {
	return tabs.filter((tab) => !tab.disabled);
}

function findNextEnabledIndex(tabs: Tab[], currentIndex: number): number {
	const enabledTabs = getEnabledTabs(tabs);
	if (enabledTabs.length === 0) return -1;

	const currentTab = tabs[currentIndex];
	const currentEnabledIndex = enabledTabs.findIndex((t) => t.id === currentTab?.id);

	if (currentEnabledIndex === -1) {
		return tabs.indexOf(enabledTabs[0]);
	}

	const nextEnabledIndex = (currentEnabledIndex + 1) % enabledTabs.length;
	return tabs.indexOf(enabledTabs[nextEnabledIndex]);
}

function findPrevEnabledIndex(tabs: Tab[], currentIndex: number): number {
	const enabledTabs = getEnabledTabs(tabs);
	if (enabledTabs.length === 0) return -1;

	const currentTab = tabs[currentIndex];
	const currentEnabledIndex = enabledTabs.findIndex((t) => t.id === currentTab?.id);

	if (currentEnabledIndex === -1) {
		return tabs.indexOf(enabledTabs[enabledTabs.length - 1]);
	}

	const prevEnabledIndex = (currentEnabledIndex - 1 + enabledTabs.length) % enabledTabs.length;
	return tabs.indexOf(enabledTabs[prevEnabledIndex]);
}

// ============================================
// Machine Definition
// ============================================

export const tabsMachine = setup({
	types: {
		context: {} as TabsContext,
		events: {} as TabsEvent,
		input: {} as TabsInput
	},
	guards: {
		isValidTab: ({ context, event }) => {
			if (event.type !== 'SELECT') return false;
			const tab = context.tabs.find((t) => t.id === event.id);
			return !!tab && !tab.disabled;
		}
	},
	actions: {
		selectTab: assign({
			activeId: ({ event }) => {
				if (event.type === 'SELECT') return event.id;
				return '';
			}
		}),
		focusNext: assign({
			activeId: ({ context }) => {
				const currentIndex = context.tabs.findIndex((t) => t.id === context.activeId);
				const nextIndex = findNextEnabledIndex(context.tabs, currentIndex);
				return nextIndex >= 0 ? context.tabs[nextIndex].id : context.activeId;
			}
		}),
		focusPrev: assign({
			activeId: ({ context }) => {
				const currentIndex = context.tabs.findIndex((t) => t.id === context.activeId);
				const prevIndex = findPrevEnabledIndex(context.tabs, currentIndex);
				return prevIndex >= 0 ? context.tabs[prevIndex].id : context.activeId;
			}
		}),
		focusFirst: assign({
			activeId: ({ context }) => {
				const enabledTabs = getEnabledTabs(context.tabs);
				return enabledTabs[0]?.id ?? context.activeId;
			}
		}),
		focusLast: assign({
			activeId: ({ context }) => {
				const enabledTabs = getEnabledTabs(context.tabs);
				return enabledTabs[enabledTabs.length - 1]?.id ?? context.activeId;
			}
		}),
		setTabs: assign({
			tabs: ({ event }) => {
				if (event.type === 'SET_TABS') return event.tabs;
				return [];
			}
		})
	}
}).createMachine({
	id: 'tabs',
	context: ({ input }) => ({
		tabs: input.tabs,
		activeId: input.defaultActiveId ?? getEnabledTabs(input.tabs)[0]?.id ?? '',
		activateOnFocus: input.activateOnFocus ?? true,
		orientation: input.orientation ?? 'horizontal'
	}),
	on: {
		SELECT: {
			guard: 'isValidTab',
			actions: 'selectTab'
		},
		FOCUS_NEXT: {
			actions: 'focusNext'
		},
		FOCUS_PREV: {
			actions: 'focusPrev'
		},
		FOCUS_FIRST: {
			actions: 'focusFirst'
		},
		FOCUS_LAST: {
			actions: 'focusLast'
		},
		SET_TABS: {
			actions: 'setTabs'
		}
	}
});

// ============================================
// Keyboard Handler
// ============================================

export function createTabsKeyboardHandler(
	send: (event: TabsEvent) => void,
	orientation: 'horizontal' | 'vertical' = 'horizontal'
) {
	return function handleKeydown(event: KeyboardEvent) {
		const isHorizontal = orientation === 'horizontal';

		switch (event.key) {
			case 'ArrowRight':
				if (isHorizontal) {
					event.preventDefault();
					send({ type: 'FOCUS_NEXT' });
				}
				break;
			case 'ArrowLeft':
				if (isHorizontal) {
					event.preventDefault();
					send({ type: 'FOCUS_PREV' });
				}
				break;
			case 'ArrowDown':
				if (!isHorizontal) {
					event.preventDefault();
					send({ type: 'FOCUS_NEXT' });
				}
				break;
			case 'ArrowUp':
				if (!isHorizontal) {
					event.preventDefault();
					send({ type: 'FOCUS_PREV' });
				}
				break;
			case 'Home':
				event.preventDefault();
				send({ type: 'FOCUS_FIRST' });
				break;
			case 'End':
				event.preventDefault();
				send({ type: 'FOCUS_LAST' });
				break;
		}
	};
}

// ============================================
// Data Attributes Helper
// ============================================

export function getTabDataAttributes(tab: Tab, activeId: string) {
	return {
		'data-state': tab.id === activeId ? 'active' : 'inactive',
		'data-disabled': tab.disabled || undefined
	};
}

export function getTabAriaAttributes(tab: Tab, activeId: string, panelId: string) {
	return {
		role: 'tab' as const,
		'aria-selected': tab.id === activeId,
		'aria-disabled': tab.disabled || undefined,
		'aria-controls': panelId,
		tabindex: tab.id === activeId ? 0 : -1
	};
}
