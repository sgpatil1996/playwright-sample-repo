# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\deleteRequest.spec.ts >> Petstore API - DELETE Endpoint >> Should tear down and successfully drop runtime pet keys
- Location: tests\api\deleteRequest.spec.ts:7:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ApiMethods } from '../../pages/API/ApiMethods';
  3  | import testData from '../../data/testData.json';
  4  | 
  5  | 
  6  | test.describe('Petstore API - DELETE Endpoint', () => {
  7  |   test('Should tear down and successfully drop runtime pet keys', async ({ request }) => {
  8  |     const petController = new ApiMethods(request);
  9  |     const targetId = testData.postUser.id;
  10 | 
  11 |     const response = await petController.deletePet(targetId);
  12 |     
> 13 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  14 |     const body = await response.json();
  15 |     expect(body.message).toBe(targetId.toString());
  16 |   });
  17 | });
  18 | 
```