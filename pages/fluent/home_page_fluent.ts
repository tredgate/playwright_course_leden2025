import { expect, Locator, Page } from "@playwright/test";
import { LoginPageFluent } from "./login_page_fluent";

export class HomePageFluent {
  readonly page: Page;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;
  readonly profileImage: Locator;
  readonly bellIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.bellIcon = page.locator(
      "//a[@class='dropdown-toggle']//i[@class='fa fa-bell-o']"
    );
  }

  async clickProfile(): Promise<HomePageFluent> {
    await expect(this.bellIcon).toBeVisible();
    await this.profileButton.click();
    return this;
  }

  async clickLogout(): Promise<LoginPageFluent> {
    await this.logoutButton.click();
    return new LoginPageFluent(this.page);
  }
}
