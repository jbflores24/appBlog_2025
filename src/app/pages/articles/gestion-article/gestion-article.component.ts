import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-article',
  templateUrl: './gestion-article.component.html',
  styleUrls: ['./gestion-article.component.css']
})
export class GestionArticleComponent {
  op : any;
  id : any;
  archivo : any;
  tituloVentana : string = '';
  articulo = new Article (0,'','','',2);
  constructor(
    private ar : ActivatedRoute,
    private _as : ArticleService,
    private router : Router
  ){
    this.op = this.ar.snapshot.paramMap.get('op');
    this.id = this.ar.snapshot.paramMap.get('id');
    if (this.op == '1') {
      this.tituloVentana = 'Crear Articulo';
    } else {
      this.tituloVentana = 'Modificar Articulo';
      this._as.getArticle(this.id).subscribe(
        (resp : any) => {
          this.articulo = resp['data'][0];
        }
      );
    }
  }

  alert_success(mensaje:string){
    Swal.fire({
      title : 'Exito',
      text : mensaje,
      icon : 'success',
      confirmButtonText : 'Aceptar'
    });
  }

  alert_error(mensaje:string){
    Swal.fire({
      title : 'Error',
      text : mensaje,
      icon : 'error',
      confirmButtonText : 'Aceptar'
    });
  }

  cargarImagen (evt:any) : any {
    this.archivo = evt.target.files[0];
  }

  crearArticulo(){
    const fs = new FormData();
    fs.append('titulo', this.articulo.titulo);
    fs.append('texto', this.articulo.texto);
    fs.append('imagen', this.archivo);
    fs.append('user_id', this.articulo.user_id.valueOf().toString());
    this._as.postArticle(fs).subscribe(
      (resp:any) => {
        if (resp['error'] == false) {
          this.alert_success('Articulo creado correctamente');
          this.router.navigate(['/listadoArticulos']);
        } else {
          this.alert_error('Error al crear el articulo');
        }
      },
      err => {
        this.alert_error('Error en el servidor');
      }
    );
  }

  editarArticulo(){
    const fs = new FormData();
    fs.append('id', this.articulo.id.valueOf().toString());
    fs.append('titulo', this.articulo.titulo);
    fs.append('texto', this.articulo.texto);
    fs.append('imagen', this.archivo);
    fs.append('user_id', this.articulo.user_id.valueOf().toString());
    this._as.putArticle(fs, this.id).subscribe(
      (resp : any) => {
        if (resp['error'] == false) {
          this.alert_success('Articulo editado correctamente');
          this.router.navigate(['/listadoArticulos']);
        } else {
          this.alert_error('Error al editar el articulo');
        }
      }
    );
  }

  borrarArticulo(){
    this._as.deleteArticle(this.id).subscribe(
      (resp : any) => {
        if (resp['error'] == false) {
          this.alert_success('Articulo borrado correctamente');
          this.router.navigate(['/listadoArticulos']);
        } else {
          this.alert_error('Error al borrar el articulo');
        }
      }
    );
  }
}
