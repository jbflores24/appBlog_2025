import { Component } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';
import { ArticleService } from 'src/app/services/article/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  articles : Article[] = [];
  constructor( private _as : ArticleService) {
    this._as.listadoArticulos().subscribe(
      (resp:any) => {
        this.articles = resp['data'];
        console.log(this.articles);
      }
    );
  }
}
