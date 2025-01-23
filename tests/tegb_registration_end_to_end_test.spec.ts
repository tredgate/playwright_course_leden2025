import { expect, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Register user in TEG#B and check API", async ({ page }) => {
  const username = faker.internet.username();
  const email = faker.internet.exampleEmail();
  const password = "123456";

  await page.route(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register",
    (route, request) => {
      // zde můžeme testovat samotný request
      console.log(request.postData());
      route.continue();
    }
  );

  await page.goto("https://tegb-frontend-88542200c6db.herokuapp.com/register");
  await page.locator("//input[@data-testid='username-input']").fill(username);
  await page.locator("//input[@data-testid='email-input']").fill(email);
  await page.locator("//input[@data-testid='password-input']").fill(password);
  //Zapínáme čekání na response (bez await - test bude pokračovat dál)
  const responsePromise = page.waitForResponse(
    "https://tegb-backend-877a0b063d29.herokuapp.com/tegb/register"
  ); // cy.intercept("register").as("request")
  await page.locator("//button[@data-testid='submit-button']").click();

  // po kliknutí počkáme na dokončení čekání na response
  const response = await responsePromise; // cy.wait("@request")

  const responseBody = await response.json();
  expect(responseBody.username).toBe(username);
  expect(responseBody.email).toBe(email);
  expect(responseBody.userId).toBeDefined();
  expect(typeof responseBody.userId).toBe("number");
  expect(responseBody.updatedAt).toBe(null);
  expect(typeof responseBody.active).toBe("number");
});
