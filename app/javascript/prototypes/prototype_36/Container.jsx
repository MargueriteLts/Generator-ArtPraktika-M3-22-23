import React, { Component } from 'react'
import SC_ToggleButton from './SC_ToggleButton'
import Button from './Button'
import MyInput from './MyInput'
import { sample } from '../utilities'

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
      // spansHTML,
      // resetTypefaces
    }
  }

  componentDidMount() {
    this.props.initSketch('sketch')
    // this.props.letters('text')
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

  // handleChange = (event) => {
  //   this.setState({
  //     value: event.target.value
  //   })
  // }

  // renderText = () => {
    
  // }

    handleChange = (event) => {
    const { phrase } = this.state
    // const { setStorePhrase } = this.props
    // setStorePhrase(event.target.value)
    // this.letters(event.target.value)
    this.coverLetters(event.target.value)
    // console.log(event.target.value)
    this.setState({
      phrase : event.target.value
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

  ///////////////////////////////////////////////////////////////////

  coverLetters = () => {
    const { phrase } = this.state
    const typefaces = ["poppins", "fasthand"]
    // let randomTypeface = sample(typefaces)

    // let coverTxt = txt

    const myArray = phrase.split("")
    console.log(myArray)

    // for (let i = 0; i < myArray.length; i++) {
    //   const element = myArray[i];
    //   return (
    //     <span className={randomTypeface}>{element}</span>
    //   )
    // }

    ////////////////////////

    // let spanElements = []
    // for (let i = 0; i < myArray.length; i++) {
    //   const element = myArray[i];
    //   spanElements.push("<span class='" + randomTypeface + "'>" + element + "</span>")
    // }
    // console.log(spanElements)

    // let letters = spanElements.join("")

    // console.log(letters)
    // console.log(typeof letters)

    ///////////////////////////////

    return (
      <div className="wrapper">
        {myArray.map((letter, index) => <span className={typefaces[Math.floor(Math.random() * typefaces.length)]} key={index}> {letter} </span>)}
      </div>
    )
  }


  ////////////////////////////////////////////////////////////////

  render() {
    const { fullRandom, phrase } = this.state

    return (
      <div className="Container">
        <div className="CoverFrame">
          <div className="sketch" id="sketch"></div>
          {this.coverLetters()}
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