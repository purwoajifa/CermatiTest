describe('Test Ebay', () => {
	//This code is to verify the filter in search page
  it('Product Category', () => {
	// This code mostly use contains command cause there are no specific tag class in the page
    cy.visit('https://ebay.com')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#gh-shop-a').click();
	cy.contains('Cell phones & accessories').click();
	cy.contains('Cell Phones & Smartphones').click();
	cy.contains('button','Condition').click();
	cy.contains('label','New').click();
	cy.contains('button','Price').click();
	cy.contains('label','Under').click();
	// Verify the filter by the text of how much filter used
	cy.get('.filter-button').first().should('have.text', '2 filters applied');
    /* ==== End Cypress Studio ==== */
  })

	const txt = 'macbook';
  /* ==== Test Created with Cypress Studio ==== */
  // This code is to verify search result
  it('Product Search', function() {
    /* ==== Generated with Cypress Studio ==== */
	// Cause the tag is specified, we can get all elements
    cy.visit('www.ebay.com');
    cy.get('#gh-ac').clear('m');
    cy.get('#gh-ac').type(txt);
    cy.get('#gh-cat').select('58058');
    cy.get('#gh-btn').click();
	cy.wait(1000);
	// Verify the page load by element result
	cy.get('[class*="srp-results"]').should('be.visible');
	// Verify the search result by using text
	cy.get('[class*="s-item__title"]').find('span').eq(2).should('include.text','MacBook');
    /* ==== End Cypress Studio ==== */
  });
})