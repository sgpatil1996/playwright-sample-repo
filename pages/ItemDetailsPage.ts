import { Page, Locator } from '@playwright/test';
import { Navbar } from './components/Navbar';

export class ItemDetailsPage {
  readonly page: Page;
  readonly navbar: Navbar;
  readonly itemName: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navbar = new Navbar(page);
    //this.itemName = page.locator('.inventory_details_name');
    this.itemName= page.locator('[data-test="inventory-item-name"]');
    this.addToCartButton = page.locator('[data-test^="add-to-cart"]');
  }

  async openItemByName(name: string) {
    // Corrected syntax
   await this.itemName.filter({ hasText: name }).first().click();
  //await this.page.locator('.inventory_item_name', { hasText: name }).first().click();
  }


  async addItemToCart() {
    await this.addToCartButton.click();
  }
}