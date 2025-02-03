import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainPageService } from '../services/main-page.service';
import { Countries } from '../interfaces/countries';
import { States } from '../interfaces/states';
import { Cities } from '../interfaces/cities';
import { WeatherForecast } from '../interfaces/weather-forecast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  name: string = '';
  lastName: string = '';
  countries: Countries[] = [];
  states: States[] = [];
  cities: Cities[] = [];
  countryId?: number | any;
  stateId?: number | any;
  cityId?: number | any;
  weatherForecast?: WeatherForecast;
  icons: any[] = [];

  

  constructor(private Service: MainPageService) {}
  private router = inject(Router);

  ngOnInit(): void {
    this.getUserData();
    this.getCountries();
  }


  getUserData() {
    this.Service.getUserData().subscribe(
      (res:any) => {
        if (res.status == 200) {
          this.name = res.data[0].first_name;
          this.lastName = res.data[0].last_name;
        }
      }
    )
  }

  getCountries() {
    this.Service.getCountries().subscribe(
      (res:any) => {
        if (res.status == 200) {
          this.countries = res.data;
        }
      }
    )
  }

  getStates(event: any) {
    this.countryId = event.target.value;
    if (this.countryId != ""){
      this.Service.getStates(this.countryId).subscribe(
        (res:any) => {
          if (res.status == 200) {
            this.states = res.data;
          }
        }
      )
    }
  }

  getCities(event: any) {
    this.stateId = event.target.value;
    if (this.stateId != ""){
      this.Service.getCities(this.stateId).subscribe(
        (res:any) => {
          if (res.status == 200) {
            this.cities = res.data;
          }
        }
      )
    }
  }

  setCityId(event: any) {
    this.cityId = event.target.value;
  }
  
  getWeatherForecast() {
    this.Service.getWeatherForecast(this.cityId).subscribe(
      (res:any) => {
        if (res.status == 200) {
          this.weatherForecast = res.data;
        }
      }
    )
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getIcon() {
    this.Service.getIcons(1).subscribe(
      (res:any) => {
        if (res.status == 200) {
          this.icons = res.data;
        }
      }
    )
  }
}