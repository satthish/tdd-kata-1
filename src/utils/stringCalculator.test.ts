import { add } from '../utils/stringCalculator';

describe('String Calculator', () => {
  it('should handle an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should handle a single number', () => {
    expect(add('1')).toBe(1);
  });

  it('should handle two numbers', () => {
    expect(add('1,5')).toBe(6);
  });

  it('should handle new lines as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  it('should handle custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  it('should handle negative numbers', () => {
    expect(add('-1,2')).toBe('negative numbers not allowed: -1');
  });

  it('should handle multiple negative numbers', () => {
    expect(add('-1,-2')).toBe('negative numbers not allowed: -1, -2');
  });

  it('should ignore numbers greater than or equal to 1000', () => {
    expect(add('2,1000,3')).toBe(1005);
  });
});
