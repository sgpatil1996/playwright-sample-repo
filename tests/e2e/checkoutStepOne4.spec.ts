import { test, expect } from '../../fixtures/baseTest';
import * as testData from '../../data/testData.json';

test.describe('Checkout Step One - Address Records', () => {
  test.beforeEach(async ({ loginPage, inventoryPage, cartPage }) => {
    await loginPage.navigate();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
    await inventoryPage.addItemToCart();
    await inventoryPage.navbar.goToCart();
    await cartPage.proceedToCheckout();
  });

  test('Allows user to populate shipping particulars and proceed', async ({ checkoutStepOnePage }) => {
    const { firstName, lastName, postalCode } = testData.checkoutInfo;
    await checkoutStepOnePage.fillInformation(firstName, lastName, postalCode);
    await expect(checkoutStepOnePage.page).toHaveURL(/.*checkout-step-two/);
  });
});