let resetDraw = false

function getStoreReset() {
  return resetDraw
}

function setStoreReset(data) {
  resetDraw = data
}

export {
  getStoreReset,
  setStoreReset
}