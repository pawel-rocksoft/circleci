describe('My First Test', () => {
    it('does test orders', () => {
        cy.visit('https://www.horze.de/vollbesatzreithosen-fuer-damen/horze-tara-vollbesatzreithose-mit-silikon-grip-und-hohem-bund/36091.html#color=BL')
        cy.get('.ab-sticky-cta__original-cta > .col > .btn').click({ force:true })
        cy.get('[data-size="34_WOMENSBREECHES"]').click({ force:true })
        cy.get('.shopping-header-dropdown-js > .c-header__pill').click()
        cy.get('.d-flex > :nth-child(2) > .btn').click()
        cy.get('.cart-asguest-btn-js').click({ force: true })
        cy.title().should('eq', 'Warenkorb | horze.de')
        cy.location('protocol').should('eq', 'https:')
        cy.go('back')
        cy.get('.d-flex > :nth-child(2) > .btn').click()
        cy.get("input[name='username']").type('pawel.sikora@test9.horze.com')
        cy.get('.offset-lg-1 > .mb-10 > :nth-child(2) > .c-custom-field__input').type('test123')
        cy.contains('input', 'Anmelden').click()
        


        






       
        






    




    
        
       
   
    })
})