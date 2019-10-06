//////////////////variables//////////////////
let play = document.getElementById("btn");
let button = document.getElementsByClassName("letter");
let screen = document.getElementById("text");
let canvas = document.getElementById("cnv");
let ctx = canvas.getContext('2d');
let start = document.getElementById("btn");
let underscore = [];
let table = ["orchidoclaste","bacchanales","hemistiche","incrementation","acropole","parnassien","hetaires","hecatonchires","metaphysique","aristotelicien"];
let response;
let box = document.querySelector("text");
let count = 0;
let reset = document.getElementById("reset");

//////////////////start party/////////////////////////
function TheCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
}

///////////////word in underscore////////////////////////////////

function WordsBoys() {
    
    response = table[Math.floor(Math.random() * table.length)];
    box = response.split('');//lettres des mots
    TheCanvas();
    screen.textContent = "";
    console.log(box);
    
    for (let i = 0; i < box.length; i++) {
         screen.textContent += "_";  
    }
    underscore = screen.textContent.split("");
    console.log(underscore);
    button.style.backgroundColor = "gray";
}
start.addEventListener("click", WordsBoys);

////////////// receiving keys ///////////////

function buttonColor(letter) {
            letter.style.width = "50px";
       }

function Letters(){
       console.log(this.value)
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", Letters);
}
function Act(){
    window.location.reload();
}
////////////////letter find////////////////////
function verify(){
    let letterFind = false ;

    for (let i = 0; i < box.length; i++) {
        console.log(this.value+" button")
         
        if (this.value == box[i]) {
           console.log(box[i]+" box")
           underscore[i] = this.value;
           console.log(underscore[i] +" underscore");
           screen.textContent = underscore.join(""); 
           letterFind = true;
           this.style.backgroundColor = "green";
        }    
        }
        if(screen.textContent == response){
          alert("Gagné! Bravo ! Tu feras quelque chose de ta vie finalement !");
           window.location.reload();   
    }
    if(!letterFind)
        {
           count++;
           console.log(count);
           this.style.backgroundColor = "red";
        }
      
        ////////////////////////////////////drawn////////////////////////
//foot
if(count == 1){ 
    ctx.lineWidth=2;
    ctx.beginPath(); 
    ctx.moveTo(10,600);
    ctx.lineTo(100,500);
    ctx.lineTo(200,600);
    //post
    }else if(count == 2){
    ctx.moveTo(100,500); 
    ctx.lineTo(100,100);
    //top
    }else if(count == 3){
    ctx.moveTo(100,100); 
    ctx.lineTo(500,100);
    //rope
    } else if(count == 4){
    ctx.moveTo(500,100); 
    ctx.lineTo(500,200);
    //head
    } else if(count == 5){
    ctx.moveTo(500,200); 
    ctx.arc(500,300, 40,0, 2*Math.PI, true);
    //neck and body
    } else if(count == 6){
    ctx.moveTo(530,300); 
    ctx.lineTo(540,330);
    ctx.lineTo(540,400);
    //arms and legs
    } else if(count == 7){
    ctx.moveTo(510,360); 
    ctx.lineTo(540,330);
    ctx.lineTo(530,365);
    ctx.moveTo(510,450); 
    ctx.lineTo(540,400);
    ctx.lineTo(520,460);
    }
    ctx.stroke();

    if(count > 6){
        alert("T'es mort booouuuh ! le mot était " + "[" + response + "]");
        window.location.reload();
    }    
}
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", verify);
}
reset.addEventListener("click", Act)



