function sum (...args) {
  const fn = function (...innerArgs) {
    return sum.apply(null, [...args, ...innerArgs]);
  };

  fn.valueOf = function () {
    return args.reduce(function (a, b) {
      return a + b;
    });
  };

  return fn;
}

console.log(sum(1) + 0);
console.log(sum(1, 2, 3) + 0);
console.log(sum(1)(2)(3)(4) + 0);
console.log(sum(1)(2)(3, 4) + 0);
