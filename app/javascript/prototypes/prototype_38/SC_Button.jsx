import React, { PureComponent } from 'react'

export default class SC_Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, className, buttonLink } = this.props

    return (
      <a href={buttonLink}>
        <div className={className}>
          {text}
        </div>
      </a>
    )
  }
}
