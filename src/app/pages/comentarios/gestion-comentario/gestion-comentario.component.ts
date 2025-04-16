import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/helpers/alert.helper';
import { Comentario } from 'src/app/models/comentario.model';
import { ComentariosService } from 'src/app/services/comentarios/comentarios.service';

@Component({
  selector: 'app-gestion-comentario',
  templateUrl: './gestion-comentario.component.html',
  styleUrls: ['./gestion-comentario.component.css']
})
export class GestionComentarioComponent {
  id : any;
  comentario = new Comentario(0, '', 0, 0, 0);
  nombre_usuario : string = '';
  constructor(
    private _cs : ComentariosService,
    private ar : ActivatedRoute,
    private router: Router
  ){
    this.id = this.ar.snapshot.paramMap.get('id');
    this._cs.getComentario(this.id).subscribe(
      (resp:any) => {
        this.comentario = resp['data'][0]
        this.nombre_usuario = resp['data'][0]['usuario']['name'];
      }
    );
  }

  editarComentario(){
    this._cs.putComentario(this.comentario).subscribe(
      (resp:any) => {
        console.log(resp);
        Alert.alert_success('Comentario editado');
        this.router.navigate(['/listadoComentarios']);
      },
      err => {
        console.log(err);
      }
    );
  }

  borrarComentario(){
    this._cs.deleteComentario(this.comentario.id).subscribe(
      (resp:any) => {
        Alert.alert_success('Comentario eliminado');
        this.router.navigate(['/listadoComentarios']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
