import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CCreateUser, CLogin } from '../models/models.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _http:HttpClient) { }

  private apiUrl = environment.apiBaseUrl

  getToken(credentials: CLogin){
    return this._http.post(`${this.apiUrl}${environment.endpoints.login}`, credentials);
  }

  createUsers(data: CCreateUser){
    return this._http.post(`${this.apiUrl}${environment.endpoints.users}`, data);
  }

}
