/**
 * Created by shuding on 7/23/16.
 * <ds303077135@gmail.com>
 */
import React, { Component } from 'react'

import { TITLE, Space, Compress, __ } from '../common/const'

const TTime = props => <div className='tl-1'>{props.children}</div>
const TNote = props => {
  if (props.square) {
    return <div className='tl-2 tl-square'/>
  } else if (props.dot) {
    return <div className='tl-2 tl-dot'/>
  } else if (props.line) {
    return <div className={`tl-2 tl-line tl-${props.color || 'red'}${props.long ? ' tl-long' : ''}`}/>
  }
  return <div className='tl-2'/>
}
const THead = props => <div className='tl-3'><span>{props.children}</span></div>

class Title extends Component {
  render() {
    return (
      <div className='tl'>
        <TTime/>
        <TNote square={true}/>
        <THead><h4>{this.props.children}</h4></THead>
      </div>
    )
  }
}

class Line extends Component {
  render() {
    let color = this.props.color || ['red', 'blue', 'yellow'][~~(Math.random() * 3)]
    return (
      <div className='tl'>
        <TTime/>
        <TNote line={true} color={color} long={this.props.long}/>
        <THead>{this.props.children}</THead>
      </div>
    )
  }
}

class Dot extends Component {
  render() {
    return (
      <div className='tl'>
        <TTime>{this.props.time}</TTime>
        <TNote dot={true}/>
        <THead>{this.props.children}</THead>
      </div>
    )
  }
}

class Empty extends Component {
  render() {
    return (
      <div className='tl'>
        <TTime/>
        <TNote/>
        <THead>{this.props.children}</THead>
      </div>
    )
  }
}

export default class extends Component {
  render() {
    return (
      <section className='section hero is-fullheight tl-section'>
        <div className='container'>
          <h2 className='title'>{__`Hackathon Schedule`}</h2>
          <div className='columns tl-box'>
            <div className='column is-half'>
              <Title>{__`September 24${<sup>th</sup>} (Saturday)`}</Title>
              <Line/>
              <Dot time={`9/24`}>{__`IBM Bluemix{ }技术解析分享`}</Dot>
              <Line/>
              <Dot time={`9/27`}>{__`微软人工智能，物联网和增强现实技术分享`}</Dot>
              <Line/>
              <Dot time={`9/28`}>{__`华为{ }SDN{ }开放平台与企业云服务开发技术分享`}</Dot>
              <Line/>
              <Dot time={`10/13`}>{__`青云{ }QingCloud{ }技术及校招宣讲`}</Dot>
              <Line/>
              <Title>{__`October 13${<sup>th</sup>} (Thursday)`}</Title>
              <Empty>{__`Hackathon is Ready!`}</Empty>
              <br/>
              <Title>{__`October 14${<sup>th</sup>} (Friday)`}</Title>
              <Dot time='17:30'>{__`Event Check-in and Setup`}</Dot>
              <Line/>
              <Dot time='19:00'>{__`{T} Kickoff Ceremony`}</Dot>
              <Line/>
              <Dot time='19:20'>{__`论坛——开源技术的未来${<small><br/>复旦计院教授作为论坛主持，IBM、微软、华为、GitHub 参与</small>}`}</Dot>
              <Line/>
              <Dot time='19:45'>{__`真格基金致辞`}</Dot>
              <Dot time='19:50'>{__`赛会规则介绍`}</Dot>
              <Dot time='20:00'>{__`各家企业奖项和技术介绍环节`}</Dot>
              <Line/>
              <Dot time='21:00'>{__`{T}{ }正式开始`}</Dot>
              <Dot time='21:00'>{__`自由组队环节`}</Dot>
              <Line/>
              <Dot time='23:00'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line long={true}>{__`(Past Night Hacking Time)${<Compress/>}`}</Line>
            </div>
            <div className='column is-half'>
              <Title>{__`October 15${<sup>th</sup>} (Saturday)`}</Title>
              <Dot time='7:30'>{__`Breakfast`}</Dot>
              <Line/>
              <Dot time='8:30'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line/>
              <Dot time='10:00'>{__`IBM{ }技术沙龙时间`}</Dot>
              <Dot time='10:30'>{__`微软技术沙龙时间`}</Dot>
              <Dot time='11:00'>{__`华为技术沙龙时间`}</Dot>
              <Line/>
              <Dot time='12:00'>{__`Lunch`}</Dot>
              <Line/>
              <Dot time='14:30'>{__`GitHub{ }技术沙龙时间`}</Dot>
              <Dot time='15:00'>{__`青云技术沙龙时间`}</Dot>
              <Dot time='15:30'>{__`Ruff{ }技术沙龙时间`}</Dot>
              <Dot time='16:00'>{__`创源{ }InnoSpring{ }创业小讲堂`}</Dot>
              <Line/>
              <Dot time='18:00'>{__`Dinner`}</Dot>
              <Line/>
              <Dot time='20:30'>{__`GitHub Octocat{ }设计比拼`}</Dot>
              <Line/>
              <Dot time='23:00'>{__`Student Hacking in Progress and Gaming Time`}</Dot>
              <Line long={true}>{__`(Past Night Hacking Time)${<Compress/>}`}</Line>
              <br/>
              <Title>{__`October 16${<sup>th</sup>} (Sunday)`}</Title>
              <Dot time='7:30'>{__`Breakfast`}</Dot>
              <Line/>
              <Dot time='8:30'>{__`Student Hacking Wrap-up Time`}</Dot>
              <Line/>
              <Dot time='11:00'>{__`Project Submission Deadline`}</Dot>
              <Line/>
              <Dot time='12:00'>{__`Lunch`}</Dot>
              <Line/>
              <Dot time='12:30'>{__`Exhibition Prep and Break`}</Dot>
              <Line/>
              <Dot time='15:20'>{__`Project Exhibition and Judging`}</Dot>
              <Line/>
              <Dot time='16:30'>{__`Closing and Awarding Ceremony`}</Dot>
              <Line/>
              <Dot time='17:30'/>
              <Line long={true}>{__`与{ }IBM{ }线下对接`}<br/>{__`与微软线下对接`}<br/>{__`与华为线下对接`}</Line>
              <Dot/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
