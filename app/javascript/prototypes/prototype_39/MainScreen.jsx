import React, { PureComponent } from 'react'

export default class SC_Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick, className } = this.props

    return (
      <div className="MainScreen">
        <SC_ToggleButton
          text="Начать генерировать"
          buttonLink="/Container"
          handleClick={this.handleResetAction}
        />
      </div>
    )
  }
}
