
function cachingDecoratorNew(func) {
  let cache = [];

  function  wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === hash);
    
    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].result);
      return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args);
    cache.push({hash, result});
    
    if (cache.length > 5) {
      cache.shift();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

const debounceDecoratorNew = (func, ms) => {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
    func.apply(this, args)
  }, ms);
};
}

function debounceDecorator2(func, ms) {
  let flag = false;
  let timerId;

  const wrapper = (...args) => {
    clearTimeout(timerId);

    if (!flag) {
      func(...args);
      wrapper.count++;
      flag = true;
    }

    timerId = setTimeout(() => flag = false, ms);
  }

  wrapper.count = 0;
  return wrapper;
}
