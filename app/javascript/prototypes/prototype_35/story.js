import { genTextPromise } from './textPromise'
import { initSketchPromise } from './sketchPromise'


function generateStory() {
  initSketchPromise()
    .then(genTextPromise)
}

export { generateStory }