function foo(a, b) {
  // Handle null and undefined values
  a = (a === null || a === undefined) ? 0 : a;
  b = (b === null || b === undefined) ? 0 : b;

  if (isNaN(a) || isNaN(b)) {
    return NaN; // Handle NaN values explicitly
  }
  return a + b;
}

console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: 20
console.log(foo(10, NaN)); // Output: NaN
console.log(foo(NaN, 20)); // Output: NaN
console.log(foo(undefined, 20)); // Output: 20
console.log(foo(10, undefined)); // Output: 10