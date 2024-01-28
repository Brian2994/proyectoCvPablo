//menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//ocultar el menu al seleccionar una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//creo las barras identificadas por el id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras para manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let python = document.getElementById("python");
crearBarra(python);
let java = document.getElementById("java");
crearBarra(java);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let vegaspro = document.getElementById("vegaspro");
crearBarra(vegaspro);

//comienzo con -1 porque nunguna barra se pintado al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//con esta variable vemos si ya ejecuto la animacion
let entro = false;

//animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 10, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 4, 1, intervalJavascript);
        },100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 5, 2, intervalPython);
        },100);
        const intervalJava = setInterval(function(){
            pintarBarra(java, 3, 3, intervalJava);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 6, 4, intervalPhotoshop);
        },100);
        const intervalVegaspro = setInterval(function(){
            pintarBarra(vegaspro, 6, 5, intervalVegaspro);
        },100);
    }
}

//lleno una barra con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval);
    }
}

//detecto el scrolling para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}