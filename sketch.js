//Create variables here
var dog,happyDog,hungryDog,database,foods,foodStock
function preload()
{
	//load images here
  happyDog = loadImage("happydog.png")
  hungryDog= loadImage("Dog.png")
}

function setup() {
  database=firebase.database()
  	createCanvas(500, 500);
  dog=createSprite(250,250)
  dog.addImage(hungryDog)
 foodStock=database.ref("Food")
 foodStock.on("value",readStock)
 dog.scale=0.15
}


function draw() {  
 background(46,139,87)
 if(keyWentDown("up")){
   writeStock(foods)
   dog.addImage(happyDog)
 }
   textSize(20)
   fill("white")
   text("note:Press UP_ARROW Key to feed the dog milk!",200,100)
   text("remaining food:"+foods,170,200)
   

 
  drawSprites();
  //add styles here

}

function readStock(data){
  foods=data.val()
}

function writeStock(data2){
  if(data2<=0){data2=0}
  else{data2=data2-1}
  database.ref("/").update({Food:data2})

}


