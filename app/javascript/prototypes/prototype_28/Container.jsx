import React, { Component } from 'react'
import SC_ToggleButton from './SC_ToggleButton'

export default class Container extends Component {
  constructor(props) {
    super(props)

    const { resetDraw } = props

    this.state = {
      resetDraw
    }
  }

  componentDidMount() {
    this.props.initSketch('sketch')
  }

  handleResetChange = () => {
    const { setStoreReset } = this.props
    const { resetDraw } = this.state
    setStoreReset(!resetDraw)

    this.setState({
      resetDraw: resetDraw
    })
  }

  render() {
    const { resetDraw } = this.state

    return (
      <div className="Container">
        <div className="sketch" id="sketch"></div>

        <div className="interface">
          <SC_ToggleButton
            text="Reset design"
            isOn={resetDraw}
            handleClick={this.handleResetChange}
          />
        </div>
      </div>
    )
  }
}