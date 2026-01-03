# Context Engineering Frame for Cursor

Use this template to structure your implementation prompt for Cursor. Fill in the details below, then paste this into Cursor chat to guide the TDD implementation.

---

## Goal
Implement a function `twoSum` that finds two numbers in an array that add up to a target value and returns their indices.

**Function Signature:**
```typescript
function twoSum(nums: number[], target: number): number[]
```

## Inputs/Outputs

### Input Types
- `nums`: `number[]` - An array of integers
- `target`: `number` - The target sum

### Output Type
- Returns: `number[]` - An array containing the two indices whose values sum to target

## Constraints
- Array size: `2 <= nums.length <= 10^4`
- Value range: `-10^9 <= nums[i] <= 10^9`
- Target range: `-10^9 <= target <= 10^9`
- Time complexity target: `O(n)` (using hash map approach)
- Space complexity target: `O(n)` (for the hash map)
- Only one valid answer exists (guaranteed)

## Examples
1. **Basic case**: `twoSum([2,7,11,15], 9)` → `[0, 1]`
2. **Different indices**: `twoSum([3,2,4], 6)` → `[1, 2]`
3. **Duplicate values**: `twoSum([3,3], 6)` → `[0, 1]`
4. **Negative numbers**: `twoSum([-1,-2,-3,-4,-5], -8)` → `[2, 4]`
5. **Zero target**: `twoSum([1, 2, -1, -2], 0)` → `[0, 3]` or `[1, 2]`

## Test Plan (Ordered - simplest to hardest)
Write tests in this order, following the **AAA (Arrange/Act/Assert)** pattern:

### Test Writing Guidelines (AAA Pattern)
Each test should follow this structure:
```typescript
it('should [describe behavior]', () => {
  // Arrange - Set up test data
  const nums = [/* ... */];
  const target = /* ... */;
  const expected = [/* ... */];

  // Act - Execute the function
  const result = twoSum(nums, target);

  // Assert - Verify the result
  expect(result).toEqual(expected);
});
```

**Best practices:**
- Use explicit `expected` variable for clarity
- Keep variable naming consistent (`nums`, `target`, `expected`, `result`)
- Write tests in order from simplest to most complex
- Each test should verify one specific behavior

### TDD Cadence
Follow the **Red-Green-Refactor** cycle:
1. **Red**: Write a failing test using AAA format
2. **Green**: Write minimal code to make the test pass
3. **Refactor**: Improve code quality while keeping tests green
4. Repeat with the next test case

### Test Cases

1. **Test 1**: Basic case with two elements
   - Input: `nums = [2, 7]`, `target = 9`
   - Expected: `[0, 1]`
   - Purpose: Simplest possible case to get started

2. **Test 2**: Three elements, answer not at start
   - Input: `nums = [3, 2, 4]`, `target = 6`
   - Expected: `[1, 2]`
   - Purpose: Verify algorithm works when answer isn't first two elements

3. **Test 3**: Duplicate values
   - Input: `nums = [3, 3]`, `target = 6`
   - Expected: `[0, 1]`
   - Purpose: Handle case where same value appears twice

4. **Test 4**: Negative numbers
   - Input: `nums = [-1, -2, -3, -4, -5]`, `target = -8`
   - Expected: `[2, 4]`
   - Purpose: Verify algorithm works with negative numbers

5. **Test 5**: Larger array
   - Input: `nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, `target = 19`
   - Expected: `[8, 9]`
   - Purpose: Verify performance with larger inputs

6. **Test 6**: LeetCode example 1
   - Input: `nums = [2, 7, 11, 15]`, `target = 9`
   - Expected: `[0, 1]`
   - Purpose: Direct reference to LeetCode example

## Implementation Plan (High-level steps)
1. Handle edge case: array must have at least 2 elements (guaranteed by constraints, but good to note)
2. Use hash map approach: iterate through array, for each number calculate `complement = target - num`
3. Check if complement exists in hash map
4. If found, return indices; if not, store current number and index in hash map
5. Continue until solution is found (guaranteed to exist)

## Acceptance Criteria
- ✅ All tests pass
- ✅ TypeScript typecheck passes (`pnpm typecheck`)
- ✅ Code follows TDD principles (tests written before implementation)
- ✅ Time complexity: O(n)
- ✅ Space complexity: O(n)
- ✅ Code is readable and well-structured

## Notes for Implementation
- Use a Map or object to store `number -> index` mapping
- One-pass solution is possible (optimal)
- Since only one solution exists, we can return immediately when found