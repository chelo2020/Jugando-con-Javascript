Multiplo = () =>{
    var numero = document.getElementById("numero").value;
    if(numero%9==0&&numero!=""){
        document.getElementById("resultado").innerHTML = "Resultado =El número ingresado  es multiplo de 9 ";
    }
    else if (numero%9!=0&&numero!=""){
       document.getElementById("resultado").innerHTML = "Resultado = El número ingresado NO es multiplo de 9";
    }
    else{
        alert("ERROR INTENTA NUEVAMENTE");
    }
}