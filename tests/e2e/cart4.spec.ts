import { test, expect } from '../../fixtures/baseTest';

test.describe('Cart Item Aggregation Layout', () => {
  test.beforeEach(async ({ loginPage, inventoryPage }) => {
    await loginPage.navigate();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
    await inventoryPage.addItemToCart();
    await inventoryPage.navbar.goToCart();
  });

  test('Cart contains chosen items and advances to checkout', async ({ cartPage }) => {
    await expect(cartPage.cartItems).toHaveCount(1);
    await cartPage.proceedToCheckout();
    await expect(cartPage.page).toHaveURL(/.*checkout-step-one/);
  });
});