import { Locator, Page } from "@playwright/test";
import { AtomicHomePage } from "./atomic_home_page";

export class AtomicLoginPage {
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

  async openPmtool(): Promise<AtomicLoginPage> {
    await this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string): Promise<AtomicLoginPage> {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillPassword(password: string): Promise<AtomicLoginPage> {
    await this.passwordInput.fill(password);
    return this;
  }

  async clickLogin(): Promise<AtomicHomePage> {
    await this.loginButton.click();
    return new AtomicHomePage(this.page);
  }
}
