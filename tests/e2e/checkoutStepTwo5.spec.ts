import { test, expect } from '../../fixtures/baseTest';
import * as testData from '../../data/testData.json';

test.describe('Checkout Step Two - Pricing Review', () => {
  test.beforeEach(async ({ loginPage, inventoryPage, cartPage, checkoutStepOnePage }) => {
    await loginPage.navigate();
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
    await inventoryPage.addItemToCart();
    await inventoryPage.navbar.goToCart();
    await cartPage.proceedToCheckout();
    
    const { firstName, lastName, postalCode } = testData.checkoutInfo;
    await checkoutStepOnePage.fillInformation(firstName, lastName, postalCode);
  });

  test('Displays final totals breakdown and transitions to execution', async ({ checkoutStepTwoPage }) => {
    await expect(checkoutStepTwoPage.summaryTotalLabel).toContainText('Total: $');
    await checkoutStepTwoPage.clickFinish();
    await expect(checkoutStepTwoPage.page).toHaveURL(/.*checkout-complete/);
  });
});