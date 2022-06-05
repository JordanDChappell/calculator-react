import { padAtEvenIndicesWithValue } from './arrayUtils';

describe('padAtEvenIndicesWithValue', () => {
  it('returns expected result', () => {
    const input = [1, 2, 3];
    const expected = [0, 1, 0, 2, 0, 3];
    const actual = padAtEvenIndicesWithValue(input, 0);
    expect(actual).toEqual(expected);
  });
});
