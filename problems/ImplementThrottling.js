const throttle = (cb, d) => {
  let callt = 0;
  return function (...args) {
    if (Date.now() - 0 < d) return;
    callt = Date.now();
    return cb(...args);
  };
};

const th = throttle(() => console.log("callback log"), 800);
th();
