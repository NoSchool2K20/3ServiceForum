  import {
    setRoutes
  } from "../utils/routes.spec";
  
  
  describe('Test forum', function () {
    beforeEach(function () {
        cy.visit('http://localhost:8000');
      cy.clearCookies();
      setRoutes();


    });

    it ('user scenarii', function () {
        cy.wait(5000);

        cy.get('.message > .texte')
        .type('Test Message Cypress');
        cy.get('.message > button')
        .click();

        cy.wait(5000);

        cy.get('.content-main')
        .contains('Test Message Cypress')
        .should('exist');
        cy.get('.info > .likeimg')
        .first()
        .click();

        cy.get('.info > .likes')
        .contains('1')
        .should('exist');
        
        cy.get('.info > .likeimg')
        .first()
        .click();


        cy.get('.info > .likes')
        .contains('0')
        .should('exist');
        
        cy.get('.info > .delimg')
        .first()
        .click();

        cy.get('.content-main')
        .contains('Test Message Cypress')
        .should('not.exist');
    });

  
  });
  