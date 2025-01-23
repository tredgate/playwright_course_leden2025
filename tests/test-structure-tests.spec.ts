//test-structure-tests.spec.ts
import { expect, test } from "@playwright/test";

test.describe(
  "PM Tool Login Tests",
  {
    tag: "@smoke",
    annotation: {
      // Označení například v případě chyby
      type: "issue",
      description: "https://github.com/microsoft/playwright/issues/23180",
    },
  },
  () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("http://tredgate.com/pmtool/");
    });

    test("Successful login", async ({ page }) => {
      await page.locator("#username").fill("pw_skoleni");
      await page.locator("#password").fill("TEG2023");
      await page.locator("//button[@type='submit']").click();
      await expect(
        page.locator("//h3[@id='welcome-page-header']")
      ).toBeVisible();
    });

    test("Failed login", async ({ page }) => {
      await page.locator("#username").fill("random string");
      await page.locator("#password").fill("123454");
      await page.locator("//button[@type='submit']").click();
      await expect(
        page.locator("//div[@class='alert alert-danger']")
      ).toBeVisible();
    });
  }
);
