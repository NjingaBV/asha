import { describe, it, expect } from 'vitest';
import { appMachineConfig } from './app.machine';

// Note: These tests verify the machine configuration structure.
// Full integration tests with actors would require setting up the complete actor system.
describe('appMachine', () => {
	it('should have correct initial state', () => {
		expect(appMachineConfig.initial).toBe('idle');
	});

	it('should have all required states', () => {
		expect(appMachineConfig.states).toHaveProperty('idle');
		expect(appMachineConfig.states).toHaveProperty('browsing');
		expect(appMachineConfig.states).toHaveProperty('playing');
		expect(appMachineConfig.states).toHaveProperty('paused');
	});

	it('should have correct transitions from idle', () => {
		expect(appMachineConfig.states.idle.on).toHaveProperty('PAGE_LOADED');
		expect(appMachineConfig.states.idle.on.PAGE_LOADED).toHaveProperty('target', 'browsing');
	});

	it('should have correct transitions from browsing', () => {
		expect(appMachineConfig.states.browsing.on).toHaveProperty('MEDIA_PLAYING');
		expect(appMachineConfig.states.browsing.on.MEDIA_PLAYING).toHaveProperty(
			'target',
			'playing'
		);
	});

	it('should have correct transitions from playing', () => {
		expect(appMachineConfig.states.playing.on).toHaveProperty('MEDIA_PAUSE');
		expect(appMachineConfig.states.playing.on).toHaveProperty('MEDIA_STOP');
		expect(appMachineConfig.states.playing.on.MEDIA_PAUSE).toHaveProperty('target', 'paused');
		expect(appMachineConfig.states.playing.on.MEDIA_STOP).toHaveProperty('target', 'idle');
	});

	it('should have correct transitions from paused', () => {
		expect(appMachineConfig.states.paused.on).toHaveProperty('MEDIA_PLAYING');
		expect(appMachineConfig.states.paused.on).toHaveProperty('MEDIA_STOP');
		expect(appMachineConfig.states.paused.on.MEDIA_PLAYING).toHaveProperty('target', 'playing');
		expect(appMachineConfig.states.paused.on.MEDIA_STOP).toHaveProperty('target', 'idle');
	});
});
