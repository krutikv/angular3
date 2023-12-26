import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class datapassingservice{
    details:any;
    constructor(private http:HttpClient){}
    passdetails(location:string){
        return  this.http.get('http://api.weatherstack.com/current?access_key=c9942d1fa2100f87ed5817b0c6670ef4&query='+location)   }
      }