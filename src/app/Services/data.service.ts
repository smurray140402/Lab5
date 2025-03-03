import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  // Gets student data from api
  getStudentData():Observable<any>{
    return this.httpClient.get('https://jsonblob.com/api/jsonblob/1346047856276070400');
  }

  // Gets weather data from api
  getWeatherData():Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=1b5376416f52d401811778655278d605');
  }
}
