export const setRoutes = function () {
    return cy.server()
      .route('GET', '*/message?cours=').as('getMessages')
      .route('POST', '*/message').as('sendMessage');
};