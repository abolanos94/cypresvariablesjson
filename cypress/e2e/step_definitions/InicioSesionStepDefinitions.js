
import InicioSesionPageObject from '../../support/page_object_model/InicioSesionPageObject.cy'

import{
    Given,
    When,
    Then,
}from "@badeball/cypress-cucumber-preprocessor";

const master = new InicioSesionPageObject()

Given('que estamos en un navegador en la pagina de orangeHRM',()=>{
    master.VisitarPagina()
})

When('La persona digita el usuario, contrasena y da clic en el boton login',()=>{
    cy.fixture('loginData').then((loginData)=>{
    master.InicioSesion(loginData.usuario,loginData.contrasena)
    })        
})

Then('La persona ingresa correctamente a la pagina',()=>{
    master.contiene_pagina()

})

