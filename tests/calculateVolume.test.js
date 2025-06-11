const { calculateVolume } = require('../audioHelpers');

test('calculateVolume returns 0 for all zeros', () => {
  expect(calculateVolume([0,0,0,0])).toBeCloseTo(0);
});

test('calculateVolume handles constant positive ones', () => {
  expect(calculateVolume([1,1,1,1])).toBeCloseTo(1);
});

test('calculateVolume handles alternating positive and negative ones', () => {
  expect(calculateVolume([1,0,-1,0])).toBeCloseTo(1);
});

test('calculateVolume handles fractional values', () => {
  expect(calculateVolume([0.5,0.5,0.5,0.5])).toBeCloseTo(0.5);
});
