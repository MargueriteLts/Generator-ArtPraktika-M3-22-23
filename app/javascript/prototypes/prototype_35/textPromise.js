function genTextPromise() {
  return new Promise((resolve, reject) => {
    const { sides } = model.texts
    const side = sample(sides)

    const wrapper = document.createElement('div')
    wrapper.classList.add('textWrapper')
    wrapper.classList.add(side)

    const text = document.createElement('div')
    text.innerText = string
    text.contentEditable = true
    text.classList.add('txt')

    wrapper.appendChild(text)
    container.appendChild(wrapper)

    resolve()
  })
}

export { genTextPromise }