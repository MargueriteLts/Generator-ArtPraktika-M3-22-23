import { sample, getRandomArbitrary } from '../utilities'
import { getStorePhrase, setStorePhrase } from './store'

const typefaces = ["libre", "major", "hanalei", "kdam", "secular", "gloria", "permanent", "rokkitt", "satisfy", "caveat", "orbitron", "luckiest", "fredoka", "bangers", "gochi", "press", "bevan", "shrikhand", "bungee", "cabin"]
// const typo = sample(typefaces)

// function letters() {
// let text = getStorePhrase()
  // const myArray = text.replaceAll(' ','').split("")
  // console.log(myArray)

  // for loop array length to create the number=length div or span
  // for (let i = 0; i < myArray.length; i++) {
  //   createCircle(container)
  // }
// }

// let spanClassName = ''
// let spansHTML
// let spansHTML

function letters() {
  let spanElements = []

  let text = getStorePhrase()

  text.split("").map(function(character) {
    const typefaceClass = typefaces[Math.floor(Math.random() * typefaces.length)]
    spanElements.push("<span class='" + typefaceClass + "'>" + character + "</span>")
  })

  console.log(spanElements)

  let spansHTML = spanElements.join("")

  console.log(spansHTML)
  // spanClassName = className
  // spansHTML.classList.add(spanClassName)

  // const wrapper = document.createElement('div')
  // wrapper.classList.add(className)
  // wrapper.appendChild(spansHTML)

  return spansHTML
}

// export { letters }

// function letters(className) {
//   const wrapper = document.createElement('div')
//   wrapper.classList.add(className)
//   mySpan()
//   wrapper.appendChild(spansHTML)
// }

// function letters() {
//   setStorePhrase() = spansHTML
// }


// function letters(phrase) {
  
// }



// function splitWordToSpans(word) {
  //   let spanElements = []

  //   word.split("").map(function(character) {
  //     const typefaceClass = typefaces[Math.floor(Math.random() * typefaces.length)]
  //     spanElements.push("<span class='" + typefaceClass + "'>" + character + "</span>")
  //   })

  //   let spansHTML = spanElements.join("")

  //   return spansHTML
  // }



  // $(['user1','user2'].map(function(a){return '<span>'+a+'</span>'}).join(''))
//  .appendTo('body');



// for each add class sample massiv typefaces