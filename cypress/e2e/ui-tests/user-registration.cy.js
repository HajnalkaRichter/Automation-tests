describe("User Registration", () => {
  function getrandomnumber() {
    return Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
  }

  const baseURL = "https://automationexercise.com/login";
  const username = `user${getrandomnumber()}`;
  const email = `user${getrandomnumber()}@gmail.com`;
  const password = "password123";
  const data = {
    days: "3",
    months: "December",
    years: "1998",
    firstName: "Firstname",
    lastName: "Lastname",
    address: "364 Eglinton Avenue",
    country: "Canada",
    state: "Ontario",
    city: "Toronto",
    zipcode: "M4P 1A6",
    mobileNumber: "416-489-5185",
  };

  it("User should signup without Error", () => {
    cy.visit(baseURL);

    cy.get("[data-qa='signup-name']").type(username);
    cy.get("[data-qa='signup-email']").type(email);
    cy.get("[data-qa='signup-button']").click();

    cy.get("#id_gender1").click();
    cy.get("#id_gender2").click();

    cy.get("[data-qa='name']").should("have.value", username);
    cy.get("[data-qa='password']").type(password);
    cy.get("[data-qa='days']").select(data.days);
    cy.get("[data-qa='months']").select(data.months);
    cy.get("[data-qa='years']").select(data.years);

    cy.get("#newsletter").click();
    cy.get("#optin").click();

    cy.get("[data-qa='first_name']").type(data.firstName);
    cy.get("[data-qa='last_name']").type(data.lastName);
    cy.get("[data-qa='address']").type(data.address);
    cy.get("[data-qa='country']").select(data.country);
    cy.get("[data-qa='state']").type(data.state);
    cy.get("[data-qa='city']").type(data.city);
    cy.get("[data-qa='zipcode']").type(data.zipcode);
    cy.get("[data-qa='mobile_number']").type(data.mobileNumber);

    cy.get("[data-qa='create-account']").click();

    cy.get("[data-qa='account-created']").should("contain", "Account Created!");

    cy.get("[data-qa='continue-button']").click();

    cy.get(".navbar-nav li").eq(3).should("contain", `Logout`).click();
  });
});
