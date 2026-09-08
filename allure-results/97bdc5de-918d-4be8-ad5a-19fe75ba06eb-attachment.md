# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\postRequest.spec.ts >> Petstore API - POST Endpoint >> Should dynamically post and append a new pet resource
- Location: tests\api\postRequest.spec.ts:6:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 405
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ApiMethods } from '../../pages/API/ApiMethods';
  3  | import testData from '../../data/testData.json';
  4  | 
  5  | test.describe('Petstore API - POST Endpoint', () => {
  6  |   test('Should dynamically post and append a new pet resource', async ({ request }) => {
  7  |     const payload = testData.postUser;
  8  | 
  9  |     const response = await request.post('/pet', {
  10 |     headers: {
  11 |     'Content-Type': 'application/json',
  12 |     'Accept': 'application/json'
  13 |   },
  14 |     data: payload });
  15 |     
> 16 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  17 |     const body = await response.json();
  18 |     expect(body.id).toBe(payload.id);
  19 |     expect(body.name).toBe(payload.name);
  20 |   });
  21 | });
  22 | 
```