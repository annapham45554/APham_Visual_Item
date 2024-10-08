let cats = [];
let currentCat;
let birthdayCard;
let catDisplayed = false;
let catMoew;

function preload() {
  cats.push(loadImage('cat1.gif'));
  cats.push(loadImage('cat2.gif'));
  cats.push(loadImage('cat3.gif'));
  cats.push(loadImage('cat4.gif'));
  catMoew = loadSound("Moew.mp3");
  
  birthdayCard = loadImage('birthday_card.gif'); 
}

function setup() {
  createCanvas(600, 600);
    background(44,43,65);
    currentCat = random(cats);

}

function draw() {
  background(44, 43, 65); 

  if (catDisplayed === true) {
    image(currentCat, 1, 120, 700, 400);
  } else {
    image(birthdayCard, 1, 110, 700, 400);
  }
}

function mousePressed() {
  currentCat = random(cats);
  catDisplayed = true; 
}

function keyPressed(){
  catMoew.play();
}