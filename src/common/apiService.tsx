import axios, { AxiosInstance } from "axios";

import {
  TRegisterData,
  TLoginData,
  TLoginResponse,
} from "./types-and-interfaces";

class ApiService {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: "https://api",
    });
  }

  async register(data: TRegisterData) {
    const response = await this.apiClient.post("/auth/register", data);
    return response.data;
  }

  async login(data: TLoginData): Promise<TLoginResponse> {
    const response = await this.apiClient.post<TLoginResponse>(
      "/auth/login",
      data
    );
    return response.data;
  }

  async getAppointments() {
    const response = await this.apiClient.get("/appointments");
    return response.data;
  }
}

export const apiService = new ApiService();
