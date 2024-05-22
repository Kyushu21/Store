
const baseUrl = 'https://truly-trusted-ostrich.ngrok-free.app';
//const baseUrl = 'http://localhost:3001';

const loginApi = {
    onInit: () => {
        
    },
    getBaseUrl: () => {
        return baseUrl;
    },
    registerUser: (event) => {
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
            headers: {
                "ngrok-skip-browser-warning": "123456",
                "user-agent": "PostmanRuntime/7.26.8",
            },
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
            console.log(json);  
            alert('Usuario registrado'); 
            window.location.href='home.html';   
        })
        .catch(error => {
            
        });
    },
        
    loginUser: (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const email = form.get('username');
        const password = form.get('password');

        fetch(`${baseUrl}/api/v1/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {
                "ngrok-skip-browser-warning": "123456",
                "user-agent": "PostmanRuntime/7.26.8",
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                //TODO: add alert to show error
                throw new Error('Login failed');
            }
        })
        .then(json => {        
            console.log('refresh token ', json.access_token);
            console.log('access token ', json.refresh_token);
            localStorage.setItem('access_token', json.access_token);
            localStorage.setItem('refresh_token', json.refresh_token);
            isLoggedIn = true;
            window.location.href='home.html';
        })
        .catch(error => {
            console.log('Error: ', error);
            alert('Error al iniciar sesión. Por favor, verifica tus credenciales.');
        });
    }
}

loginApi.onInit();
    