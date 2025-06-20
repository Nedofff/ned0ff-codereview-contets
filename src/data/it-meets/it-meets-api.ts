import { backendClient } from "../backend-client";
import type { ApiResponse, HttpClient } from "@/core/http-client";
import type { ITMeet, ITMeetCreate, ITMeetFilters } from "./it-meets-dto";

class ITMeetsApi {
  private readonly basePath = "/itmeets";

  constructor(private readonly client: HttpClient) {}

  async getITMeets(filters?: ITMeetFilters): Promise<ApiResponse<ITMeet[]>> {
    const params = new URLSearchParams();

    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }

    const url = `${this.basePath}/${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    return this.client.get<ITMeet[]>(url);
  }

  async getITMeet(meetId: number): Promise<ApiResponse<ITMeet>> {
    return this.client.get<ITMeet>(`${this.basePath}/${meetId}`);
  }

  async createITMeet(itMeet: ITMeetCreate): Promise<ApiResponse<ITMeet>> {
    return this.client.post<ITMeet>(`${this.basePath}/`, itMeet);
  }

  async updateITMeet(
    meetId: number,
    itMeet: ITMeet
  ): Promise<ApiResponse<ITMeet>> {
    return this.client.put<ITMeet>(`${this.basePath}/${meetId}`, itMeet);
  }

  async deleteITMeet(meetId: number): Promise<ApiResponse<void>> {
    return this.client.delete<void>(`${this.basePath}/${meetId}`);
  }
}

export const itMeetsApi = new ITMeetsApi(backendClient);
