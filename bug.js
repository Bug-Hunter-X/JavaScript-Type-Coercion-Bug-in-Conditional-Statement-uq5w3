function foo(x) {
  if (x === null) {
    return 0; 
  } else if (x < 0) {
    return -1; 
  } else {
    return x * 2; 
  }
}

console.log(foo(null)); // 0
console.log(foo(-1));  // -1
console.log(foo(5));   // 10
console.log(foo(undefined)); // NaN