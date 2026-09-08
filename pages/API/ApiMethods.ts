import { APIRequestContext, APIResponse } from '@playwright/test';

export class ApiMethods {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async createPet(payload: object): Promise<APIResponse> {
    return await this.request.post(`${process.env.API_URL}/pet`, {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data: payload,
    });
  }

  async getPetById(petId: number): Promise<APIResponse> {
    return await this.request.get(`${process.env.API_URL}/pet/${petId}`);
  }

  async updatePet(payload: object): Promise<APIResponse> {
    return await this.request.put(`${process.env.API_URL}/pet`, {
      data: payload,
    });
  }

  async deletePet(petId: number): Promise<APIResponse> {
    return await this.request.delete(`${process.env.API_URL}/pet/${petId}`, {
      headers: {
        // ✨ FIX: Adding '|| 'key_fallback'' ensures TypeScript sees this strictly as a string
        'api_key': process.env.API_KEY || 'special-key' 
      }
    });
  }
}
