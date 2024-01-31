import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin, User, ValidUser } from '../interfaces/users.interface';
import { Email, Password, ResponseEmail } from '../interfaces/Email.interface';
import { Products } from '../interfaces/Products.interface';

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

  sendCodePassword(email:Email){
   return this.http.post<ResponseEmail>('http://localhost:3000/email',email) ;
  }

  updatePassword(id:number, password:Password){
    return this.http.patch('http://localhost:3000/users/'+id,password)
  }
  searchAutocomplete(query:string){
    return this.http.get<Products[]>(`https://fakestoreapi.com/products?q=${{query}}&_limit=5`);
  }
  validUser(data:ValidUser){
    return this.http.post<ResponseLogin>('http://localhost:3000/login', data);
  }
}
