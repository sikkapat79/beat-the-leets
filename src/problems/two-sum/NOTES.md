# Implementation Notes

## Decisions Made
- Used `Map<number, number>` instead of plain object for better type safety and performance
- Implemented one-pass solution using hash map for O(n) time complexity
- Used `complement = target - nums[i]` approach to find pairs in single iteration

## Edge Cases Discovered
- Duplicate values (e.g., `[3, 3]` with target `6`) - handled correctly by checking map before adding
- Negative numbers work correctly with hash map approach
- Large arrays work efficiently due to O(n) algorithm

## Complexity Analysis
- Time Complexity: `O(n)` - Single pass through the array
- Space Complexity: `O(n)` - Hash map stores up to n-1 elements in worst case
- Reasoning: We iterate through the array once, and for each element we do O(1) map operations (has/get/set)

## Counterexamples / Failed Approaches
- Two nested loops: O(n²) time complexity - rejected for performance
- Sorting first: Would lose index information, would need additional structure to track original indices - rejected for complexity

## Refactoring Ideas
- Could use a plain object instead of Map, but Map provides better type safety
- Current implementation is optimal for time and space complexity