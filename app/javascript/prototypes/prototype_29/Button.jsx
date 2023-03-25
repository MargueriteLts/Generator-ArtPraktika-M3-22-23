// import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick } = this.props

    // const classes = classnames({
    //   button: true,
    //   active: isOn
    // })

    return (
      <div className={'Button'} onClick={handleClick}>
        {text}
      </div>
    )
  }
}