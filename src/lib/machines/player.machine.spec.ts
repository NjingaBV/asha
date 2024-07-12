import { describe, it } from 'vitest';
import { createModel } from '@xstate/test';
import { playerMachine } from './player.machine';

const playerModel = createModel(playerMachine).withEvents({
	PLAY: {},
	PAUSE: {},
	RESET: {},
	END: {}
});

describe('playerMachine', () => {
	const testPlans = playerModel.getShortestPathPlans();

	testPlans.forEach((plan) => {
		describe(plan.description, () => {
			plan.paths.forEach((path) => {
				it(
					path.description,
					async () => {
						await path.test({});
					},
					10000
				);
			});
		});
	});

	it('should have full coverage', () => {
		return playerModel.testCoverage({
			filter: (stateNode) => {
				return !stateNode.parent || stateNode.parent.key === 'readyMachine';
			}
		});
	});
});
