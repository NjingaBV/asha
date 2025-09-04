import { describe, it, expect } from 'vitest';
import { createTestModel } from '@xstate/graph';
import { playerMachine } from './player.machine';

const playerModel = createTestModel(playerMachine);

describe('playerMachine', () => {
    const paths = playerModel.getShortestPaths();

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
        const simple = playerModel.getSimplePaths();
        expect(simple.length).toBeGreaterThan(0);
    });
});
