

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
        fetch('https://fakestoreapi.com/users',{
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
            window.location.href='home.html';   
        })
        .catch(error => console.log('Error: ', error));
    },
    
    updateUser: (params) => {        
        console.log(params);
        // Update user in database
        fetch('https://fakestoreapi.com/users',{
            method:"PUT",
            body:JSON.stringify(
                {
                    email: email,
                    username: username,
                    password: password,
                    name:{
                        firstname:name,
                        lastname:'lastname'
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
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch(error=>console.log('Error: ', error));
        res.status(200).json({ message: 'User updated' });
    },

    deleteUser: (params) => {
        console.log(params);
        fetch('https://fakestoreapi.com/users',{
            method:"DELETE",
            body:JSON.stringify(
                {
                    user: username
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch(error=>console.log('Error: ', error));
        res.status(200).json({ message: 'User deleted' });
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
            alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        });
    }
}
    