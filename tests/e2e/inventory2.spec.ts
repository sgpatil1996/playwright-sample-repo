import { test, expect } from '../../fixtures/baseTest';

test.describe('Inventory Catalog Operations', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
  });

  test('Add to Cart button increments shopping basket state', async ({ inventoryPage }) => {
    await inventoryPage.addItemToCart();
    await expect(inventoryPage.navbar.shoppingCartLink).toHaveText('1');
  });
});