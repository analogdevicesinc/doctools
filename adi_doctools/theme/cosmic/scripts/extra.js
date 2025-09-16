import { Polyfill } from './polyfill.js'
import { Links } from './links.js'
import { PageActions } from './page_actions.js'
import { Versioned } from './versioned.js'
import { Search } from './search.js'
import { ContentActions } from './content_actions.js'

export default function Extra (){
  new Polyfill(app)
  new Links(app)
  new Versioned(app)
  new PageActions(app)
  new Search(app)
  new ContentActions(app)
}

Extra()
