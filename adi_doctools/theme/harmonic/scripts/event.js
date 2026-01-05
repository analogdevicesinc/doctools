export const DispatchEvent = (ev, obj) => {
  const event = new CustomEvent(ev, {
    detail: obj
  });
  window.dispatchEvent(event);
}

export const WaitEvent = (obj, attr, ev) => {
  if (Object.hasOwn(obj, attr))
    return obj[attr]
  else
    return new Promise((resolve) => {
      window.addEventListener(
        ev, (e) => {
          resolve(e.detail)
        },
        { once: true }
      )
    })
}
