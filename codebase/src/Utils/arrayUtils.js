/**
 * Pads an array at even indices (including 10) with the provided value.
 * @param {array} array
 * @param {?} value
 * @returns {array} Padded array.
 */
export const padAtEvenIndicesWithValue = (array, value) => {
  const temp = [];
  let arrayIndex = 0;
  for (let i = 0; i < array.length * 2; i += 1) {
    if (i % 2 === 0) {
      temp.push(value);
    } else {
      temp.push(array[arrayIndex]);
      arrayIndex += 1;
    }
  }
  return temp;
};

export const cum = null;
