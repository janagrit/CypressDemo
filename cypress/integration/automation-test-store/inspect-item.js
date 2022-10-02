/// <reference types="Cypress" />


describe("Ispect the Chain Commands", () => {

    it("Click on the first item", () => {
        // code
        cy.visit("https://www.automationteststore.com");
        cy.get("[title='Skinsheen Bronzer Stick']").click();
    });

    it("Click on the first item using item text", () => {
        // code
        cy.visit("https://www.automationteststore.com");
     //   cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()
    });



    it.only("Click on the first item using item text", () => {
        // code
        cy.visit("https://www.automationteststore.com");
     //   cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("Selected the following items: " + itemHeaderText.text())
        })
    });



    it("Click on the first item using item text", () => {
        // code
        cy.visit("https://www.automationteststore.com");
     //   cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    });

})


