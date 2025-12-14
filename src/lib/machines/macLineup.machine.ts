/**
 * @deprecated Use productLineup.machine.ts instead
 *
 * This file is kept for backward compatibility only.
 * It will be removed in v1.0.0.
 *
 * Migration:
 * ```ts
 * // Before
 * import { macLineupMachine } from '$lib/machines/macLineup.machine';
 *
 * // After
 * import { productLineupMachine } from '$lib/machines/productLineup.machine';
 * ```
 */

export { productLineupMachine as macLineupMachine } from './productLineup.machine';
