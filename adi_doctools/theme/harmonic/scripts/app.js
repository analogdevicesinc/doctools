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
  let on_ready = () => {
    new Navigation(app)
    new HotReload(app)
  }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', on_ready, { once: true });
  else
    on_ready()
}

App()
