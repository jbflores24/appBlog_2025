import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor( private http : HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('./assets/json/article.json');
  }
}
