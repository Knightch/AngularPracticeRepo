import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private username = 'Aman';
  private password = '123456';
  isloggedin = false;
  constructor(private http:HttpClient) { }
}
