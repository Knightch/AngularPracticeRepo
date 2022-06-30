import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://jsonplaceholder.cypress.io/';

  constructor(private http: HttpClient) { }

  listusers() {
    const usersData = this.http.get(this.baseUrl + 'users');
    console.log('user data is ' + usersData);
    return usersData
  }

  viewUser(id: string) {
    const userDataWithId = this.http.get(this.baseUrl + 'users/' + id);
    return userDataWithId;
  }

  addUser(userObj: any) {
    return this.http.post(this.baseUrl + 'users', userObj);
  }

  deleteUser(userId: any) {
    return this.http.delete(this.baseUrl + 'users/' + userId);
  }

  updateUser(userId: any, userObj: any) {
    return this.http.put(this.baseUrl + 'users/' + userId, userObj)
  }
}
