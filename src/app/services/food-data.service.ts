import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  constructor(private httpClient: HttpClient) { }

  getMealsData():Observable<any>{
    return this.httpClient.get('http://pillpo.xyz/dump-data')
  }
}
