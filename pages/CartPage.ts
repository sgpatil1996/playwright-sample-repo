import { Page, Locator } from '@playwright/test';
import { Navbar } from './components/Navbar';

export class CartPage {
  readonly page: Page;
  readonly navbar: Navbar;
  readonly checkoutButton: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navbar = new Navbar(page);
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.cartItems = page.locator('.cart_item');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}