import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

import ballerines from '../../assets/images/ballerines.png'
import bequille from '../../assets/images/bequille.png'
import chaussette from '../../assets/images/chaussette.png'
import claquettes from '../../assets/images/claquettes.png'
import costume from '../../assets/images/costume.png'
import drmartens from '../../assets/images/drmartens.png'
import escarpin from '../../assets/images/escarpin.png'
import jordans from '../../assets/images/jordans.png'
import mocassins from '../../assets/images/mocassins.png'
import newbalance from '../../assets/images/newbalance.png'
import pied from '../../assets/images/pied.png'
import salon from '../../assets/images/salon.png'
import stansmith from '../../assets/images/stansmith.png'
import tn from '../../assets/images/tn.png'
import vans from '../../assets/images/vans.png'
import disc from '../../assets/images/disc.png'

const canvasSize = 1000

let fullRandom = true
let resetDraw = false
let resetColor = false
let resetShapes = false

let img1
let img2
let img3
let img4
let img5
let img6
let img7
let img8
let img9
let img10
let img11
let img12
let img13
let img14
let img15

let imgDisc

const xCenter = canvasSize / 2
const yCenter = canvasSize / 2

let r = 0
let g = 0
let b = 0

let shoes
let bgTypes


/////////////////////////////////////////////////////

function drawShapes(p) {
  //w = width of center circle
  const w = getRandomArbitrary(10, 60) * canvasSize / 100
  
  //Need optimisation here
  const paddingW = 30
  const paddingH = 50
  
  const wCircle = w - paddingW
  
  const xCenterER1 = xCenter + (w / 2) + 65
  const xCenterEL1 = xCenter - (w / 2) - 65
  const wEV1 = 130 - paddingW
  const hEV1 = w + 260 - paddingH
  
  const xCenterER2 = xCenterER1 + ((canvasSize - w) / 4)
  const xCenterEL2 = canvasSize - xCenterER2
  const wEV2 = ((canvasSize - w) / 2) - 130 - paddingW
  const hEV2 = canvasSize - paddingH
  
  p.ellipse(xCenter, yCenter, wCircle)
  
  p.ellipse(xCenterER1, yCenter, wEV1, hEV1)
  p.ellipse(xCenterEL1, yCenter, wEV1, hEV1)
  p.ellipse(xCenterER2, yCenter, wEV2, hEV2)
  p.ellipse(xCenterEL2, yCenter, wEV2, hEV2)
  
  p.ellipse(yCenter, xCenterER1, wCircle, wEV1)
  p.ellipse(yCenter, xCenterEL1, wCircle, wEV1)
  p.ellipse(yCenter, xCenterER2, hEV1, wEV2)
  p.ellipse(yCenter, xCenterEL2, hEV1, wEV2)
}

////////////////////////////////////////////////////////////////

function drawAll(p) {
  p.background(0)

  r = getRandomArbitrary(0, 255)
  g = getRandomArbitrary(0, 255)
  b = getRandomArbitrary(0, 255)

  const bgCircleWidth = getRandomArbitrary(100, (canvasSize - 30))
  
  p.fill(r, g, b)
  
  bgTypes = ['color', 'shapes', 'circle', 'disc']
  const bg = sample(bgTypes)
  switch (bg) {
    case 'color':
      p.background(r, g, b)
      break;
    case 'shapes':
      drawShapes(p)
      break;
    case 'circle':
      p.ellipse(xCenter, yCenter, bgCircleWidth)
      break;
    case 'disc':
      p.background(0)
      p.image(imgDisc, 0, 0)
      break;

    default:
      break;
  }

  shoes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
  const shoeImg = sample(shoes)
  p.image(shoeImg, 0, 0)
}

/////////////////////////////////

function bgColor(p) {
  r = getRandomArbitrary(0, 255)
  g = getRandomArbitrary(0, 255)
  b = getRandomArbitrary(0, 255)

  p.background(r, g, b)
}

function bgShapes(p) {
  r = getRandomArbitrary(0, 255)
  g = getRandomArbitrary(0, 255)
  b = getRandomArbitrary(0, 255)
  
  p.background(0)
  p.fill(r, g, b)

  drawShapes(p)
}

function bgCircle(p) {
  const bgCircleWidth = getRandomArbitrary(100, (canvasSize - 30))

  r = getRandomArbitrary(0, 255)
  g = getRandomArbitrary(0, 255)
  b = getRandomArbitrary(0, 255)
  
  p.background(0)
  p.fill(r, g, b)
  p.ellipse(xCenter, yCenter, bgCircleWidth)
}

function bgDisc(p) {
  p.background(0)
  p.image(imgDisc, 0, 0)
}

function shoeImg(p) {
  shoes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
  const shoeImg = sample(shoes)

  p.image(shoeImg, 0, 0)
}

///////////////////////////////

// function firstChoice(p) {
//   if (fullRandom) {
//     drawAll(p)
//     renderUI1()
//   } else {
//     choose(p)
//     renderUI2()
//   }
// }

// function choose(p) {
//   bgColor(p)
//   bgShapes(p)
//   bgCircle(p)
//   bgDisc(p)
//   shoeImg(p)
// }




//////////////////////////////////////////////////

function sketch(p) {

  p.preload = () => {
    img1 = p.loadImage(ballerines);
    img2 = p.loadImage(bequille);
    img3 = p.loadImage(chaussette);
    img4 = p.loadImage(claquettes);
    img5 = p.loadImage(costume);
    img6 = p.loadImage(drmartens);
    img7 = p.loadImage(escarpin);
    img8 = p.loadImage(jordans);
    img9 = p.loadImage(mocassins);
    img10 = p.loadImage(newbalance);
    img11= p.loadImage(pied);
    img12 = p.loadImage(salon);
    img13 = p.loadImage(stansmith);
    img14 = p.loadImage(tn);
    img15 = p.loadImage(vans);
    imgDisc = p.loadImage(disc);
  }
  
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_27')
    console.log(resetDraw)

    drawAll(p)
  }

  p.draw = () => {
    if (resetDraw) {
      drawAll(p)
      resetDraw = false
      console.log(resetDraw)
    } else if (resetColor) {
      bgColor(p)
      resetColor = false
      console.log(resetColor)
    } else if (resetShapes) {
      bgShapes(p)
      resetShapes = false
      console.log(resetShapes)
    }
  }
}


///////////////////////////////////////////////// UI

function renderUI() {
  const wrapper = document.createElement('div')
  wrapper.classList.add('wrapper')

  const toggleFullRandom = document.createElement('div')
  toggleFullRandom.classList.add('toggleSwitch')
  toggleFullRandom.innerText = 'Toggle Full Random'

  toggleFullRandom.addEventListener('click', () => {
    toggleFullRandom.classList.toggle('active')
    fullRandom = !fullRandom
    
    // if (fullRandom) {
    //   renderUI1()
    // } else {
    //   renderUI2()
    // }

    // if (fullRandom) {
    //   const resetButton = document.createElement('div')
    //   resetButton.classList.add('button')
    //   resetButton.innerText = 'Reset'

    //   resetButton.addEventListener('click', () => {
    //     resetDraw = true
    //   })
    //   wrapper.appendChild(resetButton)
    // }
  })

  uiToggle()

  wrapper.appendChild(toggleFullRandom)
  document.body.appendChild(wrapper)
}

///////////////////////////

function uiToggle() {
  const wrapper1 = document.createElement('div')
  wrapper1.classList.add('wrapper1')

  if (fullRandom) {
    const resetButton = document.createElement('div')
    resetButton.classList.add('button')
    resetButton.innerText = 'Reset'

    resetButton.addEventListener('click', () => {
      resetDraw = true
    })
    wrapper1.appendChild(resetButton)
  } else {
    const resetButtonColor = document.createElement('div')
    const resetButtonShapes = document.createElement('div')
    resetButtonColor.classList.add('button')
    resetButtonColor.innerText = 'Reset Color'
    resetButtonShapes.classList.add('button')
    resetButtonShapes.innerText = 'Reset Shapes'

    resetButtonColor.addEventListener('click', () => {
      resetColor = true
      resetShapes = false
    })

    resetButtonShapes.addEventListener('click', () => {
      resetColor = false
      resetShapes = true
    })

    wrapper1.appendChild(resetButtonColor)
    wrapper1.appendChild(resetButtonShapes)
  }
}

////

// function renderUI1() {
//   const wrapper1 = document.createElement('div')
//   wrapper1.classList.add('wrapper1')

//   const resetButton = document.createElement('div')
//   resetButton.classList.add('button')
//   resetButton.innerText = 'Reset'

//   resetButton.addEventListener('click', () => {
//     resetDraw = true
//   })

//   wrapper1.appendChild(resetButton)
//   document.body.appendChild(wrapper1)
// }

///////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () =>{
  new p5(sketch)
  setTimeout(renderUI, 300)
})