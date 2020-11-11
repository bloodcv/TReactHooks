import React, { Component } from 'react'
import { Button, Tag, WhiteSpace } from 'antd-mobile'
// import FunCom from '../../components/FunCom'
// import ClassCom from '../../components/ClassCom'
// import AloneState from '../../components/AloneState'
// import GetFutureVal from '../../components/GetFutureVal'
import GetPassVal from '../../components/GetPassVal'

class HooksTest extends Component {
  state = {
    count: 0,
    countInterval: null
  }

  stopCountAdd = () => {
    clearInterval(this.state.countInterval)
  }

  beginCountAdd = () => {
    this.setState({
      countInterval: setInterval(() => {
        const count = this.state.count + 1;
        this.setState({
          count
        })
      }, 1000)
    })
  }

  componentDidMount() {
    // this.beginCountAdd()
  }

  render() {
    const { count } = this.state

    return (
      <main style={{ padding: 20 }}>
        <Tag>父组件count:  {count}</Tag>
        <WhiteSpace />
        <Button type="warning" onClick={() => this.stopCountAdd()}>stop count add</Button>
        {/* <FunCom count={count} /> */}
        {/* <ClassCom count={count}/> */}
        {/* <AloneState /> */}
        {/* <GetFutureVal /> */}
        <GetPassVal />
      </main>
    )
  }
}

export default HooksTest