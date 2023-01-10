import { Button, WhiteSpace } from 'antd-mobile'
import React, { Component } from 'react';

class ClassCom extends Component {

  handleClick() {
    setTimeout(() => {
      console.log('-------ClassCom--------', this.props.count)
    }, 3000);
  }

  render () {
    const { count } = this.props
    return (
      <section>
        <WhiteSpace/>
        <h2>ClassCom-Click: {count}</h2>
        <Button type="primary" onClick={() => this.handleClick()}>ClassCom-Click</Button>
      </section>
    )
  }
}

export default ClassCom