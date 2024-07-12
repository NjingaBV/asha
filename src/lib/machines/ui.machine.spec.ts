import { describe, it } from 'vitest'
import { createModel } from '@xstate/test'
import { uiMachine } from './ui.machine'

const uiModel = createModel(uiMachine).withEvents({
	TOGGLE_MENU: {},
	OPEN_PLAYER: {},
	CLOSE_PLAYER: {},
})

describe('uiMachine', () => {
	const testPlans = uiModel.getShortestPathPlans()

	testPlans.forEach((plan) => {
		describe(plan.description, () => {
			plan.paths.forEach((path) => {
				it(
					path.description,
					async () => {
						await path.test({})
					},
					10000,
				)
			})
		})
	})

	it('should have full coverage', () => {
		return uiModel.testCoverage({
			filter: (stateNode) => {
				return !stateNode.parent ||
					stateNode.parent.key === 'readyMachine'
			},
		})
	})
})
