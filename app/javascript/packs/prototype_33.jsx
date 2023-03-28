import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_33/Container'
import { initSketch } from '../prototypes/prototype_33/sketch'
import { letters } from '../prototypes/prototype_33/typo'

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
  getStorePhrase
} from '../prototypes/prototype_33/store'

const props = {
  resetDraw: getStoreReset(),
  fullRandom: getStoreFullRandom(),
  resetColor: getStoreResetColor(),
  resetShapes: getStoreResetShapes(),
  resetCircle: getStoreResetCircle(),
  phrase: getStorePhrase()
}

const actions = {
  setStoreReset,
  setStoreFullRandom,
  setStoreResetColor,
  setStoreResetShapes,
  setStoreResetCircle,
  setStorePhrase
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_33')
  ReactDOM.render(
    <Container initSketch={initSketch} letters={letters} {...props} {...actions} />,
    container
  )
})