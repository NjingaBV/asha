import { describe, it } from 'vitest';
import { createModel } from '@xstate/test';
import { appMachine } from './app.machine';

const appModel = createModel(appMachine).withEvents({
	SUCCESS: {},
	FAILED: {},
	PLAY: {},
	PAUSE: {},
	RESET: {},
	END: {},
});

describe('appMachine', () => {
	const testPlans = appModel.getShortestPathPlans();

	testPlans.forEach((plan) => {
		describe(plan.description, () => {
			plan.paths.forEach((path) => {
				it(
					path.description,
					async () => {
						await path.test({});
					},
					10000,
				);
			});
		});
	});

	it('should have full coverage', () => {
		return appModel.testCoverage({
			filter: (stateNode) => {
				return !stateNode.parent ||
					stateNode.parent.key === 'readyMachine';
			},
		});
	});
});
