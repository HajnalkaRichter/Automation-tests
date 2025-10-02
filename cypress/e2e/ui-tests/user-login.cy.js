describe("Login", () => {
  const baseURL = "https://automationexercise.com/login";
  const email = "sajattest@gmail.com";
  const password = "fisgajkl";

  it("User should login without Error", () => {
    cy.visit(baseURL);

    cy.get("[data-qa='login-email']").type(email);
    cy.get("[data-qa='login-password']").type(password);
    cy.get("[data-qa='login-button']").click();
    cy.contains("Logged in as User1").should("be.visible");
    cy.get(".navbar-nav li").eq(3).should("contain", `Logout`);

    cy.contains("Logout").click();
  });
});
