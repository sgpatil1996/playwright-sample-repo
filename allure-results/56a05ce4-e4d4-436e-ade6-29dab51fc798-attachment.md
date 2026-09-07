# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e\itemDetails3.spec.ts >> Product Details Navigation & Selection >> Can open detailed view and buy from item info sheet
- Location: tests\e2e\itemDetails3.spec.ts:9:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.inventory_item_name')
Expected: "Sauce Labs Backpack"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('.inventory_item_name') with timeout 5000ms
  - waiting for locator('.inventory_item_name')

```

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs
- button "Go back Back to products":
  - img "Go back"
  - text: Back to products
- img "Sauce Labs Backpack"
- text: Sauce Labs Backpack carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { test, expect } from '../../fixtures/baseTest';
  2  | 
  3  | test.describe('Product Details Navigation & Selection', () => {
  4  |   test.beforeEach(async ({ loginPage }) => {
  5  |     await loginPage.navigate();
  6  |     await loginPage.login(process.env.STANDARD_USER!, process.env.PASSWORD!);
  7  |   });
  8  | 
  9  |   test('Can open detailed view and buy from item info sheet', async ({ itemDetailsPage }) => {
  10 |     await itemDetailsPage.openItemByName('Sauce Labs Backpack');
> 11 |     await expect(itemDetailsPage.itemName).toHaveText('Sauce Labs Backpack');
     |                                            ^ Error: expect(locator).toHaveText(expected) failed
  12 |     await itemDetailsPage.addItemToCart();
  13 |     await expect(itemDetailsPage.navbar.shoppingCartLink).toHaveText('1');
  14 |   });
  15 | });
```