Feature: Inicio de sesion

    @Inicio_Exitoso
    Scenario: Login en la pagina orangeHRM
        Given que estamos en un navegador en la pagina de orangeHRM    
        When La persona digita el usuario, contrasena y da clic en el boton login
        Then La persona ingresa correctamente a la pagina
    