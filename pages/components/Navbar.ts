import { Page, Locator } from '@playwright/test';

export class Navbar {
  readonly page: Page;
  readonly shoppingCartLink: Locator;
  readonly menuButton: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }

  async logout() {
    await this.menuButton.click();
    await this.logoutLink.click();
  }
}