export const useThrottle = (cb: Function, duration: number = 500) => {
  let start = 0;
  return function InnerFn(this: typeof InnerFn) {
    let now = Date.now();
    const arg = arguments;
    const context = this;
    if (now - start > duration) {
      start = now;
      cb.apply(context, arg);
    }
  };
};
