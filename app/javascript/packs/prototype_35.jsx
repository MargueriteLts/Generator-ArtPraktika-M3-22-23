import React from 'react'
import ReactDOM from 'react-dom'

import { model } from '../prototypes/prototype_35/model'
import Container from '../prototypes/prototype_35/Container'
// import { initSketch } from '../prototypes/prototype_35/sketch'
// import { genText } from '../prototypes/prototype_35/text'
import { generateStory } from '../prototypes/prototype_35/story'

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
  setStoreTxt1,
  getStoreTxt1
} from '../prototypes/prototype_35/store'

const props = {
  resetDraw: getStoreReset(),
  fullRandom: getStoreFullRandom(),
  resetColor: getStoreResetColor(),
  resetShapes: getStoreResetShapes(),
  resetCircle: getStoreResetCircle(),
  phrase: getStorePhrase(),
  txt1: getStoreTxt1()
}

const actions = {
  setStoreReset,
  setStoreFullRandom,
  setStoreResetColor,
  setStoreResetShapes,
  setStoreResetCircle,
  setStorePhrase,
  setStoreTxt1
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_35')
  ReactDOM.render(
    <Container generateStory={generateStory} {...props} {...actions} />,
    container
  )
})