
//const baseUrl = 'https://truly-trusted-ostrich.ngrok-free.app';
const baseUrl = 'http://localhost:3001';
const home = {
    onInit: () => {
        home.getCarusel();
        home.getCategories();
    },
    getBaseUrl: () => {
        return baseUrl;
    },
    getCarusel: (event) => {        
        fetch(`${baseUrl}/api/v1/products/?categoryId=5`,{
            method:"GET",  
            headers: {
                "ngrok-skip-browser-warning": "213212",
                mode: 'no-cors',
            }                                                 
        })
        .then(res => {      
            console.log(res);         
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(json => {
            console.log(json);
            home.llenarCarusel(json);
        })
        .catch(error => console.log('Error: ', error));
    },
    llenarCarusel: (array) => {
        // process the JSON    
        carousel = document.getElementById('carusel-home');
        
        let carouselContent = '';
        array.forEach(element => {
            console.log(element.images[0]);
            carouselContent += `
                <article class="home-article swiper-slide">
                <div class="home-data container">
                    <h3 class="home-subtitle" data-swiper-parallax="500">Tengen</h3>
                    <h1 class="home-title"data-swiper-parallax="400">"Renueva tu look, cada día".</h1>
                
                    <a href="#" class="home-button" data-swiper-parallax="300">
                    Comprar ahora <i class="ri-arrow-right-s-line"></i
                    ></a>
                </div>
                
                <img src="${element.images[0]}" alt="img" class="home-img"  />
                <div class="home-shadow"></div>
                </article>`;
        });
        carousel.innerHTML = carouselContent;
    },
    
}

home.onInit();
    