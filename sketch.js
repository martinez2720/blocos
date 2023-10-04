//abrevia => namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// declara as variáveis
let engine;
let world;
var tower;
var fundo;
var torre;

function preload(){
  fundo = loadImage("assets/background.gif");
}

function setup() {
  //cria o fundo (mapa, tela);
  createCanvas(1200,600);
  //cria a física
  engine = Engine.create();
  //cria o mundo
  world = engine.world;

  torre = new Tower(150,150,60,120)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  //cor de fundo
  background(51);
  //atualiza
  Engine.update(engine);
  image(fundo,0,0,1200, 600);
 torre.display()
}

