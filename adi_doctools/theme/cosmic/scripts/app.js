import { State } from './state.js'
import { Fetch } from './fetch.js'
import { Navigation } from './navigation.js'

export default function App () {
  window.app = {}

  new State(app)
  new Fetch(app)
  new Navigation(app)
}

App()
