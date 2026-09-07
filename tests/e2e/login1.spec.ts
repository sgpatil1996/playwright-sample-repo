import { test, expect } from '../../fixtures/baseTest';

test.describe('Login Screen Flows',{ tag: ['@regression', '@sanity'] }, () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigate();
  });

  test('User can log in successfully with authorized credentials', async ({ loginPage, inventoryPage }) => {
    await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
    await expect(inventoryPage.pageTitle).toHaveText('Products');
  });

  test('System prevents login and shows errors for bad credentials', async ({ loginPage }) => {
    await loginPage.login('locked_out_user', 'wrong_password');
    await expect(loginPage.errorMessage).toBeVisible();
  });
});