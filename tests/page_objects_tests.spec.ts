import { test } from "@playwright/test";
import { LoginPage } from "../pages/login_page";
import { v } from "@faker-js/faker/dist/airline-D6ksJFwG";
//page_objects_tests.spec.ts
test("Test Page Objects", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.openPmtool();
  await loginPage.fillUsername("pw_skoleni");
  await loginPage.fillPassword("TEG2023");
  await loginPage.clickLogin();
});
