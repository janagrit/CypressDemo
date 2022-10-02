/// <reference types="Cypress" />


describe("Test Contact Us from via Automation Test Store", () => {

    it("Should be able to submit a successful submittion via contact us form", () => {
        // code
        cy.visit("https://www.automationteststore.com");
        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.get('[name="first_name"]').type("Yana");
        cy.get('#ContactUsFrm_email').type("hghgh@gmail.com");
        cy.get('[id="ContactUsFrm_enquiry"]').type("hello cypress");
        cy.get('[title="Submit"]').click();
  
    });

    
    it("using XPATH Should be able to submit a successful submittion via contact us form", () => {
      // code
      cy.visit("https://www.automationteststore.com");
      cy.xpath("//a[starts-with(text(), 'Cont')]").click();
      

  });

  it.only("using DYNAMIC selector Should be able to submit a successful submittion via contact us form", () => {
    
    cy.visit("https://www.automationteststore.com");
    cy.get("a[href$='contact']").click().then(function(item){
        cy.log("Text is: " + item.text())
    });
    cy.get('[name="first_name"]').type("Yana");
    cy.get('#ContactUsFrm_email').type("hghgh@gmail.com");
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
    cy.get("[id$='enquiry']").type("hello cypress");
    cy.get("[title='Submit']").click();
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    cy.log("Test has completed")

});





})