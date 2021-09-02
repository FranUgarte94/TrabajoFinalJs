$(document).ready(() => {

  console.log("Se ha cargado el DOM correctamente")

});



const PRECIODOLAR = 101.75;
const IVA = parseFloat(1.21);


// Declaro una clase para las guitarras que se iran agregando a la base de datos
class Guitarra {
  constructor(datosGuitarra) {
    this.id = datosGuitarra.id;
    this.marca = datosGuitarra.marca;
    this.modelo = datosGuitarra.modelo;
    this.origen = datosGuitarra.origen;
    this.anio = datosGuitarra.anio;
    this.precioEnDolar = datosGuitarra.precioEnDolar;
    this.stock = datosGuitarra.stock;
    this.color = datosGuitarra.color;
    this.image = datosGuitarra.image;
  }

}

// Obtener las guitarras del storage (Supongo que estan guardadas)
const guitarrasStorage = localStorage.getItem("guitarras");
let listaGuitarras = [];

if(guitarrasStorage == null) {

  listaGuitarras = [
    new Guitarra({
      id: "0",
      marca: "Gibson",
      modelo: "SG",
      origen: "EEUU",
      anio: 2014,
      precioEnDolar: 4000,
      stock: 5,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/gibsonSG1.png",
    }),
    new Guitarra({
      id: "1",
      marca: "Gibson",
      modelo: "SG Pro",
      origen: "EEUU",
      anio: 2012,
      precioEnDolar: 4200,
      stock: 8,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/gibsonSG2.png",
    }),
    new Guitarra({
      id: "2",
      marca: "Gibson",
      modelo: "SG Custom",
      origen: "EEUU",
      anio: 2007,
      precioEnDolar: 5000,
      stock: 5,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/gibsonSG3.png",
    }),
    new Guitarra({
      id: "3",
      marca: "Gibson",
      modelo: "Les Paul",
      origen: "EEUU",
      anio: 2012,
      precioEnDolar: 4500,
      stock: 8,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/gibsonLesPaul1.png",
    }),
    new Guitarra({
      id: "4",
      marca: "Gibson",
      modelo: "Les Paul Pro",
      origen: "EEUU",
      anio: 2014,
      precioEnDolar: 5000,
      stock: 5,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/gibsonLesPaul2.png",
    }),
    new Guitarra({
      id: "5",
      marca: "Gibson",
      modelo: "Les Paul Custom",
      origen: "EEUU",
      anio: 2001,
      precioEnDolar: 6000,
      stock: 2,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/gibsonLesPaul3.png",
    }),
    new Guitarra({
      id: "6",
      marca: "Gibson",
      modelo: "ES",
      origen: "EEUU",
      anio: 2014,
      precioEnDolar: 4700,
      stock: 5,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/gibsonES1.png",
    }),
    new Guitarra({
      id: "7",
      marca: "Gibson",
      modelo: "ES 335",
      origen: "EEUU",
      anio: 2012,
      precioEnDolar: 5000,
      stock: 3,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/gibsonES2.png",
    }),
    new Guitarra({
      id: "8",
      marca: "Fender",
      modelo: "Stratocaster",
      origen: "Mexico",
      anio: 2005,
      precioEnDolar: 3500,
      stock: 8,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/strato1.jpg",
    }),
    new Guitarra({
      id: "9",
      marca: "Fender",
      modelo: "Stratocaster Original",
      origen: "EEUU",
      anio: 2010,
      precioEnDolar: 4200,
      stock: 5,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/strato2.jpg",
    }),
    new Guitarra({
      id: "10",
      marca: "Fender",
      modelo: "Stratocaster American",
      origen: "EEUU",
      anio: 2013,
      precioEnDolar: 4900,
      stock: 6,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/strato3.jpg",
    }),
    new Guitarra({
      id: "11",
      marca: "Fender",
      modelo: "Telecaster",
      origen: "EEUU",
      anio: 2005,
      precioEnDolar: 4100,
      stock: 8,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/tele1.jpg",
    }),
    new Guitarra({
      id: "12",
      marca: "Fender",
      modelo: "Telecaster Original",
      origen: "EEUU",
      anio: 2007,
      precioEnDolar: 5000,
      stock: 3,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/tele2.jpg",
    }),
    new Guitarra({
      id: "13",
      marca: "Fender",
      modelo: "Telecaster Ultra",
      origen: "EEUU",
      anio: 2009,
      precioEnDolar: 5200,
      stock: 6,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/tele3.jpg",
    }),
    new Guitarra({
      id: "14",
      marca: "Fender",
      modelo: "Jaguar",
      origen: "EEUU",
      anio: 2007,
      precioEnDolar: 4900,
      stock: 5,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/jaguar1.jpg",
    }),
    new Guitarra({
      id: "15",
      marca: "Fender",
      modelo: "Jaguar Orignal",
      origen: "EEUU",
      anio: 2001,
      precioEnDolar: 5100,
      stock: 2,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/jaguar2.jpg",
    }),
    new Guitarra({
      id: "16",
      marca: "Squier",
      modelo: "Stratocaster California Series",
      origen: "China",
      anio: 2015,
      precioEnDolar: 900,
      stock: 12,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/stratoSquier1.jpg",
    }),
    new Guitarra({
      id: "17",
      marca: "Squier",
      modelo: "Stratocaster Affinity",
      origen: "Taiwan",
      anio: 2012,
      precioEnDolar: 1100,
      stock: 10,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/stratoSquier2.jpg",
    }),
    new Guitarra({
      id: "18",
      marca: "Squier",
      modelo: "Stratocaster Classic Vibe",
      origen: "EEUU",
      anio: 2020,
      precioEnDolar: 1500,
      stock: 5,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/stratoSquier3.jpg",
    }),
    new Guitarra({
      id: "19",
      marca: "Squier",
      modelo: "Stratocaster Bullet",
      origen: "Mexico",
      anio: 2007,
      precioEnDolar: 1600,
      stock: 5,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/stratoSquier4.jpg",
    }),
    new Guitarra({
      id: "20",
      marca: "Epiphone",
      modelo: "Les Paul",
      origen: "Taiwan",
      anio: 2005,
      precioEnDolar: 1900,
      stock: 5,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/epiphoneLesPaul1.png",
    }),
    new Guitarra({
      id: "21",
      marca: "Epiphone",
      modelo: "Les Paul Pro",
      origen: "EEUU",
      anio: 2016,
      precioEnDolar: 2100,
      stock: 3,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/epiphoneLesPaul2.png",
    }),
    new Guitarra({
      id: "22",
      marca: "Epiphone",
      modelo: "SG 400",
      origen: "Taiwan",
      anio: 2014,
      precioEnDolar: 2500,
      stock: 8,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/epiphoneSG1.png",
    }),
    new Guitarra({
      id: "23",
      marca: "Epiphone",
      modelo: "SG 400 Classic",
      origen: "Mexico",
      anio: 2020,
      precioEnDolar: 2600,
      stock: 6,
      color: "negro, blanco, rojo, azul, gris",
      image: "images/epiphoneSG2.png",
    }),
    
  ];


  // Guardarlas en el Localstorage
  localStorage.setItem("guitarras", JSON.stringify(listaGuitarras));
} else {
  listaGuitarras = JSON.parse(guitarrasStorage);
}






// Ver todas las guitarras

function verTodasLasGuitarras() {

  $("#cardsDeGuitarras").empty(
    ``
);;
  
  for (const guitarra of listaGuitarras) { 
  $("#cardsDeGuitarras").append(
 
    
  `<div class="col d-flex justify-content-center mb-4">
  <div class="card ocultable product-item" style="width: 18rem;" category="${guitarra.marca.toLowerCase()}">
  <img src="${guitarra.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title marca">Marca: ${guitarra.marca}</h5>
    <h4 class="card-title modelo">Modelo: ${guitarra.modelo}</h4>
    <h6 class="card-title">Año: ${guitarra.anio}</h4>
    <h6 class="card-title">Stock: ${guitarra.stock}</h4>
    <h5 class="text-primary stylePrecio">Precio: <span class="precio">$ ${guitarra.precioEnDolar * PRECIODOLAR * IVA}</span></h5>
    <h3 class="card-title invisible" id="idGuitarraParaEnviarACarrito">${guitarra.id}</h3>
    <button href="#" class="btn btn-primary botonAgregarACarrito" id="">Agregar al carrito</button>
  </div>
</div>
</div>`




  );
}
}

// Ejecuto funcion para visualizar todas las guitarras apenas entro a la pagina
verTodasLasGuitarras();



$(".contenedorTitulo").prepend(
  
  `<h2 class="h4 m-4 text-primary tituloFadeIn">Productos</h2>
  <div class="d-flex flex-wrap justify-content-center">
  <h5 class="tituloFadeIn">Filtros por Marcas</h5>
</div>

<div class="d-flex flex-wrap justify-content-center">

<div class="category_list">
  <button href="#" class="category_item btn btn-primary" category="all">Todo</button>
  <button href="#" class="category_item btn btn-primary" category="gibson">Gibson</button>
  <button href="#" class="category_item btn btn-primary" category="fender">Fender</button>
  <button href="#" class="category_item btn btn-primary" category="squier">Squier</button>
  <button href="#" class="category_item btn btn-primary" category="epiphone">Epiphone</button>
</div>
</div>`);


$(".tituloFadeIn").fadeIn(1000); 







// Botones de filtro por marcas


// Agrego la clase active a la primer categoria
$('.category_list .category_item[category="all"]').addClass('ct_item-active');

// Filtro por marca de guitarra

$(".category_item").click(function(){
let marcaDeGuitarra = $(this).attr("category");
console.log(marcaDeGuitarra);

// Agrego clase active a la marca seleccionada
$(".category_item").removeClass("ct_item-active");
$(this).addClass("ct_item-active");

// Oculto guitarra
$(".product-item").css("transform", "scale(0)");
function hideProduct(){
  $(".product-item").hide();
} setTimeout(hideProduct,400);

// Muestro guitarras añadiendo la marca en la categoria
function showProduct(){
  $('.product-item[category="'+marcaDeGuitarra+'"]').show();
  $('.product-item[category="'+marcaDeGuitarra+'"]').css('transform', 'scale(1)');
} setTimeout(showProduct,400);
});

// Muestro los productos en la lista

$('.category_item[category="all"]').click(function(){
function showAll(){
  $(".product-item").show();
  $(".product-item").css('transform', 'scale(1)');
} setTimeout(showAll,400);
});




// Eventos y funciones para agregar al carrito
const botonAgregarACarrito = document.querySelectorAll(".botonAgregarACarrito");
const tbody = document.querySelector(".tbody");
let carrito = [];

botonAgregarACarrito.forEach(btn => {
  btn.addEventListener("click", guardarItemsParaCarrito)
})


// Identifico informacion que me quiero llevar al carrito y lo guardo en un array
function guardarItemsParaCarrito(e){
  const button = e.target;
  const item = button.closest(".card");
  const itemModelo = item.querySelector(".modelo").textContent;
  const itemTitle = item.querySelector(".card-title").textContent;
  const itemPrice = item.querySelector(".precio").textContent;
  const itemImg = item.querySelector(".card-img-top").src;
  
  const nuevoItem = {
    modelo: itemModelo,
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  agregarItemACarrito(nuevoItem);
}


// Funcion para indentificar y modificar la cantidad de unidades de un solo item
function agregarItemACarrito(nuevoItem){

  const InputElemnto = tbody.getElementsByClassName("input__elemento");
  for(let i =0; i < carrito.length ; i++){
    if((carrito[i].modelo.trim() === nuevoItem.modelo.trim()) && (carrito[i].title.trim() === nuevoItem.title.trim())){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i];
      inputValue.value++;
      CarritoTotal();
      return null;
    }
  }
  
  carrito.push(nuevoItem);
  
  verItemsEnCarrito();
} 


// Mostrar visualmente en el carrito la guitarra añadida
function verItemsEnCarrito(){

  tbody.innerHTML = '';
  carrito.map(item => {
    const tr = document.createElement("tr");
    tr.classList.add("ItemCarrito");
    const Content = `
    
    <th scope="row" class="itemRemovido"></th>
            <td class="table__productos">
              <img src=${item.img}  alt="" class="removerImagen">
              <h6 class="title">${item.title}</h6>
              <h6 class="title">${item.modelo}</h6>
            </td>
            <td class="table__price"><p class="precioEnCarritoStyle">${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">Quitar</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr);

    tr.querySelector(".delete").addEventListener("click", quitarItemDeCarrito);
    tr.querySelector(".input__elemento").addEventListener("change", sumarCantidades);
  })
  CarritoTotal();
}

// Funcion para sumar el total de los productos en un solo monto final
function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector(".itemCartTotal");
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ""));
    Total = Total + precio*item.cantidad;
  })

  itemCartTotal.innerHTML = `Total $${Total}`;
  addLocalStorage();
}


// Funcion para eliminar un item del carrito
function quitarItemDeCarrito(e){
  const buttonDelete = e.target;
  const tr = buttonDelete.closest(".ItemCarrito");
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){



    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1);


    }
  }

  tr.remove();
  CarritoTotal();
}


// Funcion para indentificar y modificar la cantidad de unidades de un solo item
function sumarCantidades(e){
  const sumaInput  = e.target;
  const tr = sumaInput.closest(".ItemCarrito");
  const title = tr.querySelector(".title").textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal();

    }


  })


}


// Funcion para subir al LocalStorage la lista de guitarras en el carrito
const storage = JSON.parse(localStorage.getItem("carrito"));
if(storage){
  carrito = storage;
  verItemsEnCarrito();
};

function addLocalStorage(){
  localStorage.setItem("carrito", JSON.stringify(carrito));
};









  



// Agrego un cartel luego de efectuar la compra 


$(".cartelCompra").click((event) => {

  localStorage.setItem("compra", JSON.stringify(carrito));



  $(".cartelCompra").addClass("d-none");

  if(document.querySelector(".tbody").textContent == "") {

  } else {

  const elementoTitulo = $(event.target).parent().children()[0];
  const elementoDescripcion = $(event.target).parent().children()[1];
  $(".modal-title").text(elementoTitulo.textContent);
  $(".modal-description").text(elementoDescripcion.textContent);
  $("#modal").fadeIn(2000);

  $("#modal").append(
    `
    <div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">¡Gracias por tu compra!</h5>
            <button type="button" class="close cerrar" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p class="modal-description">Tu pago y metodo de envio será confirmado por mail.</p>
        </div>
        <div class="modal-footer">

        <button type="button" class="btn btn-primary" id="detalleCompra" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Ver Detalle de Compra
</button>
            <button type="button" class="btn btn-secondary cerrar" data-dismiss="modal"><a href="productos.html" class="cerrar">Cerrar</a></button>
        </div>
    </div>
  </div>
`
  );



$(".cerrar").click(() => {

  $(".cartelCompra").removeClass("d-none");



  $(".itemCartTotal").empty(
    ``
);

  $(".modal-content").empty(
    ``
);

  $(".tbody").empty(
    ``
);
  $("#modal").fadeOut(1000);

}

);
}});



$("#detalleCompra").click(() => {

  const guitarrasCompradas = JSON.parse(localStorage.getItem("compras"));
  carrito = guitarrasCompradas


  $("#cartelDetalleCompra").append(
    
    

    
    `
    <p>QUE ONDA GENTE</p>
    <h3>HOLA PIBE</h3>
    <h3>${guitarra.marca}</h3>
    <h3>${guitarra.modelo}</h3>
    <h3>${guitarra.anio}</h3>

    `
  );
 }
);



// FALTA MODIFICAR EL STOCK UNA VEZ COMPRADAS LAS GUITARRAS


