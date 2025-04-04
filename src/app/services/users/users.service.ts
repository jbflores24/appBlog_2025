import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/interfaces/user.interface';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "http://localhost:8000/api/user";

  constructor( private http : HttpClient) { }

  postUser (usuario : User){
    return this.http.post(this.url, usuario);
  }

  getUsers():Observable<UserI[]>{
    return this.http.get<UserI[]>(this.url);
  }

  getUser(id : any) {
    return this.http.get(this.url+"/"+id);
  }

  putUser(usuario : User){
    return this.http.put(`${this.url}/${usuario.id}`, usuario);
  }

  deleteUser (id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
