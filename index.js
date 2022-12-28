//Arrays de las imagenes posibles a mostrar
const ears =["./Images/alpaca/ears/default.png", "./Images/alpaca/ears/tilt-backward.png", "./Images/alpaca/ears/tilt-forward.png"];
const mouth =["./Images/alpaca/mouth/default.png", "./Images/alpaca/mouth/astonished.png", "./Images/alpaca/mouth/eating.png", "./Images/alpaca/mouth/laugh.png", "./Images/alpaca/mouth/tongue.png"];
const neck =["./Images/alpaca/neck/default.png", "./Images/alpaca/neck/bend-backward.png", "./Images/alpaca/neck/bend-forward.png", "./Images/alpaca/neck/thick.png"];
const acc =["./Images/alpaca/accessories/earings.png", "./Images/alpaca/accessories/flower.png", "./Images/alpaca/accessories/glasses.png", "./Images/alpaca/accessories/headphone.png"];
const hair =["./Images/alpaca/hair/default.png", "./Images/alpaca/hair/bang.png", "./Images/alpaca/hair/curls.png", "./Images/alpaca/hair/elegant.png","./Images/alpaca/hair/fancy.png", 
          "./Images/alpaca/hair/quiff.png", "./Images/alpaca/hair/short.png"];
const eyes =["./Images/alpaca/eyes/default.png", "./Images/alpaca/eyes/angry.png", "./Images/alpaca/eyes/naughty.png", "./Images/alpaca/eyes/panda.png", 
          "./Images/alpaca/eyes/smart.png", "./Images/alpaca/eyes/star.png"];
const leg =["./Images/alpaca/leg/default.png", "./Images/alpaca/leg/bubble-tea.png", "./Images/alpaca/leg/cookie.png", "./Images/alpaca/leg/game-console.png", 
          "./Images/alpaca/leg/tilt-backward.png", "./Images/alpaca/leg/tilt-forward.png"];
const back =["./Images/alpaca/backgrounds/blue50.png", "./Images/alpaca/backgrounds/blue60.png", "./Images/alpaca/backgrounds/blue70.png", "./Images/alpaca/backgrounds/darkblue30.png", 
            "./Images/alpaca/backgrounds/darkblue50.png", "./Images/alpaca/backgrounds/darkblue70.png", "./Images/alpaca/backgrounds/green50.png", "./Images/alpaca/backgrounds/green60.png", 
            "./Images/alpaca/backgrounds/green70.png", "./Images/alpaca/backgrounds/grey40.png", "./Images/alpaca/backgrounds/grey70.png", "./Images/alpaca/backgrounds/grey80.png", 
            "./Images/alpaca/backgrounds/red50.png", "./Images/alpaca/backgrounds/red60.png", "./Images/alpaca/backgrounds/red70.png", "./Images/alpaca/backgrounds/yellow50.png", 
            "./Images/alpaca/backgrounds/yellow60.png", "./Images/alpaca/backgrounds/yellow70.png"];

//Funciones para mostrar cambios en los accesorios
function changeAccesorie (fuenteImg, arrImg) {
  const imgActual = fuenteImg.getAttribute("src");
  const posActual = arrImg.indexOf(imgActual);
  let posNueva;
  if (posActual < (arrImg.length -1)){
    posNueva = posActual + 1 ;
  } else {posNueva = 0};
  const imgNueva = arrImg[posNueva];
  fuenteImg.setAttribute("src", imgNueva);
}
document.getElementById("ears_but").addEventListener("click", function() { changeAccesorie(document.getElementById("ears"), ears) });
document.getElementById("mouth_but").addEventListener("click", function() { changeAccesorie(document.getElementById("mouth"), mouth) });
document.getElementById("neck_but").addEventListener("click", function() { changeAccesorie(document.getElementById("neck"), neck) });
document.getElementById("acc_but").addEventListener("click", function() { changeAccesorie(document.getElementById("acc"), acc) });
document.getElementById("hair_but").addEventListener("click", function() { changeAccesorie(document.getElementById("hair"), hair) });
document.getElementById("eyes_but").addEventListener("click", function() { changeAccesorie(document.getElementById("eyes"), eyes) });
document.getElementById("leg_but").addEventListener("click", function() { changeAccesorie(document.getElementById("leg"), leg) });
document.getElementById("back_but").addEventListener("click", function() { changeAccesorie(document.getElementById("back"), back) });

//Funciones para mostrar cambios en los estilos
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


