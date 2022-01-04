import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { OAuthToken, OAuthTokenRequest, OAuthTokenResponse } from '../models/oauth-token.model';

@Injectable({
  providedIn: 'root',
})
export class DigitalIdentityService {
  constructor(private http: HttpClient) {}

  public getAccessToken(): Observable<any> {
    const oauthData: OAuthTokenRequest = {
      grant_type: 'grant_type=client_credentials',
      scope: 'scope=mobile',
      client_id: 'client_id=bradesco-seguros-corretor',
      client_secret: 'client_secret=fa09544a2d7c44ca8a37918066fb8067',
    };
    const body: string = `${oauthData.grant_type}&${oauthData.scope}&${oauthData.client_id}&${oauthData.client_secret};`;
    return this.http.post("https://susc.dsv.bradescoseguros.com.br:7017/oauth2/gerarTokenAppCorretor", body).pipe(
      take(1),
      map(
        (oAuthTokenResponse: OAuthTokenResponse): OAuthToken => ({
          tokenType: oAuthTokenResponse.token_type,
          accessToken: oAuthTokenResponse.access_token,
          expiresIn: oAuthTokenResponse.expires_in,
          consentedOn: oAuthTokenResponse.consented_on,
        }),
      ),
    )
  }

}
