function debounce(fn, wait = 100) {
  // 判断fn是否为函数
  // 返回一个函数
  // 每次调用此函数时执行：
  //    先判断：如果有定时器，清除定时器，
  //    然后重置定时器

  if (typeof fn !== 'function') {
    throw new TypeError('fn must be a function')
  }
  
  let timer
  return (...args) => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, wait)
  }
}

function throttle(fn, wait = 100) {
  // 判断fn是否为函数
  // 返回一个函数，
  // 如果这个函数本次调用的时间 - 上次调用的时间 >= wait，调用fn，然后重置上次调用的时间
  // 否则啥都不做

  if (typeof fn !== 'function') {
    throw new TypeError('fn must be a function')
  }

  let lastTime = Date.now();
  return (...args) => {
    if (Date.now() - lastTime >= wait) {
      fn.call(this, ...args)
      lastTime = Date.now()
    }
  }
}