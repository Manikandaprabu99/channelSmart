import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  
  api_Url = "https://apiqa.channelsmart.net/";
  constructor(private http: HttpClient) {
   
      
  }


 public login(credential:any): Observable<object> {

  let headers = new HttpHeaders();
  headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
  headers = headers.set('Nexus-Environment-Key', '805EE38E-D400-4BB9-A73B-7D2A7F4D914C');
  headers = headers.set('Access-Control-Allow-Origin', '*');
    const body = new HttpParams()
    .set('username', credential.username)
      .set('password', credential.password)
      .set('client_id', 'nexusWeb')
      .set('grant_type', 'password');

    return this.http.post(this.api_Url + "oauth/token", body.toString(), { headers: headers });
  }
}
