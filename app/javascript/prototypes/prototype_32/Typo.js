import { sample, getRandomArbitrary } from '../utilities'
import { getStorePhrase, setStore } from './store'

const typefaces = ["libre", "major", "hanalei", "kdam", "secular", "gloria", "permanent", "rokkitt", "satisfy", "caveat", "orbitron", "luckiest", "fredoka", "bangers", "gochi", "press", "bevan", "shrikhand", "bungee", "cabin"]

function letters() {
  let text = getStorePhrase()
  const myArray = text.split(" ");

}

function splitWordToSpans(word) {
        let spanElements = []

        word.split("").map(function(character) {
          const typefaceClass = typefaces[Math.floor(Math.random() * typefaces.length)]
          spanElements.push("<span class='" + typefaceClass + "'>" + character + "</span>")
        })

        let spansHTML = spanElements.join("")

        return spansHTML
      }

export { letters }