// variaveis da bolinha
let xBolinha= 100;
let yBolinha= 200;
let diametro= 30;
let raio = diametro / 2;

// variaveis da velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha= 6;
let comprimentoRaquete= 10;
let alturaRaquete= 90;    

// variaveis da raquete
let xRaquete= 5;
let yRaquete= 150;

// variaveis do oponente 
let xRaqueteOponente= 585;
let yRaqueteOponente= 150;
let velocidadeOponente;

//Placar o jogo
let meusPontos=0;
let pontosOponente=0;

// sons
let raquetada;
let ponto;
let trilha;

function preload (){
  trilha= loadSound("trilha.mp3");
  raquetada= loadSound("raquetada.mp3")
  ponto= loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha ();
  velocidadeBolinha ();
  colisãoBolinha ();
  mostraRaquete (xRaquete, yRaquete);
  movimentoRaquete ();
  colisãoRaquete (xRaquete, yRaquete);
  mostraRaquete (xRaqueteOponente, yRaqueteOponente);
  movimentoRaqueteOponente ();
  colisãoRaquete (xRaqueteOponente, yRaqueteOponente);
  incluirPlacar ();
  marcarPontos ();
}

function mostraBolinha () {
  circle(xBolinha,yBolinha,diametro);
  
}

function velocidadeBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha; 
}

function colisãoBolinha (){ 
  if (xBolinha + raio> width || 
      xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
      yBolinha - raio <0){
    velocidadeYBolinha *= -1;
  }
                           
}

function mostraRaquete(x, y){
  rect(x, y, comprimentoRaquete, alturaRaquete );
}


function movimentoRaquete (){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
  }
}

function colisãoRaquete (x, y) {
  colidiu = collideRectCircle(x, y,comprimentoRaquete,alturaRaquete,
                              xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play ();
  }
  
}


function movimentoRaqueteOponente (){
  velocidadeYOponente = yBolinha - yRaqueteOponente - comprimentoRaquete / 2 ;
  yRaqueteOponente += velocidadeYOponente - 30
  
}
function incluirPlacar(){
stroke (255);
textAlign (CENTER);
textSize(16);
fill (color (255, 140,0));
rect (150, 10, 40, 20);
fill (255);
text (meusPontos, 170, 26);
fill (color (255,140,0));
rect (450, 10, 40, 20 );
fill (255);
text (pontosOponente, 470, 26);
}

function marcarPontos (){
  if (xBolinha > 580) {
    meusPontos +=1
    ponto.play ();
  }
  if (xBolinha <15) {
    pontosOponente +=1
    ponto.play ();
  }
  
}



