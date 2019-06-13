import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Doctor} from '../models/Models';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {
 
  apiURL: string = require('../appsettings.json').apiURL;

  constructor(private httpClient: HttpClient) { }


  public getDoctors(){
    return this.httpClient.get<Doctor[]>(`${this.apiURL}/doctor`);
   }

   public getDoctorDetails(Id:number){
       return this.httpClient.get<Doctor>(`${this.apiURL}/doctor/${Id}`);
   }
}
