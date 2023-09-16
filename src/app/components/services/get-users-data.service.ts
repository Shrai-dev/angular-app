import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetUsersDataService {
  constructor(private http: HttpClient) {}

  getUsersData() {
    return this.http.get('https://randomuser.me/api/?results=20');
  }

  getUsersWeather(lat: string, lon: string) {
    return this.http.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=temperature_2m`
    );
  }
}
