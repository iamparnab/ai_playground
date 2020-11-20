export const BrowserStorage = {
  get: (key: string) => sessionStorage.getItem(key),
  set: (key: string, value: string) => sessionStorage.setItem(key, value),
  remove: (key: string) => sessionStorage.removeItem(key),
};

export class Debouncer {
  private timeInMillis: number;
  private timer: NodeJS.Timeout | null = null;

  constructor(timeInMillis: number) {
    this.timeInMillis = timeInMillis;
  }

  execute = (fn: Function) => {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      fn();
    }, this.timeInMillis);
  };
}
