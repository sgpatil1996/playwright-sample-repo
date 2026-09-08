import { test, expect } from '@playwright/test';
import { ApiMethods } from '../../pages/API/ApiMethods';
import testData from '../../data/testData.json';

test.describe('Petstore API - PUT Endpoint', () => {
  test('Should execute a complete parameter mutation via state updates', async ({ request }) => {
    const petController = new ApiMethods(request);
    const updatePayload = testData.putUser;

    const response = await petController.updatePet(updatePayload);
    
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.name).toBe(updatePayload.name);
    expect(body.status).toBe(updatePayload.status);
  });
});
