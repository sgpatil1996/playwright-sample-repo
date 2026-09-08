import { test, expect } from '@playwright/test';
import { ApiMethods } from '../../pages/API/ApiMethods';
import testData from '../../data/testData.json';

test.describe('Petstore API - GET Endpoint', () => {
  let petController: ApiMethods;
  let targetId: number;

  test.beforeEach(async ({ request }) => {
    petController = new ApiMethods(request);
    
    const payload = { ...testData.postUser, id: Date.now() };
    const createResponse = await petController.createPet(payload);
    expect(createResponse.status()).toBe(200);
    const createdPet = await createResponse.json();
    targetId = createdPet.id;
  });

  test('Should lookup and assert pet structures accurately', async () => {
    // Act
    const response = await petController.getPetById(targetId);
    
    // Assert status code
    expect(response.status()).toBe(200);
    
    // Assert structural body content
    const body = await response.json();
    expect(body.id).toBe(targetId);
    expect(body.name).toBe(testData.postUser.name);
  });
});
