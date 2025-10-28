
// Initialize the Engine and canvas.
const canvas = document.getElementById('game');
const engine = new Engine({canvas, width: 800, height: 600, pixelRatio: 1});

// Create Box Entity
class Box extends Entity {
  constructor(x,y){
    super({
      pos:{x,y},
      size:{w:48,h:48},
      color:'#f90'
    })
  }
}

// Initialize New Scene
const scene = new Scene();

// Add a box to the scene (previously defined)
scene.add(new Box(300, 200);

engine.setScene(scene);
engine.start();

// expose for dev console
window.cap = {engine, scene};

