import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from 'src/app/models/comentario.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  url = `${environment.apiUrl}/comment`;
  constructor( private http: HttpClient) { }

  getComentarios() {
    return this.http.get(this.url);
  }

  getComentario (id:any){
    return this.http.get(`${this.url}/${id}`);
  }

  postComentario (data:any){
    return this.http.post(this.url, data);
  }

  putComentario (comentario : Comentario){
    return this.http.put(`${this.url}/${comentario.id}`, comentario);
  }

  deleteComentario (id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
