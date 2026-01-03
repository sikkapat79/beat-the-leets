/**
 * Finds two numbers in an array that add up to a target value.
 * Returns the indices of the two numbers.
 * 
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Array containing the two indices whose values sum to target
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function twoSum(nums: number[], target: number): number[] {
  const numMap = new Map<number, number>();
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    
    if (numMap.has(complement)) {
      return [numMap.get(complement)!, i];
    }
    
    numMap.set(nums[i], i);
  }
  
  // This should never be reached due to problem constraints
  // but TypeScript requires a return statement
  throw new Error('No solution found');
}