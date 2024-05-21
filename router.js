page()
page('/', (ctx) => {
  isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  isLoggedIn ? home(ctx) : page.redirect('/login')
})
page('/login', login)
page('/home', home)
page('mujer', mujer)
page('hombre', hombre)
//page('/user', user)
//page('/user/:username', user)
page('*', notfound)



function login() {
  window.location.href = 'login.html';
}

function home(ctx) {
  fetch('home.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('root').innerHTML = data;
      //new Login();      
    })
    .catch((error) => {
      console.error('Error al cargar el login', error);
    });    
}

function mujer() {
    fetch('productos-categorias/mujer.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('root').innerHTML = data;
        })
        .catch((error) => {
        console.error('Error al cargar mujeres:', error);
        });
}

function hombre() {
    fetch('productos-categorias/hombre.html')
        .then(response => response.text())
        .then(data => {
        document.getElementById('root').innerHTML = data;
        })
        .catch((error) => {
        console.error('Error al cargar hombres:', error);
        });
}

function notfound(ctx) {
  document.getElementById('root')
    .textContent = 'Viewing not found'
}