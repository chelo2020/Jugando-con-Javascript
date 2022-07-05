    var vector = new Array(20);
    var contador = 0;
    var caja = document.getElementById("elemento");
    Cargar =()=>{
        document.getElementById("contador").innerHTML.value = contador;
        var elemento = document.getElementById("elemento").value;
        if(elemento=="tigre"||elemento=="leopardo"||elemento=="perro"){
            alert("frase no aceptada, ingrese otra");
            document.getElementById("elemento").value = "";
        }
        else if (contador<20&&elemento!="tigre"&&elemento!="leopardo"&&elemento!="perro"){
            vector[contador] = elemento;
            contador +=1;
            document.getElementById("contador").innerHTML = contador+"  "+elemento;
            document.getElementById("elemento").value = "";
        }
        if (cont==20){
            for(i=0; i<vector.length;i++){
                document.getElementById("resultado").innerHTML += "<br>"+ vector[i];
            }
        }
    }