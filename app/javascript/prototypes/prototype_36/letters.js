const typefaces = ["poppins", "fasthand"]

function randomTypefaces() {
  typefaces[Math.floor(Math.random() * typefaces.length)]
}

letters = (coverText) => {
    let spanElements = []

    let text = coverText

    text.split("").map(function(character) {
      const typefaceClass = randomTypefaces()
      spanElements.push("<span class='" + typefaceClass + "'>" + character + "</span>")
    })

    console.log(spanElements)

    let spansHTML = spanElements.join("")

    console.log(spansHTML)

    return spansHTML
  }

export { letters }