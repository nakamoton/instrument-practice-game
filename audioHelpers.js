function pitchToColor(pitch) {
  if (pitch === 0) return 'gray';
  const noteNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const synestheticColors = {
    'C': '#FF0000', 'C#': '#FF8000', 'D': '#FFFF00', 'D#': '#80FF00', 'E': '#00FF00',
    'F': '#00FFFF', 'F#': '#0080FF', 'G': '#0000FF', 'G#': '#8000FF', 'A': '#FF00FF',
    'A#': '#FF0080', 'B': '#804000'
  };
  const midiNote = Math.round(12 * Math.log2(pitch / 440) + 69);
  const noteName = noteNames[(midiNote % 12 + 12) % 12];
  return synestheticColors[noteName] || 'black';
}

function calculateVolume(buffer) {
  let sum = 0;
  for (let i = 0; i < buffer.length; i += 2) {
    sum += buffer[i] * buffer[i];
  }
  return Math.sqrt(sum / (buffer.length / 2));
}

module.exports = { pitchToColor, calculateVolume };
