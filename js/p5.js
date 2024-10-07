let cats = [];
let currentCat;
let birthdayCard;
let catDisplayed = false;

function preload() {
  cats.push(loadImage('cat1.gif'));
  cats.push(loadImage('cat2.gif'));
  cats.push(loadImage('cat3.gif'));
  cats.push(loadImage('cat4.gif'));
  
  birthdayCard = loadImage('birthday_card.png'); 
}

function setup() {
  createCanvas(600, 600);
    background(44,43,65);
    currentCat = random(cats);

}

function draw() {
  background(44, 43, 65); 

  if (catDisplayed === true) {
    image(currentCat, 10, 120, 700, 380);
  } else {
    image(birthdayCard, 105, 110, 350, 400);
  }
}

function mousePressed() {
  currentCat = random(cats);
  catDisplayed = true; 
}
