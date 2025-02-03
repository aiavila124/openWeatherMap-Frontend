import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private _http:HttpClient) { }
  private apiUrl = environment.apiBaseUrl

  getUserData() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this._http.get(`${this.apiUrl}${environment.endpoints.getUserData}`, { headers });
  }

  getCities(stateId: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    const params = {
      state_id: stateId
    }
    return this._http.get(`${this.apiUrl}${environment.endpoints.cities}`, { headers, params });
  }

  getStates(countryId: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })

    const params = {
      country_id: countryId
    }
    return this._http.get(`${this.apiUrl}${environment.endpoints.states}`, { headers, params });
  }

  getCountries() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    return this._http.get(`${this.apiUrl}${environment.endpoints.countries}`, { headers });
  }

  getWeatherForecast(cityId: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    const params = {
      city_id: cityId
    }
    return this._http.get(`${this.apiUrl}${environment.endpoints.weatherForecast}`, { headers, params });
  }

  getIcons(icon_id: number) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
    const params = {
      icon_id: icon_id
    }

    return this._http.get(`${this.apiUrl}${environment.endpoints.icons}`, { headers, params });
  }

  

}
