Primo = () =>{
    var numero = document.getElementById("numero").value;
    if (numero==0||numero==1||numero==4)
       return false;
    for (let x = 2; x<numero/2; x++){
        if(numero%x==0){
            return false;
            break;
        }
    }
}
Mostrar = () =>{
    if (Primo()==false){
        document.getElementById("resultado").innerHTML="EL NUMERO INGRESADO NO ES PRIMO";
    }
    else{
        document.getElementById("resultado").innerHTML="EL NUMERO INGRESADO ES PRIMO";

    }
}