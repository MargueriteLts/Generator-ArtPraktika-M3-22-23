import React, { Component } from 'react'
import SC_ToggleButton from './SC_ToggleButton'
import Button from './Button'
import MyInput from './MyInput'

export default class Container extends Component {
  constructor(props) {
    super(props)

    const { resetDraw, fullRandom, resetColor, resetShapes, resetCircle, phrase } = props

    this.state = {
      resetDraw,
      fullRandom,
      resetColor,
      resetShapes,
      resetCircle,
      phrase
    }
  }

  componentDidMount() {
    /////????? c'est quoi sketch dans la parenthese??????
    this.props.initSketch('sketch')
    this.props.letters('typo')
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

  /////////////////////////////////// TXT

  // function generateText() {
  //   // const { strings, sides } = model.texts
  //   // const string = sample(strings)
  //   // const side = sample(sides)

  //   const wrapper = document.createElement('div')
  //   wrapper.classList.add('textWrapper')

  //   const text = document.createElement('div')
  //   text.innerText = 'Blablabla'
  //   text.contentEditable = true
  //   text.classList.add('text')

  //   wrapper.appendChild(text)
  //   container.appendChild(wrapper)
  // }


  handleChange = (event) => {
    const { phrase } = this.state
    const { setStorePhrase } = this.props
    setStorePhrase(phrase)
    // console.log(event.target.value)
    this.setState({
      phrase : event.target.value
    })
  }

  // handleChange = (event) => {
  //   this.setState({
  //     value: event.target.value
  //   })
  // }




  ////////////////////////////////////////////////////////////////

  render() {
    const { fullRandom, phrase } = this.state

    return (
      <div className="Container">
        <div className="CoverFrame">
          <div className="sketch" id="sketch"></div>
          <div className="text">{phrase}</div>
        </div>
        <div className="UIframe">
          <MyInput
            handleChange={this.handleChange}
            value={phrase}
          />
          <div className="interface">
            <SC_ToggleButton
              text="Toggle Full Random"
              isOn={fullRandom}
              handleClick={this.handleToggleRandom}
            />
            {/* {phrase !== '' &&
              <p>The title is {phrase}.</p>
            } */}
          </div>
          {fullRandom ? this.renderResetButton() : this.renderUIResetChoices() }
        </div>
      </div>
    )
  }
}