import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  //url = 'http://localhost:8000/api/article';
  //url = environment.apiUrl + '/article';
  url = `${environment.apiUrl}/article`;
  constructor( private http : HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('./assets/json/article.json');
  }

  listadoArticulos(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.url}`);
  }

  postArticle (formData: FormData){
    return this.http.post(`${this.url}`, formData);
  }

  getArticle(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  putArticle (formData: FormData, id: number){
    return this.http.post(`${this.url}/actualizar/${id}`, formData);
  }

  deleteArticle (id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
