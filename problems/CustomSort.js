function customSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      const a = arr[i];
      const b = arr[i + 1];

      const isNumA = typeof a === "number";
      const isNumB = typeof b === "number";

      let shouldSwap = false;

      if (isNumA && isNumB) {
        shouldSwap = a > b;
      } else if (!isNumA && !isNumB) {
        shouldSwap = a > b;
      } else {
        shouldSwap = !isNumA ? false : true;
      }

      if (shouldSwap) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const input = [5, 9, 2, 6, "a", 1];
customSort(input);
console.log(customSort(input));
