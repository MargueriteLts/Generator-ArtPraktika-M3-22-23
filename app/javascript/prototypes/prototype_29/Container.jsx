import React, { Component } from 'react'
import SC_ToggleButton from './SC_ToggleButton'

export default class Container extends Component {
  constructor(props) {
    super(props)

    const { resetDraw, fullRandom, resetColor, resetShapes, resetCircle } = props

    this.state = {
      resetDraw,
      fullRandom,
      resetColor,
      resetShapes,
      resetCircle
    }
  }

  componentDidMount() {
    this.props.initSketch('sketch')
  }

  ////////Render bouton reset
  renderResetButton = () => {
    const { resetDraw } = this.state
    return (
      <div className="interface">
        <SC_ToggleButton
          text="Reset design"
          isOn={resetDraw}
          handleClick={this.handleResetAction}
        />
      </div>
    )
  }

  /////Action bouton reset
  handleResetAction = () => {
    const { setStoreReset } = this.props
    const { resetDraw } = this.state
    setStoreReset(!resetDraw)

    this.setState({
      resetDraw: resetDraw
    })
  }

  /////Action toggle full random
  handleToggleRandom = () => {
    const { setStoreFullRandom } = this.props
    const { fullRandom } = this.state
    setStoreFullRandom(!fullRandom)

    this.setState({
      fullRandom: !fullRandom
    })
  }

  /////Render choices buttons
  renderUIResetChoices = () => {
    const { resetColor, resetShapes, resetCircle } = this.state

    return (
      <div className="interface">
        <SC_ToggleButton
          text="Reset Color"
          isOn={resetColor}
          handleClick={this.handleResetColor}
        />
        <SC_ToggleButton
          text="Reset Shapes"
          isOn={resetShapes}
          handleClick={this.handleResetShapes}
        />
        <SC_ToggleButton
          text="Reset Circle"
          isOn={resetCircle}
          handleClick={this.handleResetCircle}
        />
      </div>
    )
  }

  handleResetColor = () => {
    const { setStoreResetColor } = this.props
    const { resetColor } = this.state
    setStoreResetColor(!resetColor)

    this.setState({
      resetColor: resetColor
    })
  }

  handleResetShapes = () => {
    const { setStoreResetShapes } = this.props
    const { resetShapes } = this.state
    setStoreResetShapes(!resetShapes)

    this.setState({
      resetShapes: resetShapes
    })
  }

  handleResetCircle = () => {
    const { setStoreResetCircle } = this.props
    const { resetCircle } = this.state
    setStoreResetCircle(!resetCircle)

    this.setState({
      resetCircle: resetCircle
    })
  }



  ////////////////////////////////////////////////////////////////

  render() {
    const { fullRandom } = this.state

    return (
      <div className="Container">
        <div className="sketch" id="sketch"></div>
        <div className="UIframe">
          <div className="interface">
            <SC_ToggleButton
              text="Toggle Full Random"
              isOn={fullRandom}
              handleClick={this.handleToggleRandom}
            />
          </div>
          {fullRandom ? this.renderResetButton() : this.renderUIResetChoices() }
        </div>
      </div>
    )
  }
}