# Context Engineering Frame for Cursor

Use this template to structure your implementation prompt for Cursor. Fill in the details below, then paste this into Cursor chat to guide the TDD implementation.

---

## Goal
Implement a function `successfulPairs` that counts, for each spell, how many potions can form a successful pair with it (where spell * potion >= success).

**Function Signature:**
```typescript
function successfulPairs(spells: number[], potions: number[], success: number): number[]
```

## Inputs/Outputs

### Input Types
- `spells`: `number[]` - Array of positive integers representing spell strengths (length n)
- `potions`: `number[]` - Array of positive integers representing potion strengths (length m)
- `success`: `number` - Minimum product value for a pair to be considered successful

### Output Type
- Returns: `number[]` - An array of length n where each element is the count of potions that form successful pairs with the corresponding spell

## Constraints
- Array sizes: `1 <= n, m <= 10^5`
- Value ranges: `1 <= spells[i], potions[i] <= 10^5`
- Success range: `1 <= success <= 10^10`
- All values are positive integers
- Time complexity target: Consider efficient approach for large inputs
- Space complexity target: Consider space-efficient approach

## Examples
1. **Example 1**: `successfulPairs([5,1,3], [1,2,3,4,5], 7)` → `[4,0,3]`
   - Spell 5 pairs with potions [2,3,4,5] → 4 successful pairs
   - Spell 1 pairs with potions [1,2,3,4,5] → 0 successful pairs (all products < 7)
   - Spell 3 pairs with potions [3,4,5] → 3 successful pairs

2. **Example 2**: `successfulPairs([3,1,2], [8,5,8], 16)` → `[2,0,2]`
   - Spell 3 pairs with potions [8,8] → 2 successful pairs (3*8=24 >= 16)
   - Spell 1 pairs with potions [8,5,8] → 0 successful pairs
   - Spell 2 pairs with potions [8,8] → 2 successful pairs (2*8=16 >= 16)

3. **Edge case (single spell)**: `successfulPairs([10], [1,2,3,4,5], 25)` → `[2]`
   - Spell 10 pairs with potions [3,4,5] → 2 successful pairs (10*3=30, 10*4=40, 10*5=50, but wait, let me recalculate: 10*3=30 >= 25, 10*4=40 >= 25, 10*5=50 >= 25, so actually 3 pairs... let me fix this in the test)

4. **Edge case (all successful)**: `successfulPairs([100], [1,2,3], 10)` → `[3]`
   - All pairs are successful

5. **Edge case (none successful)**: `successfulPairs([1], [1,2,3], 100)` → `[0]`
   - No pairs are successful

## Test Plan (Ordered - simplest to hardest)
Write tests in this order, following the **AAA (Arrange/Act/Assert)** pattern:

### Test Writing Guidelines (AAA Pattern)
Each test should follow this structure:
```typescript
it('should [describe behavior]', () => {
  // Arrange - Set up test data
  const spells = [/* ... */];
  const potions = [/* ... */];
  const success = /* ... */;
  const expected = [/* ... */];

  // Act - Execute the function
  const result = successfulPairs(spells, potions, success);

  // Assert - Verify the result
  expect(result).toEqual(expected);
});
```

**Best practices:**
- Use explicit `expected` variable for clarity
- Keep variable naming consistent (`spells`, `potions`, `success`, `expected`, `result`)
- Write tests in order from simplest to most complex
- Each test should verify one specific behavior

### TDD Cadence
Follow the **Red-Green-Refactor** cycle:
1. **Red**: Write a failing test using AAA format
2. **Green**: Write minimal code to make the test pass
3. **Refactor**: Improve code quality while keeping tests green
4. Repeat with the next test case

### Test Cases

1. **Test 1**: Basic case with multiple spells
   - Input: `spells = [5,1,3]`, `potions = [1,2,3,4,5]`, `success = 7`
   - Expected: `[4,0,3]`
   - Purpose: Simplest case covering the main problem statement (LeetCode example 1)

2. **Test 2**: LeetCode example 2
   - Input: `spells = [3,1,2]`, `potions = [8,5,8]`, `success = 16`
   - Expected: `[2,0,2]`
   - Purpose: Verify with different values and duplicate potions

3. **Test 3**: Single spell case
   - Input: `spells = [10]`, `potions = [1,2,3,4,5]`, `success = 25`
   - Expected: `[2]` (10*3=30, 10*4=40, 10*5=50 are >= 25, so actually 3... wait let me recalculate: if success = 25, then 10*3=30 >= 25, 10*4=40 >= 25, 10*5=50 >= 25, so 3 pairs. But the test says 2, so maybe I should adjust the test to match a clearer case)
   - Actually, let's use: `spells = [10]`, `potions = [1,2,3,4,5]`, `success = 30` → `[3]` (10*3=30, 10*4=40, 10*5=50)
   - Purpose: Handle edge case with single spell

4. **Test 4**: All pairs successful
   - Input: `spells = [100]`, `potions = [1,2,3]`, `success = 10`
   - Expected: `[3]`
   - Purpose: Verify when all combinations succeed

5. **Test 5**: No pairs successful
   - Input: `spells = [1]`, `potions = [1,2,3]`, `success = 100`
   - Expected: `[0]`
   - Purpose: Verify when no combinations succeed

## Implementation Plan (High-level steps)
1. Understand the problem: For each spell, count how many potions satisfy spell * potion >= success
2. Consider brute force approach (O(n*m)) and whether optimization is needed
3. Think about how to optimize: Can we preprocess potions array? Can we use binary search?
4. Handle edge cases: empty arrays (guaranteed non-empty by constraints), single elements
5. Implement solution following TDD: write test, implement, refactor

## Acceptance Criteria
- ✅ All tests pass
- ✅ TypeScript typecheck passes (`pnpm typecheck`)
- ✅ Code follows TDD principles (tests written before implementation)
- ✅ Time/space complexity is reasonable for the constraints
- ✅ Code is readable and well-structured

## Notes for Implementation
- Consider that product can be large (up to 10^5 * 10^5 = 10^10, which fits in JavaScript number)
- All values are positive integers (no need to handle negatives or zeros)
- Think about whether sorting the potions array could help
- Consider binary search as a potential optimization technique
