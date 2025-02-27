import { Component, OnInit } from '@angular/core';
import { WeatherServices } from '../../servicess/weather.services';
import { weatherDatas } from 'src/app/models/interfaces/weatherData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //temos que iniciar uma cidade

  initialCityname = 'Fortaleza';
   //criar uma propriedade para amarzenar os dados que queremos
  weatherDatas!: weatherDatas;
 
//criar um constructor
  constructor(private weatherService: WeatherServices){}
  ngOnInit(): void {
   this.getEheatherDatas(this.initialCityname);// inicia com fortaleza como cidade padrão.
  }

  //vamos criar um metodo para consumir esse serviço
  getEheatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    //temos que no increver nele
    .subscribe({
      next:(response)=>{
        response && (this.weatherDatas = response);
        console.log(this.weatherDatas)
      },
      error: (error)=> console.log(error)
    });
  }
}
