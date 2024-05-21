//funcion para obtener el parametro de la url
function obtenerParametroURL(nombre) {
    const url = new URL(window.location.href); //obtiene la url actual
    return url.searchParams.get(nombre); //retorna el valor del parametro 'nombre' en la url
  }
  
  //obtener el nombre del producto en la url
  const nombreProducto = obtenerParametroURL("producto"); //obtiene el nombre del producto de la url
  
  
  //mostrar el detalle del producto
  document.getElementById("detalleProducto").innerHTML = `
  <div class="products-container">
  <div class="card-wrapper">
    <div class="card">
      <!-- card left -->
      <div class="product-imgs">
        <div class="img-display">
          <div class="img-showcase">
            <img
              src="../css/img-tienda/Mujer/${nombreProducto}.jpg"
            />
            <!--Poner mas imagenes-->
            <img
              src="../css/img-tienda/Mujer/${nombreProducto}.jpg"
            />
            <img
              src="../css/img-tienda/Mujer/${nombreProducto}.jpg"
            />
            <img
              src="../css/img-tienda/Mujer/${nombreProducto}.jpg"
            />
          </div>
        </div>
        <div class="img-select">
          <div class="img-item">
            <a href="#" data-id="1">
              <img
              src="../css/img-tienda/Mujer/${nombreProducto}.jpg"
              />
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="2">
              <img
              src="../css/img-tienda/Mujer/${nombreProducto}.jpg"
              />
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="3">
              <img
              src="../css/img-tienda/Mujer/${nombreProducto}.jpg"
              />
            </a>
          </div>
          <div class="img-item">
            <a href="#" data-id="4">
              <img
              src="../css/img-tienda/Mujer/${nombreProducto}.jpg"
              />
            </a>
          </div>
        </div>
      </div>
      <!-- card right -->
      <div class="product-content">
        <h2 class="product-title">${nombreProducto}</h2>
  
        <div class="product-price">
          <p class="new-price">MXN $249.00</p>
        </div>
  
        <div class="size-select">
          <p>Talla</p>
          <label for="small">
              <input type="radio" name="size" id="small">
              <span>S</span>
          </label>
          <label for="medium">
              <input type="radio" name="size" id="medium">
              <span>M</span>
          </label>
          <label for="large">
              <input type="radio" name="size" id="large">
              <span>L</span>
          </label>
      </div>
  
        <div class="product-detail">
          <h2>Acerca de este producto:</h2>
          <p>Falda blanca tipo olan</p>
          <ul>
            <li>Color: <span>Blanco</span></li>
            <li>Disponible: <span>En stock</span></li>
            <li>Categoria: <span>Camisetas</span></li>
            <li>Area de venta: <span>En linea</span></li>
          </ul>
        </div>
  
        <div class="purchase-info">
          <input type="number" min="0" value="1" />
          <button type="button" class="btn">
            añadir al carrito <i class="fas fa-shopping-cart"></i>
          </button>
          <button type="button" class="btn">Favoritos</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  `;
  
  //funcion para volver a la pagina de productos
  function volverAProductos() {
    window.location.href = "mujer.html"; //redirige a la pagina principal de productos
  }
  
  //funcion para redirigir a la pagina del producto con el nombre del producto como parametro
  function verProducto(nombreProducto) {
    window.location.href = `productoM.html?producto=${nombreProducto}`; //Redirige a la página del producto con el nombre del producto como parametro
  }

  function addImagesCarousel() {
    const carrousel = document.getElementById('carousel');    
    images = ['../css/img-tienda/Mujer/image1.png',
              '../css/img-tienda/Mujer/image2.png'];

    images.forEach((image, index) => {
      if(index === 0){
        carrousel.innerHTML += `
        <div class="carousel-item active">
          <img src="${image}" class="d-block w-100" alt="...">
        </div>`
      }else{
        carrousel.innerHTML += `
        <div class="carousel-item">
          <img src="${image}" class="d-block w-100" alt="...">
        </div>`
      }
    });

  }