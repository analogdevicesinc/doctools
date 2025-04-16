import { State } from './state.js'
import { Fetch } from './fetch.js'
import { Navigation } from './navigation.js'
import { UnifiedSearch } from './search.js'

export default function App () {
  window.app = {}

  new State(app)
  new Fetch(app)
  new Navigation(app)
  new UnifiedSearch(app)
}

App()
