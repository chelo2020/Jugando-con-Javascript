Formulario=()=>{
    var nombre = document.getElementById("nombre").value;
    var asunto = document.getElementById("asunto").value;
    var mail = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    confirm("gracias: "+ nombre+"\nse envio el siguiente formulario: \n"+"asunto: "+asunto+"\nmail: "+mail+"\nmensaje:\n"+mensaje);
}

