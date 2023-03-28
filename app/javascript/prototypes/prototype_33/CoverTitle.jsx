import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class CoverTitle extends PureComponent {
  constructor(props) {
    super(props)
  }



  render() {
    const { text } = this.props

    return (
      <div className={'wrapper'} value={text}>
      </div>
    )
  }
}