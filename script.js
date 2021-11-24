// const ids = [
//     "first",
//     "second",
//     "third",
//     "fourth",
//     "fifth"
// ];

//var. para os inputs
const idsService = document.querySelectorAll(".stars1");
const idsSpeed = document.querySelectorAll(".stars2");
const idsQuality = document.querySelectorAll(".stars");

//var. para os labels 
const labelsService = document.querySelectorAll(".star1");
const labelsSpeed = document.querySelectorAll(".star2");
const labelsQuality = document.querySelectorAll(".star");


// Var. para cada avaliação
let servicex = 1, speedx = 1, qualityx = 1; 

function service(n){
    set(n, 1);
    servicex = n;
}

function speed(n){
    set(n, 2);
    speedx = n;
}

function quality(n){
    set(n, 3);
    qualityx = n;
}

//Criando função para da checked ou tirar o checked
function set(n, what){
    for(i = 0; i < 5; i++){
        let x;
        let xx;
        if(what === 1)
        {
            x = idsService[i];
            xx = labelsService[i];
        }else if(what === 2){
            x = idsSpeed[i];
            xx = labelsSpeed[i];
        }else{
            x = idsQuality[i];
            xx = labelsQuality[i];
        }


        if(i < n){
            x.checked = true;
            xx.setAttribute("fill", "goldenrod");
        }            
        else{
            x.checked = false;
            xx.setAttribute("fill", "black");        
        }
    }
}

let starAva1 = document.querySelectorAll(".starAva1");
let starAva2 = document.querySelectorAll(".starAva2");
let starAva3 = document.querySelectorAll(".starAva3");
console.log(starAva2);

function setAva(){
    document.getElementById("nameAva").innerText = document.getElementById("name").value;
    teste();
    for(i = 0; i < 5; i++){
        if(i < servicex){
            starAva1[i].setAttribute("fill", "goldenrod");
        }else
        starAva1[i].setAttribute("fill", "black");
        starAva1[i].setAttribute("visibility", "visible");
    }
    for(i = 0; i < 5; i++){
        if(i < speedx){
            starAva2[i].setAttribute("fill", "goldenrod");
        }else
        starAva2[i].setAttribute("fill", "black");

        starAva2[i].setAttribute("visibility", "visible");
    }
    for(i = 0; i < 5; i++){
        if(i < qualityx){
            starAva3[i].setAttribute("fill", "goldenrod");
        }else
        starAva3[i].setAttribute("fill", "black");
        
        starAva3[i].setAttribute("visibility", "visible");
    }
}

function teste(){
    let x = document.querySelectorAll("span");
    x.forEach(function(item){
        item.removeAttribute("hidden");
    });

}