import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_33/Container'
import { initSketch } from '../prototypes/prototype_33/sketch'
// import { letters } from '../prototypes/prototype_33/letters'

import {
  getStoreFullRandom,
  setStoreFullRandom,
  getStoreReset,
  setStoreReset,
  getStoreResetColor,
  setStoreResetColor,
  getStoreResetShapes,
  setStoreResetShapes,
  getStoreResetCircle,
  setStoreResetCircle,
  setStorePhrase,
  getStorePhrase,
  // setStoreSpan,
  // getStoreSpan,
  // setStoreTypefaces,
  // getStoreTypefaces
} from '../prototypes/prototype_33/store'

const props = {
  resetDraw: getStoreReset(),
  fullRandom: getStoreFullRandom(),
  resetColor: getStoreResetColor(),
  resetShapes: getStoreResetShapes(),
  resetCircle: getStoreResetCircle(),
  phrase: getStorePhrase(),
  // spansHTML: getStoreSpan(),
  // resetTypefaces: getStoreTypefaces()
}

const actions = {
  setStoreReset,
  setStoreFullRandom,
  setStoreResetColor,
  setStoreResetShapes,
  setStoreResetCircle,
  setStorePhrase,
  // setStoreSpan,
  // setStoreTypefaces
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_33')
  ReactDOM.render(
    <Container initSketch={initSketch} {...props} {...actions} />,
    container
  )
})