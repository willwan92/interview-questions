// 实现 add(1)(2)(3)

function  add1(a, b, c) {
  return a + b + c;
}

// 函数柯里化：柯里化（curry）的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

//柯里化函数
function curry(fn, ...args) {
  // 判断当前剩余参数的长度是否大于等于要柯里化的函数(fn)参数长度
  // 如果大于等于，直接调用；
  // 否则返回一个接受新的剩余参数的函数，调用该函数时，继续调用柯里化函数（传入新的的剩余参数和上次柯里化的剩余参数）
  return args.length >= fn.length // fn.length 就是函数参数的长度
  ? fn(...args) 
  : (..._args) => curry(fn, ...args, ..._args);
}

const add  = curry(add1);

console.log(add(1, 2, 3)); // 6
console.log(add(1)(2)(3)); // 6
console.log(add(1, 2)(3)); // 6
console.log(add(1)(2, 3)); // 6

// 柯里化有3个作用： 参数复用、提前返回和 延迟执行