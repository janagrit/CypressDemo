/// <reference types="cypress" />

describe("Alias and invoke", () => {

    it("Validate a specific hair care product", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

      cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThum')
      cy.get('@productThum').its('length').should('be.gt', 5)
      cy.get('@productThum').should('include', 'Seaweed Conditioner')
    });

    it("Validate a specific hair care product", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

      cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThum')
      cy.get('@productThum').its('length').should('be.gt', 5)
      cy.get('@productThum').should('include', 'Seaweed Conditioner')
    });


it.only("Calculate total of normal and sale products", () => {
      cy.visit("https://automationteststore.com/");
      cy.get('.thumbnail').as('thumbnailProduct');
      // cy.get('@thumbnailProduct').find('.oneprice').each(($el, index, $list) =>{
      //   cy.log("Index: " + index + ": "+$el.text())
      // })
      cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')           // NON SALE
      cy.get('.thumbnail').find('.pricenew').invoke('text').as('itemPriceOnSale')     // SALE 

      var total = 0;
      cy.get('@itemPriceOnSale').then($linkText =>{
        var itemPriceOnSale = $linkText.split('$');
      
        var i;
        for (let i = 0; i < itemPriceOnSale.length; i++) {
          cy.log("SALE price: "+ itemPriceOnSale[i])
          total+=Number(itemPriceOnSale[i])
        }
        cy.log("TotalOnSale "+ total)
      })



      cy.get('@itemPrice').then($linkText =>{
        //create an array:
        var itemPrice = $linkText.split('$');
        var totalNonSale = 0
        var i;
        for (let i = 0; i < itemPrice.length; i++) { 
          cy.log(itemPrice[i])
          total+=Number(itemPrice[i])
          totalNonSale+=Number(itemPrice[i])
        
        }
        cy.log("NON sale price total:" + totalNonSale)
        cy.log(total)
      })
      .then(() =>{
        cy.log("The total amount of prices: " + total)
        expect(total).to.equal(685.6)
      })

    })


  });
  