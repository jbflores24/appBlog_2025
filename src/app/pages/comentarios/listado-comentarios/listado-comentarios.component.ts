import { Component } from '@angular/core';
import { ComentariosService } from 'src/app/services/comentarios/comentarios.service';

@Component({
  selector: 'app-listado-comentarios',
  templateUrl: './listado-comentarios.component.html',
  styleUrls: ['./listado-comentarios.component.css']
})
export class ListadoComentariosComponent {
  comentarios: any[] = [];
  constructor(
    private _cs : ComentariosService
  ) {
    this._cs.getComentarios().subscribe(
      (resp:any) => {
        this.comentarios = resp['data'];
        console.log(this.comentarios);
      }
    );
  }
}
