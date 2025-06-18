function cur(a) {
  return function (b) {
    console.log(a + b);
  };
}

cur(4)(5);
