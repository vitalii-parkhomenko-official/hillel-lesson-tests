describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.intercept('GET', 'https://dummyjson.com/products').as('products')

    cy.visit('http://localhost:3000/products') // change URL to match your dev URL

    cy.wait('@products');

    cy
      .get("div[data-testid=\"item-card\"]")
      .should("have.length", 30);

    cy
      .get("[data-testid=\"input-base\"]")
      .type("Some search text")

    // cy
    //   .get("[data-testid=\"link\"]")
    //   .eq(2)
    //   .click();
  });
});
