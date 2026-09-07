import { test as baseTest } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { ItemDetailsPage } from '../pages/ItemDetailsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

type FrameworkPages = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  itemDetailsPage: ItemDetailsPage;
  cartPage: CartPage;
  checkoutStepOnePage: CheckoutStepOnePage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  checkoutCompletePage: CheckoutCompletePage;
};

export const test = baseTest.extend<FrameworkPages>({
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  inventoryPage: async ({ page }, use) => { await use(new InventoryPage(page)); },
  itemDetailsPage: async ({ page }, use) => { await use(new ItemDetailsPage(page)); },
  cartPage: async ({ page }, use) => { await use(new CartPage(page)); },
  checkoutStepOnePage: async ({ page }, use) => { await use(new CheckoutStepOnePage(page)); },
  checkoutStepTwoPage: async ({ page }, use) => { await use(new CheckoutStepTwoPage(page)); },
  checkoutCompletePage: async ({ page }, use) => { await use(new CheckoutCompletePage(page)); },
});

export { expect } from '@playwright/test';