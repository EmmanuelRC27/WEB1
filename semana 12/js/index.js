function validar(){
    const nombre= document.getElementById("nombre").value;
    const numero= document.getElementById("numero").value;
    indice = document.getElementById("opciones").selectedIndex;
    const correo= document.getElementById("correo").value;  
    var ano = document.getElementById("ano").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value; 
    fecha = new Date(ano, mes, dia); 
    if(!nombre  || nombre.length==0){ //importante recordar que el length es para contar la cantidad de caracteres
        alert("falta nombre");
        document.getElementById("nombre").focus();
        return false;
    
    
    }else if ( isNaN(numero) ) {
        alert("datos no validos")
        document.getElementById("numero").focus();
        return false;
   
   
    }else if ( indice == null || indice == 0 ) {
        alert("no seleccionó ninguna opcion de la lista")
        document.getElementById("opciones").focus();
        return false;
    
    
    //}else if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(correo)) ) {
        //alert("No se ingresó un correo válido")
        //document.getElementById("correo").focus();
        //return false;
    
    }else if( !isNaN(fecha) ) {
        alert("Ingreso una fecha invalida")
        document.getElementById("fecha").focus
        return false;
       } 
        



    return true;
}



// var global= 0


// function accion(){
//     //alert('Holaaa accion')
    

// };

// function enviarMensaje(mensaje, numero){
//     //const ValorInput= document.getElementById("valor").value;
//     const valor= document.getElementById("5").value;
//     //alert ('El mensaje es: ${mensaje} y el segundo parametro es: ${numero}');
    

//     alert(valor);
//     global=valor;

//     alert(partirMensaje());
//     document.getElementById("valor").value=20;

// }

// function cambiarColor(){
//     const titulo= document.querySelector(".titulo ")
//     titulo.Style.color= "white";
//     titulo.style.backgroung ="blue";
//     alert(global);
    


// }

// function partirMensaje(){
//     return "Mensaje Partido"
// }