// import classnames from 'classnames'
import React, { PureComponent } from 'react'

export default class Button extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Fuck Nudes Send Techno'
    };
  }

  // function generateText() {
  //   const { strings, sides } = model.texts
  //   const string = sample(strings)
  //   const side = sample(sides)

  //   const wrapper = document.createElement('div')
  //   wrapper.classList.add('textWrapper')
  //   wrapper.classList.add(side)

  //   const text = document.createElement('div')
  //   text.innerText = string
  //   text.contentEditable = true
  //   text.classList.add('text')

  //   wrapper.appendChild(text)
  //   container.appendChild(wrapper)
  // }

  // <input type="text" value={this.state.value} onChange={this.handleChange} />

  render() {
    const { value, handleChange } = this.props
    // const { contentEditable } = this.props
    // const { value } = this.state.value

    return (
      <input className={'Input'} value={value} onChange={handleChange} ></input>
    )
  }
}