import React from 'react'
import ReactDOM from 'react-dom'
// import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'

import '../asset/bulma.sass'
import './style/index.less'

// console.log(renderToStaticMarkup(<App/>))

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App
