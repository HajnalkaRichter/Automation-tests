describe("Checkout flow", () => {
  const baseURL = "https://automationexercise.com/login";
  const email = "sajattest@gmail.com";
  const password = "fisgajkl";
  const deliverData = { name: "Mrs. Firstname Lastname", address: "364 Eglinton Avenue", city: "Toronto Ontario", country: "Canada", phone: "416-489-5185" };
  const cardDetails = { name: "User1", number: "1234 5678 9123 0000", cvc: "123", month: "12", year: "2025" };

  it("User should order without Error", () => {
    cy.visit(baseURL);

    cy.get("[data-qa='login-email']").type(email);
    cy.get("[data-qa='login-password']").type(password);
    cy.get("[data-qa='login-button']").click();

    cy.get(".features_items .col-sm-4").eq(0).contains("Add to cart").click();
    cy.get(".btn.btn-success.close-modal.btn-block").click();

    cy.get(".navbar-nav li").eq(2).click();
    cy.get(".btn.btn-default.check_out").click();

    cy.get("#address_delivery li").eq(1).should("contain", deliverData.name);
    cy.get("#address_delivery li").eq(3).should("contain", deliverData.address);
    cy.get("#address_delivery li").eq(5).should("contain", deliverData.city);
    cy.get("#address_delivery li").eq(6).should("contain", deliverData.country);
    cy.get("#address_delivery li").eq(7).should("contain", deliverData.phone);
    cy.get(".btn.btn-default.check_out").click();

    cy.get("[data-qa='name-on-card']").type(cardDetails.name);
    cy.get("[data-qa='card-number']").type(cardDetails.number);
    cy.get("[data-qa='cvc']").type(cardDetails.cvc);
    cy.get("[data-qa='expiry-month']").type(cardDetails.month);
    cy.get("[data-qa='expiry-year']").type(cardDetails.year);
    cy.get("#submit").click();

    cy.get("[data-qa='order-placed']").should("contain", "Order Placed!");
  });
});
