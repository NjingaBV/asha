# Change: Add Comprehensive Testing Coverage

## Why

The Asha design system currently has **0% test coverage** despite having complete testing infrastructure and documentation in place:

- **104 Svelte components** with **0 automated tests**
- Complete testing strategy documented in `TESTING_STRATEGY.md`
- Vitest + @testing-library/svelte configured but unused
- Storybook 8 with testing addons ready but no `play()` functions
- High risk of regressions during refactoring or feature additions

This change implements comprehensive test coverage to:

1. **Prevent regressions** - Detect breaking changes automatically
2. **Document behavior** - Tests serve as living specifications
3. **Enable confident refactoring** - Safe to improve code knowing tests will catch issues
4. **Ensure accessibility** - Automated WCAG compliance checks
5. **Improve quality** - Catch bugs before production

## What Changes

### Test Implementation Strategy

#### Phase 1: Atoms (28 components)

- Add Storybook `play()` functions for interaction testing
- Cover all variants, states, and edge cases
- Verify accessibility (keyboard nav, ARIA, focus management)
- Target: 100% coverage of all atoms

#### Phase 2: Molecules (31 components)

- Test user interactions (clicks, input, selection)
- Test state changes and side effects
- Test composition with child components
- Verify complex accessibility patterns

#### Phase 3: Organisms (37 components)

- Test complete user workflows
- Test error states and validation
- Test async operations and loading states
- Test responsive behavior

#### Phase 4: Templates (12 components)

- Test page-level composition
- Test routing and navigation
- Test data flow through components

### Test Types to Implement

| Test Type               | Tool               | Coverage Target                |
| ----------------------- | ------------------ | ------------------------------ |
| **Interaction Tests**   | Storybook play()   | 100% of components             |
| **Accessibility Tests** | axe-core in play() | 100% of interactive components |
| **Visual Regression**   | Chromatic          | 100% of stories                |
| **Unit Tests**          | Vitest (optional)  | Complex logic only             |

### Files to Create/Modify

- **99 story files** - Add `play()` functions to existing stories
- **~0 new test files** - Tests live in stories (Storybook approach)
- **1 utility file** - Shared test helpers (`src/stories/utils/test-helpers.ts`)
- **CI/CD updates** - Add test execution to GitHub Actions

### Test Coverage Milestones

| Milestone        | Components Tested | Percentage |
| ---------------- | ----------------- | ---------- |
| Current          | 0/108             | 0%         |
| Phase 1 Complete | 28/108            | 26%        |
| Phase 2 Complete | 59/108            | 55%        |
| Phase 3 Complete | 96/108            | 89%        |
| Phase 4 Complete | 108/108           | 100%       |

## Impact

- **Affected specs**: Testing strategy (new spec), Accessibility (enhanced)
- **Affected code**: All 99 story files in `src/stories/`
- **Migration effort**: Medium - Incremental addition, no breaking changes
- **Breaking changes**: None - Tests are additive only
- **Time estimate**: 4-5 days for complete implementation

## Dependencies

- ✅ Vitest already configured
- ✅ @testing-library/svelte already installed
- ✅ Storybook 8 with test-runner addon ready
- ✅ Testing strategy fully documented
- ⚠️ Need to add Chromatic for visual regression (optional)

## Success Criteria

1. ✅ All 108 components have at least 1 interaction test
2. ✅ All interactive components have accessibility tests
3. ✅ All tests pass in Storybook
4. ✅ Tests run automatically in CI/CD
5. ✅ Test coverage visible in documentation
6. ✅ Team trained on testing patterns

## Testing Strategy Reference

See existing documentation:

- `docs/TESTING_STRATEGY.md` - Complete testing approach
- `docs/TESTING_IMPLEMENTATION.md` - Implementation plan
- `docs/TESTING_EXAMPLES.md` - Code examples
- `docs/TESTING_QUICKSTART.md` - Quick reference
