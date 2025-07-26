function chunkArray(arr, n) {
  // Your implementation
  let chinkSrr = [];
  for (let i = 0; i < arr.length; i = i + n) {
    chinkSrr.push(arr.slice(i, i + n));
  }
  console.log(chinkSrr);
  return chinkSrr;
}

//For the purpose of user debugging.
//pass your array and chunk size in function call
chunkArray([1, 2, 3], 2);
module.exports = chunkArray;
