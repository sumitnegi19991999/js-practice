function formLargestNumber(arr) {
  //write your implementation here
  const numsStr = arr.map(String);

  // Custom sort: compare concatenated strings
  numsStr.sort((a, b) => {
    const order1 = a + b;
    const order2 = b + a;
    return order2.localeCompare(order1); // sort descending
  });

  // Edge case: if the largest number is '0', the result is '0'
  if (numsStr[0] === "0") return "0";

  // Join all to form the final result
  return numsStr.join("");
}
const input = [3, 30, 34, 5, 9];
formLargestNumber(input);
module.exports = formLargestNumber;
