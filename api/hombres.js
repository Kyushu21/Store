
//const baseUrl = 'https://truly-trusted-ostrich.ngrok-free.app';
const baseUrl = 'http://localhost:3001';
const hombres = {
    onInit: () => {
        hombres.getCarusel();
        hombres.getCategories();
    },
    getBaseUrl: () => {
        return baseUrl;
    },
    getCarusel: (event) => {        
        fetch(`${baseUrl}/api/v1/products/?categoryId=3`,{
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            }                                    
        })
        .then(res => {            
            return res.json();
        })
        .then(json => {
            console.log(json);
            hombres.llenarCarusel(json);
        })
        .catch(error => console.log('Error: ', error));
    },
    llenarCarusel: (array) => {
        // process the JSON    
        carousel = document.getElementById('carouselh');
        
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
        fetch(`${baseUrl}/api/v1/products/?categoryId=6`,{
            method:"GET",  
            headers: {
                'Content-Type': 'application/json'
            }                                                  
        })
        .then(res => {      
            // console.log(res);         
            // if (!res.ok) {
            //     throw new Error('Network response was not ok');
            // }
            return res.json();
        })
        .then(json => {  
            console.log(json);          
            hombres.llenarCategories(json);
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
    }
}

hombres.onInit();
    