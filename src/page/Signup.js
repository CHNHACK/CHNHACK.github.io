/**
 * Created by shuding on 7/23/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'

import { Space, __ } from '../common/const'

export default class extends Component {
  render() {
    return (
      <section className='section hero is-fullheight'>
        <div className='container'>
          <h2 className='title'>{__`Application Process`}</h2>
          <div className='content signup-box'>
            <p>{__`Please fill out our official ${
              <a href='http://form.mikecrm.com/PphIxn' target='_blank'>
                {__`student application`}
              </a>
            } for {T}, after your completion, please scan the HACKx wechat public page to join our notification group.`}</p>
            <p>{__`The APPLICATION will open on early September, 2016, we welcome you to apply!`}</p>
            <p>{__`The application will be closed on Sunday, September 25th at 10:00 PM China Standard Time.`}</p>
          </div>
        </div>
      </section>
    )
  }
}
