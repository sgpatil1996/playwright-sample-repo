import { test, expect } from '../../fixtures/baseTest';

test.describe('Product Details Navigation & Selection', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
  });

  test('Can open detailed view and buy from item info sheet', async ({ itemDetailsPage }) => {
    await itemDetailsPage.openItemByName('Sauce Labs Backpack');
    await expect(itemDetailsPage.itemName).toHaveText('Sauce Labs Backpack');
    await itemDetailsPage.addItemToCart();
    await expect(itemDetailsPage.navbar.shoppingCartLink).toHaveText('1');
  });
});