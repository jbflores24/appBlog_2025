import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';
import { ArticleService } from 'src/app/services/article/article.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-listado-articles',
  templateUrl: './listado-articles.component.html',
  styleUrls: ['./listado-articles.component.css']
})
export class ListadoArticlesComponent {
  articles : Article[] = [];
  constructor(
    private _as : ArticleService
  ){
    this._as.listadoArticulos().subscribe(
      (resp : any) => {
        this.articles = resp['data'];
        console.log(this.articles);
      }
    );
  }
}
