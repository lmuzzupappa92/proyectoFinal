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


//*------------IMAGENES-------------*//

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
imagen2.addEventListener('dragstart', dragstartCB);
imagen3.addEventListener('dragstart', dragstartCB);


function dragstartCB(e){

    let imagen = e.target;

    console.log(imagen.getAttribute('class'));

    e.dataTransfer.setData('Text', imagen.getAttribute('class'));

    

}  

espacio1.addEventListener('dragover',(evento)=>evento.preventDefault()); 
espacio1.addEventListener('drop', soltandoElemento);


espacio2.addEventListener('dragover',(evento)=>evento.preventDefault()); 
espacio2.addEventListener('drop', soltandoElemento);


espacio3.addEventListener('dragover',(evento)=>evento.preventDefault()); 
espacio3.addEventListener('drop', soltandoElemento);




function soltandoElemento (e){


    let imgClass = e.dataTransfer.getData('Text');

    }
    







/*


espacio2.addEventListener('dragover',(evento)=>evento.preventDefault()); 

espacio2.addEventListener('drop', soltandoElemento2);

function soltandoElemento2 (){

        espacio2.appendChild(imagen2);

} 

espacio3.addEventListener('dragover',(evento)=>evento.preventDefault()); 

espacio3.addEventListener('drop', soltandoElemento3);

function soltandoElemento3 (){

     espacio3.appendChild(imagen3);

}

*/











/*


console.log(finTraslado);

imagen2.addEventListener('dragstart', inicioTraslado);

imagen2.addEventListener('dragend', finTraslado);

function inicioTraslado (evento){

    evento.dataTransfer.setData ["Text","imagen1"];
}
function finTraslado (evento){

    let imagen2 = evento.target;
    imagen2.style.visibility="hidden";

}

imagen3.addEventListener('dragstart', inicioTraslado);

imagen3.addEventListener('dragend', finTraslado);

function inicioTraslado (evento){

    evento.dataTransfer.setData ["Text","imagen1"];
}
function finTraslado (evento){

    let imagen3 = evento.target;
    imagen1.style.visibility="hidden";

}



espacio2.addEventListener('dragover', prevenirDefault);

espacio2.addEventListener('drop', soltandoElemento);

function soltandoElemento (evento){

    let dataImagen2 = evento.dataTransfer.getData ('Text');

    espacio2.innerHTML = '<div class="imagen2"></div>';
}

function prevenirDefault(evento) {
    evento.preventDefault()
}

espacio3.addEventListener('dragover', prevenirDefault);

espacio3.addEventListener('drop', soltandoElemento);

function soltandoElemento (evento){

    let dataImagen3 = evento.dataTransfer.getData ('Text');

    espacio1.innerHTML = '<div class="imagen3"></div>';
}

function prevenirDefault(evento) {
    evento.preventDefault()
}

*/