import { getBackendClient } from "../backend-client";
import type { GetAuthToken, HttpClient } from "@/core/http-client";
import type {
  ITMeetDto,
  ITMeet,
  ITMeetCreate,
  ITMeetFilters,
} from "./it-meets-dto";
import {
  mapITMeetFromDto,
  mapITMeetToDto,
  mapITMeetFiltersToDto,
} from "./it-meets-mapper";
class ITMeetsApi {
  private readonly basePath = "/itmeets";
  constructor(private readonly client: HttpClient) {}
  async getITMeets(filters?: ITMeetFilters): Promise<ITMeet[]> {
    const params = new URLSearchParams();
    if (filters) {
      const dtoFilters = mapITMeetFiltersToDto(filters);
      Object.entries(dtoFilters).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          params.append(key, String(value));
        }
      });
    }
    const url = `${this.basePath}/${
      params.toString() ? `?${params.toString()}` : ""
    }`;
    const response = await this.client.get<ITMeetDto[]>(url);
    if (!response.data) {
      throw new Error("No data received");
    }
    return response.data.map(mapITMeetFromDto);
  }
  async getITMeet(meetId: number): Promise<ITMeet> {
    const response = await this.client.get<ITMeetDto>(
      `${this.basePath}/${meetId}`
    );
    if (!response.data) {
      throw new Error("No data received");
    }
    return mapITMeetFromDto(response.data);
  }
  async createITMeet(itMeet: ITMeetCreate): Promise<ITMeet> {
    const dtoITMeet = mapITMeetToDto(itMeet);
    const response = await this.client.post<ITMeetDto>(
      `${this.basePath}/`,
      dtoITMeet
    );
    if (!response.data) {
      throw new Error("No data received");
    }
    return mapITMeetFromDto(response.data);
  }
  async updateITMeet(meetId: number, itMeet: ITMeetCreate): Promise<ITMeet> {
    const dtoITMeet = mapITMeetToDto(itMeet);
    const response = await this.client.put<ITMeetDto>(
      `${this.basePath}/${meetId}`,
      dtoITMeet
    );
    if (!response.data) {
      throw new Error("No data received");
    }
    return mapITMeetFromDto(response.data);
  }
  async deleteITMeet(meetId: number): Promise<void> {
    await this.client.delete<void>(`${this.basePath}/${meetId}`);
  }
}
export const getITMeetsApi = (getAuthToken: GetAuthToken) =>
  new ITMeetsApi(getBackendClient(getAuthToken));
