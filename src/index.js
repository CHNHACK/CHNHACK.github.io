import React from 'react'
import ReactDOM from 'react-dom'
// import { renderToStaticMarkup } from 'react-dom/server'
import App from './App'

import '../asset/bulma.sass'
import './style/index.less'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// console.log(renderToStaticMarkup(<App />))
export default App
