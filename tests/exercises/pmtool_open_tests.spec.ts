import { test } from "@playwright/test";

test("First exercise", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("Test");
  await page.locator("#password").fill("Test");
});
