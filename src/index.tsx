import './index.css'
import 'tailwindcss/tailwind.css'

import { render } from 'solid-js/web'

import { Home } from './scenes/home'

render(() => <Home />, document.getElementById('root') as HTMLElement)
