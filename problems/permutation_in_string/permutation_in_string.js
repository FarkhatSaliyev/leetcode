// Problem

// You are given two strings s1 and s2.
// Return true if s2 contains a permutation of s1, or false otherwise. That means if a permutation of s1 exists as a substring of s2, then return true.
// Both strings only contain lowercase letters.

// Input: s1 = "abc", s2 = "lecabee"
// Output: true

function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  if (s1.length === 0) return true; // Empty string is a permutation of any string

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (!obj1.hasOwnProperty([s1[i]])) {
      obj1[s1[i]] = 1;
    } else {
      obj1[s1[i]] += 1;
    }
  }

  let l = 0;
  let r = 0;
  let windowSize = s1.length;
  while (r <= s2.length) {
    if (!obj2.hasOwnProperty([s2[r]])) {
      obj2[s2[r]] = 1;
    } else {
      obj2[s2[r]] += 1;
    }

    //"abc",
    //   l
    //     r
    //"lecabee"

    if (r - l + 1 === windowSize) {
      if (isEqual(obj1, obj2)) {
        return true;
      }

      obj2[s2[l]] -= 1;
      if (obj2[s2[l]] === 0) {
        delete obj2[s2[l]];
      }
      l++;
    }
    r++;
  }

  return false;
}

function isEqual(obj1, obj2) {
  // Check if all keys in obj1 exist in obj2 with same values
  for (let key of Object.keys(obj1)) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = checkInclusion;
