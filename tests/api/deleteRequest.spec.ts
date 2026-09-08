import { test, expect } from '@playwright/test';
import { ApiMethods } from '../../pages/API/ApiMethods';
import testData from '../../data/testData.json';


test.describe('Petstore API - DELETE Endpoint', () => {
  test('Should tear down and successfully drop runtime pet keys', async ({ request }) => {
    const petController = new ApiMethods(request);
    const payload = { ...testData.postUser, id: Date.now() };
    const createResponse = await petController.createPet(payload);
    expect(createResponse.status()).toBe(200);
    const createdPet = await createResponse.json();
    const targetId = createdPet.id;

    const response = await petController.deletePet(targetId);
    
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.message).toBe(targetId.toString());
  });
});
