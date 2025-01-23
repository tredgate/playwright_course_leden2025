import test from "@playwright/test";
import { LoginPageFluent } from "../pages/fluent/login_page_fluent";

test("Fluent API PMTool login and logout", async ({ page }) => {
  const pmTool = new LoginPageFluent(page);
  await pmTool
    .openPmtool()
    .then((loginPage) => loginPage.fillUsername("pw_skoleni"))
    .then((loginPage) => loginPage.fillPassword("TEG2023"))
    .then((loginPage) => loginPage.clickLogin())
    .then((homePage) => homePage.clickProfile())
    .then((homePage) => homePage.clickLogout());
});
