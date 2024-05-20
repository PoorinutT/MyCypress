import rgbHex from 'rgb-hex';

describe('Automated UI', () => {

  beforeEach('', ()=>{
    cy.visit('https://shop.line.me')
    cy.wait(2000)
    cy.removeClass()
  })

  it('Step 1', () => {
    // Verify URL = https://shop.line.me/home/
    cy.url().should('eq', 'https://shop.line.me/home/')

    // Verify title font color = #000000
    cy.contains('[data-atd="app-header-text-title"]','LINE SHOPPING')
      .invoke('css', 'color').then( textColor => {
        expect(rgbHex(textColor)).to.eq('000000')
      })

    // Verify Placeholder text = ค้นหาสินค้าและร้านค้าในไลน์
    cy.get('[data-atd="searchbar-placeholder"]')
      .invoke('attr', 'placeholder')
      .should('eq', 'ค้นหาสินค้าและร้านค้าในไลน์')
      
    // Verify cart icon displayed on the top right
    cy.get('#cart-icon').parents('[slot="right"]').invoke('attr', 'class')
      .should('contain', 'right-slot')

    // Verify Home, Explore and MY should be at the buttom navigation bar
    cy.get('.navbar-bottom').parents('[data-atd="navigation-bar"]').invoke('attr', 'class')
      .should('contain', 'bottom-0')
    cy.get('.navbar-bottom').children('button').eq(0).invoke('attr', 'data-atd').should('contain','navigation-home')
    cy.get('.navbar-bottom').children('button').eq(2).invoke('attr', 'data-atd').should('contain','navigation-event')
    cy.get('.navbar-bottom').children('button').eq(3).invoke('attr', 'data-atd').should('contain','navigation-my')

    // Verify at least 1 banner displayed
    cy.get('#topBanner-slide-v2-0').should('be.visible')
  })

  it('Step 2', ()=>{
    // Verify all gift-zone name and logo
    cy.get('#gift-group-id-12')
      .should('contain', 'Birthday')
      .find('div img')
      .invoke('attr','src')
      .should('eq', 'https://vos.line-scdn.net/ect-mall/gift-group/2023-04-19/BD.png')
    cy.get('#gift-group-id-10')
      .should('contain', 'Top Gifts')
      .find('div img')
      .invoke('attr','src')
      .should('eq', 'https://vos.line-scdn.net/ect-mall/gift-group/top_gift2X.png')
    cy.get('#gift-group-id-1')
      .should('contain', 'For Her')
      .find('div img')
      .invoke('attr','src')
      .should('eq', 'https://vos.line-scdn.net/ect-mall/gift-group/her.png')
    cy.get('#gift-group-id-2')
      .should('contain', 'For Him')
      .find('div img')
      .invoke('attr','src')
      .should('eq', 'https://vos.line-scdn.net/ect-mall/gift-group/him.png')
    cy.get('#gift-group-id-3')
      .should('contain', 'Mom & Kids')
      .find('div img')
      .invoke('attr','src')
      .should('eq', 'https://vos.line-scdn.net/ect-mall/gift-group/mom.png')
    cy.get('#gift-group-id-4')
      .should('contain', 'Seniors')
      .find('div img')
      .invoke('attr','src')
      .should('eq', 'https://vos.line-scdn.net/ect-mall/gift-group/senior.png')
    cy.get('#gift-group-id-5')
      .should('contain', 'Couples')
      .find('div img')
      .invoke('attr','src')
      .should('eq', 'https://vos.line-scdn.net/ect-mall/gift-group/couple.png')
    cy.get('#gift-group-id-6')
      .should('contain', 'Pets Lovers')
      .find('div img')
      .invoke('attr','src')
      .should('eq', 'https://vos.line-scdn.net/ect-mall/gift-group/pet.png')
  })

  it('Step 3', ()=> {
    cy.get('[data-atd="gift-group-header-light"]').children('[data-atd="see-all-button"]').click()
    cy.url().should('contain', '/gift-zone')
    cy.get('[data-atd="event-share-button"]').should('be.visible')
  })
})