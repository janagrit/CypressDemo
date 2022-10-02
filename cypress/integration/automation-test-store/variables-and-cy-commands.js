/// <reference types="Cypress" />


describe("Verif variables, cypress commands, jquery commands", () => {

    it("Click on the first item", () => {
    cy.visit("https://www.automationteststore.com/");
    //The following will fail
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    // skincareLink.click();
    // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    // makeupLink.click();
    

    //The following will pass
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    // makeupLink.click();
    // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    // skincareLink.click();

    //Recommended Approach
    cy.get("a[href*='product/category&path=']").contains("Skincare").click()
    cy.get("a[href*='product/category&path=']").contains("Makeup").click()

    });

    it("Function test", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        // const header = cy.get("h1 .maintext");
        // cy.log(header)
        
        // cy.get("h1 .maintext").then(($headerText) => {
        //     const headertext = $headerText.text()
        //     cy.log("Found text: "+ headertext)
        //     expect(headertext).is.eq('Makeup')
        // })

        cy.get('h1 .maintext').then(function(itemHeaderText){
            cy.log("Selected the following items: " + itemHeaderText.text())
            expect(itemHeaderText.text()).equal('Makeup')
        })

        })


        it.only("Contact Us Form Test", () => {
            cy.visit("https://automationteststore.com/index.php?rt=content/contact");

            //cypress commands 
           cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:');


            //JQuery commands 
            // cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            //     const firstName = text.find('#field_11').text()
            //     expect(firstName).to.contain('First name')

            //      // Embedded command 
            //         cy.get('#field_11').then(fntext =>{
            //         cy.log(fntext.text())
            //         cy.log()
            // })
            // })

           
    
            })
        
           

})