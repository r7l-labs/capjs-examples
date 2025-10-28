
// Initialize the Engine and canvas.
const canvas = document.getElementById('game');
const engine = new Engine({canvas, width: 800, height: 600, pixelRatio: 1});

class Box extends Entity {
  constructor(x,y){
    super({
      pos:{x,y},
      size:{w:48,h:48},
      color:'#f90'
    })
  }
