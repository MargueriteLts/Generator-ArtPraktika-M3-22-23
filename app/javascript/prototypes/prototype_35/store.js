let fullRandom = true
let resetDraw = false
let resetColor = false
let resetShapes = false
let resetCircle = false
let phrase = 'F*ck nudes send techno'
let txt1 = 'Some more info'
// let spansHTML
// let resetTypefaces = false

function getStoreTxt1() {
  return txt1
}

function setStoreTxt1(data) {
  txt1 = data
}

// function getStoreTypefaces() {
//   return resetTypefaces
// }

// function setStoreTypefaces(data) {
//   resetTypefaces = data
// }

// function getStoreSpan() {
//   return spansHTML
// }

// function setStoreSpan(data) {
//   spanHTML = data
// }

function getStorePhrase() {
  return phrase
}

function setStorePhrase(data) {
  phrase = data
}

///// 1. Turn ON/OFF full random
function getStoreFullRandom() {
  return fullRandom
}

function setStoreFullRandom(data) {
  fullRandom = data
}

///// 1.A) full random ON, action reset
function getStoreReset() {
  return resetDraw
}

function setStoreReset(data) {
  resetDraw = data
}

///// 1.B)1- full random OFF, action random Color
function getStoreResetColor() {
  return resetColor
}

function setStoreResetColor(data) {
  resetColor = data
}

///// 1.B)2- full random OFF, action random Shapes
function getStoreResetShapes() {
  return resetShapes
}

function setStoreResetShapes(data) {
  resetShapes = data
}

///// 1.B)3- full random OFF, action random Circle
function getStoreResetCircle() {
  return resetCircle
}

function setStoreResetCircle(data) {
  resetCircle = data
}




export {
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
  // getStoreSpan,
  // setStoreSpan,,
  // getStoreTypefaces,
  // setStoreTypefaces,
  getStoreTxt1,
  setStoreTxt1
}