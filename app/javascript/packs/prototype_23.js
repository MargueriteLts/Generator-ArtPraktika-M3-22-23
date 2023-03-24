import p5 from 'p5'
import { sample } from '../prototypes/utilities'

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

// let shoeImg

// function randomShoe() {
//   const shoes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
//   shoeImg = sample(shoes)
// }

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
    canvas.parent('prototype_23')

    // p.frameRate(1)
    
    p.background(0)

    const shoes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
    const shoeImg = sample(shoes)
    p.image(shoeImg, 0, 0)
  }
  
  // p.draw = () => {
  //   const shoes = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15]
  //   const shoeImg = sample(shoes)
  //   p.image(shoeImg, 0, 0)
  // }
}

document.addEventListener('DOMContentLoaded', () =>{
  new p5(sketch)
})