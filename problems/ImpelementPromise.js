const checkNum = new Promise((resolve, reject) => {
  const isture = false;
  if (isture) {
    resolve("Number is correct");
  } else {
    reject("not correct");
  }
});

checkNum
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
