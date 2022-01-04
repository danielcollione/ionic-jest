export interface OAuthTokenRequest {
  grant_type: string;
  scope: string;
  client_id: string;
  client_secret: string;
}

export interface OAuthTokenResponse {
  token_type: string;
  access_token: string;
  expires_in: number;
  consented_on: number;
  scope: string;
}

export interface OAuthToken {
  tokenType: string;
  accessToken: string;
  expiresIn: number;
  consentedOn: number;
}
