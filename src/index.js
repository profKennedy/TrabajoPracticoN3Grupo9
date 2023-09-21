const listaMadre=[];
const listaBarata=[];
//funciones
document.getElementById("guardar").addEventListener("click", function(){
    const listaHija=[];                                                   //inicializo la lista hija dentro de la funcion pq sino solo muestra el ultimo valor
    let nombre=document.getElementById("nombreProducto").value;           //que pse pone en el input duplicado en la matriz
    let precio=Number(document.getElementById("precioProducto").value);
    let mercado= document.getElementById("nombreMercado").value;          // asignacion de los valores tomados de los inputs
    listaHija.push(nombre,precio,mercado);
    listaMadre.push(listaHija);               //se añaden los elementos en la lista hija y luego añado la lista hija a la lista madre
    console.log(listaMadre);                  //para que se vea la matriz
    //borrar inputs
    document.getElementById("nombreProducto").value=" ";
    document.getElementById("nombreMercado").value=" ";
});

document.getElementById("lista").addEventListener("click", () =>{
    document.getElementById("p1").innerHTML=listaMadre;         // con esto se muestra la lista, me falta mejorarlo banda
});

document.getElementById("listabarata").addEventListener("click", ()=>{  // esta es la funcion para comparar con la cual estoy teniendo problemas
    for (let index = 0; index < listaMadre.length; index++) {           // solo uso un for por que solo necesito recorrer la lista madre y comparar los nombre
        if (listaMadre[index][0] == listaMadre[index+1][0]) {           // si se dan cuanta la lista tiene este orden [[nombre,precio,mercado],[nombre,precio,mercado]]
            console.log("son la misma fruta");
        }
    }
});