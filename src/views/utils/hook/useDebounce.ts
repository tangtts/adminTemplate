export const useDebounce = (cb: Function, delay: number = 500) => {
  let timer: NodeJS.Timeout | null = null;
  return function InnerFn(this: typeof InnerFn) {
    const arg = arguments;
    const context = this;
    clearTimeout(timer!);
    timer = setTimeout(() => {
      cb.apply(context, arg);
    }, delay);
  };
};
