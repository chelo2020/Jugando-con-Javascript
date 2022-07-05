var lista_parrafos = new Array(20);
var contador = 0;
var caja = document.getElementById("elemento");
    Cargar =()=>{
        document.getElementById("contador").innerHTML = contador;
        var elemento = document.getElementById("elemento").value;
        if (contador<20){
            lista_parrafos[contador] = elemento;
            contador +=1;
            document.getElementById("contador").innerHTML = contador+"  "+elemento;
            document.getElementById("elemento").value = "";
        }
        lista_parrafos = lista_parrafos.sort();
        if (contador==20){
            for(i=0; i<lista_parrafos.length;i++){
                document.getElementById("resultado").innerHTML += "<br>"+ lista_parrafos[i];
            }
        }
    }