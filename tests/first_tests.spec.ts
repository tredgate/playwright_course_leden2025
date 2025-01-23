import { test } from "@playwright/test";

test("First test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("Test");
});

test("FAILING test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator(".blabla").fill("Test");
});
