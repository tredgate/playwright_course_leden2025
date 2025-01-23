import { Locator, Page } from "@playwright/test";
import { HomePageFluent } from "./home_page_fluent";

export class LoginPageFluent {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool";
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("[type='submit']");
  }

  async openPmtool(): Promise<LoginPageFluent> {
    await this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string): Promise<LoginPageFluent> {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillPassword(password: string): Promise<LoginPageFluent> {
    await this.passwordInput.fill(password);
    return this;
  }

  async clickLogin(): Promise<HomePageFluent> {
    await this.loginButton.click();
    return new HomePageFluent(this.page);
  }
}
