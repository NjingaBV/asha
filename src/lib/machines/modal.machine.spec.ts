import { describe, it, expect, vi } from 'vitest';
import { createActor } from 'xstate';
import { modalMachine } from './modal.machine';

describe('modalMachine', () => {
	describe('Initial State', () => {
		it('should start in closed state', () => {
			const actor = createActor(modalMachine);
			actor.start();

			expect(actor.getSnapshot().value).toBe('closed');
		});

		it('should initialize with default context', () => {
			const actor = createActor(modalMachine);
			actor.start();

			const context = actor.getSnapshot().context;
			expect(context.closeOnBackdrop).toBe(true);
			expect(context.closeOnEscape).toBe(true);
			expect(context.triggerElement).toBeUndefined();
		});
	});

	describe('Opening Transitions', () => {
		it('should transition from closed to opening on OPEN', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			expect(actor.getSnapshot().value).toBe('opening');
		});

		it('should store trigger element on OPEN', () => {
			const actor = createActor(modalMachine);
			actor.start();

			const mockElement = {} as HTMLElement;
			actor.send({ type: 'OPEN', triggerElement: mockElement });

			expect(actor.getSnapshot().context.triggerElement).toBe(mockElement);
		});

		it('should transition to open after delay', (done) => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });

			setTimeout(() => {
				expect(actor.getSnapshot().value).toBe('open');
				done();
			}, 250);
		}, 500);

		it('should allow manual transition to open with OPENED', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			actor.send({ type: 'OPENED' });

			expect(actor.getSnapshot().value).toBe('open');
		});
	});

	describe('Open State', () => {
		it('should transition to closing on CLOSE', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			actor.send({ type: 'OPENED' });
			actor.send({ type: 'CLOSE' });

			expect(actor.getSnapshot().value).toBe('closing');
		});

		it('should close on BACKDROP_CLICK when closeOnBackdrop is true (default)', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			actor.send({ type: 'OPENED' });
			actor.send({ type: 'BACKDROP_CLICK' });

			expect(actor.getSnapshot().value).toBe('closing');
		});

		it('should close on ESCAPE_KEY when closeOnEscape is true (default)', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			actor.send({ type: 'OPENED' });
			actor.send({ type: 'ESCAPE_KEY' });

			expect(actor.getSnapshot().value).toBe('closing');
		});
	});

	describe('Closing Transitions', () => {
		it('should transition from closing to closed after delay', (done) => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			actor.send({ type: 'OPENED' });
			actor.send({ type: 'CLOSE' });

			expect(actor.getSnapshot().value).toBe('closing');

			setTimeout(() => {
				expect(actor.getSnapshot().value).toBe('closed');
				done();
			}, 250);
		}, 500);

		it('should allow manual transition with CLOSED', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			actor.send({ type: 'OPENED' });
			actor.send({ type: 'CLOSE' });
			actor.send({ type: 'CLOSED' });

			expect(actor.getSnapshot().value).toBe('closed');
		});

		it('should allow closing from opening state', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			expect(actor.getSnapshot().value).toBe('opening');

			actor.send({ type: 'CLOSE' });
			expect(actor.getSnapshot().value).toBe('closing');
		});
	});

	describe('Focus Management Events', () => {
		it('should handle FOCUS_FIRST in open state', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			actor.send({ type: 'OPENED' });
			actor.send({ type: 'FOCUS_FIRST' });

			// State should remain open
			expect(actor.getSnapshot().value).toBe('open');
		});

		it('should handle FOCUS_LAST in open state', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			actor.send({ type: 'OPENED' });
			actor.send({ type: 'FOCUS_LAST' });

			// State should remain open
			expect(actor.getSnapshot().value).toBe('open');
		});

		it('should handle TAB_FORWARD in open state', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			actor.send({ type: 'OPENED' });
			actor.send({ type: 'TAB_FORWARD' });

			// State should remain open
			expect(actor.getSnapshot().value).toBe('open');
		});

		it('should handle TAB_BACKWARD in open state', () => {
			const actor = createActor(modalMachine);
			actor.start();

			actor.send({ type: 'OPEN' });
			actor.send({ type: 'OPENED' });
			actor.send({ type: 'TAB_BACKWARD' });

			// State should remain open
			expect(actor.getSnapshot().value).toBe('open');
		});
	});

	describe('Full Lifecycle', () => {
		it('should complete full open-close cycle', (done) => {
			const actor = createActor(modalMachine);
			actor.start();

			expect(actor.getSnapshot().value).toBe('closed');

			actor.send({ type: 'OPEN' });
			expect(actor.getSnapshot().value).toBe('opening');

			setTimeout(() => {
				expect(actor.getSnapshot().value).toBe('open');

				actor.send({ type: 'CLOSE' });
				expect(actor.getSnapshot().value).toBe('closing');

				setTimeout(() => {
					expect(actor.getSnapshot().value).toBe('closed');
					done();
				}, 250);
			}, 250);
		}, 1000);
	});
});
