class Login {    
    //Ejecutando funciones
    btnIniciarSesion =null;
    btnRegistrarse = null;
    
    //Declarando variables
    formularioLogin = null;
    formularioRegister = null;
    contenedorLoginRegister = null;
    cajaTraseraLogin = null;
    cajaTraseraRegister = null;
    
    constructor() {        
        this.btnIniciarSesion = document.getElementById("btn__iniciar-sesion").addEventListener("click", this.iniciarSesion);
        this.btnRegistrarse = document.getElementById("btn__registrarse").addEventListener("click", this.register);                
        this.anchoPage();        
        //this.anchoPage.bind(this);
        window.addEventListener("resize", this.anchoPage());
    }
    
    anchoPage(){

        this.formularioRegister = document.querySelector(".formulario__register");
        this.contenedorLoginRegister = document.querySelector(".contenedor__login-register");
        this.formularioLogin = document.querySelector(".formulario__login");        
        this.cajaTraseraRegister = document.querySelector(".caja__trasera-register");        
        this.cajaTraseraLogin = document.querySelector(".caja__trasera-login");

        if (window.innerWidth > 850){
            this.cajaTraseraRegister.style.display = "block";
            this.cajaTraseraLogin.style.display = "block";
        }else{
            this.cajaTraseraRegister.style.display = "block";
            this.cajaTraseraRegister.style.opacity = "1";
            this.cajaTraseraLogin.style.display = "none";
            this.formularioLogin.style.display = "block";
            this.contenedorLoginRegister.style.left = "0px";
            this.formularioRegister.style.display = "none";   
        }
    }

    iniciarSesion(){

        this.formularioRegister = document.querySelector(".formulario__register");
        this.contenedorLoginRegister = document.querySelector(".contenedor__login-register");
        this.formularioLogin = document.querySelector(".formulario__login");        
        this.cajaTraseraRegister = document.querySelector(".caja__trasera-register");        
        this.cajaTraseraLogin = document.querySelector(".caja__trasera-login");

        if (window.innerWidth > 850){
            this.formularioLogin.style.display = "block";
            this.contenedorLoginRegister.style.left = "10px";
            this.formularioRegister.style.display = "none";
            this.cajaTraseraRegister.style.opacity = "1";
            this.cajaTraseraLogin.style.opacity = "0";
        }else{
            this.formularioLogin.style.display = "block";
            this.contenedorLoginRegister.style.left = "0px";
            this.formularioRegister.style.display = "none";
            this.cajaTraseraRegister.style.display = "block";
            this.cajaTraseraLogin.style.display = "none";
        }
    }

    register(){
        this.formularioRegister = document.querySelector(".formulario__register");
        this.contenedorLoginRegister = document.querySelector(".contenedor__login-register");
        this.formularioLogin = document.querySelector(".formulario__login");        
        this.cajaTraseraRegister = document.querySelector(".caja__trasera-register");        
        this.cajaTraseraLogin = document.querySelector(".caja__trasera-login");

        if (window.innerWidth > 850){
            this.formularioRegister.style.display = "block";
            this.contenedorLoginRegister.style.left = "410px";
            this.formularioLogin.style.display = "none";
            this.cajaTraseraRegister.style.opacity = "0";
            this.cajaTraseraLogin.style.opacity = "1";
        }else{
            this.formularioRegister.style.display = "block";
            this.contenedorLoginRegister.style.left = "0px";
            this.formularioLogin.style.display = "none";
            this.cajaTraseraRegister.style.display = "none";
            this.cajaTraseraLogin.style.display = "block";
            this.cajaTraseraLogin.style.opacity = "1";
        }
    }
}

new Login();