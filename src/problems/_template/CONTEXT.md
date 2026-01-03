# Context Engineering Frame for Cursor

Use this template to structure your implementation prompt for Cursor. Fill in the details below, then paste this into Cursor chat to guide the TDD implementation.

---

## Goal
Implement a function `[functionName]` that [brief description of what it does].

**Function Signature:**
```typescript
function [functionName]([params]: [types]): [returnType]
```

## Inputs/Outputs

### Input Types
- `[param1]`: `[type]` - [description]
- `[param2]`: `[type]` - [description]

### Output Type
- Returns: `[returnType]` - [description]

## Constraints
- Array size: `[range]`
- Value range: `[range]`
- Time complexity target: `O([complexity])`
- Space complexity target: `O([complexity])`
- Additional constraints: [list any other constraints]

## Examples
Copy from LeetCode and add edge cases:

1. **Basic case**: `[input]` → `[output]`
2. **Edge case (empty)**: `[input]` → `[output]`
3. **Edge case (single element)**: `[input]` → `[output]`
4. **Edge case (maximum size)**: `[input]` → `[output]`

## Test Plan (Ordered - simplest to hardest)
Write tests in this order:

1. **Test 1**: [simplest case description]
   - Input: `[input]`
   - Expected: `[output]`
   - Purpose: [why this test first]

2. **Test 2**: [next simplest case]
   - Input: `[input]`
   - Expected: `[output]`
   - Purpose: [why this test next]

3. **Test 3**: [edge case]
   - Input: `[input]`
   - Expected: `[output]`
   - Purpose: [why this edge case matters]

[Add more tests as needed]

## Implementation Plan (High-level steps)
1. [Step 1: e.g., "Handle empty input case"]
2. [Step 2: e.g., "Implement basic algorithm"]
3. [Step 3: e.g., "Optimize for time/space complexity"]
4. [Step 4: e.g., "Add edge case handling"]

## Acceptance Criteria
- ✅ All tests pass
- ✅ TypeScript typecheck passes (`pnpm typecheck`)
- ✅ Code follows TDD principles (tests written before implementation)
- ✅ Time/space complexity meets constraints
- ✅ Code is readable and well-structured

## Notes for Implementation
- [Any specific considerations, patterns to use, or things to avoid]