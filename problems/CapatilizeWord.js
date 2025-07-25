function capitalizeWords(sentence) {
  return sentence
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const Oput = capitalizeWords("     hello   world");

console.log(Oput);
