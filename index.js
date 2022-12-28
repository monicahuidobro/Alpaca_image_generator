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

//Function to change the accesories
function changeAcc (source, arr) {
  const currImgIndex = arr.indexOf(source.getAttribute("src"));
  const newImgIndex = (currImgIndex < (arr.length -1)) ? currImgIndex +1 : 0;
  source.setAttribute("src", arr[newImgIndex]);
}
document.getElementById("ears_but").addEventListener("click", function() { changeAcc(document.getElementById("ears"), ears) });
document.getElementById("mouth_but").addEventListener("click", function() { changeAcc(document.getElementById("mouth"), mouth) });
document.getElementById("neck_but").addEventListener("click", function() { changeAcc(document.getElementById("neck"), neck) });
document.getElementById("acc_but").addEventListener("click", function() { changeAcc(document.getElementById("acc"), acc) });
document.getElementById("hair_but").addEventListener("click", function() { changeAcc(document.getElementById("hair"), hair) });
document.getElementById("eyes_but").addEventListener("click", function() { changeAcc(document.getElementById("eyes"), eyes) });
document.getElementById("leg_but").addEventListener("click", function() { changeAcc(document.getElementById("leg"), leg) });
document.getElementById("back_but").addEventListener("click", function() { changeAcc(document.getElementById("back"), back) });

//Function to change the style
 function changeStyle ({
  earPos = ears[0],
  mouthPos = mouth[0],
  neckPos = neck[0],
  accPos = acc[0],
  hairPos = hair[0],
  eyesPos = eyes[0],
  legPos = leg[0],
  backPos = back[0] }) 
  {
    document.getElementById("ears").setAttribute("src", earPos);
    document.getElementById("mouth").setAttribute("src", mouthPos);
    document.getElementById("neck").setAttribute("src", neckPos);
    document.getElementById("acc").setAttribute("src", accPos);
    document.getElementById("hair").setAttribute("src", hairPos);
    document.getElementById("eyes").setAttribute("src", eyesPos);
    document.getElementById("leg").setAttribute("src", legPos);
    document.getElementById("back").setAttribute("src", backPos);
  }
document.getElementById("def_but").addEventListener("click", function() {changeStyle ({
  accPos: "" })});
document.getElementById("cur_but").addEventListener("click", function() {changeStyle ({
  earPos: ears[1],
  mouthPos: mouth[4],
  accPos: acc[3],
  hairPos: hair[2],
  eyesPos: eyes[3],
  legPos: leg[2],
  backPos: back[7] })});
document.getElementById("sho_but").addEventListener("click", function() {changeStyle ({
  earPos: ears[2],
  mouthPos: mouth[3],
  neckPos: neck[2],
  accPos: acc[1],
  hairPos: hair[6],
  eyesPos: eyes[2],
  legPos: leg[1],
  backPos: back[16] })});
document.getElementById("ban_but").addEventListener("click", function() {changeStyle ({
  neckPos: neck[3],
  accPos: acc[2],
  hairPos:hair[1],
  eyesPos: eyes[1],
  legPos: leg[3],
  backPos: back[14] })});
document.getElementById("ele_but").addEventListener("click", function() {changeStyle ({
  earPos: ears[2],
  neckPos: neck[1],
  accPos: "",
  hairPos: hair[3],
  eyesPos: eyes[4],
  legPos:leg[4],
  backPos: back[11] })});
document.getElementById("qui_but").addEventListener("click", function() {changeStyle ({
  earPos: ears[2],
  mouthPos: mouth[1],
  hairPos: hair[5],
  eyesPos: eyes[5],
  legPos: leg[5],
  backPos: back[4] })});
