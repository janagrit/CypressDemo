/// <reference types="cypress" />



describe("Test length and no of products", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.thumbnail').as('thumbnailProduct');
    cy.get('@thumbnailProduct').should('have.length', 16) 
    cy.get('@thumbnailProduct').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart');
    // cy.get('@productCart').contains('Add to Cart')

     
  
})

})