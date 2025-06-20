import type {
  LoginRequestDto,
  TokenResponseDto,
  LoginRequest,
  TokenResponse,
} from "./auth-dto";

// Преобразование из клиентского типа в DTO
export const mapLoginRequestToDto = (
  request: LoginRequest
): LoginRequestDto => ({
  grant_type: request.grantType,
  username: request.username,
  password: request.password,
  scope: request.scope,
  client_id: request.clientId,
  client_secret: request.clientSecret,
});

// Преобразование из DTO в клиентский тип
export const mapTokenResponseFromDto = (
  dto: TokenResponseDto
): TokenResponse => ({
  accessToken: dto.access_token,
  tokenType: dto.token_type,
});
