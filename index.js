// Declaracion de las variables a obtener del HTML
let ears = document.getElementById("ears");
let mouth = document.getElementById("mouth");
let neck = document.getElementById("neck");
let acc = document.getElementById("acc");
let hair = document.getElementById("hair");
let eyes = document.getElementById("eyes");
let leg = document.getElementById("leg");
let back= document.getElementById("back");

let but_ears = document.getElementById("ears_but");
let but_mouth = document.getElementById("mouth_but");
let but_neck = document.getElementById("neck_but");
let but_acc = document.getElementById("acc_but");
let but_hair = document.getElementById("hair_but");
let but_eyes = document.getElementById("eyes_but");
let but_leg = document.getElementById("leg_but");
let but_back = document.getElementById("back_but");
let but_def = document.getElementById("def_but");
let but_cur = document.getElementById("cur_but");
let but_sho = document.getElementById("sho_but");
let but_ban = document.getElementById("ban_but");
let but_ele = document.getElementById("ele_but");
let but_qui = document.getElementById("qui_but");

//Arrays de las imagenes posibles a mostrar
let img_ears =["./Images/alpaca/ears/default.png", "./Images/alpaca/ears/tilt-backward.png", "./Images/alpaca/ears/tilt-forward.png"];
let img_mouth =["./Images/alpaca/mouth/default.png", "./Images/alpaca/mouth/astonished.png", "./Images/alpaca/mouth/eating.png", "./Images/alpaca/mouth/laugh.png", "./Images/alpaca/mouth/tongue.png"];
let img_neck =["./Images/alpaca/neck/default.png", "./Images/alpaca/neck/bend-backward.png", "./Images/alpaca/neck/bend-forward.png", "./Images/alpaca/neck/thick.png"];
let img_acc =["./Images/alpaca/accessories/earings.png", "./Images/alpaca/accessories/flower.png", "./Images/alpaca/accessories/glasses.png", "./Images/alpaca/accessories/headphone.png"];
let img_hair =["./Images/alpaca/hair/default.png", "./Images/alpaca/hair/bang.png", "./Images/alpaca/hair/curls.png", "./Images/alpaca/hair/elegant.png","./Images/alpaca/hair/fancy.png", "./Images/alpaca/hair/quiff.png", "./Images/alpaca/hair/short.png"];
let img_eyes =["./Images/alpaca/eyes/default.png", "./Images/alpaca/eyes/angry.png", "./Images/alpaca/eyes/naughty.png", "./Images/alpaca/eyes/panda.png", "./Images/alpaca/eyes/smart.png", "./Images/alpaca/eyes/star.png"];
let img_leg =["./Images/alpaca/leg/default.png", "./Images/alpaca/leg/bubble-tea.png", "./Images/alpaca/leg/cookie.png", "./Images/alpaca/leg/game-console.png", "./Images/alpaca/leg/tilt-backward.png", "./Images/alpaca/leg/tilt-forward.png"];
let img_back =["./Images/alpaca/backgrounds/blue50.png", "./Images/alpaca/backgrounds/blue60.png", "./Images/alpaca/backgrounds/blue70.png", "./Images/alpaca/backgrounds/darkblue30.png", "./Images/alpaca/backgrounds/darkblue50.png", "./Images/alpaca/backgrounds/darkblue70.png", "./Images/alpaca/backgrounds/green50.png", "./Images/alpaca/backgrounds/green60.png", "./Images/alpaca/backgrounds/green70.png", "./Images/alpaca/backgrounds/grey40.png", "./Images/alpaca/backgrounds/grey70.png", "./Images/alpaca/backgrounds/grey80.png", "./Images/alpaca/backgrounds/red50.png", "./Images/alpaca/backgrounds/red60.png", "./Images/alpaca/backgrounds/red70.png", "./Images/alpaca/backgrounds/yellow50.png", "./Images/alpaca/backgrounds/yellow60.png", "./Images/alpaca/backgrounds/yellow70.png"];

//Funciones para mostrar cambios en los accesorios
but_ears.addEventListener("click", function() {
  let imgActual = ears.getAttribute("src");
  let posActual = img_ears.indexOf(imgActual);
  let posNueva;
  if (posActual < (img_ears.length -1)){
    posNueva = posActual + 1 ;
  } else {posNueva = 0};
  let imgNueva = img_ears[posNueva];
  ears.setAttribute("src", imgNueva);
})

but_mouth.addEventListener("click", function() {
  let imgActual = mouth.getAttribute("src");
  let posActual = img_mouth.indexOf(imgActual);
  let posNueva;
  if (posActual < (img_mouth.length -1)){
    posNueva = posActual + 1 ;
  } else {posNueva = 0};
  let imgNueva = img_mouth[posNueva];
  mouth.setAttribute("src", imgNueva);
})

but_neck.addEventListener("click", function() {
  let imgActual = neck.getAttribute("src");
  let posActual = img_neck.indexOf(imgActual);
  let posNueva;
  if (posActual < (img_neck.length -1)){
    posNueva = posActual + 1 ;
  } else {posNueva = 0};
  let imgNueva = img_neck[posNueva];
  neck.setAttribute("src", imgNueva);
})

but_acc.addEventListener("click", function() {
  acc.style.display = "block";
  let imgActual = acc.getAttribute("src");
  let posActual = img_acc.indexOf(imgActual);
  let posNueva;
  if (posActual < (img_acc.length -1)){
    posNueva = posActual + 1 ;
  } else {posNueva = 0};
  let imgNueva = img_acc[posNueva];
  acc.setAttribute("src", imgNueva);
})

but_hair.addEventListener("click", function() {
  let imgActual = hair.getAttribute("src");
  let posActual = img_hair.indexOf(imgActual);
  let posNueva;
  if (posActual < (img_hair.length -1)){
    posNueva = posActual + 1 ;
  } else {posNueva = 0};
  let imgNueva = img_hair[posNueva];
  hair.setAttribute("src", imgNueva);
})

but_eyes.addEventListener("click", function() {
  let imgActual = eyes.getAttribute("src");
  let posActual = img_eyes.indexOf(imgActual);
  let posNueva;
  if (posActual < (img_eyes.length -1)){
    posNueva = posActual + 1 ;
  } else {posNueva = 0};
  let imgNueva = img_eyes[posNueva];
  eyes.setAttribute("src", imgNueva);
})

but_leg.addEventListener("click", function() {
  leg.style.display = "block";
  let imgActual = leg.getAttribute("src");
  let posActual = img_leg.indexOf(imgActual);
  let posNueva;
  if (posActual < (img_leg.length -1)){
    posNueva = posActual + 1 ;
  } else {posNueva = 0};
  let imgNueva = img_leg[posNueva];
  leg.setAttribute("src", imgNueva);
})

but_back.addEventListener("click", function() {
  let imgActual = back.getAttribute("src");
  let posActual = img_back.indexOf(imgActual);
  let posNueva;
  if (posActual < (img_back.length -1)){
    posNueva = posActual + 1 ;
  } else {posNueva = 0};
  let imgNueva = img_back[posNueva];
  back.setAttribute("src", imgNueva);
})

//Funciones para mostrar cambios en los estilos
but_def.addEventListener("click", function() {
  ears.setAttribute("src", img_ears[0]);
  mouth.setAttribute("src", img_mouth[0]);
  neck.setAttribute("src", img_neck[0]);
  acc.removeAttribute('src');
  acc.style.display = "none";
  hair.setAttribute("src", img_hair[0]);
  eyes.setAttribute("src", img_eyes[0]);
  leg.setAttribute("src", img_leg[0]);
  leg.style.display = "block";
  back.setAttribute("src", img_back[0]);
})
but_cur.addEventListener("click", function() {
  ears.setAttribute("src", img_ears[1]);
  mouth.setAttribute("src", img_mouth[4]);
  neck.setAttribute("src", img_neck[0]);
  acc.setAttribute("src", img_acc[3]);
  acc.style.display = "block";
  hair.setAttribute("src", img_hair[2]);
  eyes.setAttribute("src", img_eyes[3]);
  leg.setAttribute("src", img_leg[2]);
  leg.style.display = "block";
  back.setAttribute("src", img_back[7]);
})

but_sho.addEventListener("click", function() {
  ears.setAttribute("src", img_ears[2]);
  mouth.setAttribute("src", img_mouth[3]);
  neck.setAttribute("src", img_neck[2]);
  acc.setAttribute("src", img_acc[1]);
  acc.style.display = "block";
  hair.setAttribute("src", img_hair[6]);
  eyes.setAttribute("src", img_eyes[2]);
  leg.removeAttribute("src");
  leg.style.display = "none";
  back.setAttribute("src", img_back[16]);
})

but_ban.addEventListener("click", function() {
  ears.setAttribute("src", img_ears[0]);
  mouth.setAttribute("src", img_mouth[0]);
  neck.setAttribute("src", img_neck[3]);
  acc.setAttribute("src", img_acc[2]);
  acc.style.display = "block";
  hair.setAttribute("src", img_hair[1]);
  eyes.setAttribute("src", img_eyes[1]);
  leg.setAttribute("src", img_leg[3]);
  leg.style.display = "block";
  back.setAttribute("src", img_back[14]);
})

but_ele.addEventListener("click", function() {
  ears.setAttribute("src", img_ears[2]);
  mouth.setAttribute("src", img_mouth[0]);
  neck.setAttribute("src", img_neck[1]);
  acc.removeAttribute('src');
  acc.style.display = "none";
  hair.setAttribute("src", img_hair[3]);
  eyes.setAttribute("src", img_eyes[4]);
  leg.setAttribute("src", img_leg[4]);
  leg.style.display = "block";
  back.setAttribute("src", img_back[11]);
})

but_qui.addEventListener("click", function() {
  ears.setAttribute("src", img_ears[2]);
  mouth.setAttribute("src", img_mouth[1]);
  neck.setAttribute("src", img_neck[0]);
  acc.setAttribute("src", img_acc[0]);
  acc.style.display = "block";
  hair.setAttribute("src", img_hair[5]);
  eyes.setAttribute("src", img_eyes[5]);
  leg.setAttribute("src", img_leg[5]);
  leg.style.display = "block";
  back.setAttribute("src", img_back[4]);
})


