

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
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
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
            alert('Usuario registrado');    
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
        //const { email } = params.body;
        console.log(params);
        // Delete user from database
        fetch('https://fakestoreapi.com/users',{
            method:"DELETE",
            body:JSON.stringify(
                {
                    email: email
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch(error=>console.log('Error: ', error));
        res.status(200).json({ message: 'User deleted' });
    }

}