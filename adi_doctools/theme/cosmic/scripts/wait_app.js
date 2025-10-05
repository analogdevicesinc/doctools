export {WaitApp}

class WaitApp {
  static wait = () => {
    return new Promise((resolve) => {
      let value;
      Object.defineProperty(window, 'app', {
        configurable: true,
        set (_overwrite) {
          value = _overwrite

          const finish = () => {
            resolve(value);
            Object.defineProperty(window, 'app', {
              value,
              writable: true,
              configurable: true
            })
          }

          finish()
        },
        get () { return value }
      })
    })
  }
}
