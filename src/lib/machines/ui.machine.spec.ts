import { describe, it, expect } from 'vitest';
import { createTestModel } from '@xstate/graph';
import { uiMachine } from './ui.machine';

const uiModel = createTestModel(uiMachine);

describe('uiMachine', () => {
    const paths = uiModel.getShortestPaths();

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
        const simple = uiModel.getSimplePaths();
        expect(simple.length).toBeGreaterThan(0);
    });
});
