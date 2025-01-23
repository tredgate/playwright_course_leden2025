//actions_tests.spec.ts
import { test } from "@playwright/test";

test("Click test", { tag: "@gitHubActions" }, async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("//button[@type='submit']").click();
});

test("iFrame test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/IFrame/index.html");
  const iFramePage = page.frameLocator("#frame");
  await iFramePage.locator("#button-find-out-more").click(); // prvek v iframe
});

test("fill and pressSequentially test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("start");
  await page.locator("#username").fill("end");
  await page
    .locator("#username")
    .pressSequentially("Kde toto bude?", { delay: 750 }); // Postupné psaní textu s pauzou 750 ms mezi jednotlivými znaky
});

test("Selects test", { tag: "@gitHubActions" }, async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#gender").selectOption("male"); // výběr pomocí value prvku <option value="male">
  const promiseSelect = page
    .locator("#gender")
    .selectOption({ label: "Female" }); // výběr pomocí labelu (textu) prvku <option value="1">Female</option>
});

test("Checkboxes, Radio test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator('[value="option-1"]').check();
  await page.locator('[value="orange"]').nth(0).check(); // nth() vybírá pořadí prvku v případě více prvků při použití selektoru
  // příklad xpath: '(//input[@value="orange"])[1]
  await page.locator('[value="option-1"]').uncheck(); // Odklikne pole (pouze checkbox)
});

test("Hover test", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");
  // ? Po kliknutí na list-alert tlačítko se zobrazí alert, kódem page.on jej vypíšeme (do console) a zavřeme
  page.on("dialog", async (dialog) => {
    console.log("Alert message:", dialog.message());
    await dialog.dismiss(); // Closes the dialog without clicking anything
  });
  await page
    .locator('//div[@class="dropdown hover"]//button[@class="dropbtn"]')
    .hover();
  await page
    .locator('//div[@class="dropdown hover"]//a[@class="list-alert"]')
    .click();
});
