import { Page, Locator } from '@playwright/test';
import { Navbar } from './components/Navbar';

export class InventoryPage {
  readonly page: Page;
  readonly navbar: Navbar;
  readonly pageTitle: Locator;
  readonly bikeLightAddToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navbar = new Navbar(page);
    this.pageTitle = page.locator('.title');
    this.bikeLightAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
  }

  async addItemToCart() {
    await this.bikeLightAddToCartButton.click();
  }
}