//asserts-tests.spec.ts
import { expect, test } from "@playwright/test";

test("toContainText test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci"
  ); // Kontroluje část textu v selektoru
});

test("toHaveText test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("button[type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );
});

test("toHaveValue test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await page.locator("#username").fill("pw_skoleni");
  await expect(page.locator("#username")).toHaveValue("pw_skoleni");
});

test("toBeVisible test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  const logoImage = page.locator(".login-page-logo img");
  await expect(logoImage).toBeVisible();
});

test("toBeChecked test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await expect(page.locator("input[value='option-3']")).toBeChecked();
});

test("toBeDisabled test", async ({ page }) => {
  await page.goto("http://tredgate.com/webtrain/registration.html");
  await expect(page.locator("#occupation")).toBeDisabled();
});

test("Soft assert test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect.soft(page.locator(".form-title")).toHaveText("Login PMTOOL");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("button[type='submit']").click();
});

test("Negative test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(page.locator(".alert-danger")).not.toBeVisible();
});
