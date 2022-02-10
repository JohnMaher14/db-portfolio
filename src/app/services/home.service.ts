import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) {}
  getHome(): Observable<any>{
    return this._HttpClient.get(`${environment.apiUrl}general-data`)
  }

  


}
