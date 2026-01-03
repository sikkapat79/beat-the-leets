import { twoSum } from './solution';

describe('twoSum', () => {
  it('should return correct indices for basic case', () => {
    // Arrange
    const nums = [2, 7];
    const target = 9;
    const expected = [0, 1];

    // Act
    const result = twoSum(nums, target);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should return correct indices when answer is not at the start', () => {
    // Arrange
    const nums = [3, 2, 4];
    const target = 6;
    const expected = [1, 2];

    // Act
    const result = twoSum(nums, target);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should handle duplicate values', () => {
    // Arrange
    const nums = [3, 3];
    const target = 6;
    const expected = [0, 1];

    // Act
    const result = twoSum(nums, target);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should work with negative numbers', () => {
    // Arrange
    const nums = [-1, -2, -3, -4, -5];
    const target = -8;
    const expected = [2, 4];

    // Act
    const result = twoSum(nums, target);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should work with larger arrays', () => {
    // Arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 19;
    const expected = [8, 9];

    // Act
    const result = twoSum(nums, target);

    // Assert
    expect(result).toEqual(expected);
  });

  it('should work with the LeetCode example 1', () => {
    // Arrange
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];

    // Act
    const result = twoSum(nums, target);

    // Assert
    expect(result).toEqual(expected);
  });
});