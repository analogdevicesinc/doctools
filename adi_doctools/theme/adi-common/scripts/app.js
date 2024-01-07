import '../style/bundle.scss'
import { navigation } from './navigation.js'

export default function App (){
  window.app = {}

  app.navigation = navigation

  app.navigation.init()
}

App()
