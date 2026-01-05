import { DispatchEvent } from './event.js'
import { State } from './state.js'
import { Fetch } from './fetch.js'
import { Navigation } from './navigation.js'
import { HotReload } from './hot_reload.js'

export default function App () {
  window.app = {}

  DispatchEvent("app:created")

  new State(app)
  new Fetch(app)
  let on_visible = () => {
    new Navigation(app)
    new HotReload(app)
  }

  if (document.visibilityState === 'visible')
    on_visible()
  else
    window.addEventListener('focus', on_visible, { once: true })
}

App()
