function converter(note) {
  const map = { C: 0, D: 1, F: 2 };
  const pitch = note.charAt(0);
  const octave = Number(note.charAt(1));
  return octave * 7 + map[pitch];
}

function canSing(song, lowest, highest) {
  const low = converter(lowest);
  const high = converter(highest);

  for (const note of song) {
    const val = converter(note);
    if (val < low || val > high) {
      return false;
    }
  }

  return true;
}

module.exports = { canSing, converter };
