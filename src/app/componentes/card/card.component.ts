import { Component, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/article.interface';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() article : any;
  rutaImagen = environment.baseImg;
}
