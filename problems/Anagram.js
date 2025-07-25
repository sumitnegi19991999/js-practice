function isAnagram(str1, str2) {
  // Your implementation
  return (
    str1
      .toLowerCase()
      .replace(/[^a-zA-Z]/g, "")
      .split("")
      .sort()
      .join("") ===
    str2
      .toLowerCase()
      .replace(/[^a-zA-Z]/g, "")
      .split("")
      .sort()
      .join("")
  );
}

//For the purpose of user debugging.
isAnagram("listen", "silent");
module.exports = isAnagram;
