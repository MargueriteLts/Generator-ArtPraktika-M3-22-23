import React, { Component } from 'react'
import SC_ToggleButton from './SC_ToggleButton'
import Button from './Button'
import MyInput from './MyInput'

export default class Container extends Component {
  constructor(props) {
    super(props)

    const { resetDraw, fullRandom, resetColor, resetShapes, resetCircle, phrase, txt1 } = props

    this.state = {
      resetDraw,
      fullRandom,
      resetColor,
      resetShapes,
      resetCircle,
      phrase,
      txt1
    }
  }

  componentDidMount() {
    // this.props.initSketch('sketch')
    this.props.generateStory('story')
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
    const { resetColor, resetShapes, resetCircle, resetTypefaces } = this.state

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
        <SC_ToggleButton
          text="Reset Typo"
          isOn={resetTypefaces}
          handleClick={this.handleResetTypefaces}
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

  handleResetTypefaces = () => {
    const { setStoreResetTypefaces } = this.props
    const { resetTypefaces } = this.state
    setStoreResetTypefaces(!resetTypefaces)

    this.setState({
      resetTypefaces: resetTypefaces
    })
  }

  /////////////////////////////////// TXT

  handlePhraseChange = (event) => {
    const { phrase } = this.state
    this.letters(event.target.value)

    this.setState({
      phrase : event.target.value
    })
  }

  handleTxt1Change = (event) => {
    const { setStoreTxt1 } = this.props
    // const { txt1 } = this.state
    setStoreTxt1(event.target.value)

    this.setState({
      txt1 : event.target.value
    })
  }

  letters = (coverText) => {
    const typefaces = ["poppins", "fasthand"]
    let spanElements = []

    let text = coverText

    text.split("").map(function(character) {
      const typefaceClass = typefaces[Math.floor(Math.random() * typefaces.length)]
      spanElements.push("<span class='" + typefaceClass + "'>" + character + "</span>")
    })

    console.log(spanElements)

    let spansHTML = spanElements.join("")

    console.log(spansHTML)

    return spansHTML
  }



  ////////////////////////////////////////////////////////////////

  render() {
    const { fullRandom, phrase, txt1, txt2, txt3, numb } = this.state

    return (
      <div className="Container">
        <div className="CoverFrame">
          <div className="story" id="story"></div>
          <div className="wrapper">{phrase}</div>
          <div className="txt">{txt1}</div>
          <div className="txt">{txt2}</div>
          <div className="txt">{txt3}</div>
          <div className="number">{numb}</div>
        </div>
        <div className="UIframe">
          <MyInput
            handleChange={this.handlePhraseChange}
            value={phrase}
          />
          <MyInput
            handleChange={this.handleTxt1Change}
            value={txt1}
          />
          {/* <MyInput
            handleChange={this.handleTxt2Change}
            value={txt2}
          />
          <MyInput
            handleChange={this.handleTxt3Change}
            value={txt3}
          />
          <MyInput
            handleChange={this.handleNumbChange}
            value={numb}
          /> */}
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