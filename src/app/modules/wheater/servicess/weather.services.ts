//metodo de serviço
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class WeatherServices{
    private apiKey = 'f32051ab9f796164481f8fcd930a7bcd';//apikey openMap
    constructor(private http: HttpClient){

    }
    getWeatherDatas(cityName: string): Observable<any>{
        return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`, {})
       
        }
        
    }
