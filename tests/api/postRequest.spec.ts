import { test, expect } from '@playwright/test';
import { ApiMethods } from '../../pages/API/ApiMethods';
import testData from '../../data/testData.json';

test.describe('Petstore API - POST Endpoint', () => {
  test('Should dynamically post and append a new pet resource', async ({ request }) => {
    const petController = new ApiMethods(request);
    const payload = testData.postUser;

    const response = await petController.createPet(payload);
    
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id).toEqual(expect.any(Number));
    expect(body.id).toBeGreaterThan(0);
    expect(body.name).toBe(payload.name);
  });
});
