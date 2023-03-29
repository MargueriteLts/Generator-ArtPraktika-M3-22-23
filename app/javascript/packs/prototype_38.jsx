import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_38/Container'
import { initSketch } from '../prototypes/prototype_38/sketch'

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
  setStoreMyArray,
  getStoreMyArray
} from '../prototypes/prototype_38/store'

const props = {
  resetDraw: getStoreReset(),
  fullRandom: getStoreFullRandom(),
  resetColor: getStoreResetColor(),
  resetShapes: getStoreResetShapes(),
  resetCircle: getStoreResetCircle(),
  phrase: getStorePhrase(),
  myArray: getStoreMyArray()
}

const actions = {
  setStoreReset,
  setStoreFullRandom,
  setStoreResetColor,
  setStoreResetShapes,
  setStoreResetCircle,
  setStorePhrase,
  setStoreMyArray
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_38')
  ReactDOM.render(
    <Container initSketch={initSketch} {...props} {...actions} />,
    container
  )
})