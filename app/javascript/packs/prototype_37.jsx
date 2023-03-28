import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_37/Container'
import { initSketch } from '../prototypes/prototype_37/sketch'

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
} from '../prototypes/prototype_37/store'

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
  const container = document.getElementById('prototype_37')
  ReactDOM.render(
    <Container initSketch={initSketch} {...props} {...actions} />,
    container
  )
})