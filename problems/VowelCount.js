function countVowels(str) {
  // Your implementation
  const vowel = ["a", "e", "i", "o", "u"];
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  return count;
}

//For the purpose of user debugging.
countVowels("JavaScript");
