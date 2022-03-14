/**
 * 首先，分析一下Promise的基本特征：
 * 1. Promise 是一个类，在实例化的时候会可以传入一个执行器函数作为参数，这个执行器函数在实例化的时候立即执行，执行器函数接受两个参数：resolve和reject。
 * 2. Promise实例会有三种状态：
 *      Pending 等待
 *      Fulfilled 完成
 *      Rejected 失败
 *    状态只能由 Pending --> Fulfilled 或者 Pending --> Rejected，且一但发生改变便不可二次修改；
 * 3. 执行器函数中使用 resolve 和 reject 两个函数来更改Promise实例的状态，调用执行器函数的时候应传入这个函数，所以这两个函数应该由promise类提供；
 * 4. then 方法用来注册promise实例状态改变时的回调函数，其内部做的事情就是状态判断：
        如果状态是成功，调用成功回调函数，该回调函数接收一个 value(在执行器函数中调用的时候传入) 作为成功的返回值
        如果状态是失败，调用失败回调函数，该回调函数接收一个 reason(在执行器函数中调用的时候传入) 作为失败的的原因
 */


// 定义三个常量表示状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 一、根据上面的基本特征：我们新建一个MyPromise类
// class MyPromise {
//     constructor(executor) {
//         // executor 是一个执行器，进入会立即执行
//         // 并传入resolve和reject方法
//         executor(this.resolve, this.reject)
//     }

//     // 储存状态的变量，初始值是 pending
//     status = PENDING;

//     // 成功之后的值，初始为null
//     value = null;
//     // 失败之后的原因，初始为null
//     reason = null;

//     // resolve和reject为什么要用箭头函数？
//     // 如果直接调用的话，普通函数this指向的是window或者undefined
//     // 用箭头函数就可以让this指向当前实例对象
//     // 由 Pending 变为 Fulfilled 的函数
//     resolve = (value) => {
//         if (this.status === PENDING) {
//             this.status = FULFILLED;
//             this.value = value;
//         }
//     }

//     // 由 Pending 变为 Rejected 的函数
//     reject = (reason) => {
//         if (this.status === PENDING) {
//             this.status = REJECTED;
//             this.reason = reason;
//         }
//     }

//     then(onFulfilled, onRejected) {
//         if (this.status === FULFILLED) {
//             onFulfilled(this.value);
//         } else if (this.status === REJECTED) {
//             onRejected(this.reason);
//         }
//     }
// }

// 二、加入异步处理逻辑
// 主要是在then方法中注册状态改变之后的回调函数（注意考虑多个回调函数），然后在状态改变的时候调用
// class MyPromise {
//     constructor(executor) {
//         // executor 是一个执行器，进入会立即执行
//         // 并传入resolve和reject方法
//         executor(this.resolve, this.reject)
//     }

//     // 储存状态的变量，初始值是 pending
//     status = PENDING;

//     // 存储成功回调函数
//     onFulfilledCallbacks = [];
//     // 存储失败回调函数
//     onRejectedCallbacks = [];

//     // 成功之后的值，初始为null
//     value = null;
//     // 失败之后的原因，初始为null
//     reason = null;

//     // resolve和reject为什么要用箭头函数？
//     // 如果直接调用的话，普通函数this指向的是window或者undefined
//     // 用箭头函数就可以让this指向当前实例对象
//     // 由 Pending 变为 Fulfilled 的函数
//     resolve = (value) => {
//         if (this.status === PENDING) {
//             this.status = FULFILLED;
//             this.value = value;
//             while (this.onFulfilledCallbacks.length) {
//                 this.onFulfilledCallbacks.shift()(value);
//             }
//         }
//     }

//     // 由 Pending 变为 Rejected 的函数
//     reject = (reason) => {
//         if (this.status === PENDING) {
//             this.status = REJECTED;
//             this.reason = reason;
//             while (this.onRejectedCallbacks.length) {
//                 this.onRejectedCallbacks.shift()(reason);
//             }
//         }
//     }

//     then(onFulfilled, onRejected) {
//         if (this.status === FULFILLED) {
//             onFulfilled(this.value);
//         } else if (this.status === REJECTED) {
//             onRejected(this.reason);
//         } else if (this.status === PENDING) {
//             this.onFulfilledCallbacks.push(onFulfilled);
//             this.onRejectedCallbacks.push(onRejected);
//         }
//     }
// }


// 三、实现 then 方法链式调用
// then 方法要链式调用那么就需要返回一个 Promise 对象
// then 方法里面 return 一个返回值作为下一个 then 方法的参数，如果是 return 一个 Promise 对象，那么就需要判断它的状态
// 如果 then 注册的回调函数返回的是自己的 Promise 实例 ，则会发生循环调用，这个时候程序要报错
// 捕获可能发生的错误
// class MyPromise {
//     constructor(executor) {
//         // executor 是一个执行器，进入会立即执行
//         // 并传入resolve和reject方法
//         try {
//             executor(this.resolve, this.reject)
//         } catch (error) {
//             // 如果有错误，就直接执行 reject
//             this.reject(error)
//         }
//     }

//     // 储存状态的变量，初始值是 pending
//     status = PENDING;

//     // 存储成功回调函数
//     onFulfilledCallbacks = [];
//     // 存储失败回调函数
//     onRejectedCallbacks = [];

//     // 成功之后的值，初始为null
//     value = null;
//     // 失败之后的原因，初始为null
//     reason = null;

//     // resolve和reject为什么要用箭头函数？
//     // 如果直接调用的话，普通函数this指向的是window或者undefined
//     // 用箭头函数就可以让this指向当前实例对象
//     // 由 Pending 变为 Fulfilled 的函数
//     resolve = (value) => {
//         if (this.status === PENDING) {
//             this.status = FULFILLED;
//             this.value = value;
//             while (this.onFulfilledCallbacks.length) {
//                 this.onFulfilledCallbacks.shift()(value);
//             }
//         }
//     }

//     // 由 Pending 变为 Rejected 的函数
//     reject = (reason) => {
//         if (this.status === PENDING) {
//             this.status = REJECTED;
//             this.reason = reason;
//             while (this.onRejectedCallbacks.length) {
//                 this.onRejectedCallbacks.shift()(reason);
//             }
//         }
//     }

//     then(onFulfilled, onRejected) {
//         // 如果没传使用默认函数
//         onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
//         onRejected = typeof onRejected === 'function' ? onRejected : value => value;

//         // 为了链式调用这里要返回一个 MyPromise实例
//         const newPromise = new MyPromise((resolve, reject) => {
//             if (this.status === FULFILLED) {
//                 // 创建一个微任务等待newPromise的初始化完成
//                 queueMicrotask(() => {
//                     // 处理成功回调可能发生的错误
//                     try {
//                         // 获取成功回调函数的执行结果(链式调用后面的then方法注册的回调函数要接收上一个then的回调的结果)
//                         const x = onFulfilled(this.value);
//                         // 把结果x传给 resolveNewPromise处理
//                         resolveNewPromise(newPromise, x, resolve, reject);
//                     } catch (error) {
//                         reject(error)
//                     }

//                 })
//             } else if (this.status === REJECTED) {
//                 queueMicrotask(() => {
//                     try {
//                         const x = onRejected(this.reason);
//                         resolveNewPromise(newPromise, x, resolve, reject);
//                     } catch (error) {
//                         reject(error)
//                     }
//                 })
//             } else if (this.status === PENDING) {
//                 this.onFulfilledCallbacks.push(() => {
//                     queueMicrotask(() => {
//                         try {
//                             const x = onFulfilled(this.value)
//                             resolveNewPromise(newPromise, x, resolve, reject)
//                         } catch (error) {
//                             reject(error)
//                         }
//                     })
//                 });
//                 this.onRejectedCallbacks.push(() => {
//                     queueMicrotask(() => {
//                         try {
//                             const x = onRejected(this.reason)
//                             resolveNewPromise(newPromise, x, resolve, reject)
//                         } catch (error) {
//                             reject(error)
//                         }
//                     })
//                 });
//             }
//         })

//         return newPromise;
//     }
// }

// 四、实现 resolve 和 reject 的静态调用
class MyPromise {
    constructor(executor) {
        // executor 是一个执行器，进入会立即执行
        // 并传入resolve和reject方法
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            // 如果有错误，就直接执行 reject
            this.reject(error)
        }
    }

    // 储存状态的变量，初始值是 pending
    status = PENDING;

    // 存储成功回调函数
    onFulfilledCallbacks = [];
    // 存储失败回调函数
    onRejectedCallbacks = [];

    // 成功之后的值，初始为null
    value = null;
    // 失败之后的原因，初始为null
    reason = null;

    // resolve和reject为什么要用箭头函数？
    // 如果直接调用的话，普通函数this指向的是window或者undefined
    // 用箭头函数就可以让this指向当前实例对象
    // 由 Pending 变为 Fulfilled 的函数
    resolve = (value) => {
        if (this.status === PENDING) {
            this.status = FULFILLED;
            this.value = value;
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(value);
            }
        }
    }

    // 由 Pending 变为 Rejected 的函数
    reject = (reason) => {
        if (this.status === PENDING) {
            this.status = REJECTED;
            this.reason = reason;
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason);
            }
        }
    }

    then(onFulfilled, onRejected) {
        // 如果没传使用默认函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason};

        // 为了链式调用这里要返回一个 MyPromise实例
        const newPromise = new MyPromise((resolve, reject) => {
            if (this.status === FULFILLED) {
                // 创建一个微任务等待newPromise的初始化完成
                queueMicrotask(() => {
                    // 处理成功回调可能发生的错误
                    try {
                        // 获取成功回调函数的执行结果(链式调用后面的then方法注册的回调函数要接收上一个then的回调的结果)
                        const x = onFulfilled(this.value);
                        // 把结果x传给 resolveNewPromise处理
                        resolveNewPromise(newPromise, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }

                })
            } else if (this.status === REJECTED) {
                queueMicrotask(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolveNewPromise(newPromise, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            } else if (this.status === PENDING) {
                this.onFulfilledCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onFulfilled(this.value)
                            resolveNewPromise(newPromise, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                });
                this.onRejectedCallbacks.push(() => {
                    queueMicrotask(() => {
                        try {
                            const x = onRejected(this.reason)
                            resolveNewPromise(newPromise, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    })
                });
            }
        })

        return newPromise;
    }

    // resolve 静态方法
    static resolve(parameter) {
        if (parameter instanceof MyPromise) {
            return parameter;
        }

        return new MyPromise(resolve => {
            resolve(parameter);
        })
    }

    // reject 静态方法
    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }
}

MyPromise.deferred = function () {
    let result = {}
    result.promise = new MyPromise(function (resolve, reject) {
        result.resolve = resolve;
        result.reject = reject;
    })

    return result;
}


// 用来改变新返回的newPromise实例的状态
function resolveNewPromise(newPromise, x, resolve, reject) {
    // 判断上一个then的回调函数返回的是不是newPormise本身
    if (newPromise === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }

    // if (x instanceof MyPromise) {
    //     // 如果x是MyPromise的实例，调用x.then并传入newPromise的resolve和reject
    //     // 目的是：x这个MyPromise实例状态改变时，改变newPromise实例的状态
    //     x.then(resolve, reject)
    // } else {
    //     // x为普通值
    //     resolve(x)
    // }

    if (typeof x === 'object' || typeof x === 'function') {
        // x 为 null 直接返回
        if (x === null) {
            return resolve(x);
        }

        let then;
        try {
            then = x.then
        } catch (error) {
            return reject(error)
        }

        // 如果 x.then 是 function，那么说明 x 是 thenable 的，
        // 类似于 x 是 MyPromise 的实例。此时要 resolveNewPromise
        if (typeof then ===  'function') {
            let called = false
            // 如果 resolve 和 reject 均被调用，
            // 或者同一参数被调用了多次，则只调用首次
            try {
                then.call(
                    x,
                    y => {
                        if (called) return;
                        called = true;
                        resolveNewPromise(newPromise, y, resolve, reject)
                    },
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                )
            } catch (error) {
                if (called) return;
                reject(error);
            }
        } else {
            resolve(x);
        }

    } else {
        // 如果 x 不为对象或者函数，以 x 为参数执行 resolve
        resolve(x);
    }
}

module.exports = MyPromise;

