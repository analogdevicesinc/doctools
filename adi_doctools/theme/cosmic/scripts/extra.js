import { VersionDropdown } from './version_dropdown.js'
import { Links } from './links.js'
import { PageActions } from './page_actions.js'

export default function Extra (){
   new VersionDropdown(app)
   new Links(app)
   new PageActions(app)
}

Extra()
