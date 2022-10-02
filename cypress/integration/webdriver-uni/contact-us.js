/// <reference types="Cypress" />


describe("Test Contact Us from via WebDriverUni", () => {

    it("Should be able to submit a successful submission vis contat us form", () => {
        // code
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
      //  cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Buking")
        cy.get('[name="email"]').type("Joe@yahoo.com")
        cy.get('[name="message"]').type("Hello there!")
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');

    });

    // unhappy path 

    it("Should be NOT able to submit a successful submission vis contat us form", () => {
        // code
        cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
      //  cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("Buking")
        cy.get('[name="message"]').type("Hello there!")
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
       // cy.get('body').should('have.text', 'Error: all fields are required');

    });


    it("Overcome New WebPage opening", () => {
    
      cy.visit("https://www.webdriveruniversity.com");
      cy.get('#contact-us').invoke('removeAttr', 'target').click();
      cy.get('[name="first_name"]').type("Joe")
      cy.get('[name="last_name"]').type("Buking")
      cy.get('[name="email"]').type("Joe@yahoo.com")
      cy.get('[name="message"]').type("Hello there!")
      cy.get('[type="submit"]').click();
      cy.get('h1').should('have.text', 'Thank You for your Message!');
   
  });

  it("BROWSER TAP Should be NOT able to submit a successful submission vis contat us form", () => {
    // code
    cy.visit("https://www.webdriveruniversity.com");
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    cy.get('[name="first_name"]').type("Joe")
    cy.get('[name="last_name"]').type("Buking")
    cy.get('[name="message"]').type("Hello there!")
    cy.get('[type="submit"]').click();
    cy.get('body').contains('Error: all fields are required');
   // cy.get('body').should('have.text', 'Error: all fields are required');

});




})