require('cypress-xpath')

let tiempo = 1000
class InicioSesionPageObject{

    elementos={
        nombre_usuario:() => cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input'),
        constrasena:()=> cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input'),
        boton_login:()=> cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button')
    }


    VisitarPagina(){
        cy.wait(tiempo)
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
    }
    
    InicioSesion(usuario,constrasena){
        cy.wait(tiempo)
       this.elementos.nombre_usuario().should('be.visible').type(usuario)
       cy.wait(tiempo)
       this.elementos.constrasena().should('be.visible').type(constrasena)
       cy.wait(tiempo)
       this.elementos.boton_login().should('be.visible').click()
    }

    contiene_pagina(){
        cy.url().should("contains", "/index.php")
    }


}

export default InicioSesionPageObject