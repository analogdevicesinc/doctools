import { VersionDropdown } from './version_dropdown.js'
import { Links } from './links.js'
import { PageActions } from './page_actions.js'
import { Search } from './search.js'

export default function Extra (){
  new Links(app)
  new PageActions(app)
  new Search(app)
  new VersionDropdown(app)
}

Extra()
