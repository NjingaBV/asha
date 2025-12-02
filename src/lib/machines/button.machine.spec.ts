import { describe, it, expect } from 'vitest';
import { createActor } from 'xstate';
import { buttonMachine } from './button.machine';

describe('buttonMachine', () => {
	describe('Initial State', () => {
		it('should start in idle state', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			expect(actor.getSnapshot().value).toBe('idle');
		});

		it('should initialize with default context', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			const context = actor.getSnapshot().context;
			expect(context.attempts).toBe(0);
			expect(context.error).toBeUndefined();
			expect(context.message).toBeUndefined();
		});
	});

	describe('Hover Transitions', () => {
		it('should transition from idle to hover on HOVER', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'HOVER' });
			expect(actor.getSnapshot().value).toBe('hover');
		});

		it('should transition from hover back to idle on UNHOVER', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'HOVER' });
			actor.send({ type: 'UNHOVER' });
			expect(actor.getSnapshot().value).toBe('idle');
		});
	});

	describe('Focus Transitions', () => {
		it('should transition from idle to focused on FOCUS', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'FOCUS' });
			expect(actor.getSnapshot().value).toBe('focused');
		});

		it('should transition to hoveredAndFocused when both hover and focus', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'HOVER' });
			actor.send({ type: 'FOCUS' });
			expect(actor.getSnapshot().value).toBe('hoveredAndFocused');
		});

		it('should handle focus then hover', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'FOCUS' });
			actor.send({ type: 'HOVER' });
			expect(actor.getSnapshot().value).toBe('hoveredAndFocused');
		});
	});

	describe('Press Transitions', () => {
		it('should transition to pressed on PRESS', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'PRESS' });
			expect(actor.getSnapshot().value).toBe('pressed');
		});

		it('should increment attempts counter on press', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'PRESS' });
			expect(actor.getSnapshot().context.attempts).toBe(1);

			actor.send({ type: 'RELEASE' });
			actor.send({ type: 'PRESS' });
			expect(actor.getSnapshot().context.attempts).toBe(2);
		});

		it('should transition to loading on CLICK from pressed', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'PRESS' });
			actor.send({ type: 'CLICK' });
			expect(actor.getSnapshot().value).toBe('loading');
		});
	});

	describe('Loading State', () => {
		it('should transition directly to loading on START_LOADING', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'START_LOADING' });
			expect(actor.getSnapshot().value).toBe('loading');
		});

		it('should transition to success on SUCCESS event', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'START_LOADING' });
			actor.send({ type: 'SUCCESS', message: 'Saved!' });

			expect(actor.getSnapshot().value).toBe('success');
			expect(actor.getSnapshot().context.message).toBe('Saved!');
		});

		it('should transition to error on ERROR event', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'START_LOADING' });
			actor.send({ type: 'ERROR', error: 'Network error' });

			expect(actor.getSnapshot().value).toBe('error');
			expect(actor.getSnapshot().context.error).toBe('Network error');
		});

		it('should allow RESET from loading', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'START_LOADING' });
			actor.send({ type: 'RESET' });
			expect(actor.getSnapshot().value).toBe('idle');
		});
	});

	describe('Success State', () => {
		it('should auto-reset after timeout', (done) => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'START_LOADING' });
			actor.send({ type: 'SUCCESS' });

			expect(actor.getSnapshot().value).toBe('success');

			setTimeout(() => {
				expect(actor.getSnapshot().value).toBe('idle');
				done();
			}, 2100);
		}, 3000);

		it('should allow manual RESET from success', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'START_LOADING' });
			actor.send({ type: 'SUCCESS' });
			actor.send({ type: 'RESET' });

			expect(actor.getSnapshot().value).toBe('idle');
		});
	});

	describe('Error State', () => {
		it('should allow retry by clicking from error state', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'START_LOADING' });
			actor.send({ type: 'ERROR', error: 'Failed' });
			actor.send({ type: 'CLICK' });

			expect(actor.getSnapshot().value).toBe('loading');
		});

		it('should allow RESET from error', () => {
			const actor = createActor(buttonMachine);
			actor.start();

			actor.send({ type: 'START_LOADING' });
			actor.send({ type: 'ERROR', error: 'Failed' });
			actor.send({ type: 'RESET' });

			expect(actor.getSnapshot().value).toBe('idle');
		});
	});
});
