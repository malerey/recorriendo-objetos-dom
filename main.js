const productos = [
  {
    tipo: "zapato",
    nombre: "Zapato azul",
    descripcion: "Descripcion del zapato azul",
    precio: 3000,
    img: "img/zapato-azul.jpg"
  },
  {
    tipo: "zapato",
    nombre: "Zapato negro",
    descripcion: "Descripcion del zapato negro",
    precio: 2000,
    img: "img/zapato-negro.jpg"
  },
  {
    tipo: "zapatilla",
    nombre: "Zapatilla negra",
    descripcion: "Descripcion de la zapatilla negra",
    precio: 3500,
    img: "img/zapatilla-negra.jpg"
  },
  {
    tipo: "zapatilla",
    nombre: "Zapatilla azul",
    descripcion: "Descripcion de la zapatilla azul",
    precio: 2500,
    img: "img/zapatilla-azul.jpeg"
  }
]

let contenedor = document.querySelector("section")


for (let i = 0; i < productos.length; i++) {
  const producto = productos[i];

  let nombre = producto.nombre
  let descripcion = producto.descripcion
  let precio = producto.precio
  let img = producto.img
  contenedor.innerHTML = contenedor.innerHTML + `
  <div class="card">
  <div class="img"><img src="${img}"></div>
  <div class="descripcion">
  <h2>${nombre}</h2>
  <p class="price">$ ${precio}</p>
  <p>${descripcion}</p>
  </div>
  <button>Comprar</button>
  </div>`
  
}



