
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

function debounceDecoratorNew(func, ms) {
  let flag = false;
  let timerId;

  return function (...args) {
    if (flag) return;
    clearTimeout(timerId);

    func(...args);
    flag = true;
    
    timerId = setTimeout(() => flag = false, ms);
  }
}

function debounceDecorator2(func, ms) {
  let flag = false;
  let timerId;

  const wrapper = (...args) => {
    if (flag) return;
    clearTimeout(timerId);

    func(...args);
    wrapper.count++;
    flag = true;
    
    timerId = setTimeout(() => flag = false, ms);
  }

  wrapper.count = 0;
  return wrapper;
}