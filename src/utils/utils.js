// 函数节流
export function throttle (fn, interval = 500) {
  let first = true
  let timer = null;
  let _self = fn
  return function () {
    let that = this
    let args = arguments
    // 是否第一次执行
    if (first) {
      _self.apply(this, args)
      first = false
      return first
    }
    // 判断定时器是否执行完毕
    if (timer) {
      return false
    }
    // 甚至定时器
    timer = setTimeout(function () {
      clearTimeout(timer)
      timer = null
      _self.apply(that, args)
    }, interval)
  }
}

// 函数防抖
export function debounce (fn, delay) {
  var timer = null;
  return function () {
    var context = this;
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(context, ...arguments);
    }, delay || 500);
  }
}

// object merge
export function mere (target) {
  for (let index = 1, len = arguments.length; index < len; index++) {
    let source = arguments[index] || {}
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        let value = source[key]
        if (value !== 'undefined') {
          target[key] = value
        }
      }
    }
  }
  return target
}

// 获取随机主键
export function getGuid () {
  function S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
 }
 return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}