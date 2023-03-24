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

const canvasSize = 1000

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

function drawAll(p) {
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

  const shoes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
  const shoeImg = sample(shoes)
  const mouseX = p.mouseX
  const mouseY = p.mouseY
  p.image(shoeImg, 0, 0, mouseX, mouseY)
}

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
  }
  
  p.setup = () => {
    const canvas = p.createCanvas(canvasSize, canvasSize)
    canvas.parent('prototype_24')
    
    drawAll(p)

    p.noLoop()
  }


  p.mousePressed = () => {
    drawAll(p)
    p.redraw()
  }
  
  // p.draw = () => {}
}

document.addEventListener('DOMContentLoaded', () =>{
  new p5(sketch)
})