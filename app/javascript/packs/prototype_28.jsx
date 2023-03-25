import React from 'react'
import ReactDOM from 'react-dom'

import Container from '../prototypes/prototype_28/Container'
import { initSketch } from '../prototypes/prototype_28/sketch'

import {
  getStoreReset,
  setStoreReset
} from '../prototypes/prototype_28/store'

const props = {
  resetDraw: getStoreReset()
}

const actions = {
  setStoreReset
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('prototype_28')
  ReactDOM.render(
    <Container initSketch={initSketch} {...props} {...actions} />,
    container
  )
})