Fibonacci = () =>{
    var numero = document.getElementById("numero").value;
    var fibonacci = 0;
    var x;
    for(x=1;x<=200;x+=fibonacci){
        fibonacci += x;
        if (numero==fibonacci||numero==x){
            document.getElementById("resultado").innerHTML = "Resultado = el numero '"+numero+"' es fibonacci!";
            break;
        }
    }
    if (x>200){
        document.getElementById("resultado").innerHTML = "Resultado = El numero '"+numero+"' no es un fibonacci";
    }
}