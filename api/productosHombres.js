document.addEventListener("DOMContentLoaded", function() {
  // Variables
  const modalCarrito = document.getElementById('jsModalCarrito');
  const closeModalButton = document.querySelector('.jsModalClose');
  const carritoProductosModal = document.getElementById('carrito-productos-modal');
  const carritoIcono = document.querySelector('.fa-cart-shopping');
  const emptyCartMessage = document.getElementById('empty-cart-message');
  const carritoTotalAmount = document.getElementById('carrito-total-amount');
  const confirmarCompraButton = document.getElementById('confirmar-compra');
  let carrito = [];

  // Función para verificar si el carrito está vacío
  function checkIfCartIsEmpty() {
      if (carrito.length === 0) {
          emptyCartMessage.style.display = 'block';
      } else {
          emptyCartMessage.style.display = 'none';
      }
  }

  // Función para calcular el total del carrito
  function calcularTotalCarrito() {
      const total = carrito.reduce((acc, producto) => acc + producto.price, 0);
      carritoTotalAmount.textContent = `MXN $${total.toFixed(2)}`;
  }

  // Función para actualizar el contenido del carrito en el modal
  function actualizarCarrito() {
    carritoProductosModal.innerHTML = '';
    carrito.forEach((producto, index) => { // Agregar index para identificar el producto en el carrito
        const productoElemento = document.createElement('div');
        productoElemento.classList.add('modal__item');
        productoElemento.innerHTML = `
            <div class="modal__image-product">
                <img src="${producto.image}.jpg" alt="${producto.title}">
            </div>
            <div class="modal__text-product">
                <p>${producto.title}</p>
                <p><strong>MXN $${producto.price}</strong></p>
            </div>
            <button class="eliminar-producto" data-index="${index}">x</button> <!-- Botón para eliminar -->
        `;
        carritoProductosModal.appendChild(productoElemento);
    });
    calcularTotalCarrito();
    checkIfCartIsEmpty();

    // Agregar event listener para eliminar producto al hacer clic en el botón
    const botonesEliminar = document.querySelectorAll('.eliminar-producto');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index')); // Obtener el índice del producto
            carrito.splice(index, 1); // Eliminar el producto del carrito
            actualizarCarrito(); // Actualizar el carrito en el modal
        });
    });
}


  // Event listener para cerrar el modal
  closeModalButton.addEventListener('click', () => {
      modalCarrito.classList.remove('active');
  });

  // Event listener para abrir el modal del carrito cuando se hace clic en el icono del carrito
  carritoIcono.addEventListener('click', () => {
      if (carrito.length > 0) {
          modalCarrito.classList.add('active');
      }
  });

  // Cerrar modal haciendo clic fuera del contenido del modal
  window.addEventListener('click', event => {
      if (event.target === modalCarrito) {
          modalCarrito.classList.remove('active');
      }
  });

  // Event listener para confirmar compra
  confirmarCompraButton.addEventListener('click', () => {
      alert('Compra confirmada!');
      carrito = [];
      actualizarCarrito();
      modalCarrito.classList.remove('active');
  });

  // Verifica si el carrito está vacío al cargar la página
  checkIfCartIsEmpty();

  // Función para agregar producto al carrito
  function agregarProductoAlCarrito(producto) {
      carrito.push(producto);
      actualizarCarrito();
  }

  // Lógica de productosHombres para obtener productos desde la API
  const baseUrl = 'https://truly-trusted-ostrich.ngrok-free.app';
  const productosHombres = {
      onInit: () => {
          productosHombres.getProduct();
      },
      getBaseUrl: () => {
          return baseUrl;
      },
      getProduct: (event) => {
          const id = productosHombres.obtenerParametroURL("id");
          fetch(`${baseUrl}/api/v1/products/${id}`,{
              method:"GET",
              headers: {
                  "ngrok-skip-browser-warning": "123456",
                  "user-agent": "PostmanRuntime/7.26.8",
              }
          })
          .then(res => res.json())
          .then(json => {
              console.log('PRODUCTO');
              console.log(json);
              productosHombres.llenarProduct(json);
          })
          .catch(error => console.log('Error: ', error));
      },
      llenarProduct: (product) => {
          const detalleProducto = document.getElementById('detalleProducto');
          const { id, title, price, images, description } = product;
          const image = images[0];
          let productoContent = `
              <div class="products-container">
                  <div class="card-wrapper">
                      <div class="card">
                          <div class="product-imgs">
                              <div class="img-display">
                                  <div class="img-showcase">
                                      <img src="${image}.jpg"/>
                                      <img src="${image}.jpg"/>
                                      <img src="${image}.jpg"/>
                                      <img src="${image}.jpg"/>
                                  </div>
                              </div>
                              <div class="img-select">
                                  <div class="img-item"><a href="#" data-id="1"><img src="${image}.jpg"/></a></div>
                                  <div class="img-item"><a href="#" data-id="2"><img src="${image}.jpg"/></a></div>
                                  <div class="img-item"><a href="#" data-id="3"><img src="${image}.jpg"/></a></div>
                                  <div class="img-item"><a href="#" data-id="4"><img src="${image}.jpg"/></a></div>
                              </div>
                          </div>
                          <div class="product-content">
                              <h2 class="product-title">${title}</h2>
                              <div class="product-price">
                                  <p class="new-price">MXN $${price}</p>
                              </div>
                              <div class="size-select">
                                  <p>Talla</p>
                                  <label for="small"><input type="radio" name="size" id="small"><span>S</span></label>
                                  <label for="medium"><input type="radio" name="size" id="medium"><span>M</span></label>
                                  <label for="large"><input type="radio" name="size" id="large"><span>L</span></label>
                              </div>
                              <div class="product-detail">
                                  <h2>Acerca de este producto:</h2>
                                  <p>${description}</p>
                                  <ul>
                                      <li>Color: <span>Blanco</span></li>
                                      <li>Disponible: <span>En stock</span></li>
                                      <li>Categoria: <span>Camisetas</span></li>
                                      <li>Area de venta: <span>En linea</span></li>
                                  </ul>
                              </div>
                              <div class="purchase-info">
                                  <input type="number" min="0" value="1" />
                                  <button type="button" class="btn btn-add-cart">
                                      añadir al carrito <i class="fas fa-shopping-cart"></i>
                                  </button>
                                  <button type="button" class="btn">Favoritos</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;
          detalleProducto.innerHTML = productoContent;

          // Añadir event listener al botón "añadir al carrito"
          const addToCartButton = detalleProducto.querySelector('.btn-add-cart');
          addToCartButton.addEventListener('click', () => {
              agregarProductoAlCarrito({ title, price, image });
              modalCarrito.classList.add('active');
          });

          productosHombres.addListenersOnImages();
      },
      obtenerParametroURL(parametro) {
          const url = new URL(window.location.href);
          return url.searchParams.get(parametro);
      },
      addListenersOnImages: () => {
          const imgs = document.querySelectorAll('.img-select a');
          const imgBtns = [...imgs];
          let imgId = 1;
          imgBtns.forEach((imgItem) => {
              imgItem.addEventListener('click', (event) => {
                  event.preventDefault();
                  imgId = imgItem.dataset.id;
                  productosHombres.slideImage(imgId);
              });
          });
          window.addEventListener('resize', productosHombres.slideImage);
      },
      slideImage(id){
          const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;    
          document.querySelector('.img-showcase').style.transform = `translateX(${- (id - 1) * displayWidth}px)`;
      }        
  }

  productosHombres.onInit();
});

document.addEventListener("DOMContentLoaded", function () {
  const currencySelector = document.getElementById("currency-selector");
  const flagImg = document.getElementById("flag-img");
  const pricesInMXN = []; // Almacena los precios originales en MXN

  // Guarda los precios originales en MXN
  document.querySelectorAll(".products-price").forEach((price) => {
    pricesInMXN.push(parseFloat(price.textContent.replace(/[^\d.]/g, "")));
  });

  // Factor de conversión para otras monedas
  const conversionRates = {
    MXN: 1,
    USD: 20,
    EUR: 24,
  };

  function updateFlagAndPrices() {
    const selectedFlag =
      currencySelector.options[currencySelector.selectedIndex].getAttribute(
        "data-flag"
      );
    flagImg.src = `../css/flag/${selectedFlag}.png`;

    const selectedCurrency = currencySelector.value;
    const conversionRate = conversionRates[selectedCurrency];
    const prices = document.querySelectorAll(".products-price");

    if (selectedCurrency === "MXN") {
      // Si la moneda seleccionada es MXN, restaura los precios originales en MXN
      prices.forEach((price, index) => {
        price.textContent = `MXN ${pricesInMXN[index].toFixed(2)}`;
      });
    } else {
      // Si la moneda seleccionada es diferente de MXN, convierte los precios a esa moneda
      prices.forEach((price, index) => {
        const priceInMXN = pricesInMXN[index]; // Obtiene el precio original en MXN
        const convertedPrice = priceInMXN / conversionRate; // Calcula el precio convertido
        price.textContent = `${selectedCurrency} ${convertedPrice.toFixed(2)}`; // Actualiza el precio en el HTML
      });
    }
  }

  // Evento para cargar la imagen de la bandera y actualizar los precios cuando se carga la página
  window.addEventListener("load", updateFlagAndPrices);

  // Evento para cambiar la imagen de la bandera y actualizar los precios cuando se selecciona una nueva moneda
  currencySelector.addEventListener("change", updateFlagAndPrices);
});

document.addEventListener("DOMContentLoaded", function () {
    const currencySelector = document.getElementById("currency-selector");
    const flagImg = document.getElementById("flag-img");
    const pricesInMXN = []; // Almacena los precios originales en MXN
    let currentCurrency = "MXN"; // Almacena la moneda actual seleccionada
  
    // Guarda los precios originales en MXN
    document.querySelectorAll(".products-price").forEach((price) => {
      pricesInMXN.push(parseFloat(price.textContent.replace(/[^\d.]/g, "")));
    });
  
    // Factor de conversión para otras monedas
    const conversionRates = {
      MXN: 1,
      USD: 0.060,
      EUR: 0.055,
    };
  
    function updateCartTotal() {
        const selectedCurrency = currencySelector.value;
        const conversionRate = conversionRates[selectedCurrency];
        const totalAmountElement = document.getElementById("carrito-total-amount");
        let currentTotalAmount = parseFloat(totalAmountElement.textContent.replace(/[^\d.]/g, ""));
        
        // Si la moneda seleccionada es diferente de la moneda actual, convierte el total
        if (selectedCurrency !== currentCurrency) {
          // Primero, convertimos el total actual a la moneda base (MXN)
          currentTotalAmount /= conversionRates[currentCurrency];
          // Luego, aplicamos el factor de conversión a la nueva moneda
          currentTotalAmount *= conversionRate;
          currentCurrency = selectedCurrency; // Actualiza la moneda actual seleccionada
        } else {
          // Si no hay cambio de moneda, simplemente mostramos el total actual
          currentTotalAmount /= conversionRates[currentCurrency];
        }
        
        totalAmountElement.textContent = `${selectedCurrency} ${currentTotalAmount.toFixed(2)}`;
      }
      
  
    // Evento para actualizar el total del carrito cuando se carga la página
    window.addEventListener("load", updateCartTotal);
  
    // Evento para actualizar el total del carrito cuando se cambia la moneda en el modal
    currencySelector.addEventListener("change", updateCartTotal);
  });
  