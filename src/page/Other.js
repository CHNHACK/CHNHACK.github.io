/**
 * Created by shuding on 7/24/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'

import { __, Space, TITLE } from '../common/const'

import host from '../style/image/host.png'
import host1 from '../style/image/host-1.png'
import host2 from '../style/image/host-2.png'
import host3 from '../style/image/host-3.png'
import fddn from '../style/image/fddn.png'

// Sponsors
import ms from '../style/image/sponsor/microsoft.png'
import vive from '../style/image/sponsor/vive.png'
import ibm from '../style/image/sponsor/ibm.png'
import bluemix from '../style/image/sponsor/ibm-bluemix.png'
import huawei from '../style/image/sponsor/huawei.png'
import github from '../style/image/sponsor/github.png'
import twilio from '../style/image/sponsor/twilio.png'
import arduino from '../style/image/sponsor/arduino.png'
import draper from '../style/image/sponsor/draper.png'
import zhen from '../style/image/sponsor/zhen.png'
import thiel from '../style/image/sponsor/thiel-foundation.png'
import qingcloud from '../style/image/sponsor/qingcloud.png'
import jisuanke from '../style/image/sponsor/jisuanke.png'
import frog from '../style/image/sponsor/frog.png'
import wolfram from '../style/image/sponsor/wolfram.png'
import ruff from '../style/image/sponsor/ruff.png'

export default class extends Component {
  render() {
    return (
      <section className='section hero is-fullheight bright'>
        <div className='container'>
          <h2 className='title'>{__`Hosts`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='columns has-text-centered'>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={host1} style={{padding: 13}}/>
                <p className='sponsor-text'>{__`The Committee of Youth League at Fudan University`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={host2}/>
                <p className='sponsor-text'>{__`The School of Computer Science at Fudan University`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={host3}/>
                <p className='sponsor-text'>{__`Fudan University’s Student Union`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={fddn}/>
                <p className='sponsor-text'>{__`Fudan Developer Network`}</p>
              </div>
            </div>
          </div>
          <h2 className='title'>{__`Event Organizer`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='has-text-centered'>
              <img className='sponsor-logo' src={host}/>
              <p className='sponsor-text'>{__`Grape Tech (Shenzhen) LLC`}</p>
            </div>
          </div>
          <h2 className='title'>{__`Sponsors`}</h2>
          <div className='content space-bottom-a-lot'>
            <p>{__`We are currently in progress working with sponsor companies. We will release their brands soon!`}</p>
            <p>{__`If your company would like to sponsor us, please email us at ${<a href='mailto:sponsor@grapetech.org'>sponsor@grapetech.org</a>}! We would love to have you here at {T}!`}</p>
          </div>
          <div className='content space-bottom-a-lot'>
            <div className='columns has-text-centered wrap'>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={ibm}/>
                <p className='sponsor-text'>{__`IBM`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={bluemix}/>
                <p className='sponsor-text'>{__`IBM Bluemix`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={ms}/>
                <p className='sponsor-text'>{__`Microsoft`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo padding' src={huawei}/>
                <p className='sponsor-text'>{__`华为`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo padding' src={vive}/>
                <p className='sponsor-text'>{__`HTC Vive`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={github}/>
                <p className='sponsor-text'>{__`GitHub`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={qingcloud}/>
                <p className='sponsor-text'>{__`青云`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo padding-2' src={twilio}/>
                <p className='sponsor-text'>{__`Twilio`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={wolfram}/>
                <p className='sponsor-text'>{__`Wolfram`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo padding' src={arduino}/>
                <p className='sponsor-text'>{__`Arduino`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={draper}/>
                <p className='sponsor-text'>{__`Draper University`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo padding--1' src={thiel}/>
                <p className='sponsor-text'>{__`Thiel Foundation`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo padding--1' src={ruff}/>
                <p className='sponsor-text'>{__`Ruff`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={frog}/>
                <p className='sponsor-text'>{__`Frog Design`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={jisuanke}/>
                <p className='sponsor-text'>{__`计蒜客`}</p>
              </div>
              <div className='column flex-1'>
                <img className='sponsor-logo' src={zhen}/>
                <p className='sponsor-text'>{__`真格基金`}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
