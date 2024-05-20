
const baseUrl = 'https://api.escuelajs.co/api/v1/auth/login';
const users = {

    addUser: (event) => {
        event.preventDefault();
        //TODO validate form
        const form = new FormData(event.target);
        const name = form.get('name');
        const email = form.get('email');
        const user = form.get('username');
        const password = form.get('password');
        
        // Add user to database
        fetch(`${baseUrl}/users`,{
            method:"POST",
            
            body:JSON.stringify(
                {
                    email: email,
                    username: user,
                    password: password,
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
        .then(res => {            
            return res.json();
        })
        .then(json => {
            // process the JSON
            // this json is the response from the server
            // proceder a la pantalla incial
            alert('Usuario registrado'+ json.id); 
            window.location.href='index.html';   
        })
        .catch(error => {
            
        });
    },
        
    loginUser: (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const username = form.get('username');
        const password = form.get('password');

        fetch('https://fakestoreapi.com/auth/login', {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Login failed');
            }
        })
        .then(json => {
            console.log(json);
            alert('¡Inicio de sesión exitoso!');
            window.location.href='home.html';
        })
        .catch(error => {
            console.error('Error: ', error);


            // Crear un nuevo elemento div
            let modal = document.createElement('div');
            modal.innerHTML = `
            <div class="modal" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p>Modal body text goes here.</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Save changes</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            `;

// Añadir el div al cuerpo del documento
            document.body.appendChild(modal);
            alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        });
    }
}
    