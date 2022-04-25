//*------------REPRODUCTOR-------------*//
let video = document.querySelector('video');

if (video) {


    let botonPlay = document.querySelector('#play');
    let botonPause = document.querySelector('#pause');
    
    
    botonPlay.addEventListener('click',()=>{
        video.play();
    }); 
    botonPause.addEventListener('click',()=> {
        video.pause();
    });
    
    


}

let imagen1 = document.querySelector(".tarjeta1");
let imagen2 = document.querySelector(".tarjeta2");
let imagen3 = document.querySelector(".tarjeta3");

let espacio1 = document.querySelector(".espacio1");
let espacio2 = document.querySelector(".espacio2");
let espacio3 = document.querySelector(".espacio3");


/*-------------TRASLADO--------------*/
 /*1*/


/*------------DESTINO---------------*/


/*1*/

imagen1.addEventListener('dragstart', dragstartCB);
imagen1.addEventListener('dragleave', hidden);

imagen2.addEventListener('dragstart', dragstartCB);
imagen2.addEventListener('dragleave', hidden);

imagen3.addEventListener('dragstart', dragstartCB);
imagen3.addEventListener('dragleave', hidden);


function dragstartCB(e){

    let imagen = e.target;

    console.log(imagen.getAttribute('class'));

    e.dataTransfer.setData('Text', imagen.getAttribute('class'));
}  

function hidden (e){

    let imagen = e.target;

    imagen.style.visibility="hidden";

    
}

espacio1.addEventListener('dragover',(evento)=>evento.preventDefault()); 
espacio1.addEventListener('drop', soltandoElemento);


espacio2.addEventListener('dragover',(evento)=>evento.preventDefault()); 
espacio2.addEventListener('drop', soltandoElemento);


espacio3.addEventListener('dragover',(evento)=>evento.preventDefault()); 
espacio3.addEventListener('drop', soltandoElemento);




function soltandoElemento (e){


    let imgClass = e.target
    
    e.dataTransfer.getData('Text','class');



}