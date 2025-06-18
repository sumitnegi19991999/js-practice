function debounce() {
  let timer;
  return function (str) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(str);
    }, 800);
  };
}
const debounce1 = debounce();
debounce1("Hello");
debounce1("Hello World");
debounce1("Hello World!");
debounce1("Hello World! How are you?");
