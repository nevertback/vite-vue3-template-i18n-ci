export default {
  get() {
    if (globalThis.localStorage) {
      return globalThis.localStorage.getItem('lang')
    }
  },
  set(key, value) {
    if (globalThis.localStorage) {
      globalThis.localStorage.setItem('lang', value)
    }
  },
  remove() {
    if (globalThis.localStorage) {
      globalThis.localStorage.removeItem('lang')
    }
  }
}
