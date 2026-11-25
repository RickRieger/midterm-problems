// Extra tests added during the 2026 cleanup (not part of the original assignment).
// main.test.js is the instructor's and is unchanged.
const { countWords } = require('./main.js');

describe('countWords (edge cases)', () => {
  it('counts an empty string as 0 words', () => {
    expect(countWords('')).toBe(0);
  });

  it('does not count extra spaces as words', () => {
    expect(countWords('hello  world')).toBe(2);
    expect(countWords(' hi ')).toBe(1);
    expect(countWords('   ')).toBe(0);
  });
});
