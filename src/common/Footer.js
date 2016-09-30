/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

import { TITLE, __ } from './const'

export default class extends Component {
  render() {
    return (
      <footer className='footer bright'>
        <div className='container'>
          <div className='content'>
            <p className='has-text-centered'>{TITLE} All rights reserved</p>
            <p className='has-text-centered'>{__`Grape Tech (Shenzhen) LLC`}</p>
          </div>
        </div>
      </footer>
    )
  }
}
