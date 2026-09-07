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

Locator:  locator('[data-test="inventory-list"]')
Expected: "Sauce Labs Backpack"
Received: "Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99Add to cartSauce Labs Bike LightA red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.$9.99Add to cartSauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.$15.99Add to cartSauce Labs Fleece JacketIt's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.$49.99Add to cartSauce Labs OnesieRib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.$7.99Add to cartTest.allTheThings() T-Shirt (Red)This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.$15.99Add to cart"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" locator('[data-test="inventory-list"]') with timeout 5000ms
  - waiting for locator('[data-test="inventory-list"]')
    13 × locator resolved to <div class="inventory_list" data-test="inventory-list">…</div>
       - unexpected value "Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.$29.99Add to cartSauce Labs Bike LightA red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.$9.99Add to cartSauce Labs Bolt T-ShirtGet your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.$15.99Add to cartSauce Labs Fleece JacketIt's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.$49.99Add to cartSauce Labs OnesieRib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.$7.99Add to cartTest.allTheThings() T-Shirt (Red)This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.$15.99Add to cart"

```

```yaml
- link "Sauce Labs Backpack":
  - /url: "#"
  - img "Sauce Labs Backpack"
- link "Sauce Labs Backpack":
  - /url: "#"
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Add to cart"
- link "Sauce Labs Bike Light":
  - /url: "#"
  - img "Sauce Labs Bike Light"
- link "Sauce Labs Bike Light":
  - /url: "#"
- text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "Add to cart"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
  - img "Sauce Labs Bolt T-Shirt"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
- text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
- button "Add to cart"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
  - img "Sauce Labs Fleece Jacket"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
- text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
- button "Add to cart"
- link "Sauce Labs Onesie":
  - /url: "#"
  - img "Sauce Labs Onesie"
- link "Sauce Labs Onesie":
  - /url: "#"
- text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
- button "Add to cart"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
  - img "Test.allTheThings() T-Shirt (Red)"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
- text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
- button "Add to cart"
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