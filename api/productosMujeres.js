const baseUrl = 'https://truly-trusted-ostrich.ngrok-free.app';
//const baseUrl = 'http://localhost:3001';
const productosMujeres = {

    onInit: () => {
        productosMujeres.getProduct();
    },
    getBaseUrl: () => {
        return baseUrl;
    },
    getProduct: (event) => {
        id = productosMujeres.obtenerParametroURL("id");
        fetch(`${baseUrl}/api/v1/products/${id}`,{
            method:"GET",
            headers: {
                "ngrok-skip-browser-warning": "123456",
                "user-agent": "PostmanRuntime/7.26.8",
            }
        })
        .then(res => {
            return res.json();
        })
        .then(json => {
            console.log('PRODUCTO');
            console.log(json);
            productosMujeres.llenarProduct(json);
        })
        .catch(error => console.log('Error: ', error));
    },
    llenarProduct: (product) => {
        detalleProducto = document.getElementById('detalleProducto');
        const id = product.id;
        const title = product.title;
        const price = product.price;
        const image = product.images[0];
        const description = product.description;
        let productoContent = '';
            
        productoContent += `
        <div class="products-container">
        <div class="card-wrapper">
          <div class="card">
            <!-- card left -->
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
                <div class="img-item">
                  <a href="#" data-id="1">
                    <img src="${image}.jpg"/>
                  </a>
                </div>
                <div class="img-item">
                  <a href="#" data-id="2">
                    <img src="${image}.jpg"/>
                  </a>
                </div>
                <div class="img-item">
                  <a href="#" data-id="3">
                    <img src="${image}.jpg"/>
                  </a>
                </div>
                <div class="img-item">
                  <a href="#" data-id="4">
                    <img src="${image}.jpg"/>
                  </a>
                </div>
              </div>
            </div>
            <!-- card right -->
            <div class="product-content">
              <h2 class="product-title">${title}</h2>
        
              <div class="product-price">
                <p class="new-price">MXN $${price}</p>
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
    
        detalleProducto.innerHTML = productoContent;
        productosMujeres.addListenersOnImages();
    },
    //funcion para obtener el parametro de la url
    obtenerParametroURL(parametro) {
        const url = new URL(window.location.href);
        return url.searchParams.get(parametro);
    },
      
    obtenerDescripcionProducto(nombreProductoH) {
        switch (nombreProducto) {
            case "Falda Blanca":
                return "Camiseta blanca de punto con manga abullonada";
            case "producto2":
                return "Descripcion del producto 2 HAHA";          
            default:
                return "Descripcion del producto desconocido.";
        }
    },
    addListenersOnImages: () => {
        const imgs = document.querySelectorAll('.img-select a');
        const imgBtns = [...imgs];
        let imgId = 1;
        
        imgBtns.forEach((imgItem) => {
            imgItem.addEventListener('click', (event) => {
                event.preventDefault();
                imgId = imgItem.dataset.id;
                productosMujeres.slideImage(imgId);
            });
        });
        window.addEventListener('resize', productosMujeres.slideImage);
    },
    slideImage(id){
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;    
        document.querySelector('.img-showcase').style.transform = `translateX(${- (id - 1) * displayWidth}px)`;
    }        
}

productosMujeres.onInit();