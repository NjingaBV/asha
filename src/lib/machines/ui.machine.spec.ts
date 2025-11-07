import { describe, it, expect } from 'vitest';
import { uiMachine } from './ui.machine';

// Note: These tests verify the machine configuration structure.
// Full integration tests with actors would require mocking the playerMachine invoke.
describe('uiMachine', () => {
	it('should have parallel state type', () => {
		expect(uiMachine.config.type).toBe('parallel');
	});

	it('should have menu and player regions', () => {
		expect(uiMachine.config.states).toHaveProperty('menu');
		expect(uiMachine.config.states).toHaveProperty('player');
	});

	it('should have menu initial state as closed', () => {
		expect(uiMachine.config.states.menu).toHaveProperty('initial', 'closed');
	});

	it('should have player initial state as closed', () => {
		expect(uiMachine.config.states.player).toHaveProperty('initial', 'closed');
	});

	it('should have TOGGLE_MENU transitions in menu states', () => {
		expect(uiMachine.config.states.menu.states.closed.on).toHaveProperty('TOGGLE_MENU');
		expect(uiMachine.config.states.menu.states.open.on).toHaveProperty('TOGGLE_MENU');
	});

	it('should have player transitions', () => {
		expect(uiMachine.config.states.player.states.closed.on).toHaveProperty('OPEN_PLAYER');
		expect(uiMachine.config.states.player.states.open.on).toHaveProperty('CLOSE_PLAYER');
	});
});
