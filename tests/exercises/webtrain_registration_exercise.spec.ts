import { test } from "@playwright/test";

test("E2E registration", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html ");
  await page.locator("#name").fill("Petr");
  await page.locator("#email").fill("test@example.net");
  await page.locator("#datepicker").fill("2020-04-05");
  await page.locator("#password").fill("BezpecneHeslo1");
  await page.locator("#confirm-password").fill("BezpecneHeslo1");
  await page.locator("#basic").check();
  await page.locator("#interests-sports").check();
  await page.locator("#interests-travel").check();
  await page.locator("#newsletter").check();
  await page.locator("#gender").selectOption("other");
  await page.locator("#age").fill("25");
  await page.locator("#address").fill("Nedám");
  await page.locator('[type="submit"]').click();
});
