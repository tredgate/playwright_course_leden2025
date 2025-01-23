import { test } from "@playwright/test";

test("Open projects in PMTool", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("//button[@type='submit']").click();
  await page.locator("#Projects").click();
});
