let products = []; //matriz vacia
let probarato = [];

document.getElementById("botonGuardar").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value;
    const precio =  parseFloat(document.getElementById("precio").value);
    const comercio = document.getElementById("comercio").value;

    if(nombre && !isNaN(precio) && comercio){
        const objproducto = {nombre, precio ,comercio}; //creo un objeto con tales propiedades
        products.push(objproducto);
        document.getElementById("formProducto").reset(); //los campos se borran.
        alert("Producto guardado exitosamente.");
    }else{
        alert("Por favor, completa todos los campos correctamente.");
    }
});


document.getElementById("botonListar").addEventListener("click", ()=> {
    
    const listaCompleta = document.getElementById("listaProductos"); //obtenemos una referencia ubicacion del tbody
    listaCompleta.innerHTML = ""; //se limpia la tabla para mostrar los valores actualizados
    
    products.forEach(function(producto){
        
        const row = document.createElement("tr"); //crea un nuevo elemento de fila
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.comercio}</td>
        `;
        // agrega la fila a la tabla
        listaCompleta.appendChild(row); //la fila recién creada se agrega como un hijo del elemento,
    });
});
