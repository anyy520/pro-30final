const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
//1  matriz e acesse o elemento da matriz.
 var r=[1,2,3];
 console.log(r);
// 2. Acesse o primeiro elemento da matriz, fornecendo o número do índice
//  console.log(r[0]);


// 3. Use a função push no elemento dentro da matriz
 r.push(10);
 console.log(r);

// 4
r.pop();
 console.log(r);










// 5.crie uma matriz vazia

var balls = [];


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);

  

  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

 

  Engine.update(engine);
  ground.display();

 
//7 e 8 Crie um laço de repetição
for (var i = 0; i < balls.length; i++) {
  showCannonBalls(balls[i], i);
}

  cannon.display();
  tower.display();

  
}
// 6.crie uma função de acionamento de tecla
function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
  }
}


// 9. Crie uma função para exibir a bala
function showCannonBalls(ball, index) {
  ball.display();
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    // 10. Adicione a condição para verificar a posição da bala e remova a bala do mundo (World)
    Matter.World.remove(world, ball.body);
    // 11. Adicione splice() para remover os elementos da matriz.

    balls.splice(index, 1);
  }
}



function keyReleased() {
  if (keyCode === DOWN_ARROW) { 
    balls[balls.length - 1].shoot();
  }
}


