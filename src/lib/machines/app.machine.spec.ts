import { describe, it, expect } from 'vitest';
import { createTestModel } from '@xstate/graph';
import { appMachine } from './app.machine';

const appModel = createTestModel(appMachine);

describe('appMachine', () => {
	const paths = appModel.getShortestPaths();

	paths.forEach((path) => {
		it(
			path.description,
			async () => {
				await path.test({});
			},
			10000
		);
	});

	it('should generate reachable paths', () => {
		const simple = appModel.getSimplePaths();
		expect(simple.length).toBeGreaterThan(0);
	});
});
