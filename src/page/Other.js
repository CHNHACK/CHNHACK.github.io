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
import dfj from '../style/image/sponsor/dfj.png'
import juejin from '../style/image/sponsor/juejin.png'
import liulishuo from '../style/image/sponsor/liulishuo.png'
import websummit from '../style/image/sponsor/websummit.png'
import dji from '../style/image/sponsor/dji.png'
import innospring from '../style/image/sponsor/innospring.png'
import zkcx from '../style/image/sponsor/zkcx.png'
import sv from '../style/image/sponsor/sv.png'
import cksd from '../style/image/sponsor/cksd.png'
import themakers from '../style/image/sponsor/themakers.png'
import tuoniao from '../style/image/sponsor/tuoniao.png'

export default class extends Component {
  render() {
    return (
      <section className='section hero is-fullheight bright'>
        <div className='container'>
          <h2 className='title'>{__`Hosts`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='columns has-text-centered'>
              <div className='column flex-1'>
                <img className='ss-logo' src={host1} style={{padding: 13}}/>
                <p className='ss-text'>{__`The Committee of Youth League at Fudan University`}</p>
              </div>
              <div className='column flex-1'>
                <img className='ss-logo' src={host2}/>
                <p className='ss-text'>{__`The School of Computer Science at Fudan University`}</p>
              </div>
              <div className='column flex-1'>
                <img className='ss-logo' src={host3}/>
                <p className='ss-text'>{__`Fudan University’s Student Union`}</p>
              </div>
              <div className='column flex-1'>
                <img className='ss-logo' src={fddn}/>
                <p className='ss-text'>{__`Fudan Developer Network`}</p>
              </div>
            </div>
          </div>
          <h2 className='title'>{__`Event Organizer`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='has-text-centered'>
              <img className='ss-logo' src={host}/>
              <p className='ss-text'>{__`Grape Tech (Shenzhen) LLC`}</p>
            </div>
          </div>
          <h2 className='title'>{__`Sponsors`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='columns has-text-centered wrap'>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.ibm.com/' target='_blank'>
                  <img className='ss-logo padding--1' src={ibm}/>
                </a>
                <p className='ss-text'>{__`IBM`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//bluemix.net/' target='_blank'>
                  <img className='ss-logo' src={bluemix}/>
                </a>
                <p className='ss-text'>{__`IBM Bluemix`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.microsoft.com/' target='_blank'>
                  <img className='ss-logo padding--2' src={ms}/>
                </a>
                <p className='ss-text'>{__`Microsoft`}</p>
              </div>
            </div>
            <div className='columns has-text-centered wrap'>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.huawei.com/' target='_blank'>
                  <img className='ss-logo padding' src={huawei}/>
                </a>
                <p className='ss-text'>{__`华为`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.github.com/' target='_blank'>
                  <img className='ss-logo' src={github}/>
                </a>
                <p className='ss-text'>{__`GitHub`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.qingcloud.com/' target='_blank'>
                  <img className='ss-logo' src={qingcloud}/>
                </a>
                <p className='ss-text'>{__`青云`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.twilio.com/' target='_blank'>
                  <img className='ss-logo padding-2' src={twilio}/>
                </a>
                <p className='ss-text'>{__`Twilio`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.htcvive.com/' target='_blank'>
                  <img className='ss-logo padding' src={vive}/>
                </a>
                <p className='ss-text'>{__`HTC Vive`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.arduino.cc/' target='_blank'>
                  <img className='ss-logo padding' src={arduino}/>
                </a>
                <p className='ss-text'>{__`Arduino`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.draperuniversity.com/' target='_blank'>
                  <img className='ss-logo' src={draper}/>
                </a>
                <p className='ss-text'>{__`Draper University`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//ruff.io/' target='_blank'>
                  <img className='ss-logo padding--1' src={ruff}/>
                </a>
                <p className='ss-text'>{__`Ruff`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.wolfram.com/' target='_blank'>
                  <img className='ss-logo' src={wolfram}/>
                </a>
                <p className='ss-text'>{__`Wolfram`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.jisuanke.com/' target='_blank'>
                  <img className='ss-logo' src={jisuanke}/>
                </a>
                <p className='ss-text'>{__`计蒜客`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.liulishuo.com/' target='_blank'>
                  <img className='ss-logo' src={liulishuo}/>
                </a>
                <p className='ss-text'>{__`英语流利说`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//websummit.net/' target='_blank'>
                  <img className='ss-logo' src={websummit}/>
                </a>
                <p className='ss-text'>{__`Web Summit`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.dji.com/' target='_blank'>
                  <img className='ss-logo padding' src={dji}/>
                </a>
                <p className='ss-text'>{__`大疆创新`}</p>
              </div>
            </div>
          </div>
          <h2 className='title'>{__`Investment Partner`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='columns has-text-centered wrap'>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.thielfoundation.org/' target='_blank'>
                  <img className='ss-logo padding-1' src={thiel}/>
                </a>
                <p className='ss-text'>{__`Thiel Foundation`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.zhenfund.com/' target='_blank'>
                  <img className='ss-logo' src={zhen}/>
                </a>
                <p className='ss-text'>{__`真格基金`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//dfj.com/' target='_blank'>
                  <img className='ss-logo padding--1' src={dfj}/>
                </a>
                <p className='ss-text'>{__`DFJ Fund`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.casstar.com.cn/' target='_blank'>
                  <img className='ss-logo' src={zkcx}/>
                </a>
                <p className='ss-text'>{__`中科创星`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.innospring.net/' target='_blank'>
                  <img className='ss-logo' src={innospring}/>
                </a>
                <p className='ss-text'>{__`InnoSpring`}</p>
              </div>
            </div>
          </div>
          <h2 className='title'>{__`合作宣传方`}</h2>
          <div className='content space-bottom-a-lot'>
            <div className='columns has-text-centered wrap'>
              <div className='column flex-1'>
                <a className='ss-link' href='//gold.xitu.io/' target='_blank'>
                  <img className='ss-logo padding-1' src={juejin}/>
                </a>
                <p className='ss-text'>{__`掘金`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.svinsight.com/' target='_blank'>
                  <img className='ss-logo padding-2' src={sv}/>
                </a>
                <p className='ss-text'>{__`硅谷密探`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//weibo.com/u/5696359395/' target='_blank'>
                  <img className='ss-logo padding--2' src={cksd}/>
                </a>
                <p className='ss-text'>{__`创客时代`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//www.themakers.cn/' target='_blank'>
                  <img className='ss-logo padding--1' src={themakers}/>
                </a>
                <p className='ss-text'>{__`创客星球`}</p>
              </div>
              <div className='column flex-1'>
                <a className='ss-link' href='//tuoniao.fm/' target='_blank'>
                  <img className='ss-logo padding' src={tuoniao}/>
                </a>
                <p className='ss-text'>{__`鸵鸟电台`}</p>
              </div>
            </div>
          </div>
          <div className='content space-bottom-a-lot'>
            <p>{__`We will have even more sponsors to be released soon, please wait for our updates!`}</p>
            <p>{__`If your company would like to sponsor us, please email us at ${<a href='mailto:sponsor@grapetech.org'>sponsor@grapetech.org</a>}! We would love to have you here at {T}!`}</p>
          </div>
        </div>
      </section>
    )
  }
  // <div className='column flex-1'>
  //   <img className='ss-logo' src={frog}/>
  //   <p className='ss-text'>{__`Frog Design`}</p>
  // </div>
}
