const { pitchToColor } = require('../audioHelpers');

test('pitchToColor returns gray for pitch 0', () => {
  expect(pitchToColor(0)).toBe('gray');
});

test('pitchToColor returns correct colors for standard pitches', () => {
  expect(pitchToColor(261.63)).toBe('#FF0000'); // C4
  expect(pitchToColor(277.18)).toBe('#FF8000'); // C#4
  expect(pitchToColor(293.66)).toBe('#FFFF00'); // D4
  expect(pitchToColor(311.13)).toBe('#80FF00'); // D#4
  expect(pitchToColor(329.63)).toBe('#00FF00'); // E4
  expect(pitchToColor(349.23)).toBe('#00FFFF'); // F4
  expect(pitchToColor(369.99)).toBe('#0080FF'); // F#4
  expect(pitchToColor(392.00)).toBe('#0000FF'); // G4
  expect(pitchToColor(415.30)).toBe('#8000FF'); // G#4
  expect(pitchToColor(440.00)).toBe('#FF00FF'); // A4
  expect(pitchToColor(466.16)).toBe('#FF0080'); // A#4
  expect(pitchToColor(493.88)).toBe('#804000'); // B4
});
