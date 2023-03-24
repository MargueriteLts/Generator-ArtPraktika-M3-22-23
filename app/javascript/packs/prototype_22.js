import p5 from 'p5'
import { sample, getRandomArbitrary } from '../prototypes/utilities'

const canvasSize = 1000

const xCenter = canvasSize / 2
const yCenter = canvasSize / 2

let r = 0
let g = 0
let b = 0

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

function sketch(p) {
  
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_22')

    //Need to add disc picture in bgTypes
    const bgTypes = ['color', 'shapes', 'circle']
    const bg = sample(bgTypes)
    
    p.background(0)

    r = getRandomArbitrary(0, 255)
    g = getRandomArbitrary(0, 255)
    b = getRandomArbitrary(0, 255)

    const bgCircleWidth = getRandomArbitrary(100, (canvasSize - 30))

    p.fill(r, g, b)

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

      default:
        break;
    }
  }
  
  // p.draw = () => {}
}

document.addEventListener('DOMContentLoaded', () =>{
  new p5(sketch)
})