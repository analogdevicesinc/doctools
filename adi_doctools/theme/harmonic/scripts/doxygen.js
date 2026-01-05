"use strict";
import { State } from './state.js'
import { Fetch } from './doxygen/fetch.js'
import { Adapter } from './doxygen/adapter.js'
import { Links } from './links.js'

export default function Doxygen (){
  window.app = {}

  new State(app)
  new Fetch(app)
  new Adapter(app)
  let on_visible = () => {
    new Links(app)
  }

  if (document.visibilityState === 'visible')
    on_visible()
  else
    window.addEventListener('focus', on_visible, { once: true })
}

Doxygen()
