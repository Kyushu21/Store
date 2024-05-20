let isLoggedIn = false;
page('/', (ctx) => isLoggedIn ? home(ctx) : page.redirect('/login'))
page('/login', login)
page('/home', home)
//page('/user', user)
//page('/user/:username', user)
//page('*', notfound)
page()

// function user(ctx) {
//   document.getElementById('message')
//     .textContent = `Viewing user 
//   ${ctx.params.username || ''}`
// }

// function notfound(ctx) {
//   document.getElementById('message')
//     .textContent = 'Viewing not found'
// }

function login() {
  fetch('login.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('root').innerHTML = data;
      new Login();
      //isLoggedIn = true;
    })
    .catch((error) => {
      console.error('Error al cargar el login:', error);
    });
}

function home() {
    // fetch('home.html')
    //     .then(response => response.text())
    //     .then(data => {
    //     document.getElementById('root').innerHTML = data;
    //     })
    //     .catch((error) => {
    //     console.error('Error al cargar el home:', error);
    //     });
        page.redirect('/home')
    }