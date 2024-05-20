// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('removeClass', ()=> {
    cy.get('#topBanner-slide-v2').children('div').eq(1).then( removeClass => {
        removeClass.removeAttr('class')
      })
      cy.get('#topBanner-slide-v2').children('div').eq(2).then( removeClass => {
        removeClass.removeAttr('class')
      })
      cy.get('#topBanner-slide-v2').children('div').eq(3).then( removeClass => {
        removeClass.removeAttr('class')
      })
      cy.get('#topBanner-slide-v2').children('div').eq(4).then( removeClass => {
        removeClass.removeAttr('class')
      })
      cy.get('#topBanner-slide-v2').children('div').eq(5).then( removeClass => {
        removeClass.removeAttr('class')
      })
      cy.get('#topBanner-slide-v2').children('div').eq(6).then( removeClass => {
        removeClass.removeAttr('class')
      })
      cy.get('#topBanner-slide-v2').children('div').eq(7).then( removeClass => {
        removeClass.removeAttr('class')
      })
      cy.get('#topBanner-slide-v2').children('div').eq(8).then( removeClass => {
        removeClass.removeAttr('class')
      })
      cy.get('#topBanner-slide-v2').children('div').eq(9).then( removeClass => {
        removeClass.removeAttr('class')
      })
})