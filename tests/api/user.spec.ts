import { test, expect } from '@playwright/test';
import * as testData from '../../data/testData.json';

test.describe('API Endpoint Integration Check', () => {
  test('POST /api/users - Should create a user record successfully', async ({ request }) => {
    const apiBaseUrl = process.env.API_URL || 'https://reqres.in';
    const payload = testData.apiUser;

    const response = await request.post(`${apiBaseUrl}/api/users`, {
      data: payload
    });

    expect(response.status()).toBe(201);
    
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.name).toBe(payload.name);
    expect(responseBody.job).toBe(payload.job);
  });
});