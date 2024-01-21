import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  getUser(email:string):Observable<User>{
    return this.http.get<User>('http://localhost:3000/users/'+email);
  }

  createUser(user:User):Observable<User>{
    return this.http.post<User>('http://localhost:3000/users', user);
  }
}
