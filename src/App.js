import React, { Component } from 'react'
import { Router, Route, Link, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import FontFaceObserver from 'fontfaceobserver'

// Routers
import Index from './page/Index'

// Components
import Container from './common/Container'

export default class extends Component {
  componentDidMount() {
    let ABeeZee = new FontFaceObserver('ABeeZee', {
      weight: 400
    })
    let Montserrat = new FontFaceObserver('Montserrat', {
      weight: 700
    })

    ABeeZee.load().then(function () {
      document.body.className += ' abeezee'
    })

    Montserrat.load().then(function () {
      document.body.className += ' montserrat'
    })
  }

  render() {
    return (
      <Router history={useRouterHistory(createHashHistory)({queryKey: false})}>
        <Route component={Container}>
          <Route path='/(:section)' component={Index}/>
        </Route>
      </Router>
    )
  }
}
