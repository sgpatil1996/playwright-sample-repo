import { test, expect } from '../../fixtures/baseTest';
import * as testData from '../../data/testData.json';

test.describe('Checkout Complete - Success Screen', () => {
  test.beforeEach(async ({ loginPage, inventoryPage, cartPage, checkoutStepOnePage, checkoutStepTwoPage }) => {
    await loginPage.navigate();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
    await inventoryPage.addItemToCart();
    await inventoryPage.navbar.goToCart();
    await cartPage.proceedToCheckout();
    
    const { firstName, lastName, postalCode } = testData.checkoutInfo;
    await checkoutStepOnePage.fillInformation(firstName, lastName, postalCode);
    await checkoutStepTwoPage.clickFinish();
  });

  test('Displays order confirmation success messaging banner', async ({ checkoutCompletePage }) => {
    await expect(checkoutCompletePage.completeHeader).toHaveText('Thank you for your order!');
  });
});