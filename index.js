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
 function changeStyle (earPos, mouthPos, neckPos, accPos, hairPos, eyesPos, legPos, backPos) {
    document.getElementById("ears").setAttribute("src", earPos);
    document.getElementById("mouth").setAttribute("src", mouthPos);
    document.getElementById("neck").setAttribute("src", neckPos);
    document.getElementById("acc").setAttribute("src", accPos);
    document.getElementById("hair").setAttribute("src", hairPos);
    document.getElementById("eyes").setAttribute("src", eyesPos);
    document.getElementById("leg").setAttribute("src", legPos);
    document.getElementById("back").setAttribute("src", backPos);
  }
document.getElementById("def_but").addEventListener("click", function() {changeStyle (ears[0], mouth[0], neck[0], "" , hair[0], eyes[0], leg[0], back[0])});
document.getElementById("cur_but").addEventListener("click", function() {changeStyle (ears[1], mouth[4], neck[0], acc[3], hair[2], eyes[3], leg[2], back[7])});
document.getElementById("sho_but").addEventListener("click", function() {changeStyle (ears[2], mouth[3], neck[2], acc[1], hair[6], eyes[2], leg[1], back[16])});
document.getElementById("ban_but").addEventListener("click", function() {changeStyle (ears[0], mouth[0], neck[3], acc[2], hair[1], eyes[1], leg[3], back[14])});
document.getElementById("ele_but").addEventListener("click", function() {changeStyle (ears[2], mouth[0], neck[1], "" , hair[3], eyes[4], leg[4], back[11])});
document.getElementById("qui_but").addEventListener("click", function() {changeStyle (ears[2], mouth[1], neck[0], acc[0], hair[5], eyes[5], leg[5], back[4])});


