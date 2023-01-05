var bg, bgImg;
var player, shooterImg, shooter_shooting;
var score = 0
var PLAY = 1
var END = 0
var gameState = PLAY
function preload() {

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  cenario1 = loadImage("assets/cenario1.png")
  cenario2 = loadImage("assets/cenario2.png")
  bonnie = loadImage("assets/bonnie.gif")
  burntrap = loadImage("assets/burntrap.png")
  foxy = loadImage("assets/foxy.png")
  glich = loadImage("assets/glich.png")
  freddy = loadImage("assets/freddy.png")


}

function setup() {

  createCanvas(windowWidth, windowHeight);






  //adicionando a imagem de fundo
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 1.1


  //criando o sprite do jogador
  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle", 0, 0, 300, 300)
  //criando gruuupos
  animatronicGroup = new Group()

}

function draw() {
  background(0);
  textSize(50)
  fill("white")
  text("score:" + score, 30, 50)
  if (animatronicGroup.isTouching(player)) {
    score = score + 1
  }

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 30
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 30
  }
  if (keyDown("RIGHT_ARROW") || touches.length > 0) {
    player.x = player.x + 30
  }
  if (keyDown("LEFT_ARROW") || touches.length > 0) {
    player.x = player.x - 30
  }


  //solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
  if (keyWentDown("space")) {

    player.addImage(shooter_shooting)

  }

  //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
  else if (keyWentUp("space")) {
    player.addImage(shooterImg)
  }
  animatronicspawn()
  drawSprites();

}
function animatronicspawn() {
  if (frameCount % 60 === 0) {
    animatronic = createSprite(random(1000), random(1000), 40, 40)
    animatronic.velocityX = Math.round(random(-5, 5))
    animatronic.velocityY = Math.round(random(-5, 5))
    var rand=Math.round(random(1,5))
    switch(rand){
      case 1:animatronic.addImage(freddy)
      break
      case 2:animatronic.addImage(bonnie)
      break
      case 3:animatronic.addImage(foxy)
      break
      case 4:animatronic.addImage(burntrap)
      break
      case 5:animatronic.addImage(glich)
      break
      default:break
    }
    animatronic.lifetime = 600
    animatronicGroup.add(animatronic)

  }
}

