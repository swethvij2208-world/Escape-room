playSound("assets/Ambient-Creepy-Music-_-Road-Through-The-Dark-Forest-_-Sad---Somber-Background-Music.mp3", false);         

// hovering over the button lights it up.
onEvent("rightLight","mousemove",function( ){
  
  setProperty("rightLight", "height", 80);
  setProperty("rightLight", "width", 120);
  setProperty("rightLight", "border-width", 5);
  
  setProperty("wrongLight", "height",65);
  setProperty("wrongLight","width", 110);
  setProperty("wrongLight", "border-width", 0);
});
  
  // hovering over wrong light.
onEvent("wrongLight","mousemove", function( ) {
  
  setProperty("rightLight", "height", 65);
  setProperty("rightLight", "width", 110);
  setProperty("rightLight", "border-width",0);
  
  setProperty("wrongLight", "height",80);
  setProperty("wrongLight","width", 120);
  setProperty("wrongLight", "border-width",5);
  
  });
  
  // add console.log

// on clicking the right option

onEvent("rightLight","click",function( ) {
  //stop beginning sound
 stopSound("assets/Ambient-Creepy-Music-_-Road-Through-The-Dark-Forest-_-Sad---Somber-Background-Music.mp3");
 playSound("assets/lightSwitch.mp3");      // add better click sound
 //play creepy click
 setScreen("goodLight");
 console.log("rightLight clicked");
 playSound("assets/GoodLightBgm.mp3");
});

//clicking on wrong option
onEvent("wrongLight","click", function( ){
   //stop beginning sound - add better light click
 stopSound("assets/Ambient-Creepy-Music-_-Road-Through-The-Dark-Forest-_-Sad---Somber-Background-Music.mp3");
  playSound("Wooden-ButtonPlate-Click-(Minecraft-Sound)---Sound-Effect-for-editing.mp3");
 //play creepy click
 setScreen("gameOverScreen");
 // hide all other tags except light reason and light insult
showElement("lightInsult");
showElement("lightReason");

hideElement("doorReason1");
hideElement("doorInsult1");

hideElement("doorReason2");
hideElement("doorInsult2");

hideElement("trapInsult");
hideElement("trapReason");

hideElement("witchInsult");
hideElement("witchReason");

console.log("wrong Light clicked");
});


  
// gameover go back - bad ending 1
onEvent("lightTry","click", function( ) {
  
  playSound("assets/Ambient-Creepy-Music-_-Road-Through-The-Dark-Forest-_-Sad---Somber-Background-Music.mp3");
 playSound("assets/category_whoosh/sword_whoosh_1.mp3");
  setScreen("beginScreen");
  
  console.log("lightTry clicked"); 
});

// all for mouse move line 79- 232
// for hovering over the bg in general
onEvent("goodLightBg", "mousemove", function( ) {
  
  setProperty("passKey", "height", 100);
  setProperty("passKey", "width", 25);
  setProperty("passKey", "border-width", 0);
  setProperty("passKey", "x", 135);
  setProperty("passKey", "y", 205);
  
  setProperty("paperImg", "height", 55);
  setProperty("paperImg", "width", 45);
  setProperty("paperImg", "border-width", 0);
  setProperty("paperImg", "x", 125);
  setProperty("paperImg", "y", 350);
  
  setProperty("electricBoard", "height", 75);
  setProperty("electricBoard", "width", 65);
  setProperty("electricBoard", "border-width", 0 );
  setProperty("electricBoard", "x", 180);
  setProperty("electricBoard", "y", 215);
  
 // no code to reset plant and painting because it  messes with the interaction
});


// now keypad mouse move
onEvent("passKey", "mousemove", function( ) {
  
  setProperty("passKey", "height", 100);
  setProperty("passKey", "width", 50);
  setProperty("passKey", "border-width", 0);
  setProperty("passKey", "x", 135);
  setProperty("passKey", "y", 205);
  
  setProperty("birdImg", "height", 200);
  setProperty("birdImg", "width", 70);
  setProperty("birdImg", "border-width", 0);
  setProperty("birdImg", "x", 0);
  setProperty("birdImg", "y", 105);
  
  setProperty("paperImg", "height", 55);
  setProperty("paperImg", "width", 45);
  setProperty("paperImg", "border-width", 0);
  setProperty("paperImg", "x", 125);
  setProperty("paperImg", "y", 350);
  
  setProperty("electricBoard", "height", 75);
  setProperty("electricBoard", "width", 65);
  setProperty("electricBoard", "border-width", 0 );
  setProperty("electricBoard", "x", 180);
  setProperty("electricBoard", "y", 215);

  setProperty("plantImg","height", 80);
  setProperty("plantImg","width", 55);
  setProperty("plantImg","x", 70);
  setProperty("plantImg","y", 270);
  setProperty("plantImg","border-width", 0);
  
});

// for paper scroll
onEvent("paperImg", "mousemove", function( ) {
  
  setProperty("paperImg", "height", 70);
  setProperty("paperImg", "width", 70);
  setProperty("paperImg", "border-width", 2);
  setProperty("paperImg", "x", 125);
  setProperty("paperImg", "y", 350);
  
  setProperty("passKey", "height", 100);
  setProperty("passKey", "width", 25);
  setProperty("passKey", "border-width", 0);
  setProperty("passKey", "x", 135);
  setProperty("passKey", "y", 205);
 
  setProperty("birdImg", "height", 200);
  setProperty("birdImg", "width", 70);
  setProperty("birdImg", "border-width", 0);
  setProperty("birdImg", "x", 0);
  setProperty("birdImg", "y", 105);
  
  setProperty("electricBoard", "height", 75);
  setProperty("electricBoard", "width", 65);
  setProperty("electricBoard", "border-width", 0 );
  setProperty("electricBoard", "x", 180);
  setProperty("electricBoard", "y", 215);
  
  setProperty("plantImg","height", 80);
  setProperty("plantImg","width", 55);
  setProperty("plantImg","x", 70);
  setProperty("plantImg","y", 270);
  setProperty("plantImg","border-width", 0);

});


// for bird painting
onEvent("birdImg", "mousemove", function( ) {
  setProperty("birdImg", "height", 200);
  setProperty("birdImg", "width", 90);
  setProperty("birdImg", "border-width", 0);
  setProperty("birdImg", "x", 0);
  setProperty("birdImg", "y", 105);
  
  setProperty("paperImg", "height", 55);
  setProperty("paperImg", "width", 45);
  setProperty("paperImg", "border-width", 0);
  setProperty("paperImg", "x", 125);
  setProperty("paperImg", "y", 350);
  
  setProperty("passKey", "height", 100);
  setProperty("passKey", "width", 25);
  setProperty("passKey", "border-width", 0);
  setProperty("passKey", "x", 135);
  setProperty("passKey", "y", 205);
  
   setProperty("electricBoard", "height", 75);
  setProperty("electricBoard", "width", 65);
  setProperty("electricBoard", "border-width", 0 );
  setProperty("electricBoard", "x", 180);
  setProperty("electricBoard", "y", 215);
 
}); 
// for electric board
onEvent("electricBoard", "mousemove", function( ) {
  
  setProperty("electricBoard", "height", 75);
  setProperty("electricBoard", "width", 90);
  setProperty("electricBoard", "border-width", 0 );
  setProperty("electricBoard", "x", 180);
  setProperty("electricBoard", "y", 215);
  
  setProperty("paperImg", "height", 55);
  setProperty("paperImg", "width", 45);
  setProperty("paperImg", "border-width", 0);
  setProperty("paperImg", "x", 125);
  setProperty("paperImg", "y", 350);
  
  setProperty("passKey", "height", 100);
  setProperty("passKey", "width", 25);
  setProperty("passKey", "border-width", 0);
  setProperty("passKey", "x", 135);
  setProperty("passKey", "y", 205);
 
  setProperty("birdImg", "height", 200);
  setProperty("birdImg", "width", 70);
  setProperty("birdImg", "border-width", 0);
  setProperty("birdImg", "x", 0);
  setProperty("birdImg", "y", 105);
  
  setProperty("plantImg","height", 80);
  setProperty("plantImg","width", 55);
  setProperty("plantImg","x", 70);
  setProperty("plantImg","y", 270);
  setProperty("plantImg","border-width", 0);
});

//for bird image
onEvent("birdImg","click", function( ) {
  setProperty("birdImg","x",0);
  setProperty("birdImg", "y", 250);
  playSound("assets/My-Project.mp3"); // painting sound
  console.log("bird image clicked");
});

// for plant 
onEvent("plantImg", "click", function( ){
  setProperty("plantImg", "x", 90);
  setProperty("plantImg", "y", 270);
  playSound("assets/category_movement/footstep_on_rock_or_ice_with_debris_2.mp3");
  console.log("plant Image clicked");
});

// make scroll really big and add text for insructions
onEvent("paperImg","click", function( ){
  playSound("My-Project-(1).mp3", false);
  setScreen("paperScrollScreen");
  console.log("paperImg clicked");
});
  
  
// return to goodlight 
onEvent("paperScrollReturn","click", function( ){
  playSound("My-Project-(1).mp3");
  setScreen("goodLight");
  console.log("paperScroll return clicked");
  
});
  
 // enter keypad screen
  onEvent("passKey", "click", function( ){
    
    playSound("assets/category_digital/coin_2.mp3");
    setScreen("keyPassScreen");
    console.log("passKey");
  });
  
  
  
  
 //global variable
 var pin = "2439";
 var pinInput = "";
// function to check key
 function keyCode(){
 
  
 if ( pin === pinInput ) {
   showElement("keyProceed");
  
 } else {
   hideElement("keyProceed");
   }
   return;
 }
 console.log(keyCode);
 //input text into variable
 onEvent("text_input1", "input", function( ){
    pinInput = getText("text_input1");
    keyCode();
 });

  
 
  
  
// return to goodLight
onEvent("keyReturn","click", function( ){
playSound("assets/category_digital/coin_1.mp3");
setScreen("goodLight");
console.log("key return pressed");
});






// Now the electric board
onEvent("electricBoard", "click", function( ){
  playSound("assets/category_objects/metal_pot_2.mp3");
  setScreen("electricBoardScreen");
  console.log("Electric board clicked");
});

onEvent("electricBack", "click", function( ){
  playSound("assets/category_objects/metal_pot_2.mp3");
  setScreen("goodLight");
  console.log("Electric back clicked");
});

//check if sliders are in right position then 


// for some reason when the variable is outside the function it doesn't work
// slider may expect a local variable
function checkSlider() {
var s1 = getNumber("sliderA");
var s2 = getNumber("sliderB");
var s3 = getNumber("sliderC");
  if (s1 === 1 && s2 === 3 && s3 === 2){
    showElement("a2Lbl");
  } else {
    hideElement("a2Lbl");
  }
  return;
}
// changes= modification to the slider 
onEvent("sliderA", "change", checkSlider);
onEvent("sliderB", "change", checkSlider);
onEvent("sliderC", "change", checkSlider);




// code to go to the door room
onEvent("keyProceed","click", function( ){
  playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3");
  playSound("assets/secret-door.mp3");
  setScreen("doorRoom");
  console.log("keyproceed clicked");
});

//make door interactive

onEvent("doorBack","click", function( ) {
  playSound("assets/secret-door.mp3");
  setScreen("goodLight");
  console.log("doorBack clicked");
});

//door a
onEvent("doorA", "click", function( ){
 playSound("My-Project-(2).mp3");
 setScreen("gameOverScreen");
 stopSound("assets/secret-door.mp3");
 console.log("doorA clicked");
 // copy the previous gameover screen code
 hideElement("lightInsult");
 hideElement("lightReason");

 showElement("doorReason1");
 showElement("doorInsult1");

 hideElement("doorReason2");
 hideElement("doorInsult2");

 hideElement("trapInsult");
 hideElement("trapReason");

 hideElement("witchInsult");
 hideElement("witchReason");
});

// door B
onEvent("doorB", "click", function( ){
 playSound("My-Project-(2).mp3");
 setScreen("trapRoom");
 stopSound("assets/secret-door.mp3");
 console.log("doorB clicked");
});

// door C
onEvent("doorC", "click", function( ){
 playSound("My-Project-(2).mp3");
 setScreen("gameOverScreen");
 stopSound("assets/secret-door.mp3");
 console.log("doorC clicked");
hideElement("lightInsult");
hideElement("lightReason");

hideElement("doorReason1");
hideElement("doorInsult1");

showElement("doorReason2");
showElement("doorInsult2");

hideElement("trapInsult");
hideElement("trapReason");

hideElement("witchInsult");
hideElement("witchReason");
 
});

onEvent("trapBack","click", function( ){
  playSound("My-Project-(2).mp3");
  setScreen("doorRoom");
  console.log("trapback clicked");
});


onEvent("goodTrap", "click", function( ){
  playSound("assets/category_background/eerie_beginnings.mp3");
  playSound("assets/category_objects/door_close.mp3");
  setScreen("witchFight");
  
  console.log("goodTrap clicked");
});


onEvent("badTrap", "click", function( ){
  playSound("assets/category_whoosh/alien_ship_flyby_whoosh_9.mp3");
  setScreen("gameOverScreen");
  console.log("badTrap clicked");
  hideElement("lightInsult");
  hideElement("lightReason");

  hideElement("doorReason1");
  hideElement("doorInsult1");

  hideElement("doorReason2");
  hideElement("doorInsult2");

  showElement("trapInsult");
  showElement("trapReason");

hideElement("witchInsult");
hideElement("witchReason");

  
});

// wand to defeat witch
var w1 = false;
var w2 = false;
var w3 = false;

onEvent("wandPiece1","click", function( ){
  w1 = true;
  hideElement("wandPiece1");
  playSound("assets/category_bell/short_bell_alert.mp3");
  allPieces();
  console.log("wandpiece1 found");
});
onEvent("wandPiece2","click", function( ){
  w2 = true;
  hideElement("wandPiece2");
  playSound("assets/category_bell/short_bell_alert.mp3");
  allPieces();
  console.log("wandpiece2 found");
  
});
onEvent("wandPiece3","click", function( ){
  w3 = true;
  hideElement("wandPiece3");
  playSound("assets/category_bell/short_bell_alert.mp3");
  allPieces();
  console.log("wandpiece3 found");
});

function allPieces(){
  if (w1 == true && w2 == true && w3 == true) {
  showElement("wandUse");
} else {
  hideElement("wandUse");
}
return;
}

onEvent("witch","click", function( ) {
  playSound("assets/category_hits/vibrant_game_big_hit_1.mp3"); 
  stopSound("assets/category_background/eerie_beginnings.mp3");
  setScreen("gameOverScreen");
  console.log("witch zapped you");
  // copy the hide or show text thing
hideElement("lightInsult");
hideElement("lightReason");

hideElement("doorReason1");
hideElement("doorInsult1");

hideElement("doorReason2");
hideElement("doorInsult2");

hideElement("trapInsult");
hideElement("trapReason");

showElement("witchInsult");
showElement("witchReason");
 
});

onEvent("wandUse", "click", function( ){
  playSound("assets/category_explosion/vibrant_game_material_collect_3.mp3");
  
  showElement("witchDefeat");
  showElement("witchProceed");
  showElement("confetti");
  hideElement("witch");
  hideElement("witchInfo");
  hideElement("wandUse");
  
});

onEvent("witchProceed","click", function( ){ 
  playSound("assets/category_space/Cassiopeia_SFX.mp3",true);
  stopSound("assets/category_background/eerie_beginnings.mp3");
  setScreen("goodEnding");
  
});

onEvent("playAgainButton","click", function( ){
  stopSound("assets/category_space/Cassiopeia_SFX.mp3");
  playSound("Wooden-ButtonPlate-Click-(Minecraft-Sound)---Sound-Effect-for-editing.mp3");
  playSound("assets/Ambient-Creepy-Music-_-Road-Through-The-Dark-Forest-_-Sad---Somber-Background-Music.mp3", false);
  setScreen("beginScreen");
  w1=false;
  w2=false;
  w3=false;
  showElement("witch");
  hideElement("a2Lbl");
  showElement("witchInfo");
  hideElement("witchProceed");
  hideElement("witchDefeat");
  hideElement("confetti");
  hideElement("wandUse");
  showElement("wandPiece1");
  showElement("wandPiece2");
  showElement("wandPiece3");  
  setText("text_input1","");
  hideElement("keyProceed");
  setProperty("sliderA","value",0);
  setProperty("sliderB","value",5);
  setProperty("sliderC","value",0);
});

onEvent("lightTry", "click", function( ){
    playSound("Wooden-ButtonPlate-Click-(Minecraft-Sound)---Sound-Effect-for-editing.mp3");
  playSound("assets/Ambient-Creepy-Music-_-Road-Through-The-Dark-Forest-_-Sad---Somber-Background-Music.mp3", false);
  setScreen("beginScreen");
  showElement("witch");
  w1=false;
  w2=false;
  w3=false;
  hideElement("a2Lbl");
  showElement("witchInfo");
  hideElement("witchProceed");
  hideElement("witchDefeat");
  hideElement("wandUse");
  hideElement("confetti");
  showElement("wandPiece1");
  showElement("wandPiece2");
  showElement("wandPiece3");  
  setText("text_input1","");
  hideElement("keyProceed");
  setProperty("sliderA","value",0);
  setProperty("sliderB","value",5);
  setProperty("sliderC","value",0);

});






