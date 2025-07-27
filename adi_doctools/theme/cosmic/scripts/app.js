import { State } from './state.js'
import { Fetch } from './fetch.js'
import { Navigation } from './navigation.js'
import { HotReload } from './hot_reload.js'

export default function App () {
  window.app = {}

  new State(app)
  let on_visible = () => {
    new Fetch(app)
    new Navigation(app)
    new HotReload(app)
  }

  if (document.visibilityState === 'visible')
    on_visible()
  else
    window.addEventListener('focus', on_visible, { once: true })
}

App()
