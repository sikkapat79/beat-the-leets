import { successfulPairs } from './solution';

describe('successfulPairs', () => {
  it('should return correct counts for basic case', () => {
    // Arrange
    const spells = [5, 1, 3];
    const potions = [1, 2, 3, 4, 5];
    const success = 7;
    const expected = [4, 0, 3];

    // Act
    const result = successfulPairs(spells, potions, success);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should handle LeetCode example 2', () => {
    // Arrange
    const spells = [3, 1, 2];
    const potions = [8, 5, 8];
    const success = 16;
    const expected = [2, 0, 2];

    // Act
    const result = successfulPairs(spells, potions, success);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should handle single spell case', () => {
    // Arrange
    const spells = [10];
    const potions = [1, 2, 3, 4, 5];
    const success = 31;
    const expected = [2];

    // Act
    const result = successfulPairs(spells, potions, success);

    // Assert
    expect(result).toEqual(expected);
  });

  // TODO: Add more tests incrementally following TDD principles
  // 1. Write a failing test
  // 2. Implement minimal code to pass
  // 3. Refactor if needed
  // 4. Repeat
});
