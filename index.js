//Arrays of images 
const ears =["./images/alpaca/ears/default.png", "./images/alpaca/ears/tilt-backward.png", "./images/alpaca/ears/tilt-forward.png"];
const mouth =["./images/alpaca/mouth/default.png", "./images/alpaca/mouth/astonished.png", "./images/alpaca/mouth/eating.png", "./images/alpaca/mouth/laugh.png", "./images/alpaca/mouth/tongue.png"];
const neck =["./images/alpaca/neck/default.png", "./images/alpaca/neck/bend-backward.png", "./images/alpaca/neck/bend-forward.png", "./images/alpaca/neck/thick.png"];
const acc =["./images/alpaca/accessories/earings.png", "./images/alpaca/accessories/flower.png", "./images/alpaca/accessories/glasses.png", "./images/alpaca/accessories/headphone.png"];
const hair =["./images/alpaca/hair/default.png", "./images/alpaca/hair/bang.png", "./images/alpaca/hair/curls.png", "./images/alpaca/hair/elegant.png","./images/alpaca/hair/fancy.png", 
          "./images/alpaca/hair/quiff.png", "./images/alpaca/hair/short.png"];
const eyes =["./images/alpaca/eyes/default.png", "./images/alpaca/eyes/angry.png", "./images/alpaca/eyes/naughty.png", "./images/alpaca/eyes/panda.png", 
          "./images/alpaca/eyes/smart.png", "./images/alpaca/eyes/star.png"];
const leg =["./images/alpaca/leg/default.png", "./images/alpaca/leg/bubble-tea.png", "./images/alpaca/leg/cookie.png", "./images/alpaca/leg/game-console.png", 
          "./images/alpaca/leg/tilt-backward.png", "./images/alpaca/leg/tilt-forward.png"];
const back =["./images/alpaca/backgrounds/blue50.png", "./images/alpaca/backgrounds/blue60.png", "./images/alpaca/backgrounds/blue70.png", "./images/alpaca/backgrounds/darkblue30.png", 
            "./images/alpaca/backgrounds/darkblue50.png", "./images/alpaca/backgrounds/darkblue70.png", "./images/alpaca/backgrounds/green50.png", "./images/alpaca/backgrounds/green60.png", 
            "./images/alpaca/backgrounds/green70.png", "./images/alpaca/backgrounds/grey40.png", "./images/alpaca/backgrounds/grey70.png", "./images/alpaca/backgrounds/grey80.png", 
            "./images/alpaca/backgrounds/red50.png", "./images/alpaca/backgrounds/red60.png", "./images/alpaca/backgrounds/red70.png", "./images/alpaca/backgrounds/yellow50.png", 
            "./images/alpaca/backgrounds/yellow60.png", "./images/alpaca/backgrounds/yellow70.png"];

const alpacaAcc = [
  ["ears_but", "ears", ears],
  ["mouth_but", "mouth", mouth], 
  ["neck_but", "neck", neck],
  ["acc_but", "acc", acc],
  ["hair_but", "hair", hair],
  ["eyes_but", "eyes", eyes],
  ["leg_but", "leg", leg],
  ["back_but", "back", back]
]

//Function to change the accesories
function changeAcc (source, arr) {
  const currImgIndex = arr.indexOf(source.getAttribute("src"));
  const newImgIndex = (currImgIndex < (arr.length -1)) ? currImgIndex +1 : 0;
  source.setAttribute("src", arr[newImgIndex]);
}

alpacaAcc.forEach(([but, accesorie, images]) => {
  document.getElementById(but).addEventListener("click", function() { changeAcc(document.getElementById(accesorie), images) });
});

//Function to change the style
function getStyleElements (indexEar, indexMouth, indexNeck, indexAcc, indexHair, indexEyes, indexLeg, indexBack) {
  return [
    ears[indexEar],
    mouth[indexMouth],
    neck[indexNeck],
    acc[indexAcc],
    hair[indexHair],
    eyes[indexEyes],
    leg[indexLeg],
    back[indexBack] ];
};

 function changeStyle (elements) {
    document.getElementById("ears").setAttribute("src", elements[0]);
    document.getElementById("mouth").setAttribute("src", elements[1]);
    document.getElementById("neck").setAttribute("src", elements[2]);
    document.getElementById("acc").setAttribute("src", elements[3]);
    document.getElementById("hair").setAttribute("src", elements[4]);
    document.getElementById("eyes").setAttribute("src", elements[5]);
    document.getElementById("leg").setAttribute("src", elements[6]);
    document.getElementById("back").setAttribute("src", elements[7]);
  }
document.getElementById("def_but").addEventListener("click", function() {changeStyle (getStyleElements(0, 0, 0, 0, 0, 0, 0, 0))});
document.getElementById("cur_but").addEventListener("click", function() {changeStyle (getStyleElements(1, 4, 3, 2, 3, 2, 2, 7))});
document.getElementById("sho_but").addEventListener("click", function() {changeStyle (getStyleElements(2, 3, 2, 1, 6, 2, 1, 16))});
document.getElementById("ban_but").addEventListener("click", function() {changeStyle (getStyleElements(0, 0, 3, 2, 1, 1, 3, 14))});
document.getElementById("ele_but").addEventListener("click", function() {changeStyle (getStyleElements(2, 0, 1, 0, 3, 4, 4, 11))});
document.getElementById("qui_but").addEventListener("click", function() {changeStyle (getStyleElements(2, 1, 0, 0, 5, 5, 5, 4))});
document.getElementById("ran_but").addEventListener("click", function() {changeStyle (getStyleElements(
  Math.floor(Math.random()*ears.length), Math.floor(Math.random()*mouth.length),
  Math.floor(Math.random()*neck.length), Math.floor(Math.random()*acc.length),
  Math.floor(Math.random()*hair.length), Math.floor(Math.random()*eyes.length),
  Math.floor(Math.random()*leg.length), Math.floor(Math.random()*back.length)))});
