import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'data-app';
  students: any[] = [];
  weather: any[] = [];

  constructor(private dataService:DataService){}

  // On Initialisation dataService gets student and weather data
  ngOnInit(): void {

    this.dataService.getStudentData().subscribe(
      (data)=>{
        this.students = data.students;
      }
    );

    this.dataService.getWeatherData().subscribe(
      (weatherData)=>{
        this.weather = weatherData.weather;
      }
    );

  }
}
