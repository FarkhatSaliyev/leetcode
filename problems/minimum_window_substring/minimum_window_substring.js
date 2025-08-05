// Problem

// Minimum Window Substring
// Given two strings s and t, return the shortest substring of s such that every character in t, including duplicates, is present in the substring. If such a substring does not exist, return an empty string "".
// You may assume that the correct output is always unique.

// Input: s = "OUZODYXAZV", t = "XYZ"
// Output: "YXAZ"

function minWindow(s, t) {
  if (s.length < t.length) return "";
  if (s.length === 0 || t.length === 0) return "";

  const lowerS = s.toLowerCase();
  const lowerT = t.toLowerCase();
  const objS = {};
  const objT = {};

  for (let i = 0; i < lowerT.length; i++) {
    if (!objT.hasOwnProperty(lowerT[i])) {
      objT[lowerT[i]] = 1;
    } else {
      objT[lowerT[i]] += 1;
    }
  }
  //  l
  //. r
  // "XYZ"
  //.      l
  //.         r
  // "OUZODYXAZV",
  let l = 0;
  let r = 0;
  let have = 0;
  let need = Object.keys(objT).length;
  let minLen = Infinity;
  let minStart = 0;

  while (r < lowerS.length) {
    if (!objS.hasOwnProperty(lowerS[r])) {
      objS[lowerS[r]] = 1;
    } else {
      objS[lowerS[r]] += 1;
    }

    // Check if we just reached the required count for this character
    if (objT[lowerS[r]] !== undefined && objS[lowerS[r]] === objT[lowerS[r]]) {
      have++;
    }

    while (have === need) {
      if (r - l + 1 < minLen) {
        minLen = r - l + 1;
        minStart = l;
      }

      objS[lowerS[l]] -= 1;
      // Check if we just went below the required count for this character
      if (objT[lowerS[l]] !== undefined && objS[lowerS[l]] < objT[lowerS[l]]) {
        have--;
      }

      l++;
    }
    r++;
  }

  return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

module.exports = minWindow;
