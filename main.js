const productos = [
    { nombre: "costillar", precio: 500},
    { nombre: "cocacola", precio: 350},
    { nombre: "fernet", precio: 580},
    { nombre: "verduras", precio: 250},
    { nombre: "hielo", precio: 50},
];
let carrito = []

let seleccion = prompt("hola, desea comprar algun prducto? si o no")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Hola, desea comprar algo? si o no")
}

if(seleccion == "si"){
    alert("A continuacion le mostraremos nuestros productos")
    let ListaProducto = productos.map((producto) => producto.nombre + " " +producto.precio + "$");
    alert(ListaProducto.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por su visita, hasta luego!!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito");
    let precio = 0;
    if(producto == "costillar" || producto == "cocacola" || producto == "fernet" || producto == "verduras" || producto == "hielo"){
        switch(producto){
            case "costillar":
                precio = 500;
                break;
            case "cocacola":
                precio = 350;
                break;
            case "fernet":
                precio = 580;
                break;
            case "verduras":
                precio = 250;
                break;
            case "hielo":
                precio = 500;
                break;
            default:
                break;
        }
     let unidades = parseInt(prompt("Cuantas unidades quiere llevar?"))

     carrito.push({ producto, unidades, precio})
     console.log(carrito)
    } else{
        alert("No tenemos ese producto")    
    }
   seleccion = prompt("Desea seguir comprando?")
   
   while(seleccion == "no"){
    alert("Gracias por la compra, hasta luego!")
    carrito.forEach((carritofinal) => {
        console.log(`producto: ${carritofinal.producto}, unidades: ${carritofinal.unidades}, 
        total a pagar por producto: ${carritofinal.unidades * carritofinal.precio}`)
    })
    break;
   }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es: ${total}`)