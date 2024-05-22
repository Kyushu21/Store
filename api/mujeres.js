
const baseUrl = 'https://truly-trusted-ostrich.ngrok-free.app';
//const baseUrl = 'http://localhost:3001';
const mujeres = {
    onInit: () => {
        mujeres.getCarusel();
        mujeres.getCategories();
        mujeres.getProducts();
    },
    getBaseUrl: () => {
        return baseUrl;
    },
    getCarusel: (event) => {        
        fetch(`${baseUrl}/api/v1/products/?categoryId=4`,{
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
            console.log(json);
            mujeres.llenarCarusel(json);
        })
        .catch(error => console.log('Error: ', error));
    },
    llenarCarusel: (array) => {
        // process the JSON    
        carousel = document.getElementById('carouselm');
        
        let carouselContent = '';
        array.forEach((element, index) => {
        console.log(element.images[0]);
        carouselContent += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
              <img src="${element.images[0]}" class="d-block w-100" alt="...">
            </div>            
            `;
        });
        carousel.innerHTML = carouselContent;
    },
    getCategories: (event) => {
        fetch(`${baseUrl}/api/v1/products/?categoryId=7`,{
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
            console.log(json);          
            mujeres.llenarCategories(json);
        })
        .catch(error => console.log('Error: ', error));
    },
    llenarCategories: (array) => {
        categorias = document.getElementById('categorias');
        
        let categoriasContent = '';
        array.forEach(element => {
            console.log(element.images[0]);
            categoriasContent += `
            <div class="product-container">
                <div class="product-image-wrapper">
                  <img src="${element.images[0]}" alt="product-image" class="product-image">
                </div>
                <div class="product-info-container">
                  <h3>${element.title}</h3>
                </div>
            </div>
            `;
        });
        categorias.innerHTML = categoriasContent;
    },
    getProducts: (event) => {
        fetch(`${baseUrl}/api/v1/products/?categoryId=9`,{
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
            console.log('PRODUCTOS');
            console.log(json);
            mujeres.llenarProducts(json);
        })
        .catch(error => console.log('Error: ', error));
    },
    llenarProducts: (array) => {
        productos = document.getElementById('productos');
        
        let productosContent = '';
        array.forEach(element => {
            console.log(element.images[0]);
            productosContent += `
            <div class="clothes-cards">
              <div class="image-clothes">
                <img src="${element.images[0]}" />
              </div>
              <div class="title-clothes">
                <h2>${element.title}</h2>
              </div>
              <div class="description-clothes">
                <p>MXN $${element.price}</p>
                <button onclick="mujeres.verProducto('${element.id}')"class="buttonVermas">
                  Ver
                </button>
              </div>
            </div>                                                                        
            `;
        });
        productos.innerHTML = productosContent;
    },
    verProducto(id) {
        window.location.href = `productoH.html?id=${id}`;
    }
}

mujeres.onInit();
    