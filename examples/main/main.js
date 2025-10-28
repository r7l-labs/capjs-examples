// Import All Required Modules from Engine
import Engine from 'https://raw.githubusercontent.com/r7l-labs/cap-engine/refs/heads/main/src/capjs/engine.js';
import { Scene } from 'https://raw.githubusercontent.com/r7l-labs/cap-engine/refs/heads/main/src/capjs/scene.js';
import { Entity } from 'https://raw.githubusercontent.com/r7l-labs/cap-engine/refs/heads/main/src/capjs/entity.js';
import { Vec2 } from 'https://raw.githubusercontent.com/r7l-labs/cap-engine/refs/heads/main/src/capjs/math.js';

// Define Canvas and Initialize Engine
const canvas = document.getElementById('game');
const engine = new Engine({canvas, width:480, height:320, pixelRatio:1});

class Box extends Entity{
  constructor(x,y){ super({pos:{x,y}, size:{w:48,h:48}, color:'#f90'}) }
}

const scene = new Scene();
scene.add(new Box(30,20));

engine.setScene(scene);
engine.start();

window.cap = {engine, scene};
